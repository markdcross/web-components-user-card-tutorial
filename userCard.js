// Create template
const template = document.createElement('template');
template.innerHTML = `
<style>
  .user-card {
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: darkorchid 5px solid;
  }

  .user-card img {
    width: 100%;
  }

  .user-card button {
    cursor: pointer;
    background: darkorchid;
    color: #fff;
    border: 0;
    border-radius: 5px;
  }

</style>
<div class="user-card">
  <img />
  <div>
    <h3></h3>
    <div class="info">
      <p>EMAIL</p>
      <p>PHONE</p>
    </div>
    <button id="toggle-info">Hide Info</button>
  </div>
</div>
`;

// Class needs to extend HTMLElement
class UserCard extends HTMLElement {
  // Constructor is called right away
  constructor() {
    // Calls the constructor for the class that we're extending
    super();

    // "This" pertains to the custom element
    // Establish shadow DOM
    this.attachShadow({ mode: 'open' });
    // Add our template to our Shadow Root
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }
}

// This defines the custom element
window.customElements.define('user-card', UserCard);
