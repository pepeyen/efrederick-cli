import React, { Component } from 'react';
import '../../css/index.scss';
import '../../css/contanctMe.scss';
class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render () {
    const { status } = this.state;
    return (
      <React.Fragment>     
        <div className = "cli__info">Running: <div className = "cli__source"> Projects.sh</div></div><br></br>
        <div className = "cli__rtp-connection">
          <div className = "cli__help">Get in touch with <div className = "cli__message-sender-reference">eFrederick</div></div><br></br>
          <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mgennyyw"
          method="POST"
          >
            <div className = "cli__rtp-input">
              <label htmlFor = "email">Email</label>
              <input className = "cli__rtp-email" type="email" name="email" />
            </div>
            <div className = "cli__rtp-input">
              <label htmlFor = "message">Message</label>
              <textarea className = "cli__rtp-text" name="message" />
            </div>
            <div className = "cli__rtp-submit">
              {status === "SUCCESS" ? <p>Thanks!</p> : <button className = "cli__rtp-button">Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactMe;