import React, {useState, useHistory} from "react";
import "../components/index.css";

function Contact() {
    let history = useHistory();
    var formDataStore = [];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",

    })

    const CreateFormInput = event => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      })
    }

    const handleFormSubmit = e => {
      e.preventDefault();
      useState.setFormData(formData).then(res => {
        console.log(res.data)
        history.push(formDataStore);
        setFormData({
        name: "",
        email: "",
        message: "",
        })
      }).then(data => {
            return "mailto:cssndrchmbrln25@gmail.com" + data
        }
      )}


    return (
      <section>
        <div className="container ">
          <div className="card contactForm m-5 p-5">
            <h2 className="cardName">
              Contact Me
            </h2>
            <div className="Contact">
              <form
                id="contact-form"
                onSubmit={handleFormSubmit(CreateFormInput(setFormData))}
                method="POST"
              >
                <div className="row">
                  <div className="form-row ml-1 col-12 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                      placeholder="Jane Doe"
                    ></input>
                  </div>

                  <div className="form-group ml-1 col-12 row">
                    <label id="user_email" htmlFor="inputEmail">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                      className="form-control"
                      placeholder="Enter email"
                    ></input>
                  </div>

                  <div className="form-group ml-1 col-12 row">
                    <label htmlFor="message">Message</label>
                    <input
                    type="text"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                    className="form-control mb-2"></input>
                  </div>

                  <div class="form-row ml-1 col-sm-10 row">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Contact;
