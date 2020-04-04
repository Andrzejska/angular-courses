import { PipeTransform, Pipe } from '@angular/core';
import { Course } from 'src/app/models/course';

@Pipe({ name: 'searchPipe' })
export class SearchPipe implements PipeTransform {
    transform(courses: Course[], searchTerm: string): Course[] {
        if (!courses) {
            return [];
        }
        if (!searchTerm) {
            return courses;
        }
        searchTerm = searchTerm.toLowerCase();
        return courses.filter(course => {
            return course.name.toLowerCase().includes(searchTerm);
        });
    }
}
