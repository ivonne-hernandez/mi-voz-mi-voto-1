describe("Email Notification Form user flow", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('As a user, I should see a form for State Election Reminders with the first name, last name, state, email address, preferred language, "Sign up for email notifications" inputs and a Submit button', () => {
    cy.get('form[class="form-container"]').should('have.length', 1)
      .get('p[class="form-header"]').contains('State Election Reminders')
      .get('label[class="label"]').contains('First Name')
      .get('label[class="label"]').contains('Last Name')
      .get('label[class="label"]').contains('State')
      .get('label[class="label"]').contains('Email address')
      .get('label[class="preferred-lang-p label"]').contains('Preferred language')
      .get('label[class="label-radio"]').contains('English')
      .get('label[class="label-radio"]').contains('Spanish')
      .get('label[class="agree-to-emails-checkbox label"]').contains('Sign up for email notifications about upcoming elections in my state.')
      .get('button[class="submit-button"]').should('have.length', 1);
  });

  it('As a user, when I enter all of my information and click on the submit button, I should see a message that tells me that I am now subscribed for email reminders', () => {
    cy.intercept('POST', '/api/v1/users', {
      fixture: 'successful_form_response.json'
    });
    cy.get('input[id="first_name"]').type("Anna")
      .get('input[id="last_name"]').type("Martinez")
      .get('select[id="state_name"]').select("Colorado")
      .get('input[id="email"]').type("annamartinez@yahoo.com")
      .get('[type="radio"]').check('en')
      .get('input[id="agree_to_emails"]').check()
      .get('button[class="submit-button"]').click()
  });
})

// {
//   "first_name": "Anna",
//   "last_name": "Martinez",
//   "state": "co",
//   "email": "annamartinez@yahoo.com",
//   "language": "en"
// }