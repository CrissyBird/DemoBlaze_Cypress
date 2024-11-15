Feature: Login
#Description: User attemps to log in using incorrect
#username and incorrect password. User succeeds in
#logging in with correct username and password. 

Background: 
    Given the user accesses the "DemoBlaze" website
    When the user selects "Login" screen

Scenario: 1. User fails login with incorrect username
    When the user enters the following login credentials:
        | Username | Password  |
        | "crissy" | "test123" | 
    * the user selects "Login Button" 
    Then the user receives "Wrong Password" modal

Scenario: 2. User fails login with incorrect password
    When the user enters the following login credentials:
        | Username     | Password  |
        | "crissyTest" | "test"    |
    * the user selects "Login Button" 
    Then the user receives "Wrong Password" modal

Scenario: 3. User Logs In with Correct Username and Password
    When the user enters the following login credentials:
        | Username     | Password   |
        | "crissyTest" | "test123"  |
    * the user selects "Login Button" 
    Then "Welcome crissyTest" is present 
    * the "Log out" button is present 
