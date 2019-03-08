describe("Validate accept cookies behaviours", () => {
  it("it should disply cookies popup message on initial page load", () => {
    cy.visit("/")
    cy
      .get('[class*=accept-cookie]')
      .should("be.visible")
      .click();
  });

  it("it should not display accept cookies popup once accepted by user", () => {
    cy.visit("/")
    expect(Cypress.$('[class*=accept-cookie]')).to.be.hidden;
  });


  it("It should set CS_ACCEPT_COOKIES value to true", async () => {
    cy.reload()
    cy.visit("/")
    cy
      .get('.nav-item--signup-underline')
      .should("be.visible");
    cy.getCookie('CS_ACCEPT_COOKIES').should('have.property', 'value', true)
  });
});
