//Завдання № 4

let User = {
    name : 'Maxim',
    age : 21,
    profession : 'programmer'
}

Object.defineProperties(User, {
    businessCardInfo: {
        get: function() {
            return new businessCard;
        }
    },

    userData: {
        get : function () {
            return ("Дані об'єкта: \n Ім'я: " + this.name + '\n Вік: ' + this.age + '\n Вид діяльності: ' + this.profession);
        }
    }
});

businessCard = function () {
    let businessCard = {
        name : User.name,
        profession : User.profession,
    }

    return businessCard;
}

User.addDataUser = function () {
    User.mobileNumber = "0988228228";

    return User.mobileNumber;
}

console.log(User.userData);
console.log(User.businessCardInfo);
console.log(User.addDataUser());
console.log(User);