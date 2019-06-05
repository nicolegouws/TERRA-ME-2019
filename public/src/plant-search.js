class PlantSearch extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `       
        <ion-content>
        <h2>
        Search for a plant 
        </h2>
  
                  <hr style="border: 1px solid;" />
                  <h3 class="h3black">Search our library</h3>
                  <div class="topnav">

                  <input type="text" placeholder="Cactus">
                  </div>
                  <img id="placeholder" src="/assets/PhotoUpload.png" />
  
                  <div class="fixed">
                      <ion-button>Take a Picture</ion-button>
                  </div>

                  
   
        
            

        </ion-content>
        <terra-footer></terra-footer>
                  `;    
    }
   }
   
   customElements.define('plant-search', PlantSearch);