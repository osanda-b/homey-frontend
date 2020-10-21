import Base from './../Base.js'

export default class LoginForm extends Base {

  css = `
    .form {
        z-index: 2;
        position: absolute;
        display: flex;
        flex-direction: column;
        text-align: center;
        top: 50%;
        left: 50%;
        transform : translate(-50%, -50%);
        width: 25%;
        margin: 1em auto;
        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 0.5em 2em;
        padding-bottom: 3em;
        border-radius: 1px;        
    }

    .row {
        display: inherit;
    }

    h2 {
        margin: 1em;
    }

    #backdrop {
        position: absolute;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        padding: 0px; 
        margin: 0px; 
        padding-bottom: 80px;
        cursor: pointer;
    }

    input {
        outline: none;
        width: 80%;
        background-color: transparent;
        border: none;
        border-bottom: solid 1.25px #cccccc;
        margin-bottom: 2.5em;
        color: #ffffff;
    }
    
    input:focus,
    input:valid {
        border-color: #38ee17;
    }
    
    input[type=checkbox] {
        display: inline;
    }

    label {
        position: absolute;
        pointer-events: none;
        left: 5.5vw;
        transition: all 0.2s;
    }

    input:focus + label,
    input:valid + label {
        transform: translateY(-1.5em);
        font-size: 0.8em;
    }

    .remember {
        display: inline-grid;
        grid-template-columns: auto auto;
    }

    .remember > input {
        margin-right: 2vw;
    }

    .remember > span {
        margin-left: 1vw;
    }

    .hr-separator {
        width: 100%;
        height: 2px;
        background-color: #eeeeee;
        margin: 2em 0;
    }

    .remember input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        height: 20px;
        width: 20px;
        background-color:transparent;
        border-radius: 50%;
        border: solid 1px #ffffff;
        transition: all 1s;
    }

    .remember:hover input ~ .checkmark {
        background-color: #ccffcc;
    }

    .remember input:checked ~ .checkmark {
        background-color: #32be8f;
    }

    .checkmark:after {
        content: "";
        display: none;
        margin: 2px 0 0 6px;
    }

    .remember input:checked ~ .checkmark:after {
        display: block;
    }

    .remember .checkmark:after {
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    button {
        width: 100%;
        margin-bottom: 25px;

        display: block;
        width: 100%;
        height: 50px;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        background-size: 200%;
        font-size: 0.8rem;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        margin: 1rem 0;
        cursor: pointer;
        transition: 1s;
    }
        
    button:hover{
        background-position: right;
        color: black;
    }

    .google {
        color: blue;
        background-image: url("../assets/img/google.svg");
    }
    

    .facebook {
        color: red;
        background-image: url("../assets/img/facebook.svg");
    }

    a {
        cursor: pointer;
        width: 100%;
        text-align: right;
        text-decoration: none;
        color: #999;
        font-size: 0.9rem;
        transition: .3s;
    }

    a:hover{
        color: #F4D03F;
    }

    @media screen and (max-width: 1200px) {
        .form {
            width: 30%;
        }
      }

    @media screen and (max-width: 992px) {
        .form {
            width: 40%;
        }
      }

    @media screen and (max-width: 768px) {
        .form {
            width: 80%;
        }
      }

`
content = `
    <div id="backdrop" title="Click to close this form">
    </div>

    <div class="form">
        <h2>Login</h2>
        <div class="container">
            <div class="row">
                <input type="text" id="email" name="email" title="Email : someone@somthing.com" required />
                <label for="email" id="email-label">Email</label>
            </div>
            <div class="row">
                <input type="password" id="password" name="password" title= "Password : pass@123" required />
                <label for="password" id="password-label">Password</label>
            </div>
            <div class="row">
                <div class="remember">
                    <input type="checkbox" id="remember">
                    <span class="checkmark"></span>
                    <span>Remember me</span>
                </div>
            </div>
            <div class="row">
                <button id="login"> Login </button>
            </div>
            <div class="row">
                <a title="Reset Password" id="reset-password">Forgot Password ? </a>
                |
                <a title="Create new Account" id="signup"> Sign Up </a>
            </div>

            <div class="hr-separator">
            </div>

            <div class="row">
                <span>or</span>
            </div>
            
            <div class="row">
                <button class="google"><img class="img2" src="../assets/img/google.svg">Continue with Google</button>
            </div>
            <div class="row">
                <button class="facebook"><img class="img2" src="../assets/img/facebook.svg">Continue with Facebook</button>
            </div>

        </div>
    </div>

`
  constructor() {
    super()
    this.mount()

    if(!(this.state.exit == null || this.state.exit)) {
        dispatchEvent(new Event('exit-form'))
        this.state.exit = true
    }
  }//End of constructor

  inputOnFocus(input) {
    this._qs('#' + input).addEventListener('focus', () => this._qs('#' + input + '-label').classList.add('label-onfocus'))
  }

  connectedCallback() {

    this.inputOnFocus('email')
    this.inputOnFocus('password')

    this._qs('#backdrop').addEventListener('click', () => {
      dispatchEvent(new Event('exit-form'))
      this.setPath('/')
    })

    this._qs('#signup').addEventListener('click', () => dispatchEvent(new Event('signup-form')))

    this._qs('#reset-password').addEventListener('click', () => dispatchEvent(new Event('reset-password-form')))
    

    this._qs('#login').addEventListener('click', () => {
      // API call for login
      let userName = this._qs('#email').value
      const password = this._qs('#password').value
      userName == '' ? userName = "invlid" : null
      fetch('http://homey-api.atwebpages.com/login/' + userName + '/' + password, {
        method: 'POST',
      })
        .then((res) => {
            if(res.status == '201') return res.json()
            else throw res
        })
        .then((res) => {
            if (res.data.login === 'true') {
              localStorage.login = 'true'
              localStorage.token = res.data.token
              dispatchEvent(new Event('login-success'))
            } else {
              console.log('login failed function')
              dispatchEvent(new Event('login-failed'))
            }
            return new Promise((resolve, reject)=>reject())
        })
        .catch(err => {
            if(err.status== '404') return err.json()
            console.log("Error Code : " + err)
            dispatchEvent(new Event('login-failed'))
        })
        .then(res=> {
            localStorage.login = false
            localStorage.token = ''
            console.log(res.data.message)
        })
        .catch(err=>{
            console.log("Error Code : " + err)
            dispatchEvent(new Event('login-failed'))
        })
    })
  }



}

window.customElements.define('login-form', LoginForm)
