import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ConnectedComponent } from './connected/connected.component';




const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'app', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'episodes', component: EpisodesComponent },
    { path: 'connected', component: ConnectedComponent }
    
    
    
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EpisodesComponent,
        ConnectedComponent,
       
       
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
            
        BrowserModule, 
        FormsModule
        
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
