import {Injectable} from "@angular/core";
import {HttpClient} from "../shared/http.client";
import {Note} from "../shared/notes";
import {Observable} from "rxjs/Rx";

@Injectable()
export class NotesService {

  constructor(private httpClient:HttpClient) {
  }

  private baseUrl = 'http://localhost:3000/api/notes';

  findAll():Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  findById(id:string):Observable<any> {
    return this.httpClient.get(this.baseUrl + '/' + id);
  }

  save(note:Note):Observable<any> {
    if (note._id) {
      return this.httpClient.put(this.baseUrl, note);
    } else {
      return this.httpClient.post(this.baseUrl, note);
    }
  }

  remove(note:Note) {
    return this.httpClient.delete(this.baseUrl + '/' + note._id);
  }

}
