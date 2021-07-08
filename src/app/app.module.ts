import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LmxAppModule } from '@loymax/app';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LmxAppModule.forRoot(environment),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
