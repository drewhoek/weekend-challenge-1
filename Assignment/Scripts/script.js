console.log('jq and js');

$(function () {
    console.log('in Ready');
    appendDom();
    $('#employeeSubmit').on('click', getEmployeeInfo);
    $('#tableBody').on('click', '.delete', handleDelete);
});

let employees = [];
let monthlyCosts = 0;

function addEmployee(firstNameInput, lastNameInput, idInput, titleInput, salaryInput) {
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
    console.log('current employees:', employees);
    return true;
} // end addEmployee
// addEmployee('Greg', 'Johnson', 235245, 'Software dev', 75000); // Testing if addEmployee works

function getEmployeeInfo() {
    console.log('in getEmployeeInfo');
    // Define values for inputs within variables
    const firstNameVal = $('#firstNameInput').val();
    const lastNameVal = $('#lastNameInput').val();
    const idNumberVal = Number($('#idInput').val());
    const titleVal = $('#titleInput').val();
    const salaryVal = Number($('#salaryInput').val());

    console.log(`First Name: ${firstNameVal}, Last Name: ${lastNameVal}, ID Nummber: ${idNumberVal}, Title: ${titleVal}, Salary: ${salaryVal}`);
    // Clear input fields
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

    // Call addEmployee to push input info to the global array
    addEmployee(firstNameVal, lastNameVal, idNumberVal, titleVal, salaryVal);

    // Append Monthly costs to DOM
    monthlyCosts += (salaryVal / 12);
    $('#totalCostVal').text(monthlyCosts);

    if (monthlyCosts > 20000) {
        // If we have high monthly costs, turn the background color red
        $('#total-monthly-cost').css('color', 'red');
        console.log('We have high monthly costs!');
    } else {
        console.log('We have low monthly costs');
    }

    // Call append DOM function
    appendDom();
} // end getEmployeeInfo

function appendDom() {
    console.log('in appendDom');
    // Empty the table
    $('#tableBody').empty();

    // Loop over employees array and append employees on DOM
    for (let i = 0; i < employees.length; i++) {
        const element = employees[i];
        $('#tableBody').append(`<tr>
        <td>${element.firstName}</td>
        <td>${element.lastName}</td>
        <td>${element.idNumber}</td>
        <td>${element.title}</td>
        <td class="salary">${element.salary}</td>
        <td><button class = "delete">Delete</button></td>
      </tr>`);
    }
    return true;
} // end appendDOM

function handleDelete(event) {
    $(event.target).closest('tr').remove();
    console.log(monthlyCosts);
    
    let costToSubtract = Number($(event.target).find('.salary').text());    
    console.log(costToSubtract);
}
