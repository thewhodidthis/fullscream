import fullscream from "./main.js"

export default class Scream extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(document.createElement("slot"))
  }
  connectedCallback() {
    if (this.isConnected && this.firstElementChild) {
      // Safe to skip removal, because extra event listeners
      // are discarded when identical.
      this.addEventListener("click", () => {
        fullscream(this.firstElementChild)
      })
    }
  }
}
