import { Component } from "react";
import './EmailNotificationForm.css';

class EmailNotificationForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      state: '',
      postal_code: '',
      email: '',
      language: '',
      agree_to_emails: false
    }
  }

  handleInputChange = (event) => {
    if (event.target.name === "agree_to_emails") {
      let updatedValue = !this.state.agree_to_emails;
      return this.setState({ agree_to_emails: updatedValue });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  clearInputs = () => {
    this.setState({ 
      first_name: '',
      last_name: '',
      state: '',
      postal_code: '',
      email: '',
      language: '',
      agree_to_emails: false
    });
  }


  render = () => {
    return (
      <form>
        <div className="label-input-container">
          <label>
            First Name<em>*</em>
            <input type="text" 
              name="first_name" 
              id="first_name" 
              required="required" 
              aria-required="true" 
              onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div className="label-input-container">
          <label>
            Last Name<em>*</em>
            <input type="text" 
              name="last_name" 
              id="last_name" 
              required="required" 
              aria-required="true" 
              onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div className="label-input-container">
          <label>
            State<em>*</em>
            <input type="select" 
              name="state" 
              id="state" 
              required="required" 
              aria-required="true" 
              onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div className="label-input-container">
          <label>
            ZIP code<em>*</em>
            <input type="postal-code" 
              name="postal_code" 
              id="postal_code" 
              required="required" 
              aria-required="true" 
              onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div className="label-input-container">
          <label>
            Email address<em>*</em>
            <input type="email" 
              name="email" 
              id="email" 
              required="required" 
              aria-required="true" 
              onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <p>Preferred language:</p>
        <div className="label-input-container">
          <input type="radio" 
            name="language" 
            id="english" 
            value="en" 
            required="required" 
            aria-required="true" 
            onChange={(event) => this.handleInputChange(event)}/> 
          <label>English</label>
        </div>
        <div className="label-input-container">
          <input type="radio" 
            name="language" 
            id="spanish" 
            value="es" 
            required="required" 
            aria-required="true" 
            onChange={(event) => this.handleInputChange(event)}/> 
          <label>Spanish</label>
        </div>
        <div className="label-input-container">
          <input type="checkbox" 
            name="agree_to_emails" 
            id="agree_to_emails" 
            value={this.state.agree_to_emails} 
            required="required" 
            aria-required="true" 
            onChange={(event) => this.handleInputChange(event)}/> 
          <label className="agree-to-emails-checkbox">Sign up for email notifications about upcoming elections in my state.</label>
        </div>
        <div className="submit-button-container">
          <input type="submit" 
            name="commit" 
            value="Submit" 
            /> 
        </div>
      </form>
    );
  }
}

export default EmailNotificationForm;