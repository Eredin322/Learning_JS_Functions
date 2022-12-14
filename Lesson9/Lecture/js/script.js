const user = {
    age: 24,
    password: 'asdwqe1bgfg23',
    agreeToTerms: true,
}

function checkAge(user) {
    return user.age > 18;
}

function checkPassword(user) {
    return user.password.length >= 8;
}

function checkTerms(user) {
    return user.agreeToTerms === true;
}

// пример обычной функции
function validate(obj, ...tests) {
    for (let i = 0; i < tests.length; i++) {
        if (tests[i](obj) === false) return false;
    }
    return true;
}

console.log(validate(user, checkAge, checkPassword, checkTerms));

// Пример функции высшего порядка
function createValidator(...tests) {
    return function (obj) {
        for (let i = 0; i < tests.length; i++) {
            if (tests[i](obj) === false) return false;
        }
        return true;
    }
}

const validator1 = createValidator(checkAge, checkPassword, checkTerms);
console.log(validator1(user));