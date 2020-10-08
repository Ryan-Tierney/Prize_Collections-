class Collections { 
    constructor() { 
        this.collections = [] 
        this.adapter = new CollectionsAdapter() 
        //this.bindEventListeners() 
        this.fetchAndLoadCollections() 
    }

    fetchAndLoadCollections() { 
        this.adapter.getCollections().then(collections => { 
            console.log(collections)
        })
    }
}