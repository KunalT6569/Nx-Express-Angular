import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
