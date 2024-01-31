
let btn = document.querySelector(".btn");
let containerHeader = document.querySelector(".container");

btn.addEventListener("click", createBoxes);

function createBoxes() {
    let boxes = new XMLHttpRequest();
    boxes.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let boxesObject = JSON.parse(this.responseText);
            boxesObject.forEach(function (box) {
                // creat box container 
                let boxContainer = document.createElement("div");
                boxContainer.className = "box";
                // add elements to box  and create them 
                let id = document.createElement("h1");
                let idText = document.createTextNode(`id=> ${box.id}`);
                let name = document.createElement("h4");
                let nameText = document.createTextNode(`name=> ${box.name}`);
                let email = document.createElement("p");
                let textEmail = document.createTextNode(`email=> ${box.email}`);
                // append elements 
                id.appendChild(idText);
                name.appendChild(nameText);
                email.appendChild(textEmail);
                // append to the box 
                boxContainer.appendChild(id);
                boxContainer.appendChild(name);
                boxContainer.appendChild(email);
                // append to the parent container 
                let parentContainer = document.querySelector(".boxes");
                parentContainer.appendChild(boxContainer);
                if (parentContainer.childElementCount === 10) {
                    btn.innerHTML = "all the users are here!";
                    btn.classList.add("hide");
                    if (btn.classList.contains("hide")) {
                        setTimeout(() => {
                            containerHeader.removeChild(btn);
                        },500)
                    }
                }
            });
        };
    }
    boxes.open("GET", "https://jsonplaceholder.typicode.com/users", );
    boxes.send();
};





















































































































    





















   


























