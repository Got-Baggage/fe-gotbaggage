describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'trips.json',
    }).as('trips');
    cy.visit('http://localhost:3000/');
  });
  it('As a user, I should see a home page with a logo', () => {
    cy.get('.homepage-container').get('.image-container').get('.homepage-logo');
  });
  it('As a user, I should see a create trip button. This button should navigate you to the trip form. ', () => {
    cy.get('[href="/form"] > .homepage-button').contains('Create Trip').click();
    cy.url().should('include', '/form');
  });
  it('As a user, I should see a packing list button. This button should navigate you to the trip container. ', () => {
    cy.get('[href="/tripcontainer"] > .homepage-button')
      .contains('Packing List')
      .click();
    cy.url().should('include', '/tripcontainer');
  });
});

describe('Items page', () => {
  beforeEach(() => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'trips.json',
    }).as('trips');
  });
  it('Should be able to see all items for a trip', () => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'trips.json',
    }).as('trips');
    cy.visit('http://localhost:3000/tripcontainer');
    cy.get('.trip-container > :nth-child(1)');
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'listDetails.json',
    }).as('list details');
    cy.get(':nth-child(1) > .card-details > a').click();
  });
  it('Should be able to see a list of items for the trip and buttons', () => {
     cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
       fixture: 'listDetails.json',
     }).as('list details');
    cy.get('.nav-logo').should('exist');
    cy.get('.edit-button').should('exist');
    cy.get('.add-button').should('exist');
    cy.get('.listed-items > :nth-child(1)').contains('Essential Items');
    cy.get('.listed-items > :nth-child(3)').contains('Activity Items');
    cy.get('.essential-items > div > :nth-child(1) > ul').contains('Shampoo');
    cy.get('.essential-items > div > :nth-child(2) > ul').contains('Soap');
    cy.get(':nth-child(4) > .list-label > ul').contains('sunglasses');
  });
  it('Should be able to create an item', () => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'create-item.json',
    }).as('create item');
    cy.get('.add-button').click();
    cy.get('.add-item-input').type('Medicine');
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'addedItem.json',
    }).as('add item');
    cy.get('.add-item-button').click();
    cy.get('.added-items-container > div > .list-label > ul').contains(
      'Medicine'
    );
  });
  it('Should be able to delete an item', () => {
    cy.get('.add-button').click();
    cy.get('.edit-button').click();
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'listDetails.json',
    }).as('list details');
    cy.get('.added-items-container > div > .list-label > .delete-item-button')
      .contains('🗑')
      .click();
    cy.intercept('POST','https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'deleteItem.json',
    }).as('deleteData');
    cy.get('.added-items-container > div > .list-label > ul').should(
      'not.exist'
    );
  });
});

describe('trip creation form', () => {
  beforeEach(() => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'create-trip.json',
    }).as('create-trip');
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'categories.json',
    }).as('categories');

    cy.visit('http://localhost:3000/');
    cy.contains('Create Trip').click();
    cy.url().should('include', '/form');
  });

  it('prompts the user to pick a trip name, enter who the list will be for, and select a trip type', () => {
    cy.get('form');
    cy.get('.question').contains(
      'What would you like to call this trip? (For example: "January Mexico trip")'
    );
    cy.get('input').type('my test vacation');
    cy.get('.submit-button').should('exist').click();
    cy.get('.question').contains('Who is this list for?');
    cy.get('input').type('Cypress');
    cy.get('.submit-button').should('exist').click();
    cy.get('.question').contains('What type of trip is this?');
    cy.get('.dropdown').select('beach');
    cy.get('.submit-button').should('exist').click();
  });

  it('shows the user a confirmation message when their trip has been submitted', () => {
    cy.get('form');
    cy.get('input').type('my test vacation');
    cy.get('.submit-button').click();
    cy.get('input').type('Cypress');
    cy.get('.submit-button').click();
    cy.get('.dropdown').select('beach');
    cy.get('.submit-button').click();
    cy.get('.successful-submit-container').should(
      'include.text',
      'Your trip was submitted!'
    );
  });

  it('allows the user to navigate to view their trips upon successful submission', () => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'trips.json',
    }).as('trips');
    cy.get('form');
    cy.get('input').type("Beth's Ski Trip");
    cy.get('.submit-button').click();
    cy.get('input').type('Beth');
    cy.get('.submit-button').click();
    cy.get('.dropdown').select('beach');
    cy.get('.submit-button').click();
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'create-trip.json',
    }).as('createdTrips');
    cy.get('.view-trips-button').click();
    cy.url().should('eq', 'http://localhost:3000/tripcontainer');
    cy.get('.trip-card').should('be.visible');
  });

  it('should show the newly-created trip as a trip card', () => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'trips.json',
    }).as('trips');
    cy.get('form');
    cy.get('input').type("Beth's Ski Trip");
    cy.get('.submit-button').click();
    cy.get('input').type('Beth');
    cy.get('.submit-button').click();
    cy.get('.dropdown').select('beach');
    cy.get('.submit-button').click();
    cy.get('.view-trips-button').click();
    cy.get('.trip-card').first().should('include.text', "Beth's Ski Trip");
  });
});

