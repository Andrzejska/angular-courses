import { Course, lesform } from '../models/course';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Mocks {
    private courses: Course[] =
        [
            {
                id: 1,
                name: 'Mathematical Logic',
                points: 3,
                form: lesform.project,
                seats: 46,
                rating: 3.5,
                semestr: 3,
                imgScr: '../../../assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'Mathematical logic is a subfield of mathematics exploring the applications of formal logic to mathematics. '
            },
            {
                id: 2,
                name: 'Imperative Programming',
                points: 5,
                form: lesform.lab,
                seats: 13,
                rating: 4.6,
                semestr: 2,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'In computer science, imperative programming is a programming paradigm that uses statements that change a programs state. '
            },
            {
                id: 3,
                name: 'Computer Networks',
                points: 4,
                form: lesform.lesson,
                seats: 46,
                rating: 4.0,
                semestr: 7,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'A computer network is a set of computers connected together for the purpose of sharing resources.'

            }, {
                id: 4,
                name: 'Introduction to Databases',
                points: 4,
                form: lesform.project,
                seats: 108, rating: 3.1,
                semestr: 1,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'A database is an organized collection of data, generally stored and accessed electronically from a computer system.'
            }, {
                id: 5,
                name: 'Graph-based algorithms',
                points: 4,
                form: lesform.lab,
                seats: 42, rating: 4.5,
                semestr: 3,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.'
            }, {
                id: 6,
                name: 'Difference Equations',
                points: 3,
                form: lesform.project,
                seats: 12, rating: 3.5,
                semestr: 2,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'In mathematics, a differential equation is an equation that relates one or more functions and their derivatives.'
            }, {
                id: 7,
                name: 'Functional programming',
                points: 5,
                form: lesform.lab,
                seats: 30, rating: 5.0,
                semestr: 5,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data'
            }, {
                id: 8,
                name: 'Scala',
                points: 5,
                form: lesform.project,
                seats: 30, rating: 4.5,
                semestr: 3,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'Scala is a general-purpose programming language providing support for functional programming and a strong static type system.'
            }, {
                id: 9,
                name: 'Javascript',
                points: 4,
                form: lesform.project,
                seats: 50, rating: 4.3,
                semestr: 4,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification.'
            }, {
                id: 10,
                name: 'Assembler Languages',
                points: 6,
                form: lesform.lesson,
                seats: 20, rating: 3.5,
                semestr: 1,
                imgScr: 'assets/img/common.jpg',
                // tslint:disable-next-line: max-line-length
                description: 'An assembly language is a low-level programming language designed for a specific type of processor. '
            }
        ];
    public getCourses(): Course[] {
        return this.courses;
    }
}
