import SimpleFormDemoPage from '../pageObjects/SimpleFormDemoPage';
import SelectListDemoPage from '../pageObjects/SelectListDemoPage';
import BootstrapAlertsPage from '../pageObjects/BootstrapAlertsPage';
import BootstrapModalsPage from '../pageObjects/BootstrapModalsPage';

// Test suite for Simple Form Demo
describe('Simple Form Demo Tests', () => {
  const simpleFormDemoPage = new SimpleFormDemoPage();

  beforeEach(() => {
    simpleFormDemoPage.visit();
  });

  it('Should submit single input field with valid input', () => {
    simpleFormDemoPage.enterSingleInputField('Hello');
    simpleFormDemoPage.submitForm();
    simpleFormDemoPage.assertSubmissionSuccess();
  });

  it('Should accept special characters', () => {
    simpleFormDemoPage.enterSingleInputField('?<>!@#');
    simpleFormDemoPage.submitForm();
    simpleFormDemoPage.assertSpecialCharacters();
  });

  it('Should calculate the sum of two numbers', () => {
    const number1 = 10;
    const number2 = 20;
    const expectedSum = number1 + number2;

    simpleFormDemoPage.enterNumber1(number1);
    simpleFormDemoPage.enterNumber2(number2);
    simpleFormDemoPage.getTotal();
    simpleFormDemoPage.assertSumIsCorrect(expectedSum.toString());
  });
});

// Test suite for Select List Demo
describe('Select List Demo Tests', () => {
  const selectListDemoPage = new SelectListDemoPage();

  beforeEach(() => {
    selectListDemoPage.visit();
  });

  it('Should select single option from the dropdown list', () => {
    selectListDemoPage.selectOption('Monday');
    selectListDemoPage.assertSelectedOption('Monday');
  });

  it('Should select option(s) from the multiple dropdown list', () => {
    selectListDemoPage.multiSelect('Texas');
    selectListDemoPage.submitFirstSelected();
    selectListDemoPage.assertSelectedOptions('First selected option is : Texas');
  });
});

// Test suite for Bootstrap Alerts
describe('Bootstrap Alerts Tests', () => {
  const bootstrapAlertsPage = new BootstrapAlertsPage();

  beforeEach(() => {
    bootstrapAlertsPage.visit();
  });

  it('Should display normal success alert with expected content and dialog box should behave as expected', () => {
    bootstrapAlertsPage.clickAndAssertNormalSuccess();
  });

  it('Should display autocloseable success alert, expected content and dialog box closes after 5 seconds', () => {
    bootstrapAlertsPage.clickAndAssertAutocloseableSuccess();
  });


  it('Should display normal danger alert with clicked, dialog box should behave as expected', () => {
    bootstrapAlertsPage.clickAndAssertNormalDanger();
  });

  it('Should display autocloseable warning alert when clicked, show expected content and close at specified time', () => {
    bootstrapAlertsPage.clickAndAssertAutocloseableWarning();
  });

});

// Test suite for Bootstrap Modals
describe('Bootstrap Modals Tests', () => {
  const bootstrapModalsPage = new BootstrapModalsPage();

  beforeEach(() => {
    bootstrapModalsPage.visit();
  });

  it('Should open single modal', () => {
    bootstrapModalsPage.openSingleModal();
    bootstrapModalsPage.assertSingleModalVisible();
  });

  it('Should close single modal', () => {
    bootstrapModalsPage.openSingleModal();
    bootstrapModalsPage.assertSingleModalCloses();
  });
});
