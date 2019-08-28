console.log('%cDeveloped by Thomas Bnt 🍵\nThis page is Open Source.\nSee https://github.com/thomasbnt/Randomize_number','color:#314759;font-family:monospace;font-size:.85rem;')
function Load(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const out = Math.floor(Math.random() * (max - min + 1)) + min
    document.getElementById('random').textContent = out
    document.title = out
}
if (!navigator.serviceWorker) { console.log('!nagivator SW') }

const registrations = await navigator.serviceWorker.getRegistrations()
for (const reg of registrations) {
    reg.unregister()
}

window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
        .then(function () { console.log("✔ [Service Worker Registered] Offline mode available.")})
})
