const express = require('express');
const router = express.Router();

const Note = require('../model/note');
const NotesService = require('../service/notes.service');
const FireBaseService = require('../firebase/firebase.service');

router.use('/', (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    } else {
        FireBaseService.validateToken(req.get('X-Auth-Token'))
            .then(
                user => {
                    req.userEmail = user.email;

                    next();
                },
                err => res.status(403).send({
                    status: 403,
                    message: "Invalid authentication!",
                    source: err
                })
            );
    }
});

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', remove);

function findAll(req, res, next) {
    NotesService.findAll().then(
        notes => res.status(201).json(notes), error
    );
}

function findById(req, res, next) {
    const id = req.param("id");
    NotesService.findById(id).then(
        note => res.status(201).json(note), error
    );
}

function create(req, res, next) {
    const note = new Note({
        title: req.body.title,
        description: req.body.description,
        userEmail: req.userEmail
    });

    NotesService.create(note).then(
        note => res.status(201).json({
            status: 200,
            message: 'note created'
        }), error
    );
}

function update(req, res, next) {
    const note = new Note({
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        userEmail: req.userEmail
    });

    NotesService.update(note).then(
        note => res.status(201).json(note), error
    );
}

function remove(req, res, next) {
    const id = req.param("id");
    NotesService.remove(id).then(
        note => res.status(201).json({
            status: 200,
            message: "note removed"
        }),
        error
    );
}

function error(err) {
    res.status(500).send({
        status: 500,
        message: 'Ops! Internal Server Error.'
    })
}

module.exports = router;