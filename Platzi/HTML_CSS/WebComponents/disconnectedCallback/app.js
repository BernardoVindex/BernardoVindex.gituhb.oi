class MyCostumeElement extends HTMLElement {
  constructor(){
      super()
      console.log("Hola desde el constructor")
  }

  connectedCallback() {
      console.log('Hola desde el DOM')
  }

  disconnectedCallback(){
      console.log('Adios desde del DOM')
  }
}

customElements.define('my-costume-element', MyCostumeElement)

document.querySelector('my-costume-element').remove()