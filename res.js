/* Insert a new < td > (cell) at the first position of < tr > element */

let header = document.createElement('THead')
console.log(header)
/* Create an empty <tr> element and add it to the first position of <thead> */
let tr = header.insertRow(0);
console.log(tr)
let th = document.createElement('th')
let text = document.createTextNode('HEAD');
/* Add some bold text in the new cell */
// cell.innerHTML = ' <strong>HEAD </strong>';

table.append(header)
header.appendChild(tr)
tr.appendChild(th)
th.appendChild(text)
th.appendChild(text)

let tBody = document.createElement('tbody')
let btr = tBody.insertRow(-1);
let td = document.createElement('td')
let tdtext = document.createTextNode('tdddddd');

table.appendChild(tBody)
tBody.appendChild(btr)
btr.appendChild(td)
td.appendChild(tdtext)


function genRow() {
    let inputValue = document.getElementById('rowInput').value
    for (let i = 0; i <= 5; i++) {
        let tr = document.createElement('tr')

        for (let j = 0; j <= i; j++) {
            let td = document.createElement('td')
            tr.append(td)
        }
        table.append(tr)
    }
}
console.log(genRow())

// function generateTable(table) {
//     for (let j = 0; j <= 5; j++) {

//         let row = table.insertRow();
//         let cell = row.insertCell();
//         // let td = document.createElement('td')
//         let text = document.createTextNode('Value');

//         // td.appendChild(cell)
//         cell.appendChild(text)
//     }
// }
// generateTable(table)

//tableHead with input value. Not working
function generateTableHead(table) {
    let colValue = document.getElementById('colInput').value
    console.log(colValue)
    // let thead = table.createTHead();
    // let tr = thead.insertRow();
    let thead = document.createElement('tHead')

    for (let i = 0; i < colValue; i++) {

        let tr = document.createElement('tr')
        let th = document.createElement('th');
        let text = document.createTextNode('HEAD');

        th.appendChild(text);
        tr.appendChild(th);
    }
    thead.appendChild(tr)
    table.append(thead)
    // thead.style.backgroundColor = 'grey';
    console.log(colValue)