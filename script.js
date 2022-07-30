const firebaseConfig = {
    apiKey: "AIzaSyDmFCGUIOqZq2GVmddIp0WoZY6kGUdaU10",
    authDomain: "contactform-f8b24.firebaseapp.com",
    databaseURL: "https://contactform-f8b24-default-rtdb.firebaseio.com",
    projectId: "contactform-f8b24",
    storageBucket: "contactform-f8b24.appspot.com",
    messagingSenderId: "1031660300812",
    appId: "1:1031660300812:web:79a7f2d9c3798e2e43dc29"
  };

//   initialize firebase
  firebase.initializeApp(firebaseConfig);

//   reference for database

var contactFormDB = firebase.database().ref("contactForm");
document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    var email=getElementVal("email");
    var name=getElementVal("name");
    var password=getElementVal("password");

    // console.log(name,email,password);
    saveMessage(email,name,password);

}

const saveMessage = (email,name,password) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        email: email,
        name: name,
        password : password,

    });
};



const getElementVal =(id)=>{
    return document.getElementById(id).value;
};




















