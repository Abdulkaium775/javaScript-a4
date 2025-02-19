function calculateVAT(price) {
    if (typeof price !=="number" || price <= 0 ){
        return "invalid";  
    }

    let vatRate = 7.5 / 100;
    let vat = price*vatRate;
    return vat;
    
}







function validContact(contact){
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







function willSuccess(marks) {

    if(!Array.isArray(marks)) {
        return "invalid"
    }

    let pass = 0;
    let fail = 0;
for (let mark of marks) {
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







function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    let totalTimes = 0;
    let timeCount = {
        hour: 0,
        minute: 0,
        second: 0
    };

    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }
        totalTimes += time;
    }

    timeCount.hour = Math.floor(totalTimes / 3600);
    timeCount.minute = Math.floor((totalTimes % 3600) / 60);
    timeCount.second = totalTimes % 60;

    return timeCount;
}



