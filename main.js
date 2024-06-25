// console.log("working");
// const textEL = document.getElementById("text");
// document.getElementById("text").style.color = "green";
// document.getElementById("text").style.fontSize = "40px";
// document.getElementById("text").style.backgroundColor = "yellow";
// document.getElementById("text").textContent = "Pinecone LLC"


// const myElement = document.createElement("h1"); 
// console.log(myElement);
// myElement.textContent = "Pinecone LLC";
// document.getElementById("test").appendChild(myElement);

// const els = document.getElementsByClassName("demo");
// console.log("el", els[0].children);

// function handClick(){
//     console.log("Button clicked");

// }

// const test = document.getElementsByClassName("box");
// // console.log("test", test[0].children);

// document.getElementsByClassName("box")[0].style.height = "500px";
// document.getElementsByClassName("box")[0].style.width = "500px";
// document.getElementsByClassName("box")[0].style.backgroundColor = "yellow";

// function change(){
//     console.log("Button clicked")
// }

// const oorchil = document.getElementById



// const boxEl = document.getElementsByClassName("box")[0];
// const btnEL = document.getElementsByTagName("button")[0];
// console.log(boxEl);
// console.log(btnEL);

// const colors = ["green","yellow","red"]
// let i = 0;

// function changeBackgroundColor(){
//     console.log("cahnged");
//     const rColor = Math.floor (Math.random() * 256); 
//     const gColor = Math.floor (Math.random() * 256); 
//     const bColor = Math.floor (Math.random() * 256); 
//     boxEl.style.backgroundColor = 
//     "rgb("+ rColor +","+ gColor +","+ bColor +")";
// // boxEl.style.backgroundColor = colors[i];
// // i++;
// // if (i === colors.length){
// //     i = 0;
// // }
// }
// btnEL.addEventListener("click",changeBackgroundColor)


// function generateColor(){
//     const rColor = Math.floor (Math.random() * 256); 
//     const gColor = Math.floor (Math.random() * 256); 
//     const bColor = Math.floor (Math.random() * 256); 

//    return  "rgb("+ rColor +","+ gColor +","+ bColor +")";
//    return `rgb(${rColor},${gColor},${bColor})`
// }

// function changeBackgroundColor(){
//     boxEl.style.backgroundColor = generateColor();
// 

const boxEls = document.getElementsByClassName("box");
console.log(boxEls);
const btnEl = document.getElementsByTagName("button")[0];


 function changeBoxColor(){
    for (let i = 0; i < boxEls.length; i++) {
        const color = generateColor();
        boxEls[i].style.backgroundColor = color;   
    }   
}

btnEl.addEventListener("click",changeBoxColor);
 
function generateColor(){
    const rColor = Math.floor (Math.random() * 256);
    const gColor = Math.floor (Math.random() * 256);
    const bColor = Math.floor (Math.random() * 256);
   return  "rgb("+ rColor +","+ gColor +","+ bColor +")";
}

const addBtn = document.getElementById("addBtn");
console.log(addBtn)


addBtn.addEventListener("click", function(){
    // shine div element uusgej avch bna.
    const newBox = document.createElement("div");
    // uusegesen shine div iin urguniig 100px bolgoj bna.
    newBox.style.width = '100px';
    newBox.style.height = '100px';
    newBox.style.backgroundColor = "red"
    const parent = document.getElementsByClassName("container")[0];
    parent.appendChild(newBox);
});
