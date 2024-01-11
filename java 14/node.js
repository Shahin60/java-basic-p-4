
let spase = "Shahin is         good      student. at habiganj polytechic inistitute."
let count = 0;
for (let i = 0; i < spase.length; i++) {
    let countNumber = spase[i];
    if (countNumber == " " && spase[i - 1] != " ") {
        count++;
    }
}
console.log(count);

function fectrial(num) {
    let fect = 1;
    for (let i = 1; i <= num; i++) {
        fect = fect * i;
    }
    return fect;
}
let result = fectrial(5);
console.log(result);











var car = "shahin walid   rasel habiganj polytechnic institute"

var number = 0;
for (var i = 0; i < car.length; i++) {
    var countNam = car[i];
    if (countNam == " " && car[i - 1] != " ") {
        number++;
    }
}
console.log(number);




// space count


var string = "i ma      student for           class seven";
var spaces = 0;
for (var i = 0; i < string.length; i++) {
    var counter = string[i];
    if (counter == " " && string[i - 1] != " ") {
        spaces++;
    }
}
console.log(spaces);










