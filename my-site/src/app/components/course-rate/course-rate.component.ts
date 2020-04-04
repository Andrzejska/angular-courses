import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Course } from '../../models/course';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-course-rate',
  templateUrl: './course-rate.component.html',
  styleUrls: ['./course-rate.component.scss']
})
export class CourseRateComponent implements OnInit {

  @Input() generalRate: number;
  @Input() rateList: string[];
  @Input() role: boolean;
  @Output() changeCourseRate = new EventEmitter<number>();
  @Output() addRatePart = new EventEmitter<string>();
  votedNumber = 0;
  stars = [];


  @ViewChild('firstStar', { static: false }) firstStar: ElementRef;
  @ViewChild('secondStar', { static: false }) secondStar: ElementRef;
  @ViewChild('thirdStar', { static: false }) thirdStar: ElementRef;
  @ViewChild('fourthStar', { static: false }) fourthStar: ElementRef;
  @ViewChild('fifthStar', { static: false }) fifthStar: ElementRef;
  user: firebase.User;

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.stars.push(this.firstStar);
    this.stars.push(this.secondStar);
    this.stars.push(this.thirdStar);
    this.stars.push(this.fourthStar);
    this.stars.push(this.fifthStar);
    this.displayStars(this.generalRate);
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserState()
      .subscribe(user => {
        this.user = user;
      });
  }

  private displayStars(score: number) {
    if (score > 5) { return; }
    // tslint:disable-next-line: prefer-const
    for (let star of this.stars) {
      if (score >= 0.75) {
        star.nativeElement.src = 'assets/img/starFull.svg';
      } else if (score >= 0.25) {
        star.nativeElement.src = 'assets/img/StarHalfEmpty.svg';
      } else {
        star.nativeElement.src = 'assets/img/starEmpty.svg';
      }
      score--;
    }
  }
  userRated(): boolean {
    if (!this.user) { return false; }
    return this.rateList.includes(this.user.uid.toString());

  }
  setStars(newUserRate: number): void {
    if (this.user) {
      this.displayStars(this.changeRate(newUserRate));
    }
  }
  private changeRate(newUserRate: number): number {
    console.log(this.role);
    if (!this.role) { return; }
    let changedRate: number = this.generalRate;
    let partCount: number = this.rateList.length;
    if (this.rateList.includes(this.user.uid.toString())) {
      return this.generalRate;
    } else if (this.generalRate === 0) {
      this.addRatePart.emit(this.user.uid.toString());
      changedRate = (newUserRate);
      this.changeCourseRate.emit(changedRate);
      return changedRate;
    } else {
      this.addRatePart.emit(this.user.uid.toString());
      changedRate = ((changedRate * partCount) + newUserRate) / (++partCount);
      this.changeCourseRate.emit(changedRate);
      return changedRate;
    }
  }
}
