import {Component, OnInit} from "@angular/core";
import {NotesService} from "../notes.service";
import {Note} from "../../shared/notes";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NoteDetailComponent} from "../note-detail/note-detail.component";

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.css'],
  directives: [ROUTER_DIRECTIVES, NoteDetailComponent],
  providers: [NotesService]
})
export class NoteListComponent implements OnInit {

  constructor(private notesService:NotesService) {
  }

  public notes:Note[] = [];

  ngOnInit() {
    this.notesService.findAll().subscribe(
      (result) => this.notes = result,
      err => console.error(err)
    );
  }

  onRemove(note:Note):void {
    this.notes.splice(this.notes.indexOf(note), 1);
  }

}
