// export type code = ''
export type gender = 'male' | 'female';

export interface diagnosesEntry {
    code: string;
    name: string;
    latin?: string;
}

export interface patientsEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: gender;
    occupation: string;
}

export type NonSensitivePatientsEntry = Omit<patientsEntry, 'ssn'>;