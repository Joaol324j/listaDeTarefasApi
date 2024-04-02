const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const listSchema = new Schema({
    name: { type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true, default: function(){ return slug(this.name)}},
    description: {type: String, required: true},
    status: {type: String, required: true}
})

module.exports = mongoose.model('List', listSchema)