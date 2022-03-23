chrome.storage.sync.get({
    enable_auto_loop: false,
}, (items) => {
    document.getElementById('enable_auto_loop').checked = items.enable_auto_loop;
})

document.getElementById('enable_auto_loop').addEventListener('click', (event) => {
    chrome.storage.sync.set({
        enable_auto_loop: document.getElementById('enable_auto_loop').checked
    }, function() {});
});