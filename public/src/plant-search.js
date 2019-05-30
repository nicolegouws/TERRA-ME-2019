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
                  <ion-searchbar></ion-searchbar>
  
                  <img id="placeholder" src="/Users/nicolegouws/TERRA-ME-2019/public/assets/PhotoUpload.png" />
  
                  <div class="fixed">
                      <ion-button>Take a Picture</ion-button>
                  </div>
        </ion-content>
        <terra-footer></terra-footer>
                  `;    
    }
   }
   
   customElements.define('plant-search', PlantSearch);