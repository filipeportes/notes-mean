import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NotesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
