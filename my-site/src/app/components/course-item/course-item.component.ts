import { AuthService } from './../../auth/auth.service';
import { CourseService } from 'src/app/shared/course.servise';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})

export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Input() id: number;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();
  isDescriptionOpen = false;
  user: User;
  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private authService: AuthService) {
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }
  onDelete(id: number) {
    this.deleteCourse.emit(id);
  }

  showDetails() {
    (this.isDescriptionOpen === true) ? this.isDescriptionOpen = false : this.isDescriptionOpen = true;
  }
  getCourse(): void {
    this.route.params.pipe(map(params => params.id)).subscribe(
      id => {
        this.courseService.getCourse(this.id).subscribe(e => this.course = e);
      }
    );
  }
  haveAccess() {
    if ((this.user == null) || (this.user.role == null)) { return false; }
    return this.authService.adminAccess(this.user);
  }
}
