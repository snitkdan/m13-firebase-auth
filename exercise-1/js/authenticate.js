// JavaScript authentication file
$(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDhS_qTNMPF-rcDycCNAiv6iFRE78sqnVI",
        authDomain: "snitkdan-authentibase.firebaseapp.com",
        databaseURL: "https://snitkdan-authentibase.firebaseio.com",
        storageBucket: "snitkdan-authentibase.appspot.com",
        messagingSenderId: "803115594329"
    };
    firebase.initializeApp(config);

    $('form').on("submit", function() {
        event.preventDefault();
        if (this.id == 'sign-up') {
            signUp();
        } else {
            signIn();
        }
    });

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var display_Name = $('#display-name').val();
        // Create user, then set the user's display name
        // Set display name
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            function(user) {
                user.updateProfile({
                    displayName: display_Name
                }).then(function() {
                    window.location = 'index.html';
                })
            }
        ).catch(function(error) {
            alert(error.message);
        });
    };




    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('#email').val();
        var password = $('#password').val();

        // Authenticate using email and password, then redirect
        firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
            // window.location = 'index.html'
            console.log(firebase.auth().currentUser);
        }).catch(function(error) {
            alert("Invalid email or password");
        });
    }

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

    // Rediriect to index.html if there is a user and the pathname isn't '/'

    // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
