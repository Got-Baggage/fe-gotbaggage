describe('trip creation form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Create Trip').click()
  });

  it('prompts the user to pick a trip name, enter who the list will be for, and select a trip type', () => {
    cy.get('form')
      // .contains('What is your trip name?')
    cy.get('input').type("my test vacation")
    cy.get('.submit-button').click()
    cy.get('input').type('Cypress')
    cy.get('.submit-button').click()
    cy.get('.dropdown').select("Mock")
    cy.get('.submit-button').click()
  })

  it('shows the user a confirmation message when their trip has been submitted', () => {
    cy.get('form')
    cy.get('input').type("my test vacation")
    cy.get('.submit-button').click()
    cy.get('input').type('Cypress')
    cy.get('.submit-button').click()
    cy.get('.dropdown').select("Mock")
    cy.get('.submit-button').click()
    cy.get('.successful-submit-container').should('include.text', 'Your trip was submitted!')
  })

  it('allows the user to navigate to view their trips upon successful submission', () => {
    cy.get('form')
    cy.get('input').type("my test vacation")
    cy.get('.submit-button').click()
    cy.get('input').type('Cypress')
    cy.get('.submit-button').click()
    cy.get('.dropdown').select("Mock")
    cy.get('.submit-button').click()
    cy.get('.view-trips-button').click()
    cy.url().should('eq', 'http://localhost:3000/tripcontainer')
    cy.get('.trip-card').should('be.visible')
  })

  it('should show the newly-created trip as a trip card', () => {
    cy.get('form')
    cy.get('input').type("my test vacation")
    cy.get('.submit-button').click()
    cy.get('input').type('Cypress')
    cy.get('.submit-button').click()
    cy.get('.dropdown').select("Mock")
    cy.get('.submit-button').click()
    cy.get('.view-trips-button').click()
    cy.get('.trip-card').first().should('include.text', 'my test vacation')
  })
})

describe('trip creation form error handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Create Trip').click()
  })

  it('should not allow a user to click "submit" without having typed anything', () => {
    cy.get('.submit-button').should('be.disabled')
  })

  it('should not allow the user to go back on the first question', () => {
    cy.get('.back-button').should('be.disabled')
  })

  it('should re-disable the submit button when a new question is submitted', () => {
    cy.get('input').type('my test trip')
    cy.get('.submit-button').click()
    cy.get('.submit-button').should('be.disabled')
  })

  it.only('should allow the user to go back and view their response to the previous question', () => {
    cy.get('input').type('my test trip')
    cy.get('.submit-button').click()
    cy.get('.back-button').should('be.enabled')
    cy.get('.back-button').click()
    cy.get('input').should('have.value', 'my test trip')
  })
})
