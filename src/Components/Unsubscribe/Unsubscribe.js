import { Component, Fragment } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { deleteSubscriber } from '../../apiCalls.js';
import './Unsubscribe.css';
import success from '../../Assets/success.png';
import fail from '../../Assets/fail.png';

class Unsubscribe extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      agree_to_unsubscribe: false,
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

  validateAcknowledgement = () => {
    return this.state.agree_to_unsubscribe;
  }

  displayMissingInputMessage = () => {
    if (!this.validateEmail()) {
      return <p className="missing-input-message">Please enter a valid email.</p>;
    }
    if (!this.validateAcknowledgement() ) {
      return <p className="missing-input-message">Are you sure you want to unsubscribe?</p>;
    }
  }

  handleCheckboxInput = () => {
    const updatedValue = !this.state.agree_to_unsubscribe;
    return this.setState({ agree_to_unsubscribe: updatedValue });
  }

  handleInputChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = (event) => {
    if (!this.validateEmail(event.target.value)) {
      this.setState({ displayMissingInput: true })
    } else {
      deleteSubscriber()
        .then(response => {
          this.setState({ isSubmitting: true });
          if(!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}.  We can't process your request right now, please try again.`)
          }
          return response.json();
        })
        .then(message => {
          this.setState({
            successMessage: message.success,
            failMessage: message.error,
            error: null,
            isSubmitting: false
          })
        })
        .catch(error => {
          this.setState({
            serverMessage: null,
            error: error.message,
            isSubmitting: false
          })
        })

      this.setState({ email: '' });
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

  render = () => {
    return (
      <>
        {this.state.isSubmitting ? <Loading /> :
          <>
            {this.state.error ? <Error error={this.state.error} /> :
              <form className="form-container">
                <div className="form-header-container">
                  <h2 className="form-header">Unsubscribe from Election Reminders</h2>
                </div>
                <div className="form-content-container">
                  <div className="label-input-container">
                    <input
                      type="checkbox"
                      name="agree-to-unsubscribe"
                      id="agree-to-unsubscribe"
                      value={this.state.agree_to_unsubscribe}
                      required="required"
                      aria-required="true"
                      className="input-checkbox"
                      checked={this.state.agree_to_unsubscribe}
                      onChange={() => this.handleCheckboxInput()} />
                    <label
                      className="agree-to-unsubscribe-checkbox label"
                      htmlFor="agree-to-unsubscribe">
                        I no longer wish to receive election notifications <em>*</em>
                    </label>
                  </div>
                  <div className="label-input-container email-label">
                    <label className="label" htmlFor="email">Email Address<em>*</em></label>
                    <input
                      type="text"
                      name="email"
                      placeholder="please enter your email"
                      value={this.state.email}
                      id="email"
                      required="required"
                      aria-required="true"
                      className="input"
                      onChange={(event) => this.handleInputChange(event)}
                    />
                  </div>
                  <div className="unsubscribe-button-container">
                    <button
                      className="unsubscribe-button"
                      onClick={(event) => this.handleSubmit(event)}>
                        Unsubscribe
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
    )
  }
}

export default Unsubscribe;
