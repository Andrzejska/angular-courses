export enum lesform {
    lesson = 'Lesson',
    exercise = 'Exercise',
    lab = 'Lab',
    project = 'Project',
}

export class Course {
    [x: string]: any;
    id: number;
    name: string;
    points: number;
    form: lesform;
    seats: number;
    rating: number;
    semestr: number;
    imgScr?: string;
    description?: string;
    participantList?: string[];
    rateList?: string[];
    public constructor(init?: Partial<Course>) {
        Object.assign(this, init);
    }
}


