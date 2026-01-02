const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
const otherFact = document.querySelector("#other-fact");
let data = [];
let index = 0;

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON format javascript object notation
    data = await response.json();
    console.log("data is ready");
    console.log(data)
    index = 0;
    factPara.innerText = data.fact;
};

const changeFacts = () => {
    if (data.length > 0) {
        index = (index + 1) % data.length;
        factPara.innerText = data[index].text;
    }
}

btn.addEventListener("click", getFacts);
otherFact.addEventListener("click", getFacts);

// we use axios rather then fetch 
// for use axios we and cdn or install axios  
// in axios we have not need to parse json data
// line 10  --  let response = await axios.get(URL);
//              factPara.innerText = data.fact;