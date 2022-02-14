import { FormattedMessage } from 'react-intl';
import { Component, Fragment } from 'react';
import './EmailNotificationForm.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { states } from './states';
import { postNewEmailSubscriber } from '../../apiCalls.js';
import success from '../../Assets/success.png';
import fail from '../../Assets/fail.png';

class EmailNotificationForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      state_name: 'Select',
      email: '',
      language: '',
      agree_to_emails: false,
      displayMissingInput: false,
      isSubmitting: false,
      successMessage: null,
      failMessage: null,
      error: null
    }
  }

  handleSuccess = () => {
    return (
      <>
        <img className="server-reply-icon green" src={success} alt="green check" aria-hidden="true" />
        <p className="success-message">{this.state.successMessage}</p>
      </>
    )
  }

  handleFailure = () => {
    return (
      <>
        {this.state.failMessage ? <img className="server-reply-icon red" src={fail} alt="red x" aria-hidden="true" /> : null}
        <p className="fail-message">{this.state.failMessage}</p>
      </>
    )
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheckboxInput = () => {
    const updatedValue = !this.state.agree_to_emails;
    return this.setState({ agree_to_emails: updatedValue });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayMissingInput: true });
    if (this.validateInputs()) {
      this.setState({ displayMissingInput: false });
      const newEmailSubscriber = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        state_name: this.state.state_name,
        email: this.state.email,
        language: this.state.language,
      }

      postNewEmailSubscriber(newEmailSubscriber)
        .then(response => {
          this.setState({ isSubmitting: true });
          if (response.status !== 400 && response.status !== 200) {
            throw new Error (`${response.status}: ${response.statusText}. Something has gone wrong, please try again.`)
          }
          return response.json()
        })
        .then(message => {
          this.setState({
            isSubmitting: false,
            successMessage: message.success,
            failMessage: message.error,
            error: null
          });
        })
        .catch(error => {
          this.setState({
            isSubmitting: false,
            serverMessage: null,
            error: error.message
          });
        })

      this.clearInputs();
    }
  }

  validateInputs = () => {
    return this.validateNames() && this.validateState() && this.validateEmail()
      && this.validateLanguage() && this.validateAcknowledgement();
  }

  validateNames = () => {
    return this.state.first_name.length > 0 && this.state.last_name.length > 0;
  }

  validateState = () => {
    return this.state.state_name.length > 0 && this.state.state_name !== 'Select' ;
  }

  validateEmail = () => {
    return /^.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(this.state.email);
  }

  validateLanguage = () => {
    return this.state.language.length > 0;
  }

  validateAcknowledgement = () => {
    return this.state.agree_to_emails;
  }

  displayMissingInputMessage = () => {
    if (!this.validateNames()) {
      return <p className="missing-input-message">Please enter your first and last name.</p>;
    } else if (!this.validateState()) {
      return <p className="missing-input-message">Please select a state.</p>;
    } else if (!this.validateEmail()) {
      return <p className="missing-input-message">Please enter a valid email.</p>;
    } else if (!this.validateLanguage()) {
      return <p className="missing-input-message">Please select your preferred language.</p>;
    } else if (!this.validateAcknowledgement()) {
      return <p className="missing-input-message">Please check the "Sign up for email notifications" box.</p>;
    }
  }

  clearInputs = () => {
    this.setState({
      first_name: '',
      last_name: '',
      state_name: 'Select',
      email: '',
      language: '',
      agree_to_emails: false
    });
  }

  stateOptions = () => {
    const options = [
      <option className="state-name-option" name="state_name" value="Select" key="Select" disabled={true}>
        Select
      </option>
    ];

    const stateOptions = states.map(state => {
      return (
        <option className="state-name-option" name="state_name" value={state.value} key={state.label}>
          {state.label}
        </option>
      );
    });

    return options.concat(stateOptions);
  }

  render = () => {
    return (
      <>
        {this.state.isSubmitting ? <Loading /> :
          <>
            {this.state.error ? <Error error={this.state.error} /> :
              <form className="form-container">
                <div className="form-header-container">
                  <p className="form-header">
                    <FormattedMessage
                      id="emailNotificationForm.title"
                      defaultMessage="State Election Reminders" />
                  </p>
                </div>
                <div className="form-content-container">
                  <div className="label-input-container">
                    <label className="label" htmlFor="first_name">
                      <FormattedMessage
                        id="emailNotificationForm.firstNameLabel"
                        defaultMessage="First Name" />
                      <em>*</em>
                    </label>
                    <input type="text"
                      name="first_name"
                      value={this.state.first_name}
                      id="first_name"
                      required="required"
                      aria-required="true"
                      className="input"
                      onChange={(event) => this.handleInputChange(event)}/>
                  </div>
                  <div className="label-input-container">
                    <label className="label" htmlFor="last_name">Last Name<em>*</em></label>
                    <input type="text"
                      name="last_name"
                      value={this.state.last_name}
                      id="last_name"
                      required="required"
                      aria-required="true"
                      className="input"
                      onChange={(event) => this.handleInputChange(event)}/>
                  </div>
                  <div className="label-input-container">
                    <label className="label" htmlFor="state_name">State<em>*</em></label>
                    <select name="state_name"
                      id="state_name"
                      className="state-name-select input"
                      value={this.state.state_name}
                      onChange={(event) => this.handleInputChange(event)}>
                      {this.stateOptions()}
                    </select>
                  </div>
                  <div className="label-input-container email-label">
                    <label className="label" htmlFor="email">Email address<em>*</em></label>
                    <input type="email"
                      name="email"
                      value={this.state.email}
                      id="email"
                      required="required"
                      aria-required="true"
                      className="input"
                      onChange={(event) => this.handleInputChange(event)}/>
                  </div>
                  <label className="preferred-lang-p label" htmlFor="language">Preferred language<em>*</em></label>
                  <div className="label-input-container">
                    <input type="radio"
                      name="language"
                      id="english"
                      value="en"
                      required="required"
                      className="input-radio"
                      checked={this.state.language === "en"}
                      onChange={(event) => this.handleInputChange(event)}/>
                    <label className="label-radio" htmlFor="english">English</label>
                  </div>
                  <div className="label-input-container">
                    <input type="radio"
                      name="language"
                      id="spanish"
                      value="es"
                      required="required"
                      className="input-radio"
                      checked={this.state.language === "es"}
                      onChange={(event) => this.handleInputChange(event)}/>
                    <label className="label-radio" htmlFor="spanish">Spanish</label>
                  </div>
                  <div className="label-input-container">
                    <input type="checkbox"
                      name="agree_to_emails"
                      id="agree_to_emails"
                      value={this.state.agree_to_emails}
                      required="required"
                      aria-required="true"
                      className="input-checkbox"
                      checked={this.state.agree_to_emails}
                      onChange={() => this.handleCheckboxInput()}/>
                    <label className="agree-to-emails-checkbox label" htmlFor="agree_to_emails">
                      Sign up for email notifications about upcoming elections in my state.
                    </label>
                  </div>
                  <div className="submit-button-container">
                    <button
                      className="submit-button"
                      onClick={(event) => this.handleSubmit(event)}>
                        Submit
                    </button>
                  </div>
                  <div className="missing-input-message-container">
                    {this.state.displayMissingInput ?
                      <>
                        {this.state.displayMissingInput && this.displayMissingInputMessage()}
                      </> :
                      <>
                        {this.state.successMessage ? this.handleSuccess() : this.handleFailure()}
                      </>
                    }
                  </div>
                </div>
              </form>
            }
          </>
        }
      </>
    );
  }
}

export default EmailNotificationForm;
