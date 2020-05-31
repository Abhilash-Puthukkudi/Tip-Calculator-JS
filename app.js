let slider =document.getElementById("tip-pr");
let tipamt= document.getElementById("tip-amt");
let totalamount= document.getElementById("total-amt");
let billvalue= document.getElementById("bill-amt");

//slider value
let sliderValueShow=document.getElementById("tip-value");

//reset function
let reset=()=>{
    billvalue.value=0;
    slider.value=0;
    sliderValueShow.textContent=slider.value + "%";  
}

slider.addEventListener("input",() => {
    //to render slider info
    sliderValueShow.textContent=slider.value + "%";
    //conversion of user input to number
    let billAmount=+billvalue.value;
    let tipPercentage= +slider.value;

    //validation for -ve numbers
    if(billAmount >= 0){
        let tipValue =billAmount*(tipPercentage/100);
        let totalValue=billAmount+tipValue;
        tipamt.value=tipValue.toFixed(2);
        totalamount.value=totalValue.toFixed(2);
    }
    else{//if any invalid input given show an alert and reset the value
        alert("Please Enter Corect Bill Value");
        reset();
    }
});