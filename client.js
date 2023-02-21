// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

//console.log('array of employee data: ',  employees );

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//Storing employee bonus objects to be accessed later


function loopOverEmployees(employees) {
  let employeeBonusArray =[];

  //Loop through each employee and return/push new object to employeeBonusArray
  for (let i = 0; i < employees.length; i++) {
    // Test Logging current employee
    //console.log('Logging current employee', employees[i]);
    //Sending this employee to function
    employeeBonusArray.push(calculateIndividualEmployeeBonus(employees[i]));
  }
  
  //Creating new div element with all the information in each object, adding it to the html page
  for (let i = 0; i < employeeBonusArray.length; i++) {
    let newElement = document.createElement('div');
    newElement.appendChild(document.createTextNode(`${employeeBonusArray[i].name} recieved a total compensation of $${employeeBonusArray[i].totalCompensation} after recieving a bonus of $${employeeBonusArray[i].totalBonus} calculated using their bonus percent of ${employeeBonusArray[i].bonusPercentage * 100}%`));
    document.getElementById('employee-data').appendChild(newElement);
  }

  return employeeBonusArray;
}

//Test
//loopOverEmployees(employees)


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  

  // Test to see each employeeconsole.log(employee)

  let newObj = {
    name: employee.name,
  };
  
  // your logic here
  //find bonus percentage
  if (employee.reviewRating <= 2) {
    newObj.bonusPercentage = 0;
  }
  else if (employee.reviewRating === 3) {
    newObj.bonusPercentage = .04;
  }
  else if (employee.reviewRating === 4 ) {
    newObj.bonusPercentage = .06;
  }
  else if (employee.reviewRating === 5) {
    newObj.bonusPercentage = .1;
  }

  //If employee has 4 digit employee number, add 5%
  if (employee.employeeNumber.length === 4) { 
    newObj.bonusPercentage += .05;
  }
  
  if (employee.annualSalary > 65000 && employee.bonusPercentage > 0) {
    newObj.bonusPercentage -= .01;
  }

  if (newObj.bonusPercentage > .13) {
    newObj.bonusPercentage = .13;
  }

  //Calculate total bonus and add it to the newObj
  newObj.totalBonus = Math.round(employee.annualSalary * newObj.bonusPercentage);

  //Calculate total compensation and add it to the newObj
  newObj.totalCompensation = Number(newObj.totalBonus) + Number(employee.annualSalary);

  //Test - to see the newObj console.log(newObj);
  // return new object with bonus results
  return newObj;
}

//console.log(loopOverEmployees(employees))