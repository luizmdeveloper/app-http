import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from './modelo';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  public buscarTodasCidades(): Observable<any> {
    return this.http.get('http://localhost:3000/cidades');
  }

  public salvar(cidade: any) {
    return this.http.post('http://localhost:3000/cidades', cidade);
  }

  public atualizar(cidade: any) {
    return this.http.put(`http://localhost:3000/cidades/${cidade.id}`, cidade);
  }

  public excluir(id: number){
    return this.http.delete(`http://localhost:3000/cidades/${id}`);
  }

}
