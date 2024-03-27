// Code your solution here
//function show (value){
    //console.log(value);
//}
const drivers = ['bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(array, driverName){
let result = array.filter(value => value.toLowerCase() === driverName.toLowerCase())
return result;
}
//show (findMatching(drivers, "Bobby"));

function fuzzyMatch(array, driverName){
    let result = array.filter(value => value.toLowerCase()[0] === driverName.toLowerCase()[0]);
    return result;
}

function matchName(array, driverName){
    let result = array.filter(value => value.name.toLowerCase()[0] === driverName.toLowerCase()[0])
    return (result);
}

show (matchName(driverDetails, "Bobby"));