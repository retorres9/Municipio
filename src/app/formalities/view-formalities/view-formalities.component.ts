import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-formalities',
  templateUrl: './view-formalities.component.html',
  styleUrls: ['./view-formalities.component.scss'],
})
export class ViewFormalitiesComponent implements OnInit {
  tramite = {
    codigo: 'GADCC-SG-SOLAIP-001-2018',
    denominacion: 'SOLICITUD DE ACCESO A LA INFORMACIÓN PÚBLICA',
    tiempo: '1 A 15 días',
    costo: 0,
    oficina: 'SECRETARIA GENERAL EDIFICIO PRINCIPAL DEL GADCC SEGUNDO PISO',
    beneficiario: 'PERSONAS NATURALES Y JURIDICAS',
    requisitos: [
      'Copia de Cédula y certificado de votación del peticionario.',
      'Singularizar para que requiere la información',
    ],
    pasos: [
      'Elaborar la solicitud, solicitando el acceso a la información pública con la petición acercarse a la oficina de Secretaria General e Ingresar por medio de Prosecretaria del GADCC para luego obtener copias y entregar al peticionario.',
    ],
    horario: ['De Lunes a Viernes 08H00 hasta 17H00'],
    formato: 'GADCC-SG-SAIP-001-2018',
    formularios: '',
  };
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((resp) => console.log(resp));
  }
}
