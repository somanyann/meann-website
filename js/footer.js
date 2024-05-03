fetch('html-content/footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    newelem.setAttribute("class","footerbar-div")
    oldelem.parentNode.replaceChild(newelem,oldelem);
})