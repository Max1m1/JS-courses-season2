//Task № 4

let User = {
    name : 'Maxim',
    age : 21,
    profession : 'programmer'
}

Object.defineProperties(User, {
    userPresent: {
        get: function () {
            return new BusinessCard;
        }
    },

    userData: {
        get : function () {
            return ("Object data: \n Name: " + this.name + '\n Age: ' + this.age + '\n Profession: ' + this.profession);
        }
    }
});

function BusinessCard(name, profession) {
    this.name = User.profession;
    this.profession = User.profession;
}

User.addDataUser = function () {
    User.mobileNumber = "0988228228";

    return User.mobileNumber;
}

console.log(User.userData);
console.log(User.userPresent);
console.log(User.addDataUser());
console.log(User);
