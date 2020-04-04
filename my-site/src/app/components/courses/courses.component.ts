import { AuthService } from './../../auth/auth.service';
import { Course } from './../../models/course';
import { Mocks } from './../../mock/mocks';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.servise';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  pageOfItems: Array<Course>;
  searchTermECTS: string;
  searchTerm: string;
  searchTermSemester: string;
  searchTermRate: string;
  user: User = null;
  constructor(
    private courseService: CourseService,
    private mockCourses: Mocks,
    private authServise: AuthService) {
  }

  ngOnInit() {
    this.courseService.getCoursesRef().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(e => {
      this.courses = e;
    });
    this.authServise.user$.subscribe(user => this.user = user);
  }

  removeCourse(courseToDelete: Course): void {
    // tslint:disable-next-line: space-before-function-paren && only-arrow-functions
    this.courses.forEach(function (course, index, all) {
      if (courseToDelete.id === course.id) { all.splice(index, 1); }
    });
    this.courseService.deleteCourse(courseToDelete.id);
  }

  onChangePage(pageOfItems: Array<Course>) {
    this.pageOfItems = pageOfItems;
  }

  haveAccess(): boolean {
    if (this.user == null) { return false; }
    return (this.authServise.adminAccess(this.user));
  }
}

