const billAmount= document.querySelector("#bill-amount");
const cashGiven= document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes= document.querySelectorAll(".no-of-notes");

const availableNotes= [2000,500,100,20,10,5,1];


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    console.log(billAmount);
    if(Number(billAmount.value)>0) {
        if(Number(cashGiven.value)>= Number(billAmount.value)){
            const amountToBeReturned= Number(cashGiven.value)- Number(billAmount.value);
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("The cash provided should be equal to bill amount");
        }
    }
    else{
        showMessage("Invalid bill amount");
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes= Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned%= availableNotes[i];
        noOfNotes[i].innerText= numberOfNotes;
    }
}

function hideMessage(){
    message.style.display= "none";
}
function showMessage(msg) {
    console.log("check")
    message.style.display= "block";
    message.innerText= msg;
}
