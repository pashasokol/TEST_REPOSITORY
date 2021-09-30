const regForm = document.querySelector('#regForm');

regForm.addEventListener('submit', e => {
    e.preventDefault();

    let firstName = e.currentTarget[0].value;
    let lastName = e.currentTarget.lastName.value;
    let address = e.currentTarget['address'].value;
    let role = document.querySelector('#role').value;

    console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(role);


    let user = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        role: role

    }

    console.log(user);



});