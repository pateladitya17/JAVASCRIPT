console.log("Har Har Mahadev");

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log("btn was clicked !");
    let a = 25;
    a++;
    console.log(a);
    console.log(evt);
    console.log(evt.type);
}

let div = document.querySelector("div");

div.addEventListener("mouseover", () => {
    console.log("you are inside div");
});

div.addEventListener("mouseover", () => {
    console.log("jor se bolo jay mataji");
});
const handler3 = () => {
    console.log("hal ambaji tu relgadi");
}
div.addEventListener("mouseover",handler3);

div.removeEventListener("mouseover",handler3);

// practice
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.setAttribute("class", "dark");
    } else {
        currMode = "light";
        body.setAttribute("class", "light");
    }
    console.log(currMode);  
})


// we use "this" in addEventListener's callback function
// and that "this" is point to that element on we add eventlistener

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor); 

// events -> input, keyup, keydown, change, submit 

// event bubbling - when er add event listener to parent and child so when we click child then parent also fired bcoz child is in the parent element
// event.stopPropagation -> stop bubbling