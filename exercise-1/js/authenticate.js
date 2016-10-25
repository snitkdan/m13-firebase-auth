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

    $('form').on("submit", function(event) {
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
            }).catch(function(error) {
            alert(error.message);
        });
    };




    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('#email').val();
        var password = $("#password").val();

        // Authenticate using email and password, then redirect
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function() {
                window.location = 'index.html';
            })
            .catch(function(error) {
                alert(error);
            });
    };



    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect
        var auth = firebase.auth();
        auth.signOut().then(
            function() {
                window.location = 'sign-in.html';
            }).catch(function(error) {
            alert("Couldn't sign out for some odd reason...")
        })
    };

    // Assign click event to logout button
    // Assign event lister to form submission
    $('#log-out').on('click', function() {
        signOut();
    })

    // Authentication Change: see if a user is already signed in, and redirect
    // Rediriect to index.html if there is a user and the pathname isn't '/'
    // Redirect to sign-in if there is NOT a user and the pathname IS '/'
    var checked = false; // create an undefined object
    firebase.auth().onAuthStateChanged(function(user) {
        if (checked !== true) {
            if (user) {
                window.location = 'index.html'
            } else {
                // window.location = 'sign-in.html'
            }
        }
        checked = true;

    });



});
