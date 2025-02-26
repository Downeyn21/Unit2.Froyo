// create a prompt for the user to interact with in the html file

const icecreamstring = prompt(
    "Welcome to our icecream webshop, where we got icecream!",
    "Please enter you desired icecream."
);

//convert the string of text into an array

const ice_arr = icecreamstring.split(",");

console.log(ice_arr);


cream_obj = {}

for (let i = 0; i < ice_arr.length; i ++) {
    ice = ice_arr[i]
    if(cream_obj[ice]) {
        cream_obj[ice] += 1
    } else {cream_obj[ice] = 1}
}

console.table(cream_obj)
