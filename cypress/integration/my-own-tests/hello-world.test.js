/// <reference types="cypress" />

describe("Basic Tests", () => {
  beforeEach(() => {
    // Changes the viewport size, can use built in mobile sizes
    cy.viewport(1280, 720);

    cy.visit("https://codedamn.com");
  });
  it("We have the correct page title", () => {
    // Searches for text within the DOM, can be partial
    cy.contains(
      "Be industry-ready fullstack coder. 10x faster and 100x cheaper."
    );

    // Checks to see if a div with the ID of root exists
    cy.get("div#root");

    // Get custom attribute
    cy.get('[data-testid="logo"]');
  });

  it("Loads the create account page", () => {
    cy.contains("Create a free account").click();

    // Makes sure the login form exists
    cy.contains("Username").should("exist");
    cy.contains("Email address").should("exist");
    cy.contains("Password").should("exist");
  });

  it("Checks the forgot password link", () => {
    cy.contains("Sign In").click();

    //Makes sure the Forgot your password exists and works properly
    cy.contains("Forgot your password?").should("exist");
    // Verify the page url
    cy.contains("Forgot your password?").click();
    cy.url().should("include", "/password-reset");
  });

  it("Checks the signin unauth popup", () => {
    cy.contains("Sign In").click();

    cy.get("input#email").type("cypress-email");
    cy.get("input#password").type("cypress-password");

    cy.get('[data-testid="login"]').click();
    cy.contains("Unable to authorize").should("exist");
  });

  it("Loads the create account page and fills in the form", () => {
    cy.viewport(1280, 720);
    cy.visit("https://codedamn.com");
    cy.contains("Create a free account").click();

    // Makes sure the login form exists
    cy.contains("Username").should("exist");
    cy.contains("Email address").should("exist");
    cy.contains("Password").should("exist");

    cy.get("input#username").type("username");
    cy.get("input#email").type("cypress-email");
    cy.get("input#password").type("cypress-password");
  });
});
