let listOfEmployees = [
  {
    id: 145,
    emp_no: 'U145',
    first_name: 'Alexandra',
    last_name: 'Daddario',
    city: 'Los Angeles'
  },
  {
    id: 167,
    emp_no: 'E145',
    first_name: 'Rock Dwayne',
    last_name: 'Johnson',
    city: 'Los Angeles'
  },
  {
    id: 898,
     emp_no: 'A145',
    first_name: 'Deepika',
    last_name: 'Padukone',
    city: 'Newyork'
  }
];

let convertedList = listOfEmployees.map(e => {
    e.full_name = e.first_name +  ' ' + e.last_name;
    return e;
});

console.log(convertedList)