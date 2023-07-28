// { periodLength: 7,
//     trainingDays: 5,
//     success: false,
//     rating: 2,
//     ratingDescription: 'not too bad but could be better',
//     target: 2,
//     average: 1.9285714285714286 }
interface resultObj {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
const calculateExercises = (Actual: Array<number>, planAvg: number): resultObj => {
    const actualAvg = Actual.reduce((total: number, duration: number) => total + duration, 0) / Actual.length
    return {
        periodLength: Actual.length,
        trainingDays: Actual.filter(item => item !== 0).length,
        success: actualAvg >= planAvg ? true : false,
        rating: 0,
        ratingDescription: actualAvg >= planAvg ? '达成目标，继续加油' : '未完成目标，还需努力',
        target: planAvg,
        average: actualAvg
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
