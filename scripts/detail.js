document.getElementById("price").addEventListener('click',calculatePrice);

function calculatePrice(){
    let totalAdults=document.getElementById("adult").value;
    let date1=document.getElementById("fromDate").value;
    document.getElementById("price").value=totalAdults*1000;
}