
function validate(){
        let password = document.getElementById('user_password').value;
        let confirm_password = document.getElementById('confirm_password').value;

        let container = document.getElementById('alert');
        
            if(password != confirm_password){
                document.getElementById('user_password').style.borderColor = "red";
                document.getElementById('confirm_password').style.borderColor = "red";
                container.innerText = "Password and Confirm Password do not match."
                container.style.margin = "20px";
                container.style.color = "red";
            }
            else{
                container.innerText = "";
                document.getElementById('user_password').style.borderColor = "green";
                document.getElementById('confirm_password').style.borderColor = "green";
            }

        }


let button = document.getElementById("button");
let confirm_password = document.getElementById('confirm_password');
let container1 = document.getElementById('alert');

button.addEventListener('click',()=>
{
    validate();
});

let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    if(container1.innerText != ""){
        confirm_password.innerText = "";
        event.preventDefault();
    }
});

