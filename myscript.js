$(document).ready(function(){


    $("#btnAddStudent").click(function () {
        function getStudentData() {
          let student = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            
            email: $("#email").val(),
            
            rollno: $("#rollno").val(),
            
          };
          $("#studentForm")[0].reset();
          return student;
        }
    
        function storeDataToLocalStorage() {
          if (!localStorage.getItem("student")) {
            localStorage.setItem("student", JSON.stringify(getStudentData()));
          } else {
            localStorage.removeItem("student");
            localStorage.setItem("student", JSON.stringify(getStudentData()));
          }
        }
    
        function sendData() {
          let xhr = new XMLHttpRequest();
          let data = JSON.stringify(getStudentData());
          xhr.open("POST", "http://localhost:5500/storedata",true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(data);
        }
    
        storeDataToLocalStorage();
          window.location.href="display_data.html"
      });
    });