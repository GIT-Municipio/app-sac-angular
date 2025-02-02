import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule, MatListModule, MatExpansionModule, MatDialogModule } from '@angular/material';
import { ListaTablasComponent } from './lista-tablas/lista-tablas.component';
import { Payment } from './../login/payment/payment.component';
import { ListaLogsComponent } from './lista-logs/lista-logs.component';
import { DialogComponent } from '../_components/dialog/dialog.component';
import { DialogNewComponent } from '../_components/dialog-new/dialog-new.component';
import { DialogEditComponent } from '../_components/dialog-edit/dialog-edit.component';
import { MatPaginatorModule } from '@angular/material';
import { AdminTablasComponent } from './admin-tablas/admin-tablas.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CrearTablaComponent } from './crear-tabla/crear-tabla.component';
import { FormsModule } from '@angular/forms';
import { EditarTablaComponent } from './editar-tabla/editar-tabla.component';
import { CuadreFacturasComponent } from './cuadre-facturas/cuadre-facturas.component';
import { TablaOficinasComponent } from './tabla-oficinas/tabla-oficinas.component';
import { FacturaDetallesComponent } from './factura-detalles/factura-detalles.component';
import { VentaDetallesComponent } from './venta-detalles/venta-detalles.component';
import { FormasPagoComponent } from './formas-pago/formas-pago.component';
import { FileComponent } from './file/file.component';

import { IngresarRecursosComponent} from '../biblioteca/ingresar-recursos/ingresar-recursos.component';
import { ListaRecursosComponent} from '../biblioteca/lista-recursos/lista-recursos.component';
import { FichaRecursoComponent} from '../biblioteca/ficha-recurso/ficha-recurso.component';
import { IngresarPrestamosComponent} from '../biblioteca/ingresar-prestamos/ingresar-prestamos.component';
import { ListaRecursosBusquedaComponent} from '../biblioteca/lista-recursos-busqueda/lista-recursos-busqueda.component';
import { ListaPrestamosComponent} from '../biblioteca/lista-prestamos/lista-prestamos.component';

import { RequisitosComponent} from '../login/requisitos/requisitos.component'
import {PuntoInformacionComponent} from '../login/punto-informacion/punto-informacion.component'

@NgModule({
  declarations: [DashboardComponent, ListaTablasComponent, Payment, DialogComponent, DialogNewComponent, DialogEditComponent, ListaLogsComponent, AdminTablasComponent, CrearTablaComponent, EditarTablaComponent, CuadreFacturasComponent, TablaOficinasComponent, FacturaDetallesComponent, VentaDetallesComponent, FormasPagoComponent, FileComponent, IngresarRecursosComponent, ListaRecursosComponent, FichaRecursoComponent, IngresarPrestamosComponent, ListaRecursosBusquedaComponent, ListaPrestamosComponent,PuntoInformacionComponent, RequisitosComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule, MatListModule,
    MatExpansionModule,
    HomeRoutingModule,
    MatDialogModule,
    MatPaginatorModule, 
    MatChipsModule,
    MatTooltipModule,
    FormsModule,
  ],
  entryComponents: [
    DialogComponent,
    DialogNewComponent,
    DialogEditComponent,
    CrearTablaComponent,
    EditarTablaComponent,
    TablaOficinasComponent,
    FacturaDetallesComponent,
    VentaDetallesComponent,
    FormasPagoComponent,
    IngresarRecursosComponent,
    ListaRecursosComponent,
    FichaRecursoComponent,
    IngresarPrestamosComponent,
    ListaRecursosBusquedaComponent,
    ListaPrestamosComponent,
    RequisitosComponent,
    PuntoInformacionComponent 
  ]
}) 

export class HomeModule { }
