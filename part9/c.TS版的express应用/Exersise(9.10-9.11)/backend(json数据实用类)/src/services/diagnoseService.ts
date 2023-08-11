import diaries from '../../data/diagnoses';

import { diagnosesEntry } from '../types';

const getEntries = (): Array<diagnosesEntry> => {
    return diaries;
};

const addDiary = () => {
    return null;
};

// const  = (): [] => {
//     return diaries.map(({ id, date, weather, visibility }) => ({
//         id,
//         date,
//         weather,
//         visibility,
//     }));
// };

export default {
    getEntries,
    addDiary
};