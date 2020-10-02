class CollectionsAdapter { 
    constructor() { 
        this.baseUrl = 'http://localhost:3000/api/v1'
    }

    getCollections() { 
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}