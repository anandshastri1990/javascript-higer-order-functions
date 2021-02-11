let storageInfo = {
    name: "",
    clicked: 0
}

let updateCounter = () => {
    storageInfo.clicked++;
    updateLocalStorage();
}

let updateName = (value) => {
    storageInfo.name = value;
    updateLocalStorage();
}

let updateLocalStorage = () => {
    updateDom();
    localStorage.setItem("storageInfo", JSON.stringify(storageInfo));
}

let updateDom = () => {
    if (storageInfo.name !== "") {
        document.getElementById("info").innerHTML = " your name is " + storageInfo.name + " and you have clicked the button " + storageInfo.clicked + " times!";
    } else {
        document.getElementById("info").innerHTML = "";
    }

}

if (localStorage.getItem("storageInfo")) {
    storageInfo = JSON.parse(localStorage.getItem("storageInfo"));
    document.getElementById("name").value = storageInfo.name;
    updateDom();
}

let clearStorage = () => {
    storageInfo = {
        name: "",
        clicked: 0
    }
    document.getElementById("name").value = "";
    updateLocalStorage()
}
