@Scenario2
Feature: TechFios Billing Login Functionality validation

Scenario: User should be able to login with valid credentials
Given User is on techfios login page 
When User enters username as "demo@techfios.com" 
When User enters password as "abc123" 
When User clicks signin button 
Then User should land on dashboard page