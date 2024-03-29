
function login() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (validateForm(username, password)) {
        
        window.location.href = "index.html";
    }
}


function validateForm(username, password) {
    
    if (username.trim() === "" || password.trim() === "") {
        
        document.getElementById("loginMessage").innerText = "Please enter username and password";
        return false; 
    } else {
        
        document.getElementById("loginMessage").innerText = "";
        return true; 
    }
}
