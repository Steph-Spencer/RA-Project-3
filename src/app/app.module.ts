import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { AppContentComponent }   from './app-content.component';
import { NavComponent }      from './nav.component';
import { BannerComponent }  from './banner.component';
import { FooterComponent }   from './footer.component';
import { ShopComponent }  from './shop.component';
import { JournalComponent } from './journal.component';
import { JournalService } from './journal-service';
import { AdventureComponent } from './adventure.component';
import { NewblogComponent } from './newblog.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AppContentComponent,
        NavComponent,
        BannerComponent,
        FooterComponent,
        ShopComponent,
        JournalComponent,
        AdventureComponent,
        NewblogComponent,

    ],
    providers: [ JournalService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }