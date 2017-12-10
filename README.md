# Phillips Hue Motion Sensor AWS Lambda Function

Simple node.js Lambda function for Phillips Hue smart light home kit motion sensor.

TL;DR- Allows you to ask Alexa for the current room temperature.

This works by exposing the Phillips Hue Bridge 2nd Generation api to AWS Lamda, where we make a request for the motion sensor data.  The Phillips hue motion sensor tracks motion as well as light, but interestingly enough it also has an onboard temperature, which is what this function takes advantage of.

---
### Installation

The middle tier REST API will need to be running locally to expose the Hue Bridge to AWS.  I had mine running on a Raspberry Pi Model 3 and managed the deployment using PM2 (http://pm2.keymetrics.io/)
```
git clone https://github.com/kalvinlim/phillips-hue-motion-sensor-rest-api
```

![Alt text](images/alexa_skills_kit.png?raw=true "Optional Title")