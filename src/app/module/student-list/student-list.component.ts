
import { Component,ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource,MatSort,MatPaginator} from '@angular/material';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  allStudentData:Student[]=[];
  dataSource;

   @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
  //@ViewChild(MatPaginator, {static: true}) set matPaginator(paginator: MatPaginator) { this.dataSource.paginator = paginator; }

  displayedColumns: string[] = ['id','firstName', 'LastName', 'Class','percentage','marks','edit','delete'];


  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private student:StudentsService){}
  ngOnInit(){
    // this.getAllStudentData();
      this.student.getAllEmployee().subscribe(data=>{
          // this.allStudentData=data;
          if(!data){
            return;
          }
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort=this.sort;
          this.dataSource.paginator=this.paginator;
      });
  }
  getAllStudentData(){
    this.student.getAllEmployee().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });
  }
  applyFilter(filter:string)
  {
    this.dataSource.filter=filter.trim().toLowerCase();
  }

  DeleteStudent(id:number){
    this.student.deleteEmployee(id).subscribe((data:Student)=>{
      this.getAllStudentData();
    });
  }
  editStudent(student: Student) {
    this.student.studentInfo=Object.assign({},student);
  }
  
}
