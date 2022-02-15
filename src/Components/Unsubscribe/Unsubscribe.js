import { Component, Fragment } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { deleteSubscriber } from '../../apiCalls.js';
import './Unsubscribe.css';

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

  handleInputChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = (event) => {
    if (!validateEmail(event.target.value)) {
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

  render = () => {
    return (
      <>
        {this.state.isSubmitting ? <Loading /> :
          <>
            {this.state.error ? <Error /> :
              <>
              <form>
                <label
                  className="no-more-emails-label"
                  htmlFor="no-more-emails">
                    I no longer wish to receive election notifications.
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="please enter subscriber's email address"
                  value={this.state.email}
                  id="email"
                  required="required"
                  aria-required="true"
                  className="input"
                  onChange={(event) => this.handleInputChange(event)}
                />
              </form>
              <button
                className="unsubscribe-button"
                onClick={(event) => this.handleSubmit(event)}>
                  Unsubscribe
              </button>
              {this.state.displayMissingInput && <>Please enter a valid email address.</>}
              </>
            }
          </>
        }
      </>
    )
  }
}
