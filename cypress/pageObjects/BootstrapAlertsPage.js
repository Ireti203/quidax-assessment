class BootstrapAlertsPage {
    visit() {
        cy.visit('https://demo.seleniumeasy.com/bootstrap-alert-messages-demo.html');
    }

    clickAndAssertNormalSuccess() {
        cy.contains('button', 'Normal success message').click();
        cy.get('.alert-normal-success')
            .should('be.visible')
            .invoke('text')
            .then((actualText) => {
                const expectedText = "I'm a normal success message. To close use the appropriate button.";
                const regexPattern = new RegExp(expectedText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\s+/g, '\\s*'), 'g');
                expect(actualText).to.match(regexPattern);
            });
        cy.wait(10000);
        cy.get('.alert-normal-success').should('be.visible');
    }

    clickAndAssertAutocloseableSuccess() {
        cy.contains('button', 'Autocloseable success message').click();
        cy.get('.alert-autocloseable-success')
            .should('be.visible')
            .invoke('text')
            .then((actualText) => {
                const expectedText = "I\'m an autocloseable success message. I will hide in 5 seconds.";
                const regexPattern = new RegExp(expectedText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\s+/g, '\\s*'), 'g');
                expect(actualText).to.match(regexPattern);
            });
        cy.wait(6000);
        cy.get('.alert-autocloseable-success').should('not.be.visible');
    }

    clickAndAssertNormalDanger() {
        cy.contains('button', 'Normal danger message').click();
        cy.get('.alert-normal-danger')
            .should('be.visible')
            .invoke('text')
            .then((actualText) => {
                const expectedText = "I'm a normal danger message. To close use the appropriate button.";
                const regexPattern = new RegExp(expectedText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\s+/g, '\\s*'), 'g');
                expect(actualText).to.match(regexPattern);
            });
        cy.wait(10000);
        cy.get('.alert-normal-danger').should('be.visible');
    }

    clickAndAssertAutocloseableWarning() {
        cy.contains('button', 'Autocloseable warning message').click();
        cy.get('.alert-autocloseable-warning')
            .should('be.visible')
            .invoke('text')
            .then((actualText) => {
                const expectedText = "I\'m an autocloseable warning message. I will hide in 3 seconds.";
                const regexPattern = new RegExp(expectedText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\s+/g, '\\s*'), 'g');
                expect(actualText).to.match(regexPattern);
            });
        cy.wait(4000);
        cy.get('.alert-autocloseable-success').should('not.be.visible');
    }
}
export default BootstrapAlertsPage;