describe('trip creation form error handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.contains('Create Trip').click();
  });

  it('should not allow a user to click "submit" without having typed anything', () => {
    cy.get('.submit-button').should('be.disabled');
  });

  it('should not allow the user to go back on the first question', () => {
    cy.get('.back-button').should('be.disabled');
  });

  it('should re-disable the submit button when a new question is submitted', () => {
    cy.get('input').type('my test trip');
    cy.get('.submit-button').click();
    cy.get('.submit-button').should('be.disabled');
  });

  it('should allow the user to go back and view their response to the previous question', () => {
    cy.get('input').type('my test trip');
    cy.get('.submit-button').click();
    cy.get('.back-button').should('be.enabled');
    cy.get('.back-button').click();
    cy.get('input').should('have.value', 'my test trip');
  });

  // it('should not allow a user to submit only spaces to a question', () => {
  //   cy.get('input').type('     ')
  //   cy.get('.submit-button').should('be.disabled')
  // })
});
// describe('Homepage', () => {
//   beforeEach(() => {
//     cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
//       fixture: 'trips.json',
//     }).as('trips');
//     cy.visit('http://localhost:3000/');
//   });
//   it('As a user, I should see a home page with a logo', () => {
//     cy.get('.homepage-container').get('.image-container').get('.homepage-logo');
//   });
//   it('As a user, I should see a create trip button. This button should navigate you to the trip form. ', () => {
//     cy.get('[href="/form"] > .homepage-button').contains('Create Trip').click();
//     cy.url().should('include', '/form');
//   });
//   it('As a user, I should see a packing list button. This button should navigate you to the trip container. ', () => {
//     cy.get('[href="/tripcontainer"] > .homepage-button')
//       .contains('Packing List')
//       .click();
//     cy.url().should('include', '/tripcontainer');
//   });
// });

describe('Display all made trips', () => {
  beforeEach(() => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'trips.json',
    }).as('trips');
    cy.visit('localhost:3000/tripcontainer');
  });
  it('Should be able to see all current trip lists', () => {
    cy.get('.nav-logo').should('exist');
    cy.get('.trip-container > :nth-child(1)');
    cy.get(':nth-child(1) > .card-details > a > :nth-child(1)').contains(
      'Beth'
    );
    cy.get(':nth-child(1) > .card-details > a > :nth-child(2)').contains(
      "Beth's Ski Trip"
    );
    cy.get(':nth-child(1) > .card-image-container > .card-image');
    cy.get(':nth-child(1) > .card-details > .card-delete');
    cy.get('.trip-container > :nth-child(2)');
    cy.get(':nth-child(2) > .card-details > a > :nth-child(1)').contains(
      'Hunter'
    );
    cy.get(':nth-child(2) > .card-details > a > :nth-child(2)').contains(
      "Hunter's beach vacation"
    );
    cy.get(':nth-child(2) > .card-image-container > .card-image');
    cy.get(':nth-child(2) > .card-details > .card-delete');
  });
  it('Should be able to delete a trip', () => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'oneTrip.json',
    }).as('trips');
    cy.visit('localhost:3000/tripcontainer');
    cy.get(':nth-child(1) > .card-details > .card-delete').click();
    cy.get(':nth-child(2) > .card-details > a > :nth-child(2)').should(
      'not.exist'
    );
  });
  it('Should be able to return to the home screen by clicking the nav logo', () => {
    cy.get('.nav-logo').click();
    cy.url().should('include', '/');
  });
});

describe('Error Page', () => {
  beforeEach(() => {
    cy.intercept('https://be-gotbaggage.fly.dev/graphql', {
      fixture: 'trips.json',
    }).as('trips');
    cy.visit('http://localhost:3000/lis');
  });
  it('Should see and error page', () => {
    cy.get('.nav-logo').should('exist');
    cy.get('.error-img').should('exist');
    cy.get('.error-message').contains(
      'Sorry, the page you are looking for does not exist.'
    );
  });
  it('Should allow the user to return home', () => {
    cy.get('.error-home-button').click();
    cy.url().should('include', '/');
  });
});
