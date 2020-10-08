class Items { 
    constructor() { 
        this.items = [] 
        this.adapter = new CollectionsAdapter() 
        //this.bindEventListeners() 
        this.fetchAndLoadItems() 
    }

    fetchAndLoadItems() { 
        this.adapter.getItems().then(items => { 
            console.log(items)
        })
    }
}