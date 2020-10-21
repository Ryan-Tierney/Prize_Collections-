const collectionFormFields = `
    <label><strong>Name: </strong></label><br/>
    <input type="text" id="name"><br/>
    <label><strong>Worth: </strong></label><br/>
    <input type="text" id="worth"><br/>
    <input type="hidden" id="collectionId">
    <label><strong>Description: </strong></label><br/>
    <input type="text" id="description"><br/><br/>
    <input type="submit" style="background-color:orange" value="Create Collection">`

class Collection { 
    constructor(data) {
        this.id = data.id 
        this.name = data.name 
        this.description = data.description 
        this.worth = data.worth 
    }

    static newCollectionForm() { 
        let newCollectionFormDiv = document.getElementById('collection_form')
        newCollectionFormDiv.innerHTML = `
        <form onsubmit="createCollection(); return false;">` +
        collectionFormFields
    }

    static editCollectionForm() { 
        let editCollectionFormDiv = document.getElementById('collection-form')
        editCollectionFormDiv.innerHTML = `
        <form onsubmit="createCollection(); return false;">` +
        collectionFormFields + 
        `<input type="submit" value="Update Info"> 
        </form> 
        <br/>`
    }
}

function getCollections() { 
    fetch("http://localhost:3000/api/v1/collections")
    .then(resp => resp.json())
    .then(data => { 
        renderCollectionsHtml(data)
        addCollectionsClickListeners() 
        addItemsClickListeners()
    })
}

function createCollection() { 
    const collection = { 
        name: document.getElementById('name').value, 
        description: document.getElementById('description').value, 
        worth: document.getElementById('worth').value,
    }

    fetch("http://localhost:3000/api/v1/collections", { 
        method: 'POST', 
        body: JSON.stringify(collection), 
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json() )
    .then(collection => {  
        getCollections() 
        Collection.newCollectionForm()
    }); 
}

function showMoreInfo() { 
    console.log("this", this) 
    console.log(this.parentElement.querySelector('.additional-info'))
    toggleHideDisplay(this.parentElement.querySelector('.additional-info'))
}

function updateCollection() { 
    let collectionId = this.item.target.collectionId.value 

    const collection = {
        name: document.getElementById('name').value, 
        description: document.getElementById('description').value, 
        worth: document.getElementById('worth').value, 
    }

    fetch("http://localhost:3000/api/v1/collections", { 
        method: 'POST', 
        body: JSON.stringify(collection), 
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json() )
    .then(collection => { 
        clearCollectionsHtml() 
        getCollections() 
        Collection.newCollectionForm()
    }); 
}

function editCollection() { 
    let collectionId = this.parentElement.getAttribute('data-collection-id')

    fetch(`http://localhost:3000/api/v1/collections/${collectionId}`)
    .then(resp => resp/json())
    .then(data => { 
        Collection.editCollectionForm() 
        let collectionForm = document.getElementById('collection-form')
        collectionForm.querySelector('#name').value = data.name 
        collectionForm.querySelector('#collectionId').value = data.collectionId
        collectionForm.querySelector('#description').value = data.description
        collectionForm.querySelector('#worth').value = data.worth
    })
}

function deleteCollection() { 
    let collectionId = this.parentElement.getAttribute('data-collection-id')

    fetch(`http://localhost:3000/api/v1/collection/${collectionId}`, { 
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(json => { 
        let selectedCollection = document.querySelector(`.card[data-collection-id="${collectionId}"]`)
        selectedCollection.remove() 
    })
}

function addCollectionsClickListeners() { 
    document.querySelectorAll('.collection-name').forEach(element => { 
        element.addEventListener("click", showMoreInfo)
    })

    document.querySelectorAll('.edit-collection-button').forEach(element => { 
        element.addEventListener("click", editCollection)
    })

    document.querySelectorAll('.delete-collection-button').forEach(element => { 
        element.addEventListener("click", deleteCollection)
    })
}

 Collection.prototype.collectionItemsHtml = function() { 
    
    let collectionItems = this.items.map(item => { 

    return (`
    <div class="card" item-id="${item.id}">
    <strong>Name: </strong>${item.name} <br/>
    <strong>Description: </strong>${item.description} <br/>
    <strong>Individual Worth: </strong>${item.individual_worth} <br/>
    
    <button class="edit-item-button" style="background-color:orange">Edit Item</button>
    <button class="delete-item-button" style="background-color:orange">Delete Item</button>
    </div>
        `)
    }).join('')

    return (collectionItems)
} 

Collection.prototype.collectionHtml = function() { 

    return `<div class="card" data-collection-id="${this.id}">
        <button class="view-items-collection-button" style="background-color:orange>View Items</button>
        <button class="edit-collection-button" style="background-color:orange">Edit Collection</button>
        <button class="delete-collection-button" style="background-color:orange">Delete Collection</button>
        <br/><br/>
        <strong class="collection-name">${this.name}</strong> <br/>
        
        <div class="additional-info" style="display:none">
        <strong>Description: </strong>${this.description}<br/>
        <strong>Worth: </strong>${this.worth}<br/>
        </div>

        </div>`
}

Collection.prototype.addItemButton = function() { 

    let addNewItemButton = document.createElement('button')
    addNewItemButton.className = 'add-item-button'
    addNewItemButton.id = this.id 
    addNewItemButton.innerText = "Add Item"
    addNewItemButton.style.backgroundColor = "Orange"
} 


function renderCollectionsHtml(data) { 
    let collectionsIndex = document.getElementById("collections-list")

    data.forEach((collection) => { 
        let itemsIndexHtml = document.createElement('div')
        itemsIndexHtml.className = 'items' 
        itemsIndexHtml.style.display = 'none'
    let emptyItemsHtml = itemsIndexHtml

    
    let newCollection = new Collection(collection)
    itemsIndexHtml.innerHTML = newCollection.collectionItemsHtml() 

    collectionsIndex.innerHTML += newCollection.collectionHtml() 

    let selectedCollectionHtml = document.querySelector(`.card[data-collection-id="${newCollection.id}"]`)
    selectedCollectionHtml.append(itemsIndexHtml.childElementCount ? itemsIndexHtml : emptyItemsHtml) 
    selectedCollectionHtml.querySelector('.items').appendChild(newCollection.addItemButton())
    });
}