$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosBankAndCashNewAccount.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios bank and cash new account functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials and create a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks Bank\u0026Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters Account Title as \"\u003cAccountTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"\u003cDescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters Initial Balance as \"\u003cInitialBalance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Number as \"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters Contact Person as \"\u003cContactPerson\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"\u003cPhone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters Internet Banking URL as \"\u003cInternetBankingURL\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "AccountTitle",
        "Description",
        "InitialBalance",
        "AccountNumber",
        "ContactPerson",
        "Phone",
        "InternetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checkings",
        "Shoes",
        "10.00",
        "1310",
        "Chris Sanchez",
        "3736468520",
        "BunUniverty.edu"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1829053900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and create a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Feature"
    },
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks Bank\u0026Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters Account Title as \"Checkings\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"Shoes\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters Initial Balance as \"10.00\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Number as \"1310\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters Contact Person as \"Chris Sanchez\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"3736468520\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters Internet Banking URL as \"BunUniverty.edu\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 962618300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 1578956700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 1557892700,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2259947600,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_should_land_on_dashboard_page()"
});
