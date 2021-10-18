// var express = require('express');
import express from 'express';

// var mongoose = require('mongoose');
import mongoose from 'mongoose';


// const route = require('./route/routes');
import route from  './route/routes.js'

import cors from 'cors';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/users', route);


const PORT = 8000;
// const URL = 'mongodb+srv://user:<mongodbpassword>@crud.zope6.mongodb.net/crud?retryWrites=true&w=majority';
const URL = 'mongodb://localhost:27017/mern-crud';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        app.listen(PORT, () => {
            console.log(`server successfully running on port ${PORT}`);
        });
    }).catch(err => {
        console.log('ERROR: ', err);
    });
