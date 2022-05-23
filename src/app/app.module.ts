import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
// import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        /* configuring form modules */
        FormsModule,
        ReactiveFormsModule,

        /* configure App with AmplifyAuthenticatorModule */
        AmplifyAuthenticatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
