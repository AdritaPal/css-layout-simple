function generate(x){
    document.getElementById("grid").style.display="block";
    
    let i=document.createElement("img");
    i.setAttribute("src", "present.png");
    i.setAttribute("width", "100");
    i.setAttribute("height", "100");
    
    for(let j=0;j<x;j++){
        document.getElementById("grid").appendChild(i);
    }
}

