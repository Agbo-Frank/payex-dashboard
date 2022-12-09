export const isPasswordValid = (value) => {
    return value.length == 0 ? false : true;
}

export const isEmailValid = (value) => {
    return /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/i.test(value)
}

export const isPasswordSame = (oldPassword, newPassword) => {
    return oldPassword === newPassword ? true : false;
}

export const isEmpty = (value) => {
    return value.length == 0 ? false : true;
}

export const date = (value) => {
    return new Date(value).toDateString();
}

let otpInput = []

export const otpValue = (e, inputs) => {
    e.preventDefault();
    let element = e.target;

    if (/^[0-9]+$/.test(element.value)) {
        inputs.map((el, idx) => {
            if (el.current.name == element.name) {
                inputs[idx + 1]?.current.focus();
                otpInput.push(element.value)
            }
        })
    } else if (element.value.length == ' ') {
        inputs.map((el, idx) => {
            if (el.current.name == element.name) {
                inputs[idx - 1]?.current.focus();
                otpInput.pop(element.value)
            }
        })
    }
    console.log(otpInput.join(""))
}

export const afterSometime = (fire, time = 1000) => {
    setTimeout(() => {
        fire();
    }, time);
}

export const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}