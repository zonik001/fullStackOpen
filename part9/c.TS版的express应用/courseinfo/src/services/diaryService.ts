// import diaryData from '../../data/diaries';
import diaries from '../../data/diaries';

import { NonSensitiveDiaryEntry, DiaryEntry } from '../types';


// 不能将类型“{ id: number; date: string; weather: string; visibility: string; comment: string; }[]”分配给类型“DiaryEntry[]”。
//   不能将类型“{ id: number; date: string; weather: string; visibility: string; comment: string; }”分配给类型“DiaryEntry”。
//   属性“weather”的类型不兼容。
//     不能将类型“string”分配给类型“Weather”。

// 方法一 （除非没有其他办法，否则我们不应该使用类型断言(type assertion)）
// 通过做一个type assertion来解决这个问题  只有当我们确定我们知道自己在做什么的时候才可以这样做。
// const diaries: Array<DiaryEntry> = diaryData
// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

// 方法二 把json文件改成ts文件，在这直接引入

// const diaries: Array<DiaryEntry> = diaryData
const getEntries = (): Array<DiaryEntry> => {
    return diaries;
};

const addDiary = () => {
    return null;
};

// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//     return diaries;
// };
// TypeScript只检查我们是否有所有需要的字段，但多余的字段不被禁止
// 此时将返回值类型改为 DiaryEntry时会报如下错误
// 不能将类型“{ id: number; date: string; weather: Weather; visibility: Visibility; }[]”分配给类型“DiaryEntry[]”。
//   类型 "{ id: number; date: string; weather: Weather; visibility: Visibility; }" 中缺少属性 "comment"，但类型 "DiaryEntry" 中需要该属性。ts(2322)
//   types.ts(10, 5): 在此处声明了 "comment"。
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries
};