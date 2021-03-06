import Base from "../Base.js";
import CSS from "./payment-received.css.js";

export default class PaymentCashOut extends Base {
  css = CSS;

  leftNav = `
      <div class="column left-nav-container">
        <div class="column left-nav">
          <div><a href="/payment/received">Received Payments</a></div>
          <div><a href="/payment/paid">Paying History</a></div>
          <div><a href="/payment/all">All payments</a></div>
          <div class="active"><a href="/payment/cashout">Cash out</a></div>
          <div><a href="/payment/bank-account">Bank Account Details</a></div>
        </div>
      </div>
  `;

  tr = `
      <tr>
          <td>91908091830</td>
          <td>Rs. 27, 000</td>
          <td>Bank Account <a>912674</a></td>
          <td>2020-10-12 12:45:23</td>
          <td>🟢 Successfull</td>
      </tr>
      <tr>
          <td>91908091830</td>
          <td>Rs. 27, 000</td>
          <td>Bank Account <a>912674</a></td>
          <td>2020-10-12 12:45:23</td>
          <td>🟠 Pending</td>
      </tr>
      <tr>
          <td>91908091830</td>
          <td>Rs. 27, 000</td>
          <td>Bank Account <a>912674</a></td>
          <td>2020-10-12 12:45:23</td>
          <td>🔴 Rejected</td>
      </tr>
    `;

  content = `
    <div class="container row">
      ${this.leftNav}
      <div class="column content">
          <div class="received">
            <table id="received-table">
                <thead>
                    <tr>
                        <th>Reference No.</th>
                        <th>Amount</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="received-table-body">
                    ${this.tr}
                    ${this.tr}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  `;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  connectedCallback() {} //End of connected callback
}

const elementName = "payment-cashout";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, PaymentCashOut)
  : null;
