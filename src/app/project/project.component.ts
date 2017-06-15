import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByType: string = "All Types";
  filterByAmountLeft: string = "All Amounts";


  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  };
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  onChange(optionFromMenu) {
  this.filterByType = optionFromMenu;
  }

  onChange2(optionFromMenu2) {
    this.filterByAmountLeft = optionFromMenu2;
  }
}
