function createCalendar() {

var year = document.getElementById("y").value;

var month = document.getElementById("m").value;

let mon = month - 1; // months in JS are 0..11, not 1..12

let d = new Date(year, mon);

let table = '<table><tr><th>SUN</th><th>MON</th><th>TUE</th> <th>WED</th>
<th>THU</th><th>FRI</th><th>SAT</th></tr><tr>';

// Blank cell for the first row from Sunday till the first day of the month

// * * * 1 2 3 4

for (let i = 0; i < d.getDay(); i++) {

table += '<td></td>';

}
// <td> with actual dates

while (d.getMonth() == mon) {

table += '<td>' + d.getDate() + '</td>';

if (d.getDay() % 7 == 6) { // Saturday,last day of week - newline

table += '</tr><tr>';

}

d.setDate(d.getDate() + 1);

}

// add spaces after last days of month to fill table cell

if (d.getDay() != 0) {

for (let i = d.getDay(); i < 7; i++) {

table += '<td></td>';

}

}

// close the table

table += '</tr></table>';

document.getElementById("cal").innerHTML = table;

}