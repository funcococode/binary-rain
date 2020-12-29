let randomPos = {
    x : null,
    y : null
}

let generate = function(){
    randomPos = {
        x : Math.random()*innerWidth,
        y : -10
    }
    let div = document.createElement("DIV");
    div.textContent = (Math.random()*10 > 5)?"0":"1";
    div.style.position = "absolute";
    div.style.left = randomPos.x + "px";
    div.style.top = randomPos.y + "px";
    div.classList.add("fall");
    document.body.appendChild(div);

    setTimeout(()=>{
        div.remove()
    },5000)
}

setInterval(generate,0.01)
