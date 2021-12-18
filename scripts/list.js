function listFunc(){
    document.getElementsByTagName("button")[1].style.background="#0099FF";
    document.getElementsByTagName("button")[1].style.width="6em";
    document.getElementsByTagName("button")[1].style.height="3em";
    document.getElementsByTagName("button")[2].style.background="none";
    document.getElementsByClassName("map")[0].style.display="none";
    document.getElementById("listview").style.display="block";
}

function mapFunc(){
    document.getElementsByTagName("button")[2].style.background="#0099FF";
    document.getElementsByTagName("button")[2].style.width="6em";
    document.getElementsByTagName("button")[2].style.height="3em";
    document.getElementsByTagName("button")[1].style.background="none";
    document.getElementsByClassName("map")[0].style.display="block";
    document.getElementById("listview").style.display="none";
}