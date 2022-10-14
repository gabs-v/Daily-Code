const EntryController = require('../controllers/entry.controller');

module.exports = app => {
    app.get('/api/entry', EntryController.findAllEntries)
    app.post('/api/entry' , EntryController.createEntry)
}