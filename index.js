// bright and dark mood
let visible = document.getElementById("flexSwitchCheckChecked");
let checkBoxLable = document.getElementById("checkboxName");

// container - 1
let bodydiv = document.body;
let moodsChange = document.getElementById("moods")
let formLogoName = document.getElementById("logoAndName")
let form1container = document.getElementById("sizing-container")

// container - 2

let form2container = document.getElementById("sizing-container2")




let whiteImage = "https://i.pinimg.com/564x/58/90/29/589029572b642558e0630653216ca162.jpg"
let blackImage = "https://i.pinimg.com/564x/8e/5b/a7/8e5ba7ec864dcd8d4c2b7183b50e18cd.jpg"
visible.addEventListener("change",(e)=>{

    let checkedBox = e.target.checked
    

if (checkedBox) {

  bodydiv.style.background = "black"


  moodsChange.style.color = "white"
  checkBoxLable.innerText = "Dark Mood"

  formLogoName.style.color = "white"

// register page
  form1container.style.background = `url(${blackImage})`
  form1container.style.color = "white"
  form1container.style.backgroundPosition = "center";
  form1container.style.backgroundRepeat = "no-repeat";
  form1container.style.backgroundSize = "cover";
  form1container.style.borderRadius = "4%";
  form1container.style.width = "100%";
  form1container.style.height = "100%";

// login page
  form2container.style.background = `url(${blackImage})`
  form2container.style.color = "white"
  form2container.style.backgroundPosition = "center";
  form2container.style.backgroundRepeat = "no-repeat";
  form2container.style.backgroundSize = "cover";
  form2container.style.borderRadius = "4%";
  form2container.style.width = "100%";
  form2container.style.height = "100%";



  } else {

    bodydiv.style.background = "white"

    moodsChange.style.color = "black"
    checkBoxLable.innerText = "Bright Mood"

    formLogoName.style.color = "black"

// register page
    form1container.style.background = `url(${whiteImage})`
    form1container.style.color = "black"
    form1container.style.backgroundPosition = "center";
    form1container.style.backgroundRepeat = "no-repeat";
    form1container.style.backgroundSize = "cover";
    form1container.style.borderRadius = "4%";
    form1container.style.width = "100%";
    form1container.style.height = "100%";

//login page 
 
    form2container.style.background = `url(${whiteImage})`
    form2container.style.color = "black"
    form2container.style.backgroundPosition = "center";
    form2container.style.backgroundRepeat = "no-repeat";
    form2container.style.backgroundSize = "cover";
    form2container.style.borderRadius = "4%";
    form2container.style.width = "100%";
    form2container.style.height = "100%";


  }

})





// Register form validation

let register = document.getElementById("registerSubmit")



register.addEventListener("click",(event)=>{
    event.preventDefault()


  let nameValidation = document.getElementById("validationTooltip01").value;
  let passwordValidation = document.getElementById("validationTooltip02").value;
  let emailValidation = document.getElementById("exampleInputEmail1").value;
  let phoneNumberValidation = document.getElementById("numberValidation").value;
  let genderValidation = document.querySelector('input[name="exampleRadios"]:checked').value;
  let occupationValidation = document.getElementById("validationTooltip04").value;
  let dateValidation = document.getElementById("datePicker").value;
  let timeValidation = document.getElementById("timePicker").value;


  

  console.log(nameValidation,emailValidation,phoneNumberValidation,passwordValidation,genderValidation,occupationValidation,dateValidation,timeValidation);

// Name Validation
let nameError = document.getElementById("nameError")
console.log(nameError);
  let usernameRegex = /^[a-zA-Z\s]+$/;

  if (usernameRegex.test(nameValidation)) {    
     nameError.innerHTML = ""   
  } else {
     nameError.innerHTML = "Name accepts only in words!"
     nameValidation = " "
  }
 
  

// Password Validation
let passwordError = document.getElementById("passwordError")
let passwordRegex =  /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_]).*$/;

