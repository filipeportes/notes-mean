const mongoose = require('mongoose');

class Connection {
    connect() {
        mongoose.connect('mongodb://mongodb://mean:mean@ds033015.mlab.com:33015/filipenotesweb',
            err => {
                if (err) {
                    throw err;
                }

                console.log('mongodb conectado');
            });
    }
}

module.exports = Connection;