import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { ManagementComponent } from './components/management/management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { NewteamformComponent } from './components/newteamform/newteamform.component';
import {MatIconModule} from '@angular/material/icon';
import { EditteamComponent } from './components/dialogs/editteam/editteam.component';
import { DeleteteamComponent } from './components/dialogs/deleteteam/deleteteam.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

registerLocaleData(localeEs);
export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel = 'Elementos por página';
  return customPaginatorIntl;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagementComponent,
    NewteamformComponent,
    EditteamComponent,
    DeleteteamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [DatePipe,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
