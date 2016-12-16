/**
 * Created by Ani on 16-12-2016.
 */

var express = require('express');
var request = require('request');
var rp= require('request-promise');
var hbs = require('hbs');
var app = express();
var router = express.Router({
    strict: true
});
// this sets a static directory for the views/*
router.get('/', function(req, res) {
    rp(
        {url: 'http://api.football-data.org/v1/competitions/',
        qs : {season : '2015'},
        headers : {'X-Auth-Token' : '44b92586918744789de86cc81ba0ac89'}
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var dataObj = JSON.parse(body);
                // console.log("anirduha jakd khfskj ")
                // console.log(dataObj);
                res.render("leagues", {result: dataObj});
            }
        });
});

module.exports= router;