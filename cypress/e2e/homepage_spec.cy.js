describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })
  it.skip('As a user, I should see a home page with a logo', () => {
    cy.get('.homepage-container').get('.image-container').get('.homepage-logo');
  })
  it.skip('As a user, I should see a create trip button. This button should navigate you to the trip form. ', () => {
    cy.get('[href="/form"] > .homepage-button').contains('Create Trip').click();
    cy.url().should('include', '/form')
  })
    it.skip('As a user, I should see a packing list button. This button should navigate you to the trip container. ', () => {
      cy.get('[href="/tripcontainer"] > .homepage-button').contains('Packing List').click();
      cy.url().should('include', '/tripcontainer');
    });
})