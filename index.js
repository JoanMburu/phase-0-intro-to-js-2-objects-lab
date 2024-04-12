// Write your solution in this file!
const employee = {
    name: "Joan",
    streetAddress:"Roysambu",
}

function updateEmployeeWithKeyAndValue (employee, name,Melvin){
    const newemployee = {...employee}
    newemployee[name]= Melvin
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, streetAddress,Kasarani){
    employee[streetAddress] = Kasarani;
    return employee;
}

function deleteFromEmployeeByKey (employee, streetAddress){
    const newemployee ={...employee}
    delete newemployee[streetAddress];
    return newemployee;
}

function destructivelyDeleteFromEmployeeByKey (employee,name){
    delete employee[name];
    return employee;
}