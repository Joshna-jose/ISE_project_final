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
}, { collection: 'reviewers'});

const papersSchema = mongoose.Schema({
    title: String,
    authors: String,
    keywords: String,
    abstract: String,
    attachment: String,
    submittedby: String,
    assigned: Number 
},{ collection: 'papers'});

const usersSchema = mongoose.Schema({
    name: String,
    affiliation: String,
    affiliation_addr: String,
    email: String,
    password: String,
    contact: String,
    link: String 
}, { collection: 'users', versionKey: false});

const dataSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    authors: {
      type: String,
      required: true
    },
    keywords: String,
    abstract: String,
    attachment: String,
    submittedby: String,
    assigned: Number,
    rev1: {
      type: String,
      default: ""
    },
    rev2: {
      type: String,
      default: ""
    },
    rev3: {
      type: String,
      default: ""
    }
  }, { collection: 'papers' }); 

const Reviewer = mongoose.model("Reviewer", reviewerSchema);
const Paper = mongoose.model("Paper", papersSchema);
const User = mongoose.model("User", usersSchema);
const Data = mongoose.model("Data", dataSchema);
const Reviewers = mongoose.model('Reviewers', new mongoose.Schema({
    name: String,
  }));

module.exports = { Reviewer, Paper, User, Data, Reviewers };