
/* Price update */

function unitPriceCalc(line) {
    let dayHourRate = line.querySelector("select.dayHourRate").value;
    let ageRate = line.querySelector("select.ageRate").value;

    let priceArray = {
        "adult": {
            "weekDay": 10,
            "weekNight": 12,
            "weekend": 12.50
        }, "child": {
            "weekDay": 5,
            "weekNight": 6,
            "weekend": 6
        }
    };

    let intPriceUnit = priceArray[ageRate][dayHourRate];
    line.querySelector("td.unitPrice").textContent = intPriceUnit;
}

function sumPriceCalc(line) {
    let numberTicket = line.querySelector("input.ticketNumber").value;
    let unitPrice = line.querySelector("td.unitPrice").textContent;
    if (numberTicket == "") {
        line.querySelector("td.sumPrice").textContent = "";
    } else {
        line.querySelector("td.sumPrice").textContent = unitPrice * numberTicket;
    }
}

function priceUpdate(line) {
    unitPriceCalc(line);
    sumPriceCalc(line);
}

/* New line creation*/

function createTR_reservation() {
    let line = document.createElement("tr")
    line.setAttribute("class", "reservation_line")
    line.append(createTD_reservation_age());
    line.append(createTD_reservation_day());
    line.append(createTD_reservation_ticketNumber());
    line.append(createTD_reservation_unitPrice());
    line.append(createTD_reservation_sumPrice());

    let table = document.querySelector(".table_reservation");

    table.append(line);

    console.log(line);
    priceUpdate(line);
}

function createTD_reservation_age() {
    let cell = document.createElement("td");
    cell.append(createSELECT_reservation_age());
    return cell;
}

function createSELECT_reservation_age() {
    let select = document.createElement("select");
    select.onchange = function () { priceUpdate(this.parentNode.parentNode) };
    select.setAttribute("class", "form-control form-control-sm dayHourRate");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "adult");
    option1.selected = true;
    option1.textContent = "Normal";
    select.append(option1);

    let option2 = document.createElement("option");
    option2.setAttribute("value", "child");
    option2.textContent = "Enfant(-14ans)";
    select.append(option2);

    return select;
}

function createTD_reservation_day() {
    let cell = document.createElement("td");
    cell.append(createSELECT_reservation_day());
    return cell;
}

function createSELECT_reservation_day() {
    let select = document.createElement("select");
    select.onchange = function () { priceUpdate(this.parentNode.parentNode) };
    select.setAttribute("class", "form-control form-control-sm dayHourRate");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "weekDay");
    option1.selected = true;
    option1.textContent = "Du lundi au vendredi : 9h à 18h";
    select.append(option1);

    let option2 = document.createElement("option");
    option2.setAttribute("value", "NightDay");
    option2.textContent = "Du lundi au vendredi : soirée";
    select.append(option2);

    let option3 = document.createElement("option");
    option3.setAttribute("value", "weekend");
    option3.textContent = "Le weekend";
    select.append(option3);

    return select;

}

function createTD_reservation_ticketNumber() {
    let cell = document.createElement("td");
    cell.append(createINPUT_reservation_ticket());
    return cell;
}

function createINPUT_reservation_ticket() {
    let input = document.createElement("input");
    input.onchange = function () { priceUpdate(this.parentNode.parentNode) };
    input.setAttribute("class", "ticketNumber");
    input.setAttribute("type", "number");
    input.setAttribute("id", "ticketNumber");
    input.setAttribute("name", "ticketNumber");
    input.setAttribute("min", 1);
    input.setAttribute("max", 10);
    return input;
}

function createTD_reservation_unitPrice() {
    let cell = document.createElement("td");
    cell.setAttribute("class", "unitPrice")
    return cell;
}

function createTD_reservation_sumPrice() {
    let cell = document.createElement("td");
    cell.setAttribute("class", "sumPrice")
    return cell;
}