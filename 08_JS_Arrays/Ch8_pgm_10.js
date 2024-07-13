// Using the arguments passed by forEach - compact

[ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
    console.log("Item: " + item);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
  });
  
  const rect=[
  {length:3,width:6},
  {length:9,width:9}
]
let assignArea=function (one){
  res=one.length * one.width;
  console.log(res)
}
rect.forEach(assignArea)
function showInfo(one){
  return `The length ${one.length},The width ${one.width}`
}
console.log(showInfo(rect[0]))
  
  /* Further Adventures
   *
   * 1) Create an array of rectangle objects.
   *    Each rectangle should have a length
   *    property and a width property.
   *
   * 2) Define an assignArea function that
   *    takes a rectangle as an argument and
   *    assigns an area property holding
   *    the area of the rectangle.
   *
   * 3) Define a showInfo function that
   *    takes a rectangle as an argument and
   *    displays its properties on the console.
   *
   * 4) Use forEach and your two functions
   *    to display info about each of
   *    the rectangles in the array.
   *
   */
