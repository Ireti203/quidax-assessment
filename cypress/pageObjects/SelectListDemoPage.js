class SelectListDemoPage {
    visit() {
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
    }

    selectOption(optionText) {
        cy.get('#select-demo').select(optionText);
    }

    multiSelect(optionsText) {
        cy.get('#multi-select').select(optionsText);
    }

    assertSelectedOption(expectedOption) {
        cy.get('.selected-value').should('contain.text', expectedOption);
    }

    submitFirstSelected() {
        cy.get('#printMe').click();
    }

    assertSelectedOptions(expectedOptions) {
        cy.get('.getall-selected').should('contain.text', expectedOptions);
    }

}

export default SelectListDemoPage;
