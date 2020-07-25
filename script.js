function validateForm() {
  var a = document.forms["myForm"]["fname"].value;
  if (a == "") {
    alert(" First name must be filled out");
    return false;
  }
  var b = document.forms["myForm"]["lname"].value;
  if (b == "") {
  alert("Last name must be filled out");
    return false;
  }
  var c = document.forms["myForm"]["email"].value;
  if (c == "") {
  alert("Email must be filled out");
    return false;
  }
  var d = document.forms["myForm"]["uid"].value;
  if (d == "") {
  alert("User Id must be filled out");
    return false;
  }
  var e = document.forms["myForm"]["pwd"].value;
  if (e == "") {
  alert("Password must be filled out");
    return false;

    
  }
  
}