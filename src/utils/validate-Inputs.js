export const validateInputs = (...inputs) => {
    return inputs.every((el) => typeof el === 'number' && !isNaN(el))
};

// let r = validateInputs(1, 5, '5');
// console.log(r);