import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {Note} from "../../shared/notes";
import {NotesService} from "../notes.service";

@Component({
  moduleId: module.id,
  selector: 'note-form',
  templateUrl: 'note-form.component.html',
  styleUrls: ['note-form.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NotesService]
})
export class NoteFormComponent implements OnInit {

  constructor(private notesService:NotesService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
  }

  public note:Note = new Note("", "", "");

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let id = params['id'];
        if (id) {
          this.notesService.findById(id).subscribe(
            note => this.note = note,
            err => console.error(err)
          );
        }
      }
    );
  }

  save() {
    this.notesService.save(this.note).subscribe(
      (note) => {
        console.log('sucessfully saved! note:' + note)
        this.router.navigate(['/notes']);
      },
      err => console.error(err)
    );
  }

  remove() {
    this.notesService.remove(this.note).subscribe(
      () => {
        console.log('note removed');
        this.router.navigate(['/notes']);
        this.note = new Note(null, null, null);
      },
      (err) => console.error(err)
    );
  }

}
