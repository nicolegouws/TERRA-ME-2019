class SearchResults extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `
        <ion-content>
        <ion-app>
        <h2>
    Confirm your plant
  </h2>
        <hr style="border: 1px solid;" />
        <h3 style="text-align:left ; margin:24px; color:black">We think we found a match. Please select a plant to confirm or ask us to try again.</h3>
        <hr style="border: 1px solid;" />
        <ion-grid>
            <ion-row align-items-start>
                <ion-col>
                    <div>
                        <img id="cactus" src="/Users/nicolegouws/TERRA-ME-2019/public/assets/Cactus_thumbnail.png">
                        <div class="searchResultText">
                            Cactus
                            <div/>
                        </div>
                    </div>
                </ion-col>
                <ion-col>
                    <div>
                        <img id="agave" src="assets/Agave_thumbnail.png">
                        <div class="searchResultText">
                            Agave
                            <div/>
                        </div>
                    </div>
                </ion-col>
            </ion-row>
            <ion-row align-items-start>
                <ion-col>
                    <div>
                        <img id="Aloe" src="/Users/nicolegouws/TERRA-ME-2019/public/assets/Aloe_Thumbnail.png">
                        <div class="searchResultText">
                            Aloe
                            <div/>
                        </div>
                    </div>
                </ion-col>
                <ion-col>
                    <div class="fixed">
                        <ion-button>Add a plant </ion-button>
                    </div>

                </ion-col>
            </ion-row>

        </ion-grid>
    </ion-app>
        </ion-content>
        <terra-footer></terra-footer>
                    `;   
    }
   }
   
   customElements.define('search-results', SearchResults);