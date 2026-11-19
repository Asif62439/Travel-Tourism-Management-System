//Bus validation

document.getElementById("busForm").addEventListener("submit", function (event) {

    let isValid = true;

    // Catch error
    document.getElementById("busNameError").innerHTML = "";  
    document.getElementById("busClassError").innerHTML = "";
    document.getElementById("busFromError").innerHTML = "";
    document.getElementById("busToError").innerHTML = "";
    document.getElementById("busDateError").innerHTML = "";
    document.getElementById("busTimeError").innerHTML = "";
    document.getElementById("busPassengerError").innerHTML = "";


    //validation
    let busName = document.getElementById("busName").value;
    if(busName===""){
        document.getElementById("busNameError").innerHTML = "*Please select bus";
        isValid = false;
    }


    let busClass = document.getElementById("busClass").value;
    if (busClass === "") {
        document.getElementById("busClassError").innerHTML = "*Please select bus class";
        isValid = false;
    }

    let busFrom = document.getElementById("busFrom").value;
    if (busFrom === "" ) {
        document.getElementById("busFromError").innerHTML = "*Please select departure";
        isValid = false;
    }

    let busTo = document.getElementById("busTo").value;  
    if (busTo==="") {
        document.getElementById("busToError").innerHTML = "*Please select arrival";
        isValid = false;
    }

    let busDate = document.getElementById("busDate").value;
    if (busDate === "") {
        document.getElementById("busDateError").innerHTML = "*Please select date";
        isValid = false;
    }

    let busTime = document.getElementById("busTime").value;
    if (busTime === "") {
        document.getElementById("busTimeError").innerHTML = "*Please select time";
        isValid = false;
    }

    let busPassenger = document.getElementById("busPassenger").value;
    if (busPassenger === "" || !(busPassenger > 1 && busPassenger < 6)) {
    document.getElementById("busPassengerError").innerHTML = "*Please select members (maximum 5 members)";
    isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }

    else {
        event.preventDefault();
        alert("Booking Form submitted successfully!");
    }

});

//Train validation

document.getElementById("trainForm").addEventListener("submit", function (event) {

    let isValid = true;

    // Catch error
document.getElementById("trainNameError").innerHTML = "";
document.getElementById("trainClassError").innerHTML = "";
document.getElementById("trainFromError").innerHTML = "";
document.getElementById("trainToError").innerHTML = "";
document.getElementById("trainDateError").innerHTML = "";
document.getElementById("trainTimeError").innerHTML = "";
document.getElementById("trainPassengersError").innerHTML = "";
    
// Validation

let trainName = document.getElementById("trainName").value;
if (trainName === "") {
    document.getElementById("trainNameError").innerHTML = "*Please select train";
    isValid = false;
}

let trainClass = document.getElementById("trainClass").value;
if (trainClass === "") {
    document.getElementById("trainClassError").innerHTML = "*Please select seat class";
    isValid = false;
}

let trainFrom = document.getElementById("trainFrom").value;
if (trainFrom === "") {
    document.getElementById("trainFromError").innerHTML = "*Please select departure";
    isValid = false;
}

let trainTo = document.getElementById("trainTo").value;
if (trainTo === "") {
    document.getElementById("trainToError").innerHTML = "*Please select arrival";
    isValid = false;
}

let trainDate = document.getElementById("trainDate").value;
if (trainDate === "") {
    document.getElementById("trainDateError").innerHTML = "*Please select date";
    isValid = false;
}

let trainTime = document.getElementById("trainTime").value;
if (trainTime === "") {
    document.getElementById("trainTimeError").innerHTML = "*Please select time";
    isValid = false;
}

let trainPassengers = document.getElementById("trainPassengers").value;
if (trainPassengers === "" || !(trainPassengers >= 1 && trainPassengers <= 10)) {
    document.getElementById("trainPassengersError").innerHTML = "*Please select passengers (maximum 10 members)";
    isValid = false;
}

if (!isValid) {
    event.preventDefault();
}

else {
    event.preventDefault();
    alert("Booking Form submitted successfully!");
}
});

//Flight Validation

document.getElementById("flightForm").addEventListener("submit", function (event) {

    let isValid = true;

document.getElementById("flightNameError").innerHTML = "";
document.getElementById("flightClassError").innerHTML = "";
document.getElementById("flightFromError").innerHTML = "";
document.getElementById("flightToError").innerHTML = "";
document.getElementById("flightDateError").innerHTML = "";
document.getElementById("flightTimeError").innerHTML = "";
document.getElementById("flightPassengersError").innerHTML = "";


let flightName = document.getElementById("flightName").value;
if (flightName === "") {
    document.getElementById("flightNameError").innerHTML = "*Please select airline";
    isValid = false;
}

let flightClass = document.getElementById("flightClass").value;
if (flightClass === "") {
    document.getElementById("flightClassError").innerHTML = "*Please select seat class";
    isValid = false;
}

let flightFrom = document.getElementById("flightFrom").value;
if (flightFrom === "") {
    document.getElementById("flightFromError").innerHTML = "*Please select departure";
    isValid = false;
}

let flightTo = document.getElementById("flightTo").value;
if (flightTo === "") {
    document.getElementById("flightToError").innerHTML = "*Please select destination";
    isValid = false;
}

let flightDate = document.getElementById("flightDate").value;
if (flightDate === "") {
    document.getElementById("flightDateError").innerHTML = "*Please select date";
    isValid = false;
}

let flightTime = document.getElementById("flightTime").value;
if (flightTime === "") {
    document.getElementById("flightTimeError").innerHTML = "*Please select time";
    isValid = false;
}

let flightPassengers = document.getElementById("flightPassengers").value;
if (flightPassengers === "" || !(flightPassengers >= 1 && flightPassengers <= 5)) {
    document.getElementById("flightPassengersError").innerHTML = "*Please select passengers (maximum 5 members)";
    isValid = false;
}

if (!isValid) {
    event.preventDefault();
}

else {
    event.preventDefault();
    alert("Booking Form submitted successfully!");
}
});

document.getElementById("busForm").addEventListener("reset", function () {

    document.getElementById("busNameError").innerHTML = "";
    document.getElementById("busClassError").innerHTML = "";
    document.getElementById("busFromError").innerHTML = "";
    document.getElementById("busToError").innerHTML = "";
    document.getElementById("busDateError").innerHTML = "";
    document.getElementById("busTimeError").innerHTML = "";
    document.getElementById("busPassengerError").innerHTML = "";

});

document.getElementById("trainForm").addEventListener("reset", function () {

    document.getElementById("trainNameError").innerHTML = "";
    document.getElementById("trainClassError").innerHTML = "";
    document.getElementById("trainFromError").innerHTML = "";
    document.getElementById("trainToError").innerHTML = "";
    document.getElementById("trainDateError").innerHTML = "";
    document.getElementById("trainTimeError").innerHTML = "";
    document.getElementById("trainPassengersError").innerHTML = "";

});

document.getElementById("flightForm").addEventListener("reset", function () {

    document.getElementById("flightNameError").innerHTML = "";
    document.getElementById("flightClassError").innerHTML = "";
    document.getElementById("flightFromError").innerHTML = "";
    document.getElementById("flightToError").innerHTML = "";
    document.getElementById("flightDateError").innerHTML = "";
    document.getElementById("flightTimeError").innerHTML = "";
    document.getElementById("flightPassengersError").innerHTML = "";

});

