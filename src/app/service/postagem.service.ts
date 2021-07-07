import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  createHeaders(){
    return {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }
  
  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blogpessoalbeatriz.herokuapp.com/postagens', this.createHeaders())
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blogpessoalbeatriz.herokuapp.com/postagens', postagem, this.createHeaders())
  }

}
