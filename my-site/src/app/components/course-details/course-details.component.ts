import { AuthService } from './../../auth/auth.service';
import { CourseService } from '../../shared/course.servise';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from '../../models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() id: number;
  @Output() role: boolean;
  course: Course;
  user: User;
  alreadyAdded = false;
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.user$.subscribe(user => this.user = user);
    this.getCourse();
  }

  getCourse(): void {
    const id = this.id;
    this.courseService.getCourse(this.id).subscribe(e => { this.course = e; });
  }
  haveAccess(): boolean {
    if (this.user == null || (this.user.role == null)) { return false; }
    return !this.authService.adminAccess(this.user);
  }

  onSign() {
    if (!this.isParticipant() && (this.course.participantList.length < this.course.seats)) {
      this.course.participantList.push(this.user.uid);
      this.courseService.updateCourse(this.course);
    } else {
      this.alreadyAdded = true;
    }
  }


  changeCourseRate(rate: number) {
    this.course.rating = rate;
    this.courseService.updateCourse(this.course);
  }

  addRatePart(uid: string) {
    this.course.rateList.push(uid);
    this.courseService.updateCourse(this.course);
  }


  isParticipant(): boolean {
    if (this.course.participantList != null) {
      return (this.user && this.course.participantList.includes(this.user.uid));
    }
  }
}

