//This is the main module

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; //should give clear module differences
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule} from "@angular/forms"; //used for databinding in forms -- formspecific components
import { SharedModule } from './shared/shared.module';

//for Routing
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthModule } from './auth/auth.module';


//For angular4 http Interceptors -- Start
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import {HttpClientModule} from '@angular/common/http';
// end

// import { ProductModule } from './product/product.module';

let routes: Routes = [
    {
        path: '',  //default page: localhost:4200/
        component: HomeComponent
    }, 
    {
        path: 'about', //localhost:4200/about
        component: AboutComponent
    },
    {
        path: 'contact', //localhost:4200/contact
        component: ContactComponent
    },
    {
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule'  //loading the ProductModule on need basis
    }
]

@NgModule({
    //initialize modules
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        HttpClientModule, //For angular4 http Interceptors 
        AuthModule, // loading auth module everytime not on need basis here.
        // ProductModule, //commented to see how to get the product module on need basis, give loadChildren property [code added from line 31-34]

        //apply routes to angular
        RouterModule.forRoot(routes)
        
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
       
        //HeaderComponent
        //FooterComponent
    ],
    //how angular indentify whether this is the root component?
    //we have to tell angular that this is the root component this process is called Bootstrap
    bootstrap: [
        //main component
        AppComponent
    ],
    //For angular4 http Interceptors -- stard
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
          }
    ]
    //end
    //how angular knows that it has to start with root module?
    //it should be outside of this package and call it as main.ts for bootstraping the app module.
    //we can give a different name for this file, but that new name should be given in the angular-cli.json
})
export class AppModule {

}
