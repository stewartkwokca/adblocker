let elementDeleterEnabled = false;

chrome.storage.local.get(["elementDeleterEnabled"]).then((res) => { // get the current status (active or inactive) of manual element deleter
  elementDeleterEnabled = res.elementDeleterEnabled || false;
});

chrome.storage.local.set({ elementDeleterEnabled }, () => { // make popup display consistent with above
  const state = elementDeleterEnabled ? "enabled" : "disabled";
  document.getElementById("element-deleter").innerText = elementDeleterEnabled ? "Disable Element Blocker": "Enable Element Blocker";
});

document.getElementById("element-deleter").addEventListener("click", () => { // Update status display and chrome local storage status

  elementDeleterEnabled = !elementDeleterEnabled;

  chrome.storage.local.set({ elementDeleterEnabled }, () => {
    const state = elementDeleterEnabled ? "enabled" : "disabled";
    document.getElementById("element-deleter").innerText = elementDeleterEnabled ? "Disable Element Blocker" : "Enable Element Blocker";
  });
});