let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = "";

});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         this.parentElement.remove();
//     });
// }

// in this when we try to delete added tasks, the delete button for the new task is not working
// this is happen bcoz when we add event listener to delete button it only add to those button which are present at that time
// so to solve this problem we use event delegation
// we use parent element to to task with child element and event bubbling do this thing
ul.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
})