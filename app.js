// Start coding here
var target = [0, 0]
var angle = 0
document.addEventListener("mousemove", (e) => {
    target = [e.clientX + 300*Math.cos(angle), e.clientY + 300*Math.sin(angle)]
    angle += 0.01
})

var buttonPos = [0, 0]
var frame = 0
var messages = ["You can do it!", "Click!", "Come on!", "Love you!", "Happy Birthday!", "HAHAHA!"]
function move() {
    requestAnimationFrame(move)
    buttonPos[0] = (buttonPos[0] + target[0])/2
    buttonPos[1] = (buttonPos[1] + target[1])/2
    document.getElementById("btn").style.left = `${buttonPos[0] % window.innerWidth}px`
    document.getElementById("btn").style.top = `${buttonPos[1] % window.innerHeight}px`
    if (frame % 100 == 0) {
        document.getElementById("btn").innerText = messages[Math.floor(frame/100)%messages.length]
    }
    document.getElementById("timer").innerText = frame / 100
    frame++
}
move()