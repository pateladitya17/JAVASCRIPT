// console.log("har ahr mahadev");

// DOM is represents a document with a logical tree.
// it allows us to manipulate webpage

// innerText- show only visible text
// textContent- show also hidden text what we write in html
// innerHTML-show text with tags

let button = document.getElementById("myId");
console.dir(button);
console.log(button);


let header = document.getElementsByClassName("myClass");
console.dir(header);
console.log(header);

let para = document.getElementsByTagName("p");
console.dir(para);

let ele = document.querySelector("p");
console.dir(ele);

let allEle = document.querySelectorAll("p");
console.dir(allEle);

let el = document.querySelector("#myId");
console.dir(el);

let allEl = document.querySelectorAll(".myClass");
console.dir(allEl);

// proerties

console.dir(ele.tagName);


let di = document.querySelector("div").children;
console.dir(di);

let span = document.querySelector("span");
console.dir(span.innerText);
console.dir(span.innerHTML);
// textContent used to returns hidden elements.

console.dir(span.innerText = "jay amtaji");
console.dir(span.innerHTML = "<P>jay amtaji</P>");

// practice

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
console.dir(h2.innerText = h2.innerText + " " + "by aditya patel");

let divs = document.querySelectorAll(".box");
console.dir(divs);

let i = 1;
for (div of divs) {
    div.innerText = `new unique value ${i}`;
    i++;
}

// Attribute

let h1 = document.querySelector("h1");
console.log(h1);

let id = h1.getAttribute("id");
console.log(id);

h1.setAttribute("id", "jay");


let h4 = document.querySelector("h4");
console.log(h4);

// style property se ham sirf inline style ko access kar sakte hai
h4.style.backgroundColor = "green";


// DOM manipulation
// insert element

let newBtn = document.createElement("button");
newBtn.innerText = "hi";
console.log(newBtn);

let man = document.querySelector("#man");
man.append(newBtn);  // last me add karna
// append se ham selected element me change kar sakte hai also ham string bhi add kar sakte hai
// man.append("this is man")

// man.appendChild(newBtn);  // last me add karna
// ye man ke child me add karta hai element ko

man.prepend(newBtn); // we the use of clone node we create same btn in multiple place.

man.before(newBtn.cloneNode(true));

// man.after(newBtn);

// delete element

document.querySelector("h6").remove();
// document.querySelector("h6").removeChild(btn);

// we use only one method in append,prepend,after,before 
// but if we use multiple we use .cloneNode(true) 

// classlist
// heading.classList.add("green")  we add class which are write in css file
// heading.classList.remove("green");
// heading.classList.contains("green");   -> if class exists in heading so return true
// heading.classlist.toggle ("green");    -> if class is not added then toggle add the class and if class exists then remove the class


// h4.parentElement  -> give immediateupper element sigle parent hota hai
// div.children      -> give children multiple
// div.childElementCount  -> count of child

// h4.previousElementSibling  -> upar no sibling
// h4.nextElementSibling  -> pachhi no sibling


// p.insertAdjacentElement('beforebegin', btn);
// btn ko p ke pahele add karega

// p.insertAdjacentElement('afterbegin', btn);
// btn ko p ke andar hi add karega

// p.insertAdjacentElement('beforeend', btn);
// btn ko p ke andar par ending me add karega

// p.insertAdjacentElement('afterend', btn);
// btn ko p ke pure hone ke bad add karega