let packagePrices = {
    "coxs-bazar": 4500,
    "sundarbans": 7800,
    "sajek": 6200,
    "sreemangal": 3900,
    "kathmandu": 36500,
    "bangkok": 42500
};

let paymentNames = {
    "bkash": "bKash",
    "nagad": "Nagad",
    "card": "Card",
    "pay-later": "Pay later"
};

function showBooking(packageName) {
    let booking = document.getElementById("booking");
    let form = booking.getElementsByTagName("form")[0];
    let message = document.getElementById("booking-note");
    let slip = document.getElementById("payment-slip");

    form.reset();

    if (slip) {
        slip.hidden = true;
    }

    document.getElementById("package").value = packageName;
    document.getElementById("guests").value = "1";

    message.textContent = "Fill in the form to validate your demo booking.";
    message.style.color = "";

    booking.hidden = false;
    booking.scrollIntoView();
}

function showError(field, errorText) {
    let message = document.getElementById("booking-note");

    message.textContent = errorText;
    message.style.color = "#ff8080";
    field.focus();

    return false;
}

function validateForm() {
    let travelerField = document.getElementById("traveler");
    let phoneField = document.getElementById("phone");
    let emailField = document.getElementById("email");
    let packageField = document.getElementById("package");
    let dateField = document.getElementById("date");
    let guestsField = document.getElementById("guests");
    let paymentOptions = document.getElementsByName("payment");

    let traveler = travelerField.value.trim();
    let phone = phoneField.value.trim();
    let email = emailField.value.trim();
    let travelDate = dateField.value;
    let guests = guestsField.value;

    let phonePattern = /^(\+?88)?01[3-9][0-9]{8}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let wholeNumberPattern = /^[0-9]+$/;

    // Traveler name
    if (traveler === "") {
        return showError(travelerField, "Enter your full name.");
    }

    if (traveler.length < 2) {
        return showError(travelerField, "Your name must have at least 2 characters.");
    }

    // Phone number
    if (phone === "") {
        return showError(phoneField, "Enter your phone number.");
    }

    if (!phonePattern.test(phone)) {
        return showError(phoneField, "Enter a valid Bangladesh mobile number, such as 01712345678.");
    }

    // Email
    if (email === "") {
        return showError(emailField, "Enter your email address.");
    }

    if (!emailPattern.test(email) || !emailField.validity.valid) {
        return showError(emailField, "Enter a valid email address, such as name@example.com.");
    }

    // Tour package
    if (packageField.value === "") {
        return showError(packageField, "Select a tour package.");
    }

    let price = packagePrices[packageField.value];

    if (typeof price !== "number") {
        return showError(packageField, "Select a valid tour package.");
    }

    // Travel date
    if (dateField.validity.badInput) {
        return showError(dateField, "Enter a valid travel date.");
    }

    if (travelDate === "") {
        return showError(dateField, "Select your travel date.");
    }

    let selectedDate = new Date(travelDate + "T00:00:00");
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
        return showError(dateField, "Enter a valid travel date.");
    }

    if (selectedDate < today) {
        return showError(dateField, "Travel date must be today or later.");
    }

    // Number of travelers
    if (guestsField.validity.badInput) {
        return showError(guestsField, "Enter a whole number from 1 to 20 travelers.");
    }

    if (guests === "") {
        return showError(guestsField, "Enter the number of travelers.");
    }

    let guestCount = Number(guests);

    if (!wholeNumberPattern.test(guests) || guestCount < 1 || guestCount > 20) {
        return showError(guestsField, "Enter a whole number from 1 to 20 travelers.");
    }

    // Payment method
    let payment = "";

    for (let i = 0; i < paymentOptions.length; i++) {
        if (paymentOptions[i].checked) {
            payment = paymentOptions[i].value;
            break;
        }
    }

    if (payment === "") {
        return showError(paymentOptions[0], "Select a payment method.");
    }

    let packageName = packageField.options[packageField.selectedIndex].text;
    let total = price * guestCount;

    showPaymentSlip(traveler, packageName, travelDate, guestCount, payment, total);

    return false;
}

function addSlipLine(slip, text) {
    let line = document.createElement("p");
    line.textContent = text;
    slip.appendChild(line);
}

function showPaymentSlip(traveler, packageName, travelDate, guests, payment, total) {
    let booking = document.getElementById("booking");
    let form = booking.getElementsByTagName("form")[0];
    let slip = document.getElementById("payment-slip");

    if (!slip) {
        slip = document.createElement("div");
        slip.id = "payment-slip";
        slip.className = "panel";
        slip.tabIndex = -1;
        booking.parentNode.insertBefore(slip, booking.nextSibling);
    }

    slip.textContent = "";

    let title = "Payment successful";
    let amountLabel = "Demo amount paid";

    if (payment === "pay-later") {
        title = "Payment pending";
        amountLabel = "Amount due";
    }

    let heading = document.createElement("h2");
    heading.textContent = title;
    slip.appendChild(heading);

    let receiptLines = [
        "Traveler: " + traveler,
        "Package: " + packageName,
        "Travel date: " + travelDate,
        "Number of travelers: " + guests,
        "Payment method: " + paymentNames[payment],
        amountLabel + ": BDT " + total.toLocaleString("en-BD"),
        "Thank you for booking with Shoreline Tours!"
    ];

    for (let i = 0; i < receiptLines.length; i++) {
        addSlipLine(slip, receiptLines[i]);
    }

    let saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.className = "btn primary";
    saveButton.textContent = "Save slip";

    saveButton.onclick = function () {
        let slipText = title + "\n\n" + receiptLines.join("\n") + "\n";
        let file = new Blob([slipText], { type: "text/plain;charset=utf-8" });
        let fileUrl = URL.createObjectURL(file);

        let downloadLink = document.createElement("a");
        downloadLink.href = fileUrl;
        downloadLink.download = "shoreline-payment-slip.txt";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();

        slip.hidden = true;

        setTimeout(function () {
            URL.revokeObjectURL(fileUrl);
        }, 1000);
    };

    slip.appendChild(saveButton);

    form.reset();
    booking.hidden = true;
    slip.hidden = false;
    slip.focus();
    slip.scrollIntoView();
}