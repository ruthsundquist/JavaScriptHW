// from data.js
var dataTable = data;
//write a clear function - directly after line 6
// YOUR CODE HERE!
//console.log("app.js is connected")
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    tbody=d3.select("tbody");
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      //if () //check the keys here!!~!
      var cell = row.append("td");
      cell.text(value);
    });
  });


function myFunction() {
    //console.log("myfunction got called")
    // code to clear table body 
    var dataTable = d3.select("#ufo-table");
    var tblBody = dataTable.select("#ufosighted");
    tblBody.html("");

    var date1 = document.getElementById("datetime").value;
    console.log(date1)

    var ufosighted = document.getElementById("ufosighted");
    for (var i = 0; i < data.length; i++) {
        if (data[i].datetime == date1) {
            var row = document.createElement("tr");
            ufosighted.append(row);
            Object.entries(data[i]).forEach(([key, value]) => {
                var cell = document.createElement("td");
                cell.append(value);
                row.append(cell);
            }
            )
        }
    }

}
