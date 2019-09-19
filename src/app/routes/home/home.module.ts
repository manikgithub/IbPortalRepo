import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { IbhomeComponent } from './ibhome/ibhome.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

const routes: Routes = [
    { path: '', component: IbhomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        TabsModule.forRoot()
    ],
    declarations: [HomeComponent, IbhomeComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }