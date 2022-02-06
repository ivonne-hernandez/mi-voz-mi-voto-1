const endpoints = {
  submit: 'localhost:3001/api/v1/users'
  /* POST to API:
    request object, newEmailSubscriber:
      {
        first_name: 'string',
        last_name: 'string',
        state: 'string', ** 'ca','co','me' **
        email: 'string',
        language: 'string' ** 'en' or 'es' **
      }
    response object:
    -> WHAT DO WE WANT THE BACKEND TO RETURN UPON A SUCCESSFUL POST?
      success: "New user successfully created.  A confimation has been sent to ${email}.",
      status: "200",
      error: "Unable to create user.  Please provide a valid email."
  */
}

export default endpoints;
