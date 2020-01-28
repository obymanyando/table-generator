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
let tdD = document.querySelector('.tdClass')
console.log(tdD)

/*  on window load, check table content */
//FIX SECOND CLICK
const clearWindow = () =>
{
    if (table.textContent != '') {
        table.textContent = ''
        genereteRows();
        generateTableHead();
    } else {
        generateTableHead();
        genereteRows();
        // clearRowColumnInput();
    }
}

/* onclick of Generate button, call 3 functions*/
// const mainGenerator = () => {
//     clearRowColumnInput();
// }

generateTable = () =>
{

}
/* function to generate table header */
const generateTableHead = () =>
{
    //FIX BUG APPEARING ON SECOND CLICK OF GENERATE
    for (let i = 0; i < column.value; i++) {
        let th = document.createElement('th');

        let text = document.createTextNode(`HEADER ${i}`);
        thead.setAttribute('id', 'head__Bg')
        th.appendChild(text);
        trow.appendChild(th);
        thead.appendChild(trow)
        // th.style.border = '3px solid'
        // th.style.borderColor = 'borderCol.value'
    }
    thead.style.backgroundColor = '#a2a8a3';
    table.appendChild(thead)
}

/* function to generate table rows ,<tr>, and populate them with data ,<td>, */
const genereteRows = () =>
{

    for (let i = 0; i < row.value; i++) {
        let tr = document.createElement('tr')

        for (let j = 0; j < column.value; j++) {
            let td = document.createElement('td')
            td.setAttribute('class', 'tdClass')
            console.log(td)
            td.textContent = `Row ${i}, Col ${j}`
            tr.append(td)
            // td.style.border = '3px solid'
            // td.style.borderColor = 'borderCol.value'
        }
        tbody.append(tr)
    }
    table.appendChild(tbody)
}

console.log(tdD)

const clearColumnInput = () =>
{
    document.querySelector('#colInput').value = ''

}

const clearRowInput = () =>
{
    document.querySelector('#rowInput').value = ''
}

const collapseBorder = () =>
{
    if (collapse.checked) {
        table.style.borderCollapse = 'collapse';
    } else {
        // table.style.borderCollapse = 'initia';
        table.style.border = '1px solid #ff0000';
    }
}

//select all styling elements
const borderWidth = document.getElementById('border__width')
const tableBg = document.getElementById('table__Bg')
const headBg = document.getElementById('head__Gb')
const tableWidth = document.getElementById('table__width')
const borderCol = document.getElementById('border__color')
const fontType = document.getElementById('font__type')
const fontWeight = document.getElementById('font__weight')
const textAlign = document.getElementById('text__align')
const fontSize = document.getElementById('font__size')
const fontColor = document.getElementById('font__color')

// functions for color manipulations
const chooseBorderWidth = () =>
{
    table.style.borderWidth = borderWidth.value + 'px';
}

const choosetableBg = () =>
{
    table.style.backgroundColor = tableBg.value;
}

const chooseHeadBg = () =>
{
    thead.style.backgroundColor = headBg.value;
}

const chooseTableWidth = () =>
{
    table.style.width = tableWidth.value + '%';
}

// finish up bordercolor...find proper target
const chooseBorderColor = () =>
{
    tdD.style.borderColor = 'green';
    console.log(borderCol.value)
}

// functions for font manipulation
const chooseFontType = () =>
{
    table.style.fontFamily = fontType.value;
}

const chooseFontWeight = () =>
{
    table.style.fontWeight = fontWeight.value;
}

const chooseTextAlign = () =>
{
    table.style.textAlign = textAlign.value;
}
const chooseFontSize = () =>
{
    table.style.fontSize = fontSize.value + 'px';
}
const chooseFontColor = () =>
{
    tbody.style.color = fontColor.value;
}

/* all event listeners */
generateBtn.addEventListener('click', clearWindow)
collapse.addEventListener('click', collapseBorder)
borderWidth.addEventListener('change', chooseBorderWidth)
tableBg.addEventListener('change', choosetableBg)
headBg.addEventListener('change', chooseHeadBg)
tableWidth.addEventListener('change', chooseTableWidth)
borderCol.addEventListener('change', chooseBorderColor)
fontType.addEventListener('change', chooseFontType)
fontWeight.addEventListener('change', chooseFontWeight)
textAlign.addEventListener('change', chooseTextAlign)
fontSize.addEventListener('change', chooseFontSize)
fontColor.addEventListener('change', chooseFontColor)