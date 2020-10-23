import Base from './../Base.js'

export default class error extends Base {

  css = `

  #backdrop {
    position: absolute;
    z-index: 999;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    padding: 0px; 
    margin: 0px; 
    padding-bottom: 80px;
    cursor: pointer;
}

  .container {
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
    background-image: linear-gradient(to right top, #eb5d5d, #e85b5b, #e45958, #e15656, #de5454);
    width: 35vw;
    border-radius: 3px;
  }

  ::slotted(div) {
      padding: 1em;
      text-align: center;
      color: #eeeeee;
  }

  #close-popup {
    color: #ffffff;
    display: inline-block;
    font-size: 2em;
    transform: rotate(45deg);
    position: absolute;
    right: 0.1em;
    top: -0.3em;
    cursor: pointer;
  }

  .title {
      margin: 1em 0.5em;
      color: #ffffff;
      font-weight: bold;
  }
` 

content = `
    <div id="backdrop" title="Click to close this form">
    </div>

    <div class="container">
        <span class="title"> Error </span>
        <span id="close-popup">+</span>
        <hr />
            <slot name="message"></slot>
        <hr />
    </div>
`
  constructor() {
    super()
    this.mount()

  }//End of constructor

  connectedCallback() {
      
    this._qs('#backdrop').addEventListener('click', () => {
        dispatchEvent(new Event('exit-popup'))
      })

    this._qs('#close-popup').addEventListener('click', () => {
        dispatchEvent(new Event('exit-popup'))
    })

  }

}// End of Class

window.customElements.define('pop-up', error)