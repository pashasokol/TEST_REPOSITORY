const regForm = document.querySelector('#regForm');

regForm.addEventListener('submit', e => {
    e.preventDefault();


    // if(e.currentTarget.tac.checked) {
    //     let user = {
    //         firstName: e.currentTarget.firstName.value,
    //         lastName: e.currentTarget.lastName.value,
    //         address: e.currentTarget.address.value,
    //         role: e.currentTarget.role.value,
    //     }
        
    //     console.log(user);
    // }  else {
    //     return false
    // }

    // let firstName = e.currentTarget[0].value;
    // let lastName = e.currentTarget.lastName.value;
    // let address = e.currentTarget['address'].value;
    // let role = document.querySelector('#role').value;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(address);
    // console.log(role);


    // let user = {
    //     firstName,
    //     lastName,
    //     address,
    //     role: role

    // }


    if(!(e.currentTarget.tac.checked)) {
        alert('You must accept the terms!');
        return false
    } 



    let user = {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        address: e.currentTarget.address.value,
        role: e.currentTarget.role.value,
    }
    
    console.log(user);
 

});