import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { ListeningComponent } from './components/menu/listening/tab/listening.component';
import { SpeakingComponent } from './components/menu/speaking/tab/speaking.component';
import { WritingComponent } from './components/menu/writing/tab/writing.component';
import { VocabularyComponent } from './components/menu/vocabulary/tab/vocabulary.component';


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
