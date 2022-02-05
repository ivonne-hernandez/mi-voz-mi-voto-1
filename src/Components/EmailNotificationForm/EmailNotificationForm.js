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
    console.log(event)
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

  stateOptions = () => {
    const states = [ 
      { value: 'al', label: 'Alabama' },
      { value: 'ak', label: 'Alaska' },
      { value: 'az', label: 'Arizona' },
      { value: 'ar', label: 'Arkansas' },
      { value: 'ca', label: 'California' },
      { value: 'co', label: 'Colorado' },
      { value: 'ct', label: 'Connecticut' },
      { value: 'de', label: 'Delaware' },
      { value: 'dc', label: 'District Of Columbia' },
      { value: 'fl', label: 'Florida' },
      { value: 'ga', label: 'Georgia' },
      { value: 'hi', label: 'Hawaii' },
      { value: 'id', label: 'Idaho' },
      { value: 'il', label: 'Illinois' },
      { value: 'in', label: 'Indiana' },
      { value: 'ia', label: 'Iowa' },
      { value: 'ks', label: 'Kansas' },
      { value: 'ky', label: 'Kentucky' },
      { value: 'la', label: 'Louisiana' },
      { value: 'me', label: 'Maine' },
      { value: 'md', label: 'Maryland' },
      { value: 'ma', label: 'Massachusetts' },
      { value: 'mi', label: 'Michigan' },
      { value: 'mn', label: 'Minnesota' },
      { value: 'ms', label: 'Mississippi' },
      { value: 'mo', label: 'Missouri' },
      { value: 'mt', label: 'Montana' },
      { value: 'ne', label: 'Nebraska' },
      { value: 'nv', label: 'Nevada' },
      { value: 'nh', label: 'New Hampshire' },
      { value: 'nj', label: 'New Jersey' },
      { value: 'nm', label: 'New Mexico' },
      { value: 'ny', label: 'New York' },
      { value: 'nc', label: 'North Carolina' },
      { value: 'nd', label: 'North Dakota' },
      { value: 'oh', label: 'Ohio' },
      { value: 'ok', label: 'Oklahoma' },
      { value: 'or', label: 'Oregon' },
      { value: 'pa', label: 'Pennsylvania' },
      { value: 'ri', label: 'Rhode Island' },
      { value: 'sc', label: 'South Carolina' },
      { value: 'sd', label: 'South Dakota' },
      { value: 'tn', label: 'Tennessee' },
      { value: 'tx', label: 'Texas' },
      { value: 'ut', label: 'Utah' },
      { value: 'vt', label: 'Vermont' },
      { value: 'va', label: 'Virginia' },
      { value: 'wa', label: 'Washington' },
      { value: 'wv', label: 'West Virginia' },
      { value: 'wi', label: 'Wisconsin' },
      { value: 'wy', label: 'Wyoming' }
    ];

    const options = [
      <option className="state-name-option" name="state" value="Select" key="Select" disabled={true}>
        Select
      </option>
    ];
  
    const stateOptions = states.map(state => {
      return (
        <option className="state-name-option" name="state" value={state.value} key={state.label}>
          {state.label}
        </option>
      );
    });

    return options.concat(stateOptions);
  }


  render = () => {
    return (
      <form>
        <p>Sign up for Election Reminders</p>
        <div className="label-input-container">
          <label>
            First Name<em>*</em>
            <input type="text" 
              name="first_name" 
              value={this.state.first_name}
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
              value={this.state.last_name}
              id="last_name" 
              required="required" 
              aria-required="true" 
              onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div className="label-input-container">
          <label>State:<em>*</em></label>
          <select name="state" id="state-select"
            onChange={(event) => this.handleInputChange(event)}>
            {this.stateOptions()}
          </select>
        </div>
        <div className="label-input-container">
          <label>
            ZIP code<em>*</em>
            <input type="postal-code" 
              name="postal_code" 
              value={this.state.postal_code}
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
              value={this.state.email}
              id="email" 
              required="required" 
              aria-required="true" 
              onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <p>Preferred language:<em>*</em></p>
        <div className="label-input-container">
          <input type="radio" 
            name="language" 
            value={this.state.language}
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
            value={this.state.agree_to_emails}
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