import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseRateComponent } from './components/course-rate/course-rate.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SearchPipeECTS } from './components/pipes/course-filterECTS.pipe';
import { SearchPipeRate } from './components/pipes/course-filterRate.pipe';
import { SearchPipeSemester } from './components/pipes/course-filterSemester.pipe';
import { SearchPipe } from './components/pipes/course-filter.pipe';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CourseItemComponent,
    CoursesComponent,
    CourseRateComponent,
    CourseDetailsComponent,
    SearchPipe,
    SearchPipeECTS,
    SearchPipeRate,
    SearchPipeSemester,
    NewCourseComponent,
    JwPaginationComponent,
    RegistrationComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
