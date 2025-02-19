function calculate (price) {
    if (typeof price !=="number" || price <= 0){
        return "invalid";  
    }

    let vatRate = 7.5 / 100;
    let vat = price*vatRate;
    return vat;
    
}

console.log (calculate (1500)); 



function validContact( contact ){
if(typeof contact !=="string"){
    return "invalid";
}
if(contact.length == 11 && contact.startsWith("01") && !contact.includes(" ")) {
    return true;
}
else{
    return false;
}
}

const max =validContact ("01608010775")
console.log(max)



function willSuccess(marks) {

    let pass = 0;
    let fail = 0;
for (let mark of marks) {
    if(!Array.isArray(marks)) {
        return "invalid"
    }
        if(mark>=50){
            pass++;
        }
        else {
           fail++;
        }
    }

        if(pass > fail) {
            return true;
        }
        else{
         return false;
        }
    }   
    
const marks = [55,75,41,33,0,87,91,30];
const total =willSuccess(marks);
console.log(total);




function validProposal(person1,person2) {
if(typeof person1 !=="object" && typeof person2 !=="object") {
    return "invalid";
}
if(person1.gender !== person2.gender && Math.abs(person1.age - person2.age)<=7) {
    return true;
}
else{
    return false;
}

}

person1 ={
    name:"Sams",
    gender:"male",
    age:25
}
person2 ={
    name:"Sumu",
    gender:"female",
    age:21
}
console.log(validProposal(person1,person2))





function calculateSleepTime(times) {

    let totalTimes = 0;
    let timeCount = {
        hour: 0,
        minute: 0,
        second: 0
    };

    for (let time of times) {

        if (!Array.isArray(times) && typeof times !== "number") {
            return "Invalid";
        }
    
        totalTimes = totalTimes+time;
    }

    timeCount.hour = Math.floor(totalTimes / 3600);
    timeCount.minute = Math.floor((totalTimes % 3600) / 60);
    timeCount.second = totalTimes % 60;

    return timeCount;
}

const times = [1000, 2000, 725];
console.log(calculateSleepTime(times));
