
/*
         Email:utsav_patel@student.uml.edu
           Name: Utsav Patel
           I am a junior/senoir at Umass Lowell in  91.61 GUI Programming I
           91.461 Assignment:  Creating Your First Web Page
           Utsav Patel, UMass Lowell Computer Science, upatel@cs.uml.edu
           Copyright (c) 2019 by Utsav Patel.  All rights reserved.  May be
           freely copied or excerpted for educational purposes with credit to
           the author.
           updated by UP on Novermber 14th, 2019 at 9:23 AM
           w3schools.com was used for references
*/
function create_outputtable() {
  /* Stores in the values entered by user*/
  var horizontal = Number(document.getElementById("firstHorizontal").value);
  var secondhorizontal = Number(document.getElementById("lastHorizontal").value);
  var vertical = Number(document.getElementById("firstVertical").value);
  var secondvertical = Number(document.getElementById("lastVertical").value);

  /* If any decimal number is entered/the form will not accept it */

  if(!Number.isInteger(horizontal) || !Number.isInteger(secondhorizontal) || !Number.isInteger(vertical) || !Number.isInteger(secondvertical))
  {
    alert("Invalid input/please read");
  }
  else {
    outputnumber(horizontal, secondhorizontal, vertical, secondvertical);
  }
}
/* outputing the numbers in the table*/
function outputnumber(horizontal, secondhorizontal, vertical, secondvertical) {

/* If larger number is entered it will show error
else make table.*/
   if(horizontal > secondhorizontal || vertical > secondvertical){
    alert("Invalid input/please read");

   }
   else {
   var outputnumber = "<tr><th> </th>";
   for(var i = horizontal; i <= secondhorizontal; i++){
     outputnumber += "<th>" + i + "</th>";

   }
  /*This will output all the numbers and do the calculation */
   outputnumber += "</tr>";
   for(var j = vertical; j <= secondvertical; j++) {
     outputnumber += "<tr><th>" + j + "</th>";
     for(var x = horizontal; x <= secondhorizontal; x++) {
     outputnumber += "<td>" + j*x + "</td>";
     }
     outputnumber += "</tr>";

   }

   /* Printing the table in the HTML filea  */

  var table = document.getElementById("multipcationtable").innerHTML = outputnumber;

  }

}
  /* Extra feature to reset the entered input.
    can be used if input entered wrongly*/
function reset() {
  document.getElementById("myFormreset").reset();
}
