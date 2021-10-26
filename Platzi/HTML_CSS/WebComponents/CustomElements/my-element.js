const template = document.createElement("div")
template.innerHTML =  `
<style>
    .texto {
        color: red;
    }

    p {
        color: blue;
    }
</style>
<p class="texto">Hola munedo 2</p>
<p>Textoejemplo para la clase</p>
`

class myElement extends HTMLElement {
    constructor() {
        super()
        console.log("Hola mono")

        this.p = document.createElement("p")
    }
    connectedCallback() {
        this.p.textContent = "Hola morro"
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

customElements.define("my-element", myElement)