if (passwordRegex.test(passwordValidation )) {
  
  passwordError.innerHTML = ""
} else {
  passwordError.innerHTML = "Password must one special character."
  passwordValidation =" "
}

// Email Validation
let emailError = document.getElementById("emailError");
let emailRegex = /^[a-zA-Z0-9._,%|]+@gmail\.com$/ ;

if (emailRegex.test(emailValidation)) {

    emailError.innerHTML = ""
} else {
    emailError.innerHTML = "Invalide E-mail."
    emailValidation = " "
}

// Number Validation
let numberError = document.getElementById("numberError");
let PhoneNumberRegex = /^\d{10}$/;

if (PhoneNumberRegex.test(phoneNumberValidation)) {
  
  numberError.innerHTML = ""

  
} else {
  numberError.innerHTML = "Check your number."
  phoneNumberValidation = " "
}


// console.log(radioValue);

if (nameValidation && passwordValidation  && emailValidation && phoneNumberValidation&& genderValidation !== null && occupationValidation && dateValidation && timeValidation) {

        var inputAnswers = {
          'Name':nameValidation,
          'Password':passwordValidation,
          'Email':emailValidation,
          'Phone':phoneNumberValidation,
          'Gender':genderValidation,
          'Occupatio':occupationValidation,
          'DateOfEntry':dateValidation,
          'TimeOfEntry':timeValidation
        }
        
        localStorage.setItem("User",JSON.stringify(inputAnswers));
        

      window.location.href = "/homePage.html"


    } else {

        alert('Please Re-enter your details');
    }

})





// login form navigation  

//form containers 
// let form1container = document.getElementById("sizing-container")
// let form2container = document.getElementById("sizing-container2")


let loginBtn1 = document.getElementById("loginBtn")

loginBtn1.addEventListener("click",()=> {


 if (loginBtn1.value === "loginPage") {
  console.log("true");

   form1container.style.display ="none"
   form2container.style.display = "block" 
   


  

 }else{
  console.log("false");
 }


})


// register form 

let registerNavBtn = document.getElementById("registerPage")


registerNavBtn.addEventListener("click",()=> {

if (registerNavBtn.value === "registerPage") {
  
  console.log("true");
   form2container.style.display = "none" ;
   form1container.style.display = "block"


} else {
  console.log("false");
}


})




// getting data from localStorage

let userData = JSON.parse(localStorage.getItem("User"))

console.log(userData);



let logInButton2 = document.getElementById("identifyAccount");

logInButton2.addEventListener("click",(event)=> {
     event.preventDefault()


  let checkName = document.getElementById("userName").value;
  let checkPassword = document.getElementById("userPassword").value;
  let checkEmail = document.getElementById("userEmail").value;
  let checkPhoneNumber = document.getElementById("userNumber").value;
  
  console.log(checkName);
  
  let localStorageName = userData.Name ;
  let localStoragePassword = userData.Password ;
  let localStorageEmail= userData.Email ;
  let localStorageNumber = userData.Phone ;



// name error  
let Error1 = document.getElementById("Error1")

if (checkName === localStorageName) {
  
   Error1.innerHTML = ""
} else {
  Error1.innerHTML = "User name not matched"
}

// Password error  
let Error2 = document.getElementById("Error2")

if (checkPassword === localStoragePassword ) {
  
   Error2.innerHTML = ""
} else {
  Error2.innerHTML = "User password not matched"
}


// Password error  
let Error3 = document.getElementById("Error3")

if (checkEmail === localStorageEmail) {
  
   Error3.innerHTML = ""
} else {
  Error3.innerHTML = "User Email not matched"
}


// Password error  
let Error4 = document.getElementById("Error4")

if (checkPhoneNumber === localStorageNumber) {
  
   Error4.innerHTML = ""
} else {
  Error4.innerHTML = "User phone number not matched"
}

// final checking  the login page

if (checkName === localStorageName && checkPassword === localStoragePassword && checkEmail === localStorageEmail &&  checkPhoneNumber === localStorageNumber) {
  
window.location.href = "/homePage.html"

} else {
  
}

})











