// blog
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
})

// Click Event to get to -Edit- the hidden input field
const edit = document.getElementsByClassName('btn-edit');
for (const item of edit) {
    item.addEventListener('click', function (event) {
        const div = event.target.parentNode.parentNode.childNodes[13];
        div.setAttribute('class', 'flex py-4 gap-1 justify-center');
    })
}

// Common function for displaying input value of two variables 
function displayInputValue(elementOne, elementTwo, valueOne, valueTwo) {
    const dispalyFirstValue = elementOne;
    dispalyFirstValue.innerText = valueOne;
    dispalyFirstValue.style.fontWeight = 'bold';
    const dispalySecondValue = elementTwo;
    dispalySecondValue.innerText = valueTwo;
    dispalySecondValue.style.fontWeight = 'bold';
}

// Event button to display input value and call display after validation check
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

        // calling for validation
        validation(displayValueOne, displayValueTwo, valueOne, valueTwo);
    })
}

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

// Common function for All input validation check and call for validated value to display
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
        if (valueOne <= 0 || valueTwo <= 0) {
            alert('Please input positive number!')
            return;
        }
        else {
            // calling for display value after validation
            displayInputValue(displayValueOne, displayValueTwo, inputOne, inputTwo)
        }
    }
}


// Common Event Listener to get the values for Calculate and called for display
// except ellipse(pi) calculation part only
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
    const squareMeter = parseFloat((data.CalcResult / 1000).toFixed(2));
    // table
    const tbody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.setAttribute('class', 'hover');
    tr.innerHTML = `
    <th>${count++}</th>
    <td class="td-name">${data.name}</td>
    <td class="td-for-sqm" >${data.CalcResult}cm&#178;</td>
    <td class="td-for-sqm hidden" >${squareMeter}m&#178;</td>
    <td><button class="squareMeter mt-1 py-2 px-7 bg-blue-500 text-white rounded-lg font-semibold">Convert to m<sup>2</sup></button></td>
 
`
    // appending table
    tbody.appendChild(tr);

    // function for showing Square Centimeter to Square Meter
    const btns = document.getElementsByClassName('squareMeter')
    for (const btn of btns) {
        btn.addEventListener('click', function (e) {
            const convertBtn = e.target.parentNode.parentNode.childNodes[9];
            convertBtn.setAttribute('class', 'hidden');
            // Square centimeter on table data
            const showSqr = e.target.parentNode.parentNode.childNodes[7];
            showSqr.setAttribute('class', 'block text-start');
        })
    }
}

// funtion for random card color
function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
const cards = document.querySelectorAll('.display-card');

for (const card of cards) {
    card.addEventListener('mouseover', function (event) {
        color = randomColor();
        card.style.backgroundColor = color;
    })
    // card.addEventListener('mouseleave', function () {
    //     color = randomColor();
    //     card.style.backgroundColor = color;
    // })
}

