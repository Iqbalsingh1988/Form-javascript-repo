// "use strict";

// const accountID = 1313
// let accountName = "Hello"
// accountName = "iqbal"
// let accountEmail = "hello@gmail.com"
// var accountcity = "delhi"
// var accountcity = "chandigrah"
// let accountcountry = "India"

// console.table([accountID, accountName, accountEmail, accountcity, accountcountry]);


// let title = document.getElementById("title");
// let title1 = document.querySelector("#title");
// title.innerHTML = "hello";
// title.textContent = "hello";

let heading = document.querySelectorAll("h1");


// heading.forEach((val) => {
//     console.log(val);
//     val.textContent = "hi";
// })

// let heading = ["heading", "text", "title"];


heading.forEach((val) => {

    // if (val.matches("heading", "text")) {

    // }

    if (val.classList.contains("heading") || val.classList.contains("text")) {
        
        console.log(val);
        val.textContent ="hi"
    } else {
        
    }
})


// console.log(newheading);


let form1 = document.querySelector(".form1");
let inputs = document.querySelectorAll("input");
let form_table1 = document.querySelector(".form-table1");
let form_user = document.querySelector(".form-table1 .user");
let form_pwd = document.querySelector(".form-table1 .pwd");
let table_show =document.querySelector(".table-show");
let table = document.createElement("table");
let tr = document.createElement("tr");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");


let tbody = document.createElement("tbody");





    

form1.addEventListener("submit", function(event){
    event.preventDefault();

//     tr.appendChild(td1);
// tr.appendChild(td2);
tbody.appendChild(tr);
table.appendChild(tbody);

table_show.appendChild(table);
table.setAttribute("class", "form-table1");



    console.log(inputs[0].value)
    console.log(inputs[1].value)

    if(inputs[0].value == "" || inputs[1].value == "" ) {
        alert("Please fill both fields.");

                return;
    }
    else {
        for (let index = 0; index < inputs.length; index++) {
            let td = document.createElement("td");
            //  console.log(td[0])
            td.textContent = inputs[index].value;
            // td[1].textContent = inputs[1].value;
            tr.appendChild(td);
        }
        
    }

    
})





