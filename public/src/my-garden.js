class MyGarden extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `My Garden`;    
    }
   }
   customElements.define('my-garden', MyGarden);