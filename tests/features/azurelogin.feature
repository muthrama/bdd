Feature: Azure Login

  Scenario: Successful login to Azure with TOTP
    Given I navigate to the Azure login page
    When I provide valid username and password
    And I provide the TOTP code
    Then I should see the Azure dashboard
    And Close the browser