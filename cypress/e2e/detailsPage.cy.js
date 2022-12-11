describe('Items page', () => {
  it('Should be able to see all items for a trip', () => {
     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
       fixture: "trips.json",
     }).as("trips");
    cy.visit("http://localhost:3000/tripcontainer");
    cy.get(".trip-container > :nth-child(1)");
      cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
        fixture: "listDetails.json",
      }).as("list details");
    cy.get(":nth-child(1) > .card-details > a").click()
  
  })
  it('Should be able to see a list of items for the trip and buttons', () => {
    cy.get(".nav-logo").should("exist");
    cy.get(".edit-button").should("exist");
    cy.get(".add-button").should("exist");
    cy.get(".listed-items > :nth-child(1)").contains("Essential Items");
    cy.get(".listed-items > :nth-child(3)").contains("Activity Items");
    cy.get(".essential-items > div > :nth-child(1) > ul").contains("Shampoo")
    cy.get(".essential-items > div > :nth-child(2) > ul").contains("Soap")
    cy.get(":nth-child(4) > .list-label > ul").contains("sunglasses")
  })
  it("Should be able to create an item", () => {
    cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
      fixture: "create-item.json",
    }).as("create item");
    cy.get(".add-button").click();
    cy.get("input.add-item").type("Medicine");
     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
       fixture: "addedItem.json",
     }).as("add item");
    cy.get("button.add-item").click();
    cy.get(":nth-child(4) > :nth-child(2) > ul").contains("Medicine")

  })  
  it("Should be able to delete an item", () => {
    cy.get(".add-button").click();
    cy.get(".edit-button").click()
     cy.intercept("https://be-gotbaggage.fly.dev/graphql", {
       fixture: "listDetails.json",
     }).as("list details");
    cy.get(":nth-child(4) > :nth-child(2) > .delete-item-button").click()
    cy.get(":nth-child(4) > :nth-child(2) > ul").should("not.exist")
  })
})