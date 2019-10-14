import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

import { Cidade } from './modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades: Cidade[];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.cidadeService.buscarTodasCidades()
      .subscribe(
        response => {
          this.cidades = response;
        });
  }

  adicionar(nome: string) {
    this.cidadeService.salvar({ nome })
      .subscribe(
        response => {
          this.consultar();
        });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id).subscribe(
      () => {
        this.consultar();
      })
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar({ id: cidade.id, nome: cidade.nome })
      .subscribe(
        response => {
          this.consultar();
        });
  }
}
