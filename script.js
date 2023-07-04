const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// this code for add button click and add task
function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task")
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


// this code for enterkey press and add task
inputBox.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        if(inputBox.value === ''){
            alert("Please enter a task")
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
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


// save data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// show data to local storage
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();