import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css'],
  providers: [ProjectService]
})
export class FundComponent implements OnInit {
  @Input() selectedProject;
  projects: FirebaseListObservable<any[]>
  addForm: boolean = false;
  showAddForm() {
    if(this.addForm === true) {
      this.addForm = false;
    } else {
      this.addForm = true;
    }
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginFund(project, fundAmount){
    var blurgAmount = project.currentAmount;
    var projectAmount =  parseInt(blurgAmount);
    projectAmount += parseInt(fundAmount);
    this.projectService.fund(project);
  }
}
