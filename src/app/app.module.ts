import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { ListeningComponent } from './components/listening/listening.component';
import { SpeakingComponent } from './components/speaking/speaking.component';
import { WritingComponent } from './components/writing/writing.component';
import { VocabularyComponent } from './components/vocabulary/vocabulary.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeningComponent,
    SpeakingComponent,
    WritingComponent,
    VocabularyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
  ],
  // exports: [
  //   MatSliderModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
