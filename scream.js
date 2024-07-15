import fullscream from "./main.js"

export default class Scream extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(document.createElement("slot"))
  }
  connectedCallback() {
    const target = this.firstElementChild

    if (this.isConnected && target) {
      this.onclick = () => {
        fullscream(target)
      }

      target.onfullscreenchange = target.onwebkitfullscreenchange = () => {
        target.toggleAttribute("fullscream")
      }
    }
  }
}
