// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits trafikinformation", () => {
    cy.visit("/areaMenu");
    cy.contains("h1", "Trafikinytt från p4");
  });
});
