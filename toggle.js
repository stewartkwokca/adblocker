document.getElementById('toggleOn').addEventListener('click', async () => {
    chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: [], 
        enableRulesetIds: ["ruleset"]
      });
      
});

document.getElementById('toggleOff').addEventListener('click', async () => {
    chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: ["ruleset"], 
        enableRulesetIds: []
      });      
});