const Entry = require ('../models/entry.model');

module.exports = {

    findAllEntries: (req,res) => {
        Entry.find()
        .then((allEntries) => {
            console.log(allEntries)
            res.json({allEntries})
        })
        .catch((err) => {
            console.log(err)
        })
    },

    findOneEntry: (req,res) => {
        Entry.findOne({_id: req.params.id})
        .then(oneEntry =>{
            console.log(oneEntry)
            res.json({oneEntry})
        })
        .catch((err) => 
            console.log(err))
    },

    createEntry: (req,res) => {
        Entry.create(req.body)
            .then(newEntry => {
                console.log(newEntry)
                res.json({newEntry}) 
            })
            .catch((err) =>
                console.log(err))
    },

    




}