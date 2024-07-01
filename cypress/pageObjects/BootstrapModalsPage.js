class BootstrapModalsPage {
    visit() {
        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html');
    }

    openSingleModal() {
        cy.contains('Launch modal').click();
    }

    assertSingleModalVisible() {
        cy.get('.modal-content').should('be.visible');
    }

    assertSingleModalCloses() {
        cy.contains('Close').click();
        cy.get('.modal-content').should('not.be.visible');
    }

    assertMultipleModal() {
        cy.contains('Launch modal').click();
        cy.contains('Launch modal').click();
    }

}

export default BootstrapModalsPage;
