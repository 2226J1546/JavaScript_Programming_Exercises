// Passing a function an object as an argument

var planet1;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position;
};

console.log(getPlanetInfo(planet1));
let planet2 = {
    name: "Mercury",
    position: 1,
    type: "Terrestrial",
    radius: 2439.7,
    sizeRank: 8
};

let get=function (planets){
    return planet2.name+":planet radius "+planet.radius;
};
console.log(get(planet2));
    


/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */
