class MiFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /* html */
        `Copyright &copy; Abril Georgina Barrera Estrada`;
    }
  }
  customElements.define("mi-footer", MiFooter);
