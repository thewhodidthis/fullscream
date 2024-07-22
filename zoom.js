import fullscream from "./main.js"

export default class Zoom extends HTMLElement {
  constructor() {
    super()

    const template = document.createRange().createContextualFragment(`
      <style>
        :host {
          border: 1px solid transparent;
          border-width: 0 0 0.5rem 0.5rem;
          box-sizing: content-box;
          color: inherit;
          cursor: pointer;
          height: 2rem;
          line-height: 0;
          position: absolute;
          right: 0;
          text-align: right;
          text-decoration: none;
          top: 0;
          width: 2rem;
        }
        :host::before {
          content: "←→";
          display: block;
          font-family: verdana, sans-serif;
          font-weight: bold;
          transform: rotate(-45deg) translate(-50%, -50%);
          transform-origin: right top;
          white-space: nowrap;
        }
        :host(.on) {
          border-width: 0.75rem;
        }
        :host(.on)::before {
          content: "→←";
          font-size: 1.3125rem;
          font-weight: normal;
        }
      </style>`)

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template)
  }
  connectedCallback() {
    if (this.isConnected && this.parentNode) {
      this.addEventListener("click", () => {
        fullscream(this.parentNode)
      })

      this.parentNode.onfullscreenchange = this.parentNode.onwebkitfullscreenchange = () => {
        this.parentNode.toggleAttribute("fullscream")
        this.classList.toggle("on")
      }
    }
  }
}
