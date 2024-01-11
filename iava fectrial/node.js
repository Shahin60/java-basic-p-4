
let fectrial = 1;
for( let i = 1; i<=40; i++){
    fectrial = fectrial*i;
    console.log(fectrial);
}
function fectrial(n){
    let fect = 1;
    for( let i=1; i<=n; i++){
    fect = fect*i;
    }
return fect;
}
let fectrialNumber = fectrial(5);
console.log(fectrialNumber);


let firstName = "shahin";
let lastName = " ahmed";
let name1 = firstName.concat(lastName);
console.log(name1)

console.log(firstName.length);
console.log(lastName.slice(0,3))
