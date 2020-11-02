import Base from './../Base.js'


export default class UserComp extends Base {

  css = `
    .container {
      display: inline-flex;
      box-shadow: -1px -1px 5px 0px rgba(0,21,62,0.8);
      margin: 1rem;
      cursor: pointer;
      transition: all 0.5s;
      background-color: rgba(255,255,255, 0.9);
      margin-top: 5rem;
    }

    .container div {
      padding: 0;
    } 

    ::slotted(img) {
      width: 20vw;
      height: 30vw;
    }

    ::slotted(h1) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      width: 20vw;
      font-size: 4vw;
    }

    .container:hover {
      box-shadow: -1px -1px 4px 3px rgba(0,62,21,0.8);
    }

  @media screen and (max-width: 1200px) {
    .container {
      margin-top: 4rem;
    }
  }

  @media screen and (max-width: 992px) {
    .container {
      margin-top: 3rem;
    }

    ::slotted(h1) {
      margin: 3rem 0.1rem 0 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 2rem;
    }
    
    ::slotted(img) {
      width: 30vw;
      height: 40vw;
    }
   
  }

  @media screen and (max-width: 512px) {
    .container {
      margin-top: 1rem;
    }

    ::slotted(h1) {
      margin: 1rem 0.1rem 0 1rem;
    }
  }
  
  `
  content = `
          <div class='container'>
              <slot name="image" ></slot>
              <slot name="title" ></slot>
          </div>
  `
  constructor() {
    super()
    this.mount()

    this.state.mirror = this.getAttribute('mirror') === 'true' ? true : false
    if (this.state.mirror) {
      this._qs('.container').innerHTML = `
            <slot name="title" ></slot>
            <slot name="image" ></slot>
            `
    }

  }// End of constructor

  connectedCallback() {
    // Add Event Listern for user-comp then load properties-component
    this._qs('.container').addEventListener('click', () => {
      dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/` + this.getAttribute('route'), comp: `property/${this.getAttribute('route')}`, compName: this.getAttribute('route') } }))
    })

  }//End of connected callbacks


}//End of class

window.customElements.define('user-comp', UserComp)
