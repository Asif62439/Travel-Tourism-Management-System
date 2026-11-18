const maxGuests = { standard: 2, deluxe: 3, family: 5 };

const roomNames = {
  standard: "Standard",
  deluxe: "Deluxe",
  family: "Family suite"
};

const hotelNames = {
  "ocean-breeze": "Ocean Breeze Resort",
  "green-hill": "Green Hill Lodge",
  "city-central": "City Central Hotel"
};

const paymentIds = ["pay_cash", "pay_card", "pay_mobile"];

const allIds = [
  "full_name", "email", "phone", "hotel", "room_type",
  "checkin", "checkout", "adults", "children", "pay_mobile", "terms"
];

function showError(id, message) {
  const el = document.getElementById(id);
  let box = document.getElementById("err_" + id);

  if (box === null) {                      
    box = document.createElement("span");
    box.id = "err_" + id;
    box.style.display = "block";
    box.style.color = "red";
    box.style.fontSize = "0.8rem";
    box.style.marginTop = "4px";
    el.parentNode.appendChild(box);        
  }

  box.innerHTML = message;
  el.style.borderColor = "red";
  el.style.backgroundColor = "#fdecea";
  return false;                            
}

function clearError(id) {
  const el = document.getElementById(id);
  const box = document.getElementById("err_" + id);

  if (box !== null) {
    box.innerHTML = "";
  }
  el.style.borderColor = "";               
  el.style.backgroundColor = "";
  return true;                             
}

function clearAllErrors() {
  for (let i = 0; i < allIds.length; i++) {
    clearError(allIds[i]);
  }
}

function getPayment() {
  for (let i = 0; i < paymentIds.length; i++) {
    const radio = document.getElementById(paymentIds[i]);
    if (radio.checked) {
      return radio.value;
    }
  }
  return "";
}


function checkName() {
  const name = document.getElementById("full_name").value.trim();

  if (name === "") {
    return showError("full_name", "Full name is required.");
  }
  if (name.length < 3) {
    return showError("full_name", "Name must be at least 3 characters.");
  }
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return showError("full_name", "Name cannot contain numbers.");
    }
  }
  return clearError("full_name");
}

function checkEmail() {
  const email = document.getElementById("email").value.trim();
  const at = email.indexOf("@");
  const dot = email.indexOf(".", at);      
  if (email === "") {
    return showError("email", "Email is required.");
  }
  if (at < 1 || email.indexOf("@", at + 1) !== -1 || email.indexOf(" ") !== -1 ||
      dot < at + 2 || dot === email.length - 1) {
    return showError("email", "Enter a valid email, e.g. name@example.com");
  }
  return clearError("email");
}

function checkPhone() {
  const phone = document.getElementById("phone").value.trim();

  if (phone === "") {
    return showError("phone", "Phone number is required.");
  }
  if (phone.length !== 11 || phone[0] !== "0" || phone[1] !== "1") {
    return showError("phone", "Phone must be 11 digits and start with 01.");
  }
  for (let i = 0; i < phone.length; i++) {
    if (phone[i] < "0" || phone[i] > "9") {
      return showError("phone", "Phone can contain digits only.");
    }
  }
  return clearError("phone");
}

function checkHotel() {
  if (document.getElementById("hotel").value === "") {
    return showError("hotel", "Please select a hotel.");
  }
  return clearError("hotel");
}

function checkRoom() {
  if (document.getElementById("room_type").value === "") {
    return showError("room_type", "Please select a room type.");
  }
  return clearError("room_type");
}

function checkCheckin() {
  if (document.getElementById("checkin").value === "") {
    return showError("checkin", "Check-in date is required.");
  }
  return clearError("checkin");
}

function checkCheckout() {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (checkout === "") {
    return showError("checkout", "Check-out date is required.");
  }
  if (checkin !== "" && checkout <= checkin) {
    return showError("checkout", "Check-out must be after the check-in date.");
  }
  return clearError("checkout");
}

function checkAdults() {
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;
  const room = document.getElementById("room_type").value;

  if (adults === "") {
    return showError("adults", "Number of adults is required.");
  }
  if (adults < 1 || adults % 1 !== 0) {
    return showError("adults", "Adults must be a whole number, at least 1.");
  }
  if (room !== "" && adults * 1 + children * 1 > maxGuests[room]) {
    return showError("adults", "A " + roomNames[room] + " room allows at most " +
                     maxGuests[room] + " guests (adults + children).");
  }
  return clearError("adults");
}

function checkChildren() {
  const children = document.getElementById("children").value;

  if (children === "") {                 
    return clearError("children");
  }
  if (children < 0 || children % 1 !== 0) {
    return showError("children", "Children must be a whole number (0 or more).");
  }
  return clearError("children");
}

function checkPayment() {
  if (getPayment() === "") {
    return showError("pay_mobile", "Please choose a payment method.");
  }
  return clearError("pay_mobile");
}

function checkTerms() {
  if (document.getElementById("terms").checked === false) {
    return showError("terms", "You must agree to the terms and cancellation policy.");
  }
  return clearError("terms");
}


function validateForm() {
  const results = [
    checkName(), checkEmail(), checkPhone(), checkHotel(), checkRoom(),
    checkCheckin(), checkCheckout(), checkAdults(), checkChildren(),
    checkPayment(), checkTerms()
  ];

  if (results.indexOf(false) !== -1) {     
    alert("Please correct the fields marked in red.");
    return false;                          
  }

  const booking = {
    name: document.getElementById("full_name").value.trim(),
    hotel: hotelNames[document.getElementById("hotel").value],
    room: roomNames[document.getElementById("room_type").value],
    checkin: document.getElementById("checkin").value,
    checkout: document.getElementById("checkout").value,
    adults: document.getElementById("adults").value,
    children: document.getElementById("children").value || "0",
    payment: getPayment()
  };
  console.log(booking);

  alert("Thank you, " + booking.name + "!\n" +
        booking.room + " room at " + booking.hotel + "\n" +
        "From " + booking.checkin + " to " + booking.checkout);
  return true;                           
}


function datesChanged() {             
  checkCheckin();
  if (document.getElementById("checkout").value !== "") {
    checkCheckout();
  }
}

function guestsChanged() {                 
  checkAdults();
  checkChildren();
}

document.getElementById("full_name").addEventListener("change", checkName);
document.getElementById("email").addEventListener("change", checkEmail);
document.getElementById("phone").addEventListener("change", checkPhone);
document.getElementById("hotel").addEventListener("change", checkHotel);
document.getElementById("room_type").addEventListener("change", checkRoom);
document.getElementById("room_type").addEventListener("change", guestsChanged);
document.getElementById("checkin").addEventListener("change", datesChanged);
document.getElementById("checkout").addEventListener("change", checkCheckout);
document.getElementById("adults").addEventListener("change", guestsChanged);
document.getElementById("children").addEventListener("change", guestsChanged);
document.getElementById("terms").addEventListener("change", checkTerms);

for (let i = 0; i < paymentIds.length; i++) {
  document.getElementById(paymentIds[i]).addEventListener("change", checkPayment);
}

document.querySelector("form").addEventListener("reset", clearAllErrors);