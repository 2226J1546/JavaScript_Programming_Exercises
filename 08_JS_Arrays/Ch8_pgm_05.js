// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
     "Saturday",
     "Sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [
	[ 354, 132, 210, 221, 481,345,678 ]
  [100, 120, 110, 105, 130, 140, 125], 
  [115, 118, 122, 128, 135, 130, 140], 
  [105, 112, 115, 120, 125, 130, 135], 
[100, 120, 110, 105, 130, 140, 125], 
  [115, 118, 122, 128, 135, 130, 140], 
  [105, 112, 115, 120, 125, 130, 135], 
];
var report = getVisitorReport(visitors, 2);

console.log(report);
function days(one,two,three){
  return two,one,three
}
var day=["mon","tue","wed","thur","fri","sat","sun"]
dayinm=day[2];
  var visitors = [
    [ 354, 132, 210, 221, 481,345,678 ]
    [100, 120, 110, 105, 130, 140, 125], 
    [115, 118, 122, 128, 135, 130, 140], 
    [105, 112, 115, 120, 125, 130, 135], 
  [100, 120, 110, 105, 130, 140, 125], 
    [115, 118, 122, 128, 135, 130, 140], 
    [105, 112, 115, 120, 125, 130, 135], 
  ];
  numin=visitors[2][3];
  let print=days(day,visitors,2)
console.log(`The day ${dayinm},The visitors ${numin},three`)	
function days(one,two)
{
   return one,two
}
let week1=[105, 112, 115, 120, 125, 130, 135]
let week2= [115, 118, 122, 128, 135, 130, 140]
let week3= [100, 120, 110, 105, 130, 140, 125]
let week4=[ 354, 132, 210, 221, 481,345,678 ]
let montharr=[week1,week2,week3,week4]
let day=prompt("Enter a day:")
let week=montharr[2][4]
let res=days(day,montharr)
console.log(`The day ${day},The visitors in a week ${week}`)

/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */
