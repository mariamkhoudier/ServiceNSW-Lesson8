// 1 Convert this function to an arrow function
//function multiplyNumbers(num1, num2) {
 //   return num1 * num2;
//}

conset multiplyNumbers =(num1,num2)=> num2*num2;
console




// 2 Convert this function to an arrow function
//function personOver40(person) {
  //  return person.age > 40;
//}

const personOver40Arrow=person => person.age>40;


console.log(personover40(person));

// 3 Convert this function to an arrow function
//function getFullName(person) {
  //  return `${person.firstName} ${person.lastName}`;
//}

const getFullName=(person)=>`${person.firstNma} ${person.lastName}';
console.log(getFullName({firstName:"Mariam", lastName})

// 4 Convert this function to an arrow function

 const getPersonTitle=person => 
    if (person.preferedTitle) {
        return person.preferedTitle;
    } else if (person.gender == "male") {
        return "Mr.";
    } else if (person.gender == "female") {
        if (person.maritalStatus == "married") {
            return "Mrs.";
        } else if (person.maritalStatus == "unmarried") {
            return "Miss";
        } else {
            return "Ms."
        }
    } else {
        return "Mx."
    }


console.log(getPersonTitle({first}))