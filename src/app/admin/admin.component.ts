import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {
  // goToProjectPage() {
  //   this.router.navigate('');
  // };
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string,
    manager: string,
    description: string,
    totalAmount: number,
    currentAmount: number,
    detail: string,
    type: string,
    reward: string) {
    const NEWPROJECT: Project = new Project(title, manager, description, totalAmount, currentAmount, detail, type, reward);
    this.projectService.addProject(NEWPROJECT);

  }
}
