const colorPicker = document.querySelector(".colorPicker");
const clear = document.querySelector(".clear");
const btn = document.querySelectorAll(".btn");
colorPicker.value = chroma.random();
let Color = colorPicker.value;
const range = document.querySelector("#value");
const date = document.querySelector(".date"); 
const Colormode = document.querySelector(".Colormode"); 
Colormode.classList.add("active");
let mode = "Colormode";

date.innerText = new Date().getFullYear();
btn.forEach((ele) =>{
    ele.addEventListener("click",() =>{
        btn.forEach((ele) =>{
            ele.classList.remove("active");
        });
        ele.classList.add("active");
        mode =  ele.classList[1];
        console.log(mode);
    });
});

clear.addEventListener("click",(e) =>{
    let white = chroma('white').hex();
    const childe = document.querySelectorAll(".childe");
    childe.forEach((ele) =>{
        ele.style.backgroundColor = white;
    });

});

colorPicker.addEventListener("input",(e) =>{
    Color = e.target.value;
});


const colorTheGame = (e) =>{
    if(mode == 'Colormode'){
        e.target.style.backgroundColor = Color;
    }
    else if(mode == 'Rainbowmode'){
        let randome = chroma.random();
        e.target.style.backgroundColor = randome;
    }
    else if(mode == 'Erasermode'){
        let white = chroma('white').hex();
        e.target.style.backgroundColor = white;
    }
}

const updateText = () =>{
    const range = document.querySelector("#value");
    const sizeValue = document.querySelector(".sizeValue");
    range.addEventListener("input",(e) =>{
        sizeValue.innerText = `${e.target.value} X ${e.target.value}`;
    });
}
const updateTabel = () =>{
    const range = document.querySelector("#value");
    range.addEventListener("change",(e) =>{
        createTable(e.target.value);
    });
}
const createTable = (Number) =>{
    const game = document.querySelector(".game");
    const childes = document.querySelectorAll(".childe");
    gsap.to(game,0,{gridTemplateColumns : `repeat(${Number},1fr)`});
    gsap.to(game,0,{gridTemplateRows : `repeat(${Number},1fr)`});
    if(childes){
        childes.forEach((e) =>{
            e.remove();
        });
    }
    for (let i = 0; i < (Number * Number); i++) {
        const childe = document.createElement("div");
        childe.classList.add(`childe`, `${i + 1}`);
        childe.addEventListener("mouseover", (e) =>{
            colorTheGame(e);
        });
        game.appendChild(childe);
    }
}

createTable(range.value);
updateText();
updateTabel();

console.log("gfg");   