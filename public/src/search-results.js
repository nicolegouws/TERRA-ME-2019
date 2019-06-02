class SearchResults extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `
        <ion-content>
        <h2>
    Plant search results
  </h2>
<hr style="border: 1px solid;" />
<ion-searchbar animated></ion-searchbar>
<h3 style="text-align:left ; margin:24px; color:black">Search results for: “Cactus”</h3>
<hr style="border: 1px solid;" />

<div>
    <img id="searchResulImages" src="assets/agave.jpg">
    <div class="searchResultText">
        Agave
        <ion-fab class="readMore">
            <ion-fab-button>
                <ion-icon name="more"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="top">
                <div class="dropdown">
                    <span><ion-icon name="more"></ion-icon></span>
                    <div class="dropdown-content">
                        <p>
                            <ion-icon name="rose"></ion-icon>Add to my garden</p>
                        <p>
                            <ion-icon name="book"></ion-icon>Read more</p>
                    </div>
                </div>
        </ion-fab>
    </div>
</div>
        </ion-content>
        <terra-footer></terra-footer>
                    `;   
    }
   }
   
   customElements.define('search-results', SearchResults);