/**
 * Created by anerdatlarge on 2017-02-17.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentComponent } from './app-content.component';
import { ShopComponent }   from './shop.component';
import { JournalComponent }      from './journal.component';
import { AdventureComponent }  from './adventure.component';
import { NewblogComponent } from './newblog.component';

const routes: Routes = [
    { path: '', component: AppContentComponent },
    { path: 'shop',  component: ShopComponent },
    { path: 'journal', component: JournalComponent },
    { path: 'adventure', component: AdventureComponent },
    { path: 'new blog', component: NewblogComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}