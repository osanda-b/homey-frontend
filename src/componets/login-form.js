import Base from './Base.js'

const style = `
    .form {
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform : translate(-50%, -50%);

        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 0.5em 2em;
        padding-bottom: 3em;
    }

    h2 {
        text-align: center;
        margin-bottom: 0;
    }

    #backdrop {
        position: absolute;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        padding: 0px; 
        margin: 0px; 
        cursor: pointer;
    }

    input {
        outline: none;
    }

    label {
        display: block;
    }

    .hr-separator {
        width: 100%;
        height: 2px;
        background-color: #eeeeee;
        margin: 2em 0;
    }

    button {
        width: 100%;
    }

    .google {
        background-color: #eeeeee;
        color: blue;
    }

    .facebook {
        background-color: blue;
        color: #eeeeee;
    }

`
const content = `
    <div id="backdrop" title="Click to close this form">
    </div>

    <div class="form">
        <h2>Login</h2>
        <img src="" />

        <div class="hr-separator">
        </div>

        <div class="container">
            <div class="row">
                <label for="email">Email</label>
                <input id="email" name="email" title="Email : someone@somthing.com" />
            </div>
            <div class="row">
                <label for="password">Password</label>
                <input id="password" name="password" title= "Password : pass@123" />
            </div>
            <div class="row">
                <input type="checkbox" id="remember"> Remember me
            </div>

            <div class="hr-separator">
            </div>
            
            <div class="row">
                <button class="google">Google</button>
            </div>
            <div class="row">
                <button class="facebook">Facebook</button>
            </div>

        </div>
    </div>
    
`

export default class LoginForm extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('#backdrop')
            .addEventListener('click', () => {
                dispatchEvent(new Event('exit-login-form'))
            })
    }
}
window.customElements.define('login-form', LoginForm)
