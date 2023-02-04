const emojisEl = document.getElementById("emojis-el")
let emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const pushBtn = document.getElementById("push-btn")
const shiftBtn = document.getElementById("shift-btn")
const popBtn = document.getElementById("pop-btn")


let emojis = ["🏀","✈️","🇨🇦"];


//Render the emojis
function render(){
    emojisEl.innerHTML = ""
    for(let i=0; i<emojis.length; i++){
        emojisEl.textContent += emojis[i]
    }
    emojiInput.value = ""
}
render()

// Add to the start
unshiftBtn.addEventListener("click", function(){
    emojis.unshift(emojiInput.value) 
    render()
})

// Add to the end
pushBtn.addEventListener("click", function(){
    emojis.push(emojiInput.value) 
    render()
})

// Remove from beginning
shiftBtn.addEventListener("click", function(){
    emojis.shift(emojiInput.value) 
    render()
})

//Remove from the end
popBtn.addEventListener("click", function(){
    emojis.pop(emojiInput.value) 
    render()
})