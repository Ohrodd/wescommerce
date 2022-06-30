import logo from '../images/logo.png';

export function Login(){
    return(
        <div className="container contenidoLogin ">
            <form className="was-validated">
              <div className="mb-3">
                  <img src={logo} className="logo" alt="logo"/>
                  <input type="email" className="form-control is-invalid" id="validationPassword" placeholder="Required validated user" required/>
                  <div className="invalid-feedback">
                  Please enter your user.
                  </div>
              </div>
              
              <div className="mb-3">
                  <input type="password" className="form-control is-invalid" id="validationPassword" placeholder="Required validated password " required/>
                  <div className="invalid-feedback">
                  Please enter your password.
                  </div>
              </div>

              <div className="mb-3">
                  <button className="btn colorButton" type="submit">Submit form</button>
              </div>
            </form>
        </div>
    );
}


export function Register(){
    return(
        <div className="container contenidoRegister">
            <form className="was-validated">
              <div className="mb-3">
                  <img src={logo} className="logo" alt="logo"/>
                  <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Enter your name complete" required/>
                  <div className="invalid-feedback">
                  Please enter your name complete.
                  </div>
              </div>

              <div className="mb-3">
                  <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="Enter your lasname complete" required/>
                  <div className="invalid-feedback">
                  Please enter your lastame complete.
                  </div>
              </div>

              <div className="mb-3">
                  <input type="email" className="form-control is-invalid" id="validationTextarea" placeholder="Enter your email" required/>
                  <div className="invalid-feedback">
                  Please enter your email.
                  </div>
              </div>

              <div className="mb-3">
                  <input type="password" className="form-control is-invalid" id="validationTextarea" placeholder="Enter your password" required/>
                  <div className="invalid-feedback">
                  Please enter your password.
                  </div>
              </div>

              <div className="mb-3">
                  <input type="password" className="form-control is-invalid" id="validationTextarea" placeholder="Required to repeat your password" required/>
                  <div className="invalid-feedback">
                  Please repeat your password.
                  </div>
              </div>

              <div className="mb-3">
                  <select className="form-select" required aria-label="select example">
                  <option value="">Select one option</option>
                  <option value="1">Salesman</option>
                  <option value="2">Shopper</option>
                  </select>
                  <div className="invalid-feedback">Select validated opcion</div>
              </div>

              <div className="mb-3">
                <div className="mb-3">
                    <button className="btn colorButton" type="submit">Check in!</button>
                </div>
  
                <div className="mb-3">
                  <label htmlFor="validationInput" className="display-8">Do you have an account?</label>
                  <input type="submit" className="btn colorButton" id="validationTextarea" value="Log In"/>
                </div>
              </div>
            </form>
        </div>
    );
}