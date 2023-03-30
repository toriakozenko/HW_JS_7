//task "Temperature"
const fromCelsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
console.log("from Celsius To Fahrenheit>>>", fromCelsiusToFahrenheit(20));

//Task "RGB"
const rgb = (r, g, b) => {
  const red = r < 16 ? '0' + r.toString(16) : r.toString(16);
  const green = g < 16 ? '0' + g.toString(16) : g.toString(16);
  const blue = b < 16 ? '0' + b.toString(16) : b.toString(16);
  return '#' + red + green + blue;
}
console.log("RGB color>>>", rgb(10, 5, 20));

//Task "Flats"
const flats = (floors, flatsPerFloor, flatNumber) => {
  const entrance = Math.ceil(flatNumber / (floors * flatsPerFloor));
  const floor = Math.ceil((flatNumber % (floors * flatsPerFloor)) / flatsPerFloor);
  return {entrance, floor};
}
console.log("flats result>>>", flats(80, 4, 39));

//Task "Credentials"
const capitalize = (text) => text[0].toUpperCase() + text.slice(1).toLowerCase();

const credentials = () => {
  const name = prompt("What is your name?");
  const surname = prompt("What is your surname?");
  const fatherName = prompt("What is your fatherName?");
  const fullName = `${capitalize(name).trim()} ${capitalize(surname).trim()} ${capitalize(fatherName).trim()}`;
  const result = {
    name: capitalize(name), 
    surname: capitalize(surname), 
    fatherName: capitalize(fatherName), 
    fullName: fullName
  };
  return result;
}
console.log("credentials>>>", credentials());


//Task "New line"
const newLine = (userText) => {
  const splitString = userText.split("\\n");
  const outputString = splitString.join("\n");
  return outputString;
}
console.log("new line>>>", newLine("Hello \n World"));

//Task "Prompt OR"
const userAge = (question, defaultValue) => prompt(question) || defaultValue;
console.log(userAge("Enter your age:", "Error"));

//Task "Login and Password"
const login = (login, password) => {
  const userLogin = prompt("Enter your login");
  const userPassword = prompt("Enter your password");
  if (userLogin === login && userPassword === password) {
    return true;
  }
  return false;
}
console.log(login("admin", "qwerty"));


//Task "For Table"  
let intTableData = [];

for (let i = 1; i <= 5; i++) {
  let row = [];

  for (let j = 1; j <= 5; j++) {
    let product = i * j;
    row.push(product);
  }

  intTableData.push(row);
}

function createTableHTML(tableData) {
  let html = "<table>";

  for (let i = 0; i < tableData.length; i++) {
    html += "<tr>";

    for (let j = 0; j < tableData[i].length; j++) {
      let product = tableData[i][j];
      let color = (i % 2 === 0) ? "#f2f2f2" : "#fff";

      html += `<td style='background-color: ${color}'>${product}</td>`;
    }

    html += "</tr>";
  }

  html += "</table>";
  return html;
}
document.write(createTableHTML(intTableData));


//Task "Filter Lexics"
const filterLexics = (row) => {
  const badWords = ['бляха', 'муха', 'пляшка', 'шабля'];
  return row.split(" ").filter(item => !badWords.includes(item)).join(" ");
}
console.log(filterLexics("Hello пляшка World бляха муха"));


//Task "Currency Table" 
function displayCurrencyTable() {
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      const rates = data.rates;
      const currencies = Object.keys(rates);
      const tableData = [];

      for (let inputCurrency of currencies) {
        const row = [inputCurrency];

        for (let outputCurrency of currencies) {
          if (inputCurrency === outputCurrency) {
            row.push('1.00');
          } else {
            const rate = rates[outputCurrency] / rates[inputCurrency];
            row.push(rate.toFixed(2));
          }
        }

        tableData.push(row);
      }

      displayTable(tableData);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
}
console.log(displayCurrencyTable());

