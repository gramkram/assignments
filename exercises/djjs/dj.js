document.getElementById("box").addEventListener("dblclick", function() {
    document.getElementById('box').style.backgroundColor = "green"
})

document.getElementById("box").addEventListener("mouseover", function(){
    document.getElementById('box').style.backgroundColor = "blue"
})

document.getElementById("box").addEventListener("mousedown", function(){
    document.getElementById('box').style.backgroundColor = "red"
})

document.getElementById("box").addEventListener("mouseout", function(){
    document.getElementById('box').style.backgroundColor = "yellow"
})
window.addEventListener("scroll", function(){
    document.getElementById('box').style.backgroundColor = "orange"
})