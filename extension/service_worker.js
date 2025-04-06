chrome.commands.onCommand.addListener(async (command) => {
    if (command == "dmlive:play") {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        if (tab?.id) {
            chrome.tabs.sendMessage(tab.id, { action: "dmlive:clipboard:read" })
        }
    }
})
