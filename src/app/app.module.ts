import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AdviceComponent } from './components/advice/advice.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { DiceComponent } from './components/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AdviceComponent,
    SeparatorComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
