export const validate = (user, cb)  => {    
    // if(user.firstName.trim() !== '') {
    //     console.log('user firstName looks good');
    //     return true;
    // }  else  {
    //     console.log('all users must have a firstName')
    //     return false;
    // }


    user.firstName.trim()  !== ''  
    ? cb(user) 
    : console.warn('all users must have a name');





}


export const fixName = name  =>  {

    return name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();


}


export const sendMessage = (text,cb) => {
    console.log('Sending message');
    setTimeout(() => {
        let _text = reverseString(text);
        cb(_text);
    },2000)
}

export const reverseString = (_text)  => {
    let string = _text.split('');
    string = string.reverse();
    string = string.join('');
    return string;
}