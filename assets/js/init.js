console.log('%cDeveloped by Thomas Bnt 🍵\nThis page is Open Source.\nSee https://github.com/thomasbnt/Randomize_number','color:#314759;font-family:monospace;font-size:.85rem;')
function Load(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const out = Math.floor(Math.random() * (max - min + 1)) + min
    document.getElementById('random').textContent = out
    document.title = out
}

window.addEventListener('beforeinstallprompt', function(e) {

    e.userChoice.then(function(choiceResult) {

        console.log(choiceResult.outcome)

        if (choiceResult.outcome == 'dismissed') {
            console.log('User cancelled home screen install')
        } else {
            console.log('User added to home screen')
        }
    })
})

if (!navigator.serviceWorker) { console.log('!nagivator SW') }

const registrations = navigator.serviceWorker.getRegistrations()
for (const reg of registrations) {
    reg.unregister()
}

window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
        .then(function () { console.log("✔ [Service Worker Registered] Offline mode available.")})
})
