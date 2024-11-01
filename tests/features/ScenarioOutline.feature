Feature: Running Same scenario multiple time with different parametres

Scenario Outline: Login with username and passowrd in parameter
Given providing valid url
When providing valid username as "<name>" and passowrd as "<password>"
Then clicking login button
And verifying login is successful

Examples:
| name | password |
| jupiter | jupiter |
| mars | mars |