var mongoose = require('mongoose');
var Note = require('../model/note');

class NoteService {

    static findByUserEmail(email) {
        return new Promise((resolve, reject) => {
            Note.find({userEmail: email}, (err, doc) => {
                if (err) return reject(err);
                resolve(doc);
            });
        });
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            Note.findById(id, (err, doc) => {
                if (err) return reject(err);
                resolve(doc);
            });
        });
    }

    static findAll() {
        return new Promise((resolve, reject) => {
            Note.find({}, (err, docs) => {
                if (err) return reject(err);
                resolve(docs);
            });
        });
    }

    static remove(id) {
        return new Promise((resolve, reject) => {
            Note.findByIdAndRemove(id,
                err => {
                    if (err) return reject(err);
                    resolve();
                });
        });
    }

    static update(note) {
        return new Promise((resolve, reject) => {
            Note.findByIdAndUpdate(note._id, note, err => {
                if (err) return reject(err);
                resolve();
            });
        });
    }

    static create(note) {
        return new Promise((resolve, reject) => {
            note.save((err, note) => {
                if (err) return reject(err);
                resolve(note);
            });
        });
    }
}

module.exports = NoteService;