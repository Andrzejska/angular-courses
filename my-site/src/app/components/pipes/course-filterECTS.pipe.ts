import { Course } from 'src/app/models/course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchPipeECTS' })

export class SearchPipeECTS implements PipeTransform {
    transform(courses: Course[], searchTermECTS: string): Course[] {
        if (!courses) { return []; }
        if (!searchTermECTS) { return courses; }
        const search = searchTermECTS.toString();
        return courses.filter(course => {
            return course.points.toString().includes(search);
        });
    }
}
