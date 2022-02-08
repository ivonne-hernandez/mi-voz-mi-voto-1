describe("Email Notification Form user flow", () => {
  beforeEach(() => {
    cy.intercept('POST', "/api/v1/users", {
      fixture: ""
    });
  });


})

// {
//   "first_name": "Anna",
//   "last_name": "Martinez",
//   "state": "co",
//   "email": "annamartinez@yahoo.com",
//   "language": "en"
// }