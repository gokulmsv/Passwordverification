let verification = document.getElementById("verify");

verification.addEventListener("click", function() {
    let passwordfield = document.getElementById("password")
    passwordfield.type = "password"
    
    let lowercaseRegex = /[a-z]/;
    let uppercaseRegex = /[A-Z]/;
    let numberRegex = /[0-9]/;
    let charactersRegex = /.{8,}/;

    let password = document.getElementById("password");
    let reenter = document.getElementById("reenter");

    let validate = true;

    if (!lowercaseRegex.test(password.value)) {
        document.querySelector(".lowercase").style.display = "inline";
        validate = false;
    } else {
        document.querySelector(".lowercase").style.display = "none";
    }

    if (!uppercaseRegex.test(password.value)) {
        document.querySelector(".uppercase").style.display = "inline";
        validate = false;
    } else {
        document.querySelector(".uppercase").style.display = "none";
    }

    if (!numberRegex.test(password.value)) {
        document.querySelector(".number").style.display = "inline";
        validate = false;
    } else {
        document.querySelector(".number").style.display = "none";
    }

    if (!charactersRegex.test(password.value)) {
        document.querySelector(".character").style.display = "inline";
        validate = false;
    } else {
        document.querySelector(".character").style.display = "none";
    }

    if (password.value !== "") {
        if (password.value === reenter.value) {
            document.querySelector(".passworderror").style.display = "none";
        } else {
            document.querySelector(".passworderror").style.display = "inline";
            validate = false;
        }
    }

    if (validate) {
        alert("Verification successful!");
        document.getElementById("verification").reset();
        // Alternatively, clear the error messages if needed
        document.querySelector(".lowercase").style.display = "none";
        document.querySelector(".uppercase").style.display = "none";
        document.querySelector(".number").style.display = "none";
        document.querySelector(".character").style.display = "none";
        document.querySelector(".passworderror").style.display = "none";
    }
});
