const SearchBox = document.getElementById("textarea");
const Container = document.getElementById("list-container")

const button = document.getElementById("btn");

button.addEventListener("click",()=>{
    if (SearchBox.value === '') {
        alert("You Must Write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = SearchBox.value;
        Container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    SearchBox.value = "";
    saveData();
})
SearchBox.addEventListener("keydown",(e)=> {
    if(e.key == "Enter"){
        if (SearchBox.value === '') {
            alert("You Must Write something");
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = SearchBox.value;
            Container.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span)
        }
        SearchBox.value = "";
        saveData();
    }
});



Container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", Container.innerHTML);
}

function ShowData() {
    Container.innerHTML = localStorage.getItem("data");
}
ShowData();
