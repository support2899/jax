$(document).ready(function () {
    getData();
  });
  
  function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    document.getElementById('rollno').innerHTML = studentObj.rollno;
    document.getElementById('lastName').innerHTML = studentObj.lastName;
    document.getElementById('firstName').innerHTML = studentObj.firstName;
    document.getElementById('email').innerHTML = studentObj.email;

  }