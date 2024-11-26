const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const myButton = document.getElementById("myButton");


function addTask(){
    if(inputBox.value === ''){
        alert("You must have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}

// This is code for save your data on browser when you refresh or close browser
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// This is code for enter key to add any task in list
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
      myButton.click();

    }
});


// Delete button code to clear all data in list
document.getElementById("delBtn").addEventListener("click", function() {

    listContainer.innerHTML = "";
});


// This is code for save your data on browser when you refresh or close browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();