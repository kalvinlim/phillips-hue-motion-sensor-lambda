# Phillips Hue Motion Sensor AWS Lambda Function

Simple node.js Lambda function for Phillips Hue smart light home kit motion sensor.

TL;DR- Allows you to ask Alexa for the current room temperature.

This works by exposing the Phillips Hue Bridge 2nd Generation api to AWS Lamda, where we make a request for the motion sensor data.  The Phillips hue motion sensor tracks motion as well as light, but interestingly enough it also has an onboard temperature sensor, which is what this function takes advantage of.

---
### Prerequisites

The middle tier REST API will need to be running locally to expose the Hue Bridge to AWS.  I had mine running on a Raspberry Pi Model 3 and managed the deployment using PM2 (http://pm2.keymetrics.io/)

See https://github.com/kalvinlim/phillips-hue-motion-sensor-rest-api

---
### Installation

##### Part 1 - Set up the lamda function.  The Alexa skill will be querying the lambda function for the room temperature. 

1. You will need to log into your Amazon Console and create a new Lambda Function (https://console.aws.amazon.com)
![](images/init.png?raw=true)

2. Name your function and set the role to the existing lambda_basic_execution

3. On the next screen, set the trigger to Alexa Skills Kit:
![](images/triggers.png?raw=true)

4. Pull this repository
```
git clone https://github.com/kalvinlim/phillips-hue-motion-sensor-lambda.git
```
5.  Inside the repo, pull its node dependencies:
```
npm install
```

6. Zip up the files for upload:
![](images/compress.png?raw=true)

7. upload the zip:
![](images/compress.png?raw=true)

8. set the timeout to 10 secs:
![](images/compress.png?raw=true)

9. **Save and copy the Amazon Resource Name (ARN). We will need this for part 2**
![](images/arn.png?raw=true)

##### Part 2- Set up the Alexa skill.

1. You will need to log into your Amazon Developer Console and into the Alexa tab (https://developer.amazon.com/edw/home.html)

2. Click the get started button under Alexa Skills Kit and then Add a New Skill:
![](images/alexa_skills_kit.png?raw=true)

3. Leave the defaults and fill in the names:
![](images/new_skill.png?raw=true)

4. Save the skill

5. In the Skill Builder screen (Beta at the time of writing this readme), add a new intent:
![](images/intent.png?raw=true)

For the sample utterance, use the phrase "ask <invocation name> for room temperature", where <invocation name> is the value you had chosen in the step 3.

6. Save the model.

7. In the configuration screen, paste the lambda ARN from part 1:
![](images/config.png?raw=true)

8. Save and move on to the test screen. Make sure the skill testing switch is enabled:
![](images/enable_test.png?raw=true)

9. Type your utterance in the test simulator ("ask <invocation name> for room temperature"). You should get a response like so:
![](images/test.png?raw=true)

If this is the case, everything should be set up correctly and the skill will be physically available on your Alexa enabled device for testing.