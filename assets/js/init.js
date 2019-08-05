
function Load(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const out = Math.floor(Math.random() * (max - min + 1)) + min
    document.getElementById('random').textContent = out
    document.title = out
}
