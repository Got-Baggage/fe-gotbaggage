describe('trip creation form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.contains('Create Trip').click()
  });

  it('prompts the user to pick a trip name', () => {
    cy.get('form')
      .contains('What is your trip name?')
  })
})