Feature: login process

Scenario: Login with username and passowrd
Given providing valid url
When providing valid username and passowrd
Then clicking login button

Scenario: Login with username and passowrd in parameter
Given providing valid url
When providing valid username as "mercury" and passowrd as "mercury"
Then clicking login button

