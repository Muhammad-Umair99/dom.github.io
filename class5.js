// console.dir(document.body);

// console.log(document.body);

// console.log(document.head);

// console.dir(document.body.childNodes[1].innerText = "acbb");

// document.body.style.background = "green"


//DOM MANIPULATION
//select with id
// let button = document.getElementById("my-id");
// console.dir(button);

//select with className (return html collction similar like array)
// let headings =  document.getElementsByClassName("my-class");
// console.dir(headings);
// console.log(headings);


// select with tag
// let paras = document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);

//QUERY SELECTOR (UPGRADE WAY TO ACESS ELEMENTS)
//by tag name
    // let firstEl = document.querySelector("p");//1st element return
    // console.dir(firstEl);

    // let allEl = document.querySelectorAll("p");//all element return
    // console.dir(allEl);


    //by className
    //  let firstEl = document.querySelector(".my-class");//1st element return
    // console.dir(firstEl);

    // let allEl = document.querySelectorAll(".my-class");//all element return
    // console.dir(allEl); 

    //by id    
    //  let firstEl = document.querySelector("#my-id");//1st element return
    // console.dir(firstEl);





    // second file
    //PROPERTIES
    //1)tagName
    // let firstEl = document.querySelector("#my-id");//1st element return
    // console.dir(firstEl.tagName);

    // let firstEl = document.querySelector("p");//1st element return
    // console.dir(firstEl.tagName);


    // 2) innetext
    // let div = document.querySelector("div");
    // console.dir(div);
    
    // let di = document.querySelector("div").innerText
    // console.dir(di);

    //3) innerhtml
        // let div = document.querySelector("div").innerHTML
        // console.dir(div);


    // 4) textContent
    //    let heading = document.querySelector("h1")
    //     console.dir(heading);


    // practice question
    // 1)
    //create a h2 heading element with text "hellow javascript" append from "js students" to this text using js

    // let h2 = document.querySelector("h2") 
    // console.dir(h2.innerText);
    // h2.innerText = h2.innerText + "learn from w3school";


    //2) create three div with common class name - "box". acess them & add some unique text to each of them"

    //advance way

    // let box = document.querySelectorAll(".box");
    // let idex = 1;
    // for( div of box){
    //     div.innerText = `new unique value  ${idex}`
    //     idex++; 
    // }


    //bsic way
    // box[0].innerText = "new unoque value 1"
    // box[1].innerText = "new unoque value 2"
    // box[2].innerText = "new unoque value 3"


