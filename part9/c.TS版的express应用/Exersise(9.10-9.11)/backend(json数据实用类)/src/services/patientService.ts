import patients from '../../data/patients';

import { patientsEntry, NonSensitivePatientsEntry } from '../types';

const getEntries = (): Array<patientsEntry> => {
    return patients;
};

// const addDiary = () => {
//     return null;
// };


const getPatientNonSSN = (): NonSensitivePatientsEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {
    getEntries,
    getPatientNonSSN
};