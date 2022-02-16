import { FormattedMessage } from 'react-intl';
import { Component } from 'react';
import { deleteSubscriber } from '../../apiCalls.js';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import success from '../../Assets/success.png';
import fail from '../../Assets/fail.png';
import './Unsubscribe.css';

class Unsubscribe extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      displayMissingInput: false,
      isSubmitting: false,
      successMessage: null,
      failMessage: null,
      error: null
    }
  }

  validateEmail = () => {
    return /^.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(this.state.email);
  }

  displayMissingInputMessage = () => {
    if (!this.validateEmail()) {
      return <p className="unsubscribe-missing-input-message">
          <FormattedMessage
            id="unsubscribe.missingInputMessage"
            defaultMessage="Please enter a valid email." />
        </p>;
    }
  }

  handleInputChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayMissingInput: true })
    if (this.validateEmail()) {
      this.setState({ displayMissingInput: false });

      const email = {
        email: this.state.email
      }

      deleteSubscriber(email)
        .then(response => {
          this.setState({ isSubmitting: true });
          if(!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}.`)
          }
          return response.json();
        })
        .then(message => {
          this.setState({
            successMessage: message.success,
            failMessage: message.error,
            error: null,
            isSubmitting: false
          });
        })
        .catch(error => {
          this.setState({
            error: error.message,
            isSubmitting: false
          });
        })

      this.setState({ email: '' });
    }
  }

  handleSuccess = () => {
    return (
      <>
        <img className="unsubscribe-server-reply-icon green" src={success} alt="green check" aria-hidden="true" />
        <p className="unsubscribe-success-message">{this.state.successMessage}</p>
      </>
    )
  }

  handleFailure = () => {
    return (
      <>
        {this.state.failMessage ? <img className="unsubscribe-server-reply-icon red" src={fail} alt="red x" aria-hidden="true" /> : null}
        <p className="unsubscribe-fail-message">{this.state.failMessage}</p>
      </>
    )
  }

  render = () => {
    return (
      <>
        {this.state.isSubmitting ? <Loading /> :
          <>
            {this.state.error ? <Error error={this.state.error} /> :
              <form className="unsubscribe-form-container">
                <div className="unsubscribe-form-header-container">
                  <h2 className="unsubscribe-form-header">
                    <FormattedMessage
                      id="unsubscribe.formHeader"
                      defaultMessage="Unsubscribe from Election Reminders" />
                  </h2>
                </div>
                <div className="unsubscribe-form-content-container">
                  <div className="unsubscribe-label-input-container unsubscribe-email-label">
                    <label className="unsubscribe-label" htmlFor="email">
                      <FormattedMessage
                        id="unsubscribe.emailLabel"
                        defaultMessage="Email Address" />
                        <em>*</em>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      id="email"
                      required="required"
                      aria-required="true"
                      className="unsubscribe-input"
                      onChange={(event) => this.handleInputChange(event)}
                    />
                  </div>
                  <div className="unsubscribe-button-container">
                    <button
                      className="unsubscribe-button"
                      onClick={(event) => this.handleSubmit(event)}>
                        <FormattedMessage
                          id="unsubscribe.button"
                          defaultMessage="Unsubscribe" />
                    </button>
                  </div>
                  <div className="unsubscribe-missing-input-message-container">
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
    )
  }
}

export default Unsubscribe;
