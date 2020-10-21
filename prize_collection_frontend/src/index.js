document.addEventListener("DOMContentLoaded", () => {
    getCollections();
    Collection.newCollectionForm()
 })

 function toggleHideDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}

getCollections()