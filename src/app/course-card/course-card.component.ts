import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course

  @Input()
  cardIndex: number


  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>()

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){
    console.log("click")

    this.courseEmitter.emit(this.course)
  }

  cardClasses(){

    if(this.course.category == 'BEGINNER'){
      return 'beginner'
    }

    // if(this.course.category == 'BEGINNER'){
    //   return ['beginner']
    // }

    // return{
    //   'beginner': this.course.category == 'BEGINNER',
    // }
  }

  cardStyles(){
    return {'background-image': 'url('+ this.course.iconUrl+')'}
  }

}
