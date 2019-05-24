class PlantSearch extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `Plant Search`;    
    }
   }
   
   customElements.define('plant-search', PlantSearch);