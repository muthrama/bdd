Feature: Automation Testing

  Scenario: Click "Let me hack!" button and verify "Rooms" is visible
    Given I navigate to the login page
    When I click the button "Let me hack!"
    Then I should see "Rooms" on the page
    And Close the browser

  #Scenario: Click "Book this room" button and verify "November 2024" is visible
   # Given I navigate to the login page
   # When I click the button "Let me hack!"
   # Then I should see "Rooms" on the page
   # And I click the "Book this room" button
    #Then I should see "November 2024" on the page
    #And Close the browser