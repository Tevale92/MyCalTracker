var base_url = 'http://localhost:3000/';
var login = "login";
var adminlogin = "adminlogin";

const firebaseConfig = {
    apiKey: "AIzaSyARv6HTlXB_zCY3DuXeoXlUjFyja8WUJ5E",
    authDomain: "tracalorie-d17ca.firebaseapp.com",
    projectId: "tracalorie-d17ca",
    storageBucket: "tracalorie-d17ca.appspot.com",
    messagingSenderId: "72303700525",
    appId: "1:72303700525:web:d20903a16e254f1a4166a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
function signUp(){
	debugger;
	var _email = document.getElementById("email");
	var _password = document.getElementById("password");
	
	firebase.database().ref("user").set({
	email:_email.value,
	password:_password.value
	});

	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value);
	promise.catch(e => alert(e.message));
		
	alert("Signed Up");
    window.location.href = "adminlogin.html";
}

$(document).ready(function() {

    $('#login_admin').click(() => {
        console.log('Admin Login customer')
        const email  = $('#txtusername_admin').val();
        const  password = $('#txtpassword_admin').val();

        
        if (email == "") {
            alert("Please Enter Email");
            return;
        }

        if (password == "") {
            alert("Please Enter Password");
            return;
        }
        var user = {
            "username": email,
            "password": password
        };
        $.post(base_url + adminlogin, user, (res) => {
            console.log(res);
             if (res.status == 200) {
                window.location.href = "adminhome.html";
            } else {
                alert("Invalid Credentials.");
            }

            console.log("Admin Logged ", res)

        });
    });
});