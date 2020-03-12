import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/model/student.model';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private studentService:StudentsService) { }

  onSubmit(student:Student){
    if(student.id===null)
    {
      this.createEmployee(student);
    }
    else{
      this.updateEmployee(student);
    }
  }

  ngOnInit() {
  }
  createEmployee(student:Student){
    this.studentService.createEmployee(student).subscribe();
  }
  updateEmployee(student:Student){
    this.studentService.updateEmployee(student).subscribe();
  }

}
