function checkAge() {

    //getting current date
    var now =new Date();  
    //extracting year from the date
    var currentYear= now.getFullYear(); 
                  
    //getting user's input
    var user_bd = document.getElementById("birthday").value;
    //formatting input as date
    var input_bd = new Date(user_bd);    
    //extracting year from input date                         
    var inputYear = input_bd.getFullYear();                               
      
    var age = currentYear - inputYear;
          
    // If age < 18 return False.    
    if (age < 18) {
        window.alert("You must be above 18 years old to create an account")
        return false;
    }
}

function matchingPasswords() {

    var passValue = document.getElementById("password").value
    var confpassValue = document.getElementById("confirm_password").value
      
    // If Not same return False.    
    if (passValue !== confpassValue) {
        window.alert("Passwords do not match: Please try again...")
        return false;
    }
}

function checkPassword() {
    var input = document.getElementById("password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var symbol = document.getElementById("symbol")
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    document.getElementById("message").style.display = "block";

    // When the user clicks outside of the password field, hide the message box
    input.onblur = function() {
        document.getElementById("message").style.display = "none";
    }

    // When the user starts to type something inside the password field
    input.onkeyup = function() {
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if(input.value.match(lowerCaseLetters)) {  
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(input.value.match(upperCaseLetters)) {  
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if(input.value.match(numbers)) {  
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate symbols
        var symbols = /[^A-Za-z0-9]/g;
        if(input.value.match(symbols)) {  
            symbol.classList.remove("invalid");
            symbol.classList.add("valid");
        } else {
            symbol.classList.remove("valid");
            symbol.classList.add("invalid");
        }      
        
        // Validate length
        if(input.value.length < 8 || input.value.length > 16) {
            length.classList.remove("valid");
            length.classList.add("invalid");            
        } else {
            length.classList.remove("invalid");
            length.classList.add("valid");
        }
    }
}