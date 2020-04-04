import { Course } from '../models/course';
import { Input, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mocks } from '../mock/mocks';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CourseService implements OnInit {



    private courses: Course[];
    coursesRef: AngularFirestoreCollection<Course> = null;

    constructor(private mockCourses: Mocks, private firestore: AngularFirestore) {
        this.coursesRef = firestore.collection('/courses');
        this.updateCourses();
    }
    // tslint:disable-next-line: contextual-lifecycle
    ngOnInit() {
        this.updateCourses();
    }

    getCourses() {
        return this.courses;
    }

    updateCourse(course: Course) {
        this.coursesRef.doc(course.id + '').set({ ...course });
    }

    getCourse(id: number): Observable<Course> {
        this.updateCourses();
        return of(this.courses.find(course => course.id === id));
    }

    addCourse(course: Course): void {
        this.coursesRef.doc(course.id + '').set({ ...course });
    }

    deleteCourse(id: number) {
        this.firestore.collection('courses').doc(id.toString()).delete();
    }


    getCoursesRef(): AngularFirestoreCollection<Course> {
        return this.coursesRef;
    }

    private updateCourses() {
        this.getCoursesRef().snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                    ({ key: c.payload.doc.id, ...c.payload.doc.data() })
                )
            )
        ).subscribe(e => {
            this.courses = e;
        });
    }

    public generateId(): number {
        let maxId = 0;
        if (this.courses != null) {
            // tslint:disable-next-line: prefer-const
            for (let course of this.courses) {
                if (course.id > maxId) { maxId = course.id; }
            }
        }
        return maxId + 1;
    }
}
