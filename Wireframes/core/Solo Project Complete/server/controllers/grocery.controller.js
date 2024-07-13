const Grocery = require("../models/grocery.model")

module.exports = {
    getAllGroceries: (req,res) => {
        Grocery.find()
            .then(object=> res.json(object))
            .catch(err=> res.status(400).json(err))
    },



    createGrocery: (req,res) => {
        Grocery.create(req.body)
            .then(object=> res.json(object))
            .catch(err=> res.status(400).json(err))
    },



    updateGrocery: (req,res) => {
        Grocery.findOneAndUp({_id: req.params.id})
            .then(confirm=> res.json(confirm))
            .catch(err=> res.status(400).json(err))
    },



    deleteGrocery: (req,res) => {
        Grocery.deleteOne({_id: req.params.id})
            .then(confirm=> res.json(confirm))
            .catch(err=> res.status(400).json(err))
    },
}