'use strict';

module.change_code = 1;
const _ = require('lodash');
const Alexa = require('alexa-app');
const app = new Alexa.app('olivia-temperature');
const AWS = require("aws-sdk");
const Promise = require("bluebird");
const rp = require("request-promise");
const q = require('q');
const path    = require("path");
const config = require(path.normalize(__dirname + "/config.js"));

app.launch((req, res) => {
  const prompt = 'Initializing';
  res.say(prompt).shouldEndSession(true);
});

app.intent('temperature', {
    'slots': {},
    'utterances': ['{|for} {|room} {temperature}']
  },
  (req, res) => {
    const resultPromise = q.defer();
    getRoomTemperature().then(body => {
        let tempInFaren = body.temperature.alexaSpokenValue;

        res.say(tempInFaren);
        res.send();
 
        resultPromise.resolve();
    });
 
    return resultPromise.promise;
  }
);

function requestRoomTemperature() {
  return getRoomTemperature().then(
    response => response.body
  );
}

function getRoomTemperature(){
    const options = {
        uri: config.url,
        json: true 
    };

    return rp(options);
}

module.exports = app;