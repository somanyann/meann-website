fetch('html-content/navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("header");
    newelem.setAttribute("class","navbar-div")
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})