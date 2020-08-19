import Nav from './componets/navigation-bar.js'
import Comp from './componets/footer.js'
import UserComp from './componets/user-comp.js'

import Base from './componets/Base.js'

const style = `
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .container > user-comp {
        padding: 1em;
    }

`
const content = `
<navigation-bar></navigation-bar>
    <div class="container">
        <user-comp mirror="true">
            <img slot="image" src="https://www.zricks.com/img/UpdatesBlog/44b94c9d-ab13-401d-9e5b-86a00f9da6496%20Must%20Follow%20Tips%20to%20Market%20a%20Luxury%20Home.jpg" alt="Image"></img>
            <h1 slot="title">Rent or Lease your own property</h1>
        </user-comp>
        <user-comp mirror="true">
            <img slot="image" src="https://s3.amazonaws.com/clients.granalacantadvertiser.images/wp-content/uploads/2017/06/14072232/2236775_2_O.jpg" alt="Image"></img>
            <h1 slot="title">Looking for a place</h1>
        </user-comp>
    </div>
<footer-c></footer-c>
`

export default class UI extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
    clicked = () => {
        console.log('clicked')
    }
}
window.customElements.define('ui-c', UI)

document.querySelector('#root').innerHTML = '<ui-c></ui-c>'
