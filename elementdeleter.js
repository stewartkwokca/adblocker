document.addEventListener("click", async (event) => { // whenever webpage is clicked

    const res = await chrome.storage.local.get(["elementDeleterEnabled"])
    
    const deleterEnabled = res.elementDeleterEnabled || false;

    if (!deleterEnabled) return;

    event.preventDefault();
    event.stopPropagation();

    const element = event.target; // set the clicked element to hidden

    element.style.display = "none"; 
});