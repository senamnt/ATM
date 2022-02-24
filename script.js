ab = 2000; // avaliable balance (ab)
var BalanceNum = 0; // balance (NOT text!)
var result = 0;
var operation = ""; // operations (withdrawal and deposit)

function insert(num) {
    // String text! Its NOT an integer number!
    document.querySelector("#Balance").innerText += num;

    //It is actually text value thats why we use parseInt.
    BalanceNum = parseInt(document.querySelector("#Balance").innerText);
}

function moneym() { // The Balance of the user is a stabil number.
    const moneym = document.createElement("span"); // Span
    const money = document.createTextNode("2000");
    moneym.appendChild(money);
    
    const element = document.getElementById("Balance");
    element.appendChild(moneym);

}

function assignOperation(ops) {
     //It is actually text value thats why we use parseInt.
    ab = parseInt(document.querySelector("#Balance").innerText);
    operation = ops //Store the balance  
    BalanceNum = 0;
    document.querySelector("#Balance").innerText = "";
}

// Now we calculate the balance when we withdrawal and deposit our money.
function calculate() {
    // When we click the button with id "paracek" the function will subtract balance number from avaliable balance.
    if (operation == "paracek") {
    result = ab - BalanceNum;
    }
    // When we click the button with id "parayatir" the function will add balance number and avaliable balance.
    else if (operation == "parayatir") {
    result = ab + BalanceNum;
    }
     else if (operation == "transfer") {
        result = ab - BalanceNum; // When transferring, we use subtraction processing because money is missing from the account.
     }
     else if (operation == "paytax") {
        result =  (ab - ((15 * ab)/100)); // I made up a new tax. 
    }
    

    document.querySelector("#result").innerText = result;
    result = 0;

    document.querySelector("#Balance").innerText = "";
    BalanceNum = 0;

}

function clearResult(){
    if (operation == "sil") {
        result = 0;
        } 
  }
