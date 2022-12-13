// describe('trip creation form', () => {
//   beforeEach(() => {
//     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//       fixture: "create-trip.json",
//     }).as("create-trip")
//      cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//        fixture: "categories.json",
//      }).as("categories");
   
//     cy.visit('http://localhost:3000/')
//     cy.contains('Create Trip').click()
//     cy.url().should("include", "/form")
//   });

//   it('prompts the user to pick a trip name, enter who the list will be for, and select a trip type', () => {
//     cy.get('form')
//     cy.get('.question').contains('What would you like to call this trip? (For example: "January Mexico trip")' );
//     cy.get('input').type("my test vacation")
//     cy.get('.submit-button').should('exist').click()
//     cy.get('.question').contains('Who is this list for?');
//     cy.get('input').type('Cypress')
//     cy.get('.submit-button').should('exist').click()
//     cy.get('.question').contains('What type of trip is this?');
//     cy.get('.dropdown').select("beach")
//     cy.get('.submit-button').should('exist').click()
//   })

//   it('shows the user a confirmation message when their trip has been submitted', () => {
//     cy.get('form')
//     cy.get('input').type("my test vacation")
//     cy.get('.submit-button').click()
//     cy.get('input').type('Cypress')
//     cy.get('.submit-button').click()
//     cy.get('.dropdown').select("beach")
//     cy.get('.submit-button').click()
//     cy.get('.successful-submit-container').should('include.text', 'Your trip was submitted!')
//   })

//   it('allows the user to navigate to view their trips upon successful submission', () => {
//     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//          fixture: "trips.json",
//        }).as("trips");
//     cy.get('form')
//     cy.get('input').type("Beth's Ski Trip")
//     cy.get('.submit-button').click()
//     cy.get('input').type('Beth')
//     cy.get('.submit-button').click()
//     cy.get('.dropdown').select("beach")
//     cy.get('.submit-button').click()
//     cy.get('.view-trips-button').click()
//     cy.url().should('eq', 'http://localhost:3000/tripcontainer')
//     cy.get('.trip-card').should('be.visible')
//   })

//   it('should show the newly-created trip as a trip card', () => {
//        cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//          fixture: "trips.json",
//        }).as("trips");
//     cy.get('form')
//     cy.get('input').type("Beth's Ski Trip")
//     cy.get('.submit-button').click()
//     cy.get('input').type('Beth')
//     cy.get('.submit-button').click()
//     cy.get('.dropdown').select("beach")
//     cy.get('.submit-button').click()
//     cy.get('.view-trips-button').click()
//     cy.get('.trip-card').first().should('include.text', "Beth's Ski Trip")
//   })
// })

// describe('trip creation form error handling', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/')
//     cy.contains('Create Trip').click()
//   })

//   it('should not allow a user to click "submit" without having typed anything', () => {
//     cy.get('.submit-button').should('be.disabled')
//   })

//   it('should not allow the user to go back on the first question', () => {
//     cy.get('.back-button').should('be.disabled')
//   })

//   it('should re-disable the submit button when a new question is submitted', () => {
//     cy.get('input').type('my test trip')
//     cy.get('.submit-button').click()
//     cy.get('.submit-button').should('be.disabled')
//   })

//   it('should allow the user to go back and view their response to the previous question', () => {
//     cy.get('input').type('my test trip')
//     cy.get('.submit-button').click()
//     cy.get('.back-button').should('be.enabled')
//     cy.get('.back-button').click()
//     cy.get('input').should('have.value', 'my test trip')
//   })
// })
