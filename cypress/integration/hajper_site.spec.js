describe("www.hajper.com test", () => {
  it('Visits the site, check the menu items and logo', function() {
    //Visit the site (no assertion is needed cause it's done by cy.visit() underthehood)
    cy.visit("/");
    //Check the buttons in Regulation Header are visible in the header
    cy.get('[data-at="regulation-header-spel-paus"]').should('be.visible')
    cy.get('[data-at="regulation-header-responsible-gaming"]').should('be.visible')
    cy.get('[data-at="regulation-header-self-test"]').should('be.visible')
    //Check Spel inspektionen logo is available in the Footer
    cy.get('[data-at="spelinspektionen-logo"]')
    .should('have.css', 'background', 'rgba(0, 0, 0, 0) '
    +'url("https://d3eg6wi5fpm57g.cloudfront.net/@komigen/mobile-frontend@5609-ba60/assets/spelinspektionen-licence.svg") '
    +'no-repeat scroll 0% 0% / auto padding-box border-box')
  });

  it('check that a toast notification is shown on the top of the page', function() {
    cy.visit("/casino/explore");
    cy.get('[data-at="love-icon"]').first().click()
    cy.get('[data-at="notification-bar-header"]').children()
    .should('contain.text', 'Dina favoriter är kopplade till ditt saldo,'
    +' klicka på Hämta saldo eller Sätt in för att lägga till dina favoriter.')
  });
});