//Q1 

const divide(num1, num2) => {
    if (num2 == 0) {
        throw new Error("Cannot divide by Zero");
    }

    return num1 / num2;
}


//Q2



try {
    console.log(divide(10, 0));
} catch (e) {
    console.log(e.message);
}

console.log(divide(10, 0));
