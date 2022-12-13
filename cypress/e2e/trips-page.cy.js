// // import trips from "../fixtures/trips.json"

// describe('Display all made trips', () => {
//   beforeEach(() => {
//     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//       fixture: "trips.json",
//     }).as("trips")
//     cy.visit('localhost:3000/tripcontainer')
//   })
//   it('Should be able to see all current trip lists', () => {
//     cy.get(".nav-logo").should("exist")
//     cy.get(".trip-container > :nth-child(1)")
//     cy.get(":nth-child(1) > .card-details > a > :nth-child(1)").contains("Beth")
//     cy.get(":nth-child(1) > .card-details > a > :nth-child(2)").contains("Beth's Ski Trip")
//     cy.get(":nth-child(1) > .card-image-container > .card-image");
//     cy.get(":nth-child(1) > .card-details > .card-delete");
//      cy.get(".trip-container > :nth-child(2)");
//      cy.get(":nth-child(2) > .card-details > a > :nth-child(1)").contains(
//        "Hunter"
//      );
//      cy.get(":nth-child(2) > .card-details > a > :nth-child(2)").contains(
//        "Hunter's beach vacation"
//      );
//      cy.get(":nth-child(2) > .card-image-container > .card-image");
//      cy.get(":nth-child(2) > .card-details > .card-delete");
//   })
//   it("Should be able to delete a trip", () => {
//      cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
//        fixture: "oneTrip.json",
//      }).as("trips");
//      cy.visit("localhost:3000/tripcontainer");
//     cy.get(":nth-child(1) > .card-details > .card-delete").click()
//     cy.get(":nth-child(2) > .card-details > a > :nth-child(2)").should("not.exist")
    

//   })
//   it("Should be able to retun to the homescreen by clicking the nav logo", () => {
//     cy.get(".nav-logo").click();
//     cy.url().should("include", "/");
//   })  
// })