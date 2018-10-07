//Task № 4

let User = {
    name : 'Maxim',
    age : 21,
    profession : 'programmer'
}

Object.defineProperties(User, {
    userPresent: {
        get: function () {
            return new BusinessCard(User.name, User.profession);
        }
    },

    userData: {
        get : function () {
            return ("Object data: \n Name: " + this.name + '\n Age: ' + this.age + '\n Profession: ' + this.profession);
        }
    }
});

function BusinessCard(arg1, arg2) {
    this.name = arg1;
    this.profession = arg2;
}

User.addDataUser = function () {
    User.mobileNumber = "0988228228";

    return User.mobileNumber;
}

console.log(User.userData);
console.log(User.userPresent);
console.log(User.addDataUser());
console.log(User);
