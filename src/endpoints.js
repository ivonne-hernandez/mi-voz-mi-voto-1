const endpoints = {
  users: 'http://localhost:3001/api/v1/users',
  /* POST to API:
    REQUEST OBJECT:
      {
        first_name: 'string',
        last_name: 'string',
        state_name: 'string', ** two letter state abbv **
        email: 'string',
        language: 'string' ** 'en' or 'es' **
      }
    RESPONSE OBJECT:
      SUCCESSFULLY CREATED:
      {
        success: "You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to #{user.email}.",
        status: 200
      }
      EMAIL DOES NOT INCLUDE '@':
      {
        error: "Error creating subscriber. A valid email must be provided.",
        status: 400
      }
      GENERAL ERROR:
      {
        error: "Error creating subscriber.",
        status: 400
      }
      SUCCESSFULLY REMOVED:
      {
        success: "You have successfully unsubscribed from Mi Voto, Mi Voz's email list. You will no longer receive email notifications at #{user.email}."},
        status: 200
      }
  */
  elections: 'http://localhost:3001/api/v1/elections',
  referendums: 'http://localhost:3001/api/v1/referendums',
  state: 'http://localhost:3001/api/v1/state'
}

export default endpoints;
