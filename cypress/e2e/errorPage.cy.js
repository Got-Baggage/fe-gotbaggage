describe("Error Page", () => {
  beforeEach(() => {
    cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
      fixture: "trips.json",
    }).as("trips");
    cy.visit("http://localhost:3000/lis");
  })
  it("Should see and error page" , () => {
    cy.get(".nav-logo").should("exist");
    cy.get(".error-img").should("exist")
    cy.get(".error-message").contains(
      "Sorry, the page you are looking for does not exist.");
  })
  it("Should allow the user to return home", () => {
    cy.get(".error-home-button").click()
    cy.url().should("include", "/")
  })
})