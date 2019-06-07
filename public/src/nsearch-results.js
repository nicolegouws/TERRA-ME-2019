class nSearchResults extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `<ion-content>
       

  
    <div class="ion-page" main>
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu - Basic</ion-title>
        </ion-toolbar>
      </ion-header>
  
      </div>



        <!-- Neil Code Start here-->


        <ion-content>
        <div >
            <h2>Confirm your plant</h2>
        </div>
        <hr style="border: 1px solid;" />

        <div>

        <p>We think we found a match. Please select a plant to confirm or ask us to try again.</p>
        </div>
        <hr style="border: 1px solid;" />

      
        <ion-grid>
                <ion-row>
                    <ion-col size="6"> 
                         <div class="bgcolor">
    
                         <a href="/#/plant-profile/cactus"> <img id="cactus" src="assets/Cactus_thumbnail.png">
                         <div class="searchResultText">
                             Cactus
                             <div/>
                         </div>
                         </a>
                    
                         
                    </ion-col>
                    <ion-col size="6"> 
                           <div class="bgcolor">
                            <img src="assets/Agave_thumbnail.png" alt="Agave">
                            <ion-text class="searchResultText">Agave</ion-text>
                            </div>
                    </ion-col>
                   
                    
                </ion-row>
                <ion-row>
                        <ion-col size="6"> 
                                <div class="bgcolor">
                            <img src="assets/Aloe_Thumbnail.png" alt="Aloe">
                           
                            <ion-text class="searchResultText">Aloe</ion-text>
                            </div>
                        </ion-col>
                    
                    </ion-row>
            </ion-grid>
         
            <div class="btndivsearchresult">
                    <ion-button href="/plant-search">Try again</ion-button>   
                </div>

    </ion-content>  
  `;   
    }
   }
   
   customElements.define('nsearch-results', nSearchResults);