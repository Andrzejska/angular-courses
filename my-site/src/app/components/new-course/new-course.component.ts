import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Course, lesform } from 'src/app/models/course';
import { CourseService } from 'src/app/shared/course.servise';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})


export class NewCourseComponent implements OnInit {

  isOpenAddForm = false;
  addForm: FormGroup;
  newCourse: Course;
  isCorrectForm = true;

  constructor(private service: CourseService) {
  }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(1),
      ]
      ),
      ects: new FormControl(
        '', [
        Validators.required,
        Validators.min(1),
        Validators.max(12)
      ]
      ),
      semestr: new FormControl(
        '', [
        Validators.required,
        Validators.min(1),
        Validators.max(15)
      ]
      ),
      capacity: new FormControl(
        '', [
        Validators.required,
        Validators.min(1),
        Validators.max(250)
      ]
      )
      ,

      form: new FormControl(
        '', [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]
      ),
      img: new FormControl(),
      description: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(600)
      ])
    });
  }

  createNewCourse(): void {
    this.newCourse = {
      id: null,
      name: null,
      seats: null,
      points: null,
      form: null,
      imgScr: null,
      rating: null,
      semestr: null,
      description: null
    };
  }
  setCourseParameters(): void {
    // tslint:disable-next-line: no-var-keyword
    const id = this.service.generateId();
    this.newCourse.semestr = this.addForm.controls.semestr.value;
    this.newCourse.id = id;
    this.newCourse.name = this.addForm.controls.name.value;
    this.newCourse.description = this.addForm.controls.description.value;
    this.newCourse.points = this.addForm.controls.ects.value;
    this.newCourse.seats = this.addForm.controls.capacity.value;
    this.newCourse.participantList = [];
    this.newCourse.rateList = [];
    if (this.addForm.controls.img.value != null) {
      this.newCourse.imgScr = this.addForm.controls.img.value;
    } else {
      this.newCourse.imgScr = '../../../assets/img/notAvailable.jpg';
    }
    switch (this.addForm.controls.form.value) {
      case ('lab'): this.newCourse.form = lesform.lab; break;
      case ('lesson'): this.newCourse.form = lesform.lesson; break;
      case ('exercise'): this.newCourse.form = lesform.exercise; break;
      case ('project'): this.newCourse.form = lesform.project; break;
      default:
        this.isCorrectForm = false;
    }
  }


  onSubmit() {
    if (this.addForm.valid) {
      this.isCorrectForm = true;
      this.createNewCourse();
      this.setCourseParameters();
      this.service.addCourse(this.newCourse);
      this.openAddForm();
      this.addForm.reset();
    } else {
      this.isCorrectForm = false;
    }

  }

  displayErrorText() {
    if (this.isCorrectForm) {
      return 'none';
    }
    return 'block';

  }
  setTransformAddForm() {
    if (this.isOpenAddForm) {
      return 'scaleY(1)';
    } else {
      return 'scaleY(0)';
    }
  }
  setTansformAddButton() {
    if (this.isOpenAddForm) {
      return 'scaleY(0)';
    } else {
      return 'scaleY(1)';
    }
  }

  openAddForm() {
    (this.isOpenAddForm === true) ? this.isOpenAddForm = false : this.isOpenAddForm = true;
  }
}
