class SearchResults extends HTMLElement{
    constructor(){
     super();
    }
    connectedCallback(){
        this.innerHTML = `Search Results`;   
    }
   }
   
   customElements.define('search-results', SearchResults);