import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule, MatProgressSpinnerModule, } from "@angular/material";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { PagosComponent } from './pagos/pagos.component';
import { ListaTablasComponent } from './lista-tablas/lista-tablas.component';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UploadService } from '../upload.service';
import { FileUploadModule } from 'ng2-file-upload';
import { MaterialFileUploadComponent } from '../_components/material-file-upload/material-file-upload.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { TramitesComponent } from './tramites/tramites.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ArbolTramiteComponent } from './arbol-tramite/arbol-tramite.component';
import { InformacionRecursoComponent } from '../biblioteca/informacion-recurso/informacion-recurso.component';
import { NodoTramiteComponent } from './nodo-tramite/nodo-tramite.component';
import { IntranetComponent } from './intranet/intranet.component';
import { ArbolTramiteSipComponent } from './arbol-tramite-sip/arbol-tramite-sip.component';


@NgModule({
  declarations: [LoginComponent, PagosComponent, ListaTablasComponent, MaterialFileUploadComponent, AsistenciaComponent, TramitesComponent, SeguimientoComponent, ArbolTramiteComponent, NodoTramiteComponent, InformacionRecursoComponent, IntranetComponent, ArbolTramiteSipComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ], entryComponents: [
    ArbolTramiteComponent,
    NodoTramiteComponent,
    InformacionRecursoComponent
    
  ]
})
export class LoginModule { }
