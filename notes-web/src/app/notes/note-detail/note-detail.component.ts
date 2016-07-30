import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Note} from "../../shared/notes";
import {NotesService} from "../notes.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'note-detail',
  templateUrl: 'note-detail.component.html',
  styleUrls: ['note-detail.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NotesService]
})
export class NoteDetailComponent implements OnInit {

  @Input() note:Note;
  @Output() removeNote:EventEmitter<any> = new EventEmitter();

  constructor(private notesService:NotesService) {
  }

  ngOnInit() {
  }

  remove():void {
    this.notesService.remove(this.note).subscribe(
      () => {
        console.log('note removed');
        this.removeNote.emit(this.note);
        this.note = new Note(null, null, null);
      },
      err => console.error(err)
    );
  }

}
