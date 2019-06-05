class nSearchResults extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `<ion-app>
        <ion-toolbar>
          
          <ion-title>
              <img id="logo" src="https://cdn.glitch.com/3406bd51-10b1-43d0-8d36-bf8215e0f310%2FGroup%202%402x.png?1557847249071" >
          </ion-title>
            <ion-buttons slot="secondary">
               <ion-button>
                  <ion-icon slot="icon-only" name="search">
                  </ion-icon>
              </ion-button>
          </ion-buttons> 
            <ion-buttons slot="end">
                  <ion-menu-button auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
  
    <ion-menu side="start" menu-id="first">
      <ion-header>
        <ion-toolbar >
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>My Garden</ion-item>
          <ion-item>Water Reminder</ion-item>
          <ion-item>Plant Doctor</ion-item>
          <ion-item>Community Forum</ion-item>
          <ion-item>My Account</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
  
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
                        <img src="assets/Cactus_thumbnail.png" alt="Cactus">
                        <ion-text class="searchResultText">Cactus</ion-text>
                        </div>
                    </ion-col>
                    <ion-col size="6"> 
                           <div class="bgcolor">
                            <img src="assets/Agave_thumbnail.png" alt="Cactus">
                            <ion-text class="searchResultText">Agave</ion-text>
                            </div>
                    </ion-col>
                    </ion-col>
                    
                </ion-row>
                <ion-row>
                        <ion-col size="6"> 
                                <div class="bgcolor">
                            <img src="assets/Aloe_Thumbnail.png" alt="Cactus">
                           
                            <ion-text class="searchResultText">Aloe</ion-text>
                            </div>
                        </ion-col>
                    
                    </ion-row>
            </ion-grid>
         
            <div class="btndivsearchresult">
                    <ion-button >Try again</ion-button>   
                </div>

    </ion-content>  
  
  </ion-app>`;   
    }
   }
   
   customElements.define('nsearch-results', nSearchResults);