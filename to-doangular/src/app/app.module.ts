import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './cliente.service';



@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
