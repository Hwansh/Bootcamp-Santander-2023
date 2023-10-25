class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // BASE DO COMPONENT
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //ESTILIZAR O COMPONENT
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `
    //ENVIAR PARA A SHADOW
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);