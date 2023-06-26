/// <reference types="cypress" />

// DRY -> Don't Repeat Yourself

describe('my first e2e test', () => {
  beforeEach(() => {
    cy.visit('/');

    // cy.viewport('iphone-x');

    // cy.viewport(width, height);
    // cy.viewport(width, height, options);
    // cy.viewport('presets', 'orientation', options);
  });

  it('successfully renders the page header', () => {
    cy.contains('Emoji Search');
  });

  it('should renders the list of emojis', () => {
    cy.get('[data-cy="emoji-row"]').should('have.length', 20);
  });

  it('should filter the list of emojis', () => {
    cy.get('[data-cy="emoji-search-input"]').type('joy');
    cy.get('[data-cy="emoji-row"]').should('have.length', 3);
    cy.contains('Joy');
    cy.contains('Joy Cat');
    cy.contains('Joystick');

    cy.get('[data-cy="emoji-search-input"]').clear().type('cactus');
    cy.get('[data-cy="emoji-row"]').should('have.length', 1);
    cy.contains('Cactus');
  });

  it.skip('is a very long test', () => {
    cy.wait(10000);
  });

  it('shows a  "emojis not found" message', () => {
    cy.get('[data-cy="emoji-search-input"]').type('emoji that does not exist');
    cy.get('[data-cy="emoji-row"]').should('have.length', 0);
    cy.contains('Emojis not found');
    cy.contains('Try searching for something else');
  });
});
