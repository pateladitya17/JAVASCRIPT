let btn = document.createElement("button");

document.querySelector("body").prepend(btn);
btn.innerText = "click me !";
btn.style.backgroundColor = "red";
btn.style.color = "white";

// if we add  new class property without overwrite previous class property we use classList.

document.querySelector("p").classList.add("newClass");
document.querySelector("p").classList.remove("newClass");

console.log(document.querySelector("p").classList);

