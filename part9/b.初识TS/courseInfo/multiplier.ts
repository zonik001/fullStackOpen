console.log(process.argv); //7.0.0版本一下的npm需要下载依赖才能用 npm install --save-dev @types/node

// const multiplicator = (a: number, b: number, printText: string) => {
//     console.log(printText, a * b);
// }

// const a: number = Number(process.argv[2])
// const b: number = Number(process.argv[3])
// multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);

// 解决控制台输入TS没法校验问题
// 改进版乘法器
interface MultiplyValues {
    value1: number;
    value2: number;
} //Interface关键字，这是定义一个对象应该具有的 "形状 "的一种方式。

const parseArguments = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}