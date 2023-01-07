console.log('jq and js');

$( function () {
    console.log('in Ready');
});

let employees = [];

function addEmployee(firstNameInput, lastNameInput, idInput, titleInput, salaryInput){
    console.log('in addEmployee');
    // Create new object to house all input information
    const newEmployeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        idNumber: idInput,
        title: titleInput,
        salary: salaryInput,
    }
    // Push that object into the global array of employees]
    employees.push(newEmployeeObject);
    console.log('current employees:', newEmployeeObject);
    return true;
} // end addEmployee
addEmployee('Greg', 'Johnson', 235245, 'Software dev', 75000);