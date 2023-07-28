interface Values {
    value1: number;
    value2: number;
}
// interface args {
//     height: String,
//     weight: string
// }

const parseArguments = (args: Array<string>): Values => {
    // if (args.length < 4) throw new Error('Not enough arguments');
    // if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
        return {
            value1: Number(args[0]),
            value2: Number(args[1])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const calculateBmi = (height: number, weight: number): string => {
    const heightM = height / 100
    const Bmi = weight / (heightM * heightM)
    // console.log(Bmi);
    if (Bmi < 18.5) {
        return 'Thin (light weight)'
    } else if (Bmi >= 18.5 && Bmi < 24) {
        return 'Normal (healthy weight)'
    } else if (Bmi >= 24 && Bmi < 28) {
        return 'Overweight (unhealthy weight)'
    } else if (Bmi >= 28) {
        return 'Obesity (extremely unhealthy weight)'
    } else {
        return 'error'
    }
}
const count = (args: Array<string>): string => {
    try {
        const { value1, value2 } = parseArguments(args)
        return calculateBmi(value1, value2)
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened.'
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        return errorMessage
    }
}

export default count