function displayTable(data) {
  const table = document.createElement('table'); 

  for (let row of data) {
    const tr = document.createElement('tr');

    for (let cell of row) {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  document.body.appendChild(table);
}


//task "Form"
const car = {
  "Name":"chevrolet chevelle malibu",
  "Cylinders":8,
  "Displacement":307,
  "Horsepower":130,
  "Weight_in_lbs":3504,
  "Origin":"USA",
  "in_production": false
}
const form = (obj) => {
  let str = "<form style='display: flex; flex-direction: column;'>" 
  for (const key in car){
      const type = typeof car[key] === 'string' ? 'text' : typeof car[key] === 'number' ? 'number' : 'checkbox';
      str += `<label>${key}: <input type="${type}" value="${car[key]}"/></label>`
  }
  str += "</form>"
  return str;
}
document.write(form(car));


//Task "Array of objects sort"
var persons = [
  {name: "Іван", age: 17},
  {name: "Марія", age: 35},
  {name: "Олексій", age: 73},
  {name: "Яків", age: 12},
]
function sort(arr, prop, asc = true) {
  arr.sort((a, b) => {
    const propA = a[prop];
    const propB = b[prop];
    let comparison = 0;
    if (propA > propB) {
      comparison = 1;
    } else if (propA < propB) {
      comparison = -1;
    }
    return asc ? comparison : comparison * -1;
  });
  return arr;
}
console.log(sort(persons, "age", true));


//Task "Table"
const personsData = [
  {
      "Name":"chevrolet chevelle malibu",
      "Cylinders":8,
      "Displacement":307,
      "Horsepower":130,
      "Weight_in_lbs":3504,
      "Origin":"USA"
  },
  {
      "Name":"buick skylark 320",
      "Miles_per_Gallon":15,
      "Cylinders":8,
      "Displacement":350,
      "Horsepower":165,
      "Weight_in_lbs":3693,
      "Acceleration":11.5,
      "Year":"1970-01-01",
  },
  {
      "Miles_per_Gallon":18,
      "Cylinders":8,
      "Displacement":318,
      "Horsepower":150,
      "Weight_in_lbs":3436,
      "Year":"1970-01-01",
      "Origin":"USA"
  },
  {
      "Name":"amc rebel sst",
      "Miles_per_Gallon":16,
      "Cylinders":8,
      "Displacement":304,
      "Horsepower":150,
      "Year":"1970-01-01",
      "Origin":"USA"
  },
]

const table = (arr, prop, asc = true) => {
  const columns = [];
  arr.forEach((person) => {
    Object.keys(person).forEach((key) => {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    });
  });
  const sortData = sort(personsData, prop, asc);
  let tableHtml = '<table><thead><tr>';
  columns.forEach((column) => {
    tableHtml += `<th>${column}</th>`;
  });
  tableHtml += '</tr></thead>';
  
  tableHtml += '<tbody>';
  sortData.forEach((person) => {
    tableHtml += '<tr>';
    columns.forEach((column) => {
      tableHtml += `<td>${person[column] || ''}</td>`;
    });
    tableHtml += '</tr>';
  });
  tableHtml += '</tbody></table>';
  return tableHtml;
}
document.write(table(personsData, "Displacement", false));


//Task "Divide" 
const calcResult = () => {
  const first = parseInt(firstNumber.value);
  const second = parseInt(secondNumber.value);
  if (second !== 0) {
      divisionResult.innerHTML = "The result of division by integer: " + Math.floor(first / second)
  } else {
      divisionResult.innerHTML = "Division by zero is impossible"
  }
}
firstNumber.oninput = secondNumber.oninput = calcResult;


//Task "Calc Func"
const coffeeForWeek = (quantity) => {
  const coffeeForWeek = quantity * 7;
  return `Your drink ${coffeeForWeek} cups of coffee for week`;
}

const questions = () => {
  const milkForBuy = prompt("How much milk do you buy during the month??");
  const price = prompt("What is the cost of one milk?");
  return {milkForBuy, price}
}
console.log(questions());









