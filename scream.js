import fullscream from "./main.js"

export default class Scream extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(document.createElement("slot"))
  }
  connectedCallback() {
    if (this.isConnected && this.firstElementChild) {
      this.onclick = () => {
        fullscream(this.firstElementChild)
      }

      this.onfullscreenchange = this.onwebkitfullscreenchange = () => {
        this.firstElementChild.toggleAttribute("fullscream")
      }
    }
  }
}
