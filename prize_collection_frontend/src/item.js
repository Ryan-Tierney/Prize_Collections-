class Item { 
    constructor(data) { 
        this.id = data.id 
        this.name = data.name 
        this.description = data.description 
        this.individual_worth = data.individual_worth 
        this.collection_id = data.collection_id 
    }
}

function addItem() { 
    const item = { 
        name: document.getElementById('name').value, 
        description: document.getElementById('description').value, 
        individual_worth: document.getElementById('individual_worth').value,
        collection_id: document.getElementById('collection_id').value, 
    }

    fetch("http://localhost:3000/api/v1/items", {
        method: 'POST', 
        body: JSON.stringify(item), 
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } 
    })
    .then(resp => resp.json())
    .then(item => { 
        clearCollectionsHtml() 
        getCollections() 
    });
} 
    
}