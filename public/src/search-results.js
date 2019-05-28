class SearchResults extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `
        <ion-content>
        <h2>Search for a plant</h2>

        <hr style="border: 1px solid;" />
        <ion-searchbar></ion-searchbar>
        <hr style="border: 1px solid;" />

        <h3> Search for a plant </h3>
        <ion-grid>
            <ion-row>

                <ion-col>
                    <ion-card>
                        <img src="/Users/nicolegouws/TERRA-ME-2019/public/assets/Cactus1.jpg">

                        <ion-card-header>
                            <ion-card-title>Cactus</ion-card-title>
                        </ion-card-header>

                        <ion-fab vertical="center" horizontal="center" slot="fixed">
                            <ion-fab-button>
                                <ion-icon name="more"></ion-icon>
                            </ion-fab-button>
                            <ion-fab-list side="top">
                                <div class="dropdown">
                                    <span><ion-icon name="more"></ion-icon></span>
                                    <div class="dropdown-content">
                                        <p><ion-icon name="rose"></ion-icon>Add to my garden</p>
                                        <p><ion-icon name="book"></ion-icon>Read more</p>
                                    </div>
                                </div>
                        </ion-fab>

                    </ion-card>
                </ion-col>

                <ion-col>
                    <ion-card>
                        <img src="/Users/nicolegouws/TERRA-ME-2019/public/assets/burrostailbasket-1200x1200.jpg">
                        <ion-card-header>
                            <ion-card-title>Burros Tail
                                <ion-icon name="more"></ion-icon>
                            </ion-card-title>
                        </ion-card-header>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-grid>
            <ion-row>

                <ion-col>
                    <ion-card>
                        <img src="/Users/nicolegouws/TERRA-ME-2019/public/assets/Aloe1.jpg">
                        <ion-card-header>
                            <ion-card-title>Aloe
                                <ion-icon name="more"></ion-icon>
                            </ion-card-title>
                        </ion-card-header>
                    </ion-card>
                </ion-col>

                <ion-col>
                    <ion-card>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-grid>
            <ion-row>

                <ion-col>
                    <ion-card>
                        <img src="/Users/nicolegouws/TERRA-ME-2019/public/assets/bi-color-hens-chicks_35643_zoom0.jpg">
                        <ion-card-header>
                            <ion-card-title>Color Hens Chicks
                                <ion-icon name="more"></ion-icon>
                            </ion-card-title>
                        </ion-card-header>
                    </ion-card>
        </ion-content>
                    `;   
    }
   }
   
   customElements.define('search-results', SearchResults);