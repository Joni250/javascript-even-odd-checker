

function checkdata() {

    let number = document.getElementById("number").value;
    let result = document.querySelector(".alert");

    if (number === "") {
        result.innerText = "Please enter a number!";
    } 
    else if (number % 2 == 0) {
        result.innerText = " Even";
    } 
    else {
        result.innerText = " Odd";
    }

}




