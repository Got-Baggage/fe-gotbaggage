// describe("Error Page", () => {
//   beforeEach(() => {
//     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//       fixture: "trips.json",
//     }).as("trips");
//     cy.visit("http://localhost:3000/lis");
//   })
//   it("Should see and error page" , () => {
//     cy.get(".nav-logo").should("exist");
//     cy.get(".error-img").should("exist")
//     cy.get(".error-message").contains(
//       "Sorry, the page you are looking for does not exist.");
//   })
//   it("Should allow the user to return home", () => {
//     cy.get(".error-home-button").click()
//     cy.url().should("include", "/")
//   })    
// })

// describe("No data on list page", () => {
//    beforeEach(() => {
//     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//       fixture: "trips.json",
//     }).as("trips")
//     cy.visit('localhost:3000/tripcontainer')
//   })
//   it("Should say there is no data when there is no data coming in", () => {
//     cy.visit("http://localhost:3000/tripcontainer");
//     cy.get(".trip-container > :nth-child(1)");
//     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//       forceNetworkError: true,
//     }).as("list details");
//     cy.get(":nth-child(1) > .card-details > a").click();
//     cy.get(".essential-items > div > p").contains("no data")
//     cy.get(":nth-child(4) > p").contains("no data")
//     cy.get(".added-items-container > div > p").contains("no data")
//   })
 
// })