class SimpleFormDemoPage {
    visit() {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html');
    }

    enterSingleInputField(text) {
        cy.get('#user-message').type(text);
    }


    submitForm() {
        cy.get('#get-input > .btn').click();
    }

    assertSubmissionSuccess() {
        cy.get('#display').should('contain.text', 'Hello');
    }

    assertSpecialCharacters() {
        cy.get('#display').should('contain.text', '?<>!@#');
    }

    enterMultipleInputFields(text) {
        cy.get('#user-message').type(text);
    }

    enterNumber1(number) {
        cy.get('#value1').type(number);
    }

    enterNumber2(number) {
        cy.get('#value2').type(number);
    }

    getTotal() {
        cy.get('[onclick="return total()"]').click();
    }

    assertSumIsCorrect(expectedSum) {
        cy.get('#displayvalue').should('have.text', expectedSum);
    }

}

export default SimpleFormDemoPage;
