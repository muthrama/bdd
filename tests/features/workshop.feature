Feature: Demonstrate top Playwright features 

  Scenario: Show Playwright's core capabilities 
    Given I open the Guru99 demo page
    When I type "mercury" in the username box
    And I type "mercury" in the password box
    And I click the login button
    Then I should see "Login Successfully" in the results
    And I take a screenshot

  Scenario: Validate flight finder table after login
    Given I open the Guru99 demo page
    When I type "mercury" in the username box
    And I type "mercury" in the password box
    And I click the login button
    Then I should see "Login Successfully" in the results
    When I navigate to the flight finder page
    Then I should see the flight finder table
    And I print all table headers
    And I close the browser