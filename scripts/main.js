/* declare all global variables */
const flexContainer = document.querySelector('.flex-container');
const pageHeader = document.querySelector('.page__header');
const InputGroup = document.querySelector('.page__inputGoup');
const table = document.querySelector('.page__table');
const generateBtn = document.querySelector('.page__btn--success');
const collapse = document.querySelector('#checkBox')

let tContainer = document.getElementById('table-container')
let column = document.getElementById('colInput')
let row = document.getElementById('rowInput')
let tbody = document.createElement('tbody')
let thead = table.createTHead();
let trow = thead.insertRow();

const clearWindow = () => {
    if (table.innerHTML != '') {
        table.innerHTML = ''
        mainGenerator()
    } else {
        mainGenerator()
    }
}

const mainGenerator = () => {
    generateTableHead();
    genereteRows();
    console.log(table)
}

/* function to generate table header */
const generateTableHead = () => {
    for (let i = 0; i < column.value; i++) {
        let th = document.createElement('th');
        let text = document.createTextNode('HEAD');
        console.log('Why my head is not working')
        th.appendChild(text);
        trow.appendChild(th);
    }
    thead.style.backgroundColor = '#a2a8a3';
}

/* function to generate table rows ,<tr>, and populate them with data ,<td>, */
const genereteRows = () => {

    for (let i = 0; i < row.value; i++) {
        let tr = document.createElement('tr')

        for (let j = 0; j < column.value; j++) {
            let td = document.createElement('td')
            // let text = document.createTextNode('Value');
            td.textContent = 'Value'
            tr.append(td)
        }
        tbody.append(tr)
    }
    table.appendChild(tbody)
}
console.log(table)

function collapseBorder() {

    if (collapse.checked) {
        table.style.borderCollapse = 'collapse';
        console.log('blah blah')
    } else {
        // table.style.borderCollapse = 'initia';
        table.style.border = '1px solid #ff0000';
        console.log('blah')
    }
}

/* event listeners */
collapse.addEventListener('click', collapseBorder)
/* generate button with two functions */
generateBtn.addEventListener('click', mainGenerator)