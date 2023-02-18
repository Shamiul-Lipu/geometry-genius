// Click Event to get to -Edit- the hidden input field
const edit = document.getElementsByClassName('btn-edit');
for (const item of edit) {
    item.addEventListener('click', function (event) {
        const div = event.target.parentNode.parentNode.childNodes[13];
        div.setAttribute('class', 'flex py-4 gap-1 justify-center');
    })
}

// function for displaying input value of two variables 
function displayInputValue(elementOne, elementTwo, valueOne, valueTwo) {
    const dispalyFirstValue = elementOne;
    dispalyFirstValue.innerText = valueOne;
    dispalyFirstValue.style.fontWeight = 'bold';
    const dispalySecondValue = elementTwo;
    dispalySecondValue.innerText = valueTwo;
    dispalySecondValue.style.fontWeight = 'bold';
}

// Rhombus Card input, display and validation called from here
document.getElementById('special-btn-to-display').addEventListener('click', function (event) {
    const inputOne = event.target.parentNode.parentNode.childNodes[13].childNodes[1].value;
    const inputTwo = event.target.parentNode.parentNode.childNodes[13].childNodes[5].value;
    const displayValueOne = document.getElementById('spacial-value-one');
    const displayValueTwo = document.getElementById('spacial-value-two');
    const valueOne = parseFloat(inputOne);
    const valueTwo = parseFloat(inputTwo);
    validation(displayValueOne, displayValueTwo, valueOne, valueTwo);
})

// Rhombus btn to display input value, after input and validation check
const clickToDisplay = document.getElementsByClassName('btn-to-display');
for (const item of clickToDisplay) {
    item.addEventListener('click', function (event) {
        // getting the input value 
        const inputOne = event.target.parentNode.parentNode.childNodes[13].childNodes[1].value;
        const inputTwo = event.target.parentNode.parentNode.childNodes[13].childNodes[5].value;
        // getting the dispaly innerText
        const displayValueOne = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[1];

        const displayValueTwo = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[3];

        // converting input value to number
        const valueOne = parseFloat(inputOne);
        const valueTwo = parseFloat(inputTwo);

        validation(displayValueOne, displayValueTwo, valueOne, valueTwo);
    })
}
// Rhombus input value calculation and button for set the value to the table
document.getElementById('btn-rhombus-calculate').addEventListener('click', function (event) {
    // getting the dispaly innerText
    const itemName = event.target.parentNode.childNodes[3].innerText;
    const valueOne = document.getElementById('spacial-value-one').innerText;
    const valueTwo = document.getElementById('spacial-value-two').innerText;

    const result = parseFloat((0.5 * valueOne * valueTwo).toFixed(2));
    const table = {
        name: itemName,
        CalcResult: result,
    }

    displayTable(table);
})

// pi Ellipse calculation and button for set the value to the table
document.getElementById('btn-ellipse-calculate').addEventListener('click', function () {
    // getting the display innertext
    const itemName = document.getElementById('ellipse-id-name').innerText;
    const valueOne = document.getElementById('pi-value-one').innerText;
    const valueTwo = document.getElementById('pi-value-two').innerText;

    const result = parseFloat((3.14159265359 * valueOne * valueTwo).toFixed(2));
    const table = {
        name: itemName,
        CalcResult: result,
    }

    displayTable(table);
})

// Common function for All input validation check and call for validated display value
function validation(elementOne, elementTwo, valueOne, valueTwo) {
    const displayValueOne = elementOne;
    const displayValueTwo = elementTwo;
    const inputOne = valueOne;
    const inputTwo = valueTwo;
    // checking input validation
    if (isNaN(valueOne) || isNaN(valueTwo)) {
        alert('Not valid input, Please input number!')
        return;
    }
    else {
        if (valueOne < 0 || valueTwo < 0) {
            alert('Please input positive number!')
            return;
        }
        else {
            displayInputValue(displayValueOne, displayValueTwo, inputOne, inputTwo)
        }
    }
}


// Common Event Listener to get the values for Calculate and called for display
// except Rhombus input and calculation 
// and ellipse calculation part only
const items = document.getElementsByClassName('btn-calculate');
for (const item of items) {
    item.addEventListener('click', function (event) {
        const valueOne = event.target.parentNode.childNodes[9].childNodes[1].childNodes[1].innerText;
        const valueTwo = event.target.parentNode.childNodes[9].childNodes[1].childNodes[3].innerText;
        const itemName = event.target.parentNode.childNodes[3].innerText;
        // for calculate Triangle , Pentagon, Parallelogram, rectangle. 
        // accessing element by NodeList length.
        let result;
        const arr = event.target.parentNode.childNodes[5].childNodes;

        // for calculate Triangle , Pentagon
        if (arr.length == 6) {
            result = parseFloat((0.5 * valueOne * valueTwo).toFixed(2));
        }
        // for calculate Parallelogram, rectangle
        else {
            result = parseFloat((valueOne * valueTwo).toFixed(2));
        }

        const tableData = {
            name: itemName,
            CalcResult: result,
        }

        displayTable(tableData);
    })
}

// Common function for all Calculated value to daiplay on table
let count = 1;
function displayTable(data) {
    const tbody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.setAttribute('class', 'hover');
    tr.innerHTML = `
    <th>${count++}</th>
    <td>${data.name}</td>
    <td>${data.CalcResult}</td>
    <td><button class="mt-1 py-2 px-7 bg-blue-500 text-white rounded-lg font-semibold">Convert to m<sup>2</sup></button></td>

`
    tbody.appendChild(tr);
}





