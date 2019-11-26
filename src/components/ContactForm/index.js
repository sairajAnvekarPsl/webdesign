import React, { useState } from "react";
import "./style.css";

export default function ContactForm(props) {
  const [inputs, setInputs] = useState({});
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return (
    <div className="contact_form"> 
      <div className="contact_container" id="contactUs">
        <div className="image">
          <div className="modal__circle">
          {/* <img src="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png" class="modal__product" /> */}
          </div>
        </div>
        <div className="form_element">
          <form>
            <div className="field">
              <label>Name</label>
              <input className="form-control"
                type="text"
                name="name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label>Email Address</label>
              <input className="form-control"
                type="email"
                name="email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label>Message</label>

              <textarea
              className="form-control"
                id="message"
                name="message"
                placeholder="Write message.."
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button  className="button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
