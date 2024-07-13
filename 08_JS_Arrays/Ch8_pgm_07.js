// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];
function getTotalLetters(arr) {
  return arr.reduce((total, showItem) => total + showItem.length, 0);
}
showInfo = function (itemToShow) {
    console.log(itemToShow);
    const totalLetters = getTotalLetters(showInfo);
console.log(`Total letters in items: ${totalLetters}`);
};

items.forEach(showInfo);
res=items.push("The good","The godess","Lord")
items[3]="The Grand Canyon"
console.log(items)


/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */
