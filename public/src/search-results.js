class SearchResults extends HTMLElement{
    constructor(){
    super();
    }
    connectedCallback(){
    this.innerHTML = `
    <ion-content padding>
       <ion-grid>
          <ion-row>
             <ion-col size="12">
             </ion-col>
          </ion-row>
       </ion-grid>
       <h2>
          Confirm your plant
       </h2>
       <hr style="border: 1px solid;" />
       <h3 style="text-align:left ; margin:24px; color:black">We think we found a match. Please select a plant to confirm or ask us to try again.</h3>
       <hr style="border: 1px solid;" />

       <ion-grid>
          <ion-row>
             <ion-col size="6">
                <div class="bgcolor">
                    <a href="/#/plant-profile/cactus">
                   <img id="cactus" src="assets/Cactus_thumbnail.png">
                   <ion-row class="searchResultText">Cactus<ion-row/>
                   </div>
                </a>

             </ion-col>
             <ion-col size="6">
                   <div class="bgcolor">
                      <img src="assets/Agave_thumbnail.png" alt="Aloe">
                      <ion-row class="searchResultText">Agave</ion-row>
                   </div>
             </ion-col>

          </ion-row>
          <ion-col size="6">
          <div class="bgcolor">
                <img id="Aloe" src="assets/Aloe_Thumbnail.png">
                <ion-row class="searchResultText"> Aloe</ion-row>
                   </div>
             </ion-col>
             </ion-row>
             </ion-grid>

                <div class="fixed">
                   <ion-button href="/plant-search">Try Again</ion-button>
                </div>
    
    </ion-content>
    <terra-footer></terra-footer>
    `;   
    }
    }
    customElements.define('search-results', SearchResults);