type operation = 'mutiply' | 'add' | 'divide'
type Result = number; //返回值类型

export const calculator = (a: number, b: number, op: operation): Result => {
    switch (op) {
        case 'mutiply':
            return a * b
        case 'add':
            return a + b
        case 'divide':
            if (b === 0) throw new Error('cant divide by 0!')
            return a / b;
        default:
            throw new Error("Operation is not multiply, add or divide!")
    }
}

try {
    console.log(calculator(1, 5, 'divide'));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}


