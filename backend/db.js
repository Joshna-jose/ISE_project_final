const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Bharatserver:Bharat7885@bharatserver.jow40zq.mongodb.net/conferenceDB")

const reviewerSchema = mongoose.Schema({
    name: String,
    qualification: String,
    papersAssigned: Number,
    university: String,
    address: String,
    contact: Number,
    email: String 
}, { collection: 'reviewers', versionKey: false});

const papersSchema = mongoose.Schema({
    title: String,
    authors: String,
    keywords: String,
    abstract: String,
    attachment: String,
    submittedby: String,
    assigned: Number 
},{ collection: 'papers', versionKey: false });

const usersSchema = mongoose.Schema({
    name: String,
    affiliation: String,
    affiliation_addr: String,
    email: String,
    password: String,
    contact: String,
    link: String 
}, { collection: 'users', versionKey: false});

const Reviewer = mongoose.model("Reviewer", reviewerSchema);
const Paper = mongoose.model("Paper", papersSchema);
const User = mongoose.model("User", usersSchema);

module.exports = { Reviewer, Paper, User };