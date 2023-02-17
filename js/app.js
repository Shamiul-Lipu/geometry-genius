// // Event Listener for Calculate
// const items = document.getElementsByClassName('btn-calculate');
// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         const inputOne = event.target.parentNode.childNodes[13].childNodes[1].value;
//         const inputTwo = event.target.parentNode.childNodes[13].childNodes[5].value;

//     })
// }

// // function for calculate triangle , rhombus, pentagon
// function pointfive(valueOne, valueTwo){
//     const result = 0.5 * valueOne * valueTwo;

// }

// Click Event to get to Edit the input field
const edit = document.getElementsByClassName('btn-edit');
for (const item of edit) {
    item.addEventListener('click', function (event) {
        const div = event.target.parentNode.parentNode.childNodes[13];
        div.setAttribute('class', 'flex');
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
// 
document.getElementById('special-btn-to-display').addEventListener('click', function (event) {
    const inputOne = event.target.parentNode.parentNode.childNodes[13].childNodes[1].value;
    const inputTwo = event.target.parentNode.parentNode.childNodes[13].childNodes[5].value;
    const displayValueOne = document.getElementById('spacial-value-one');
    const displayValueTwo = document.getElementById('spacial-value-two');
    const valueOne = parseFloat(inputOne);
    const valueTwo = parseFloat(inputTwo);
    validation(displayValueOne, displayValueTwo, valueOne, valueTwo);
})

// 
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

// 
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