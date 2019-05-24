class PlantProfile extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `Plant Profile`;      
    }
   }
   
   customElements.define('plant-profile', PlantProfile);