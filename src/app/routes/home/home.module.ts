import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { IbhomeComponent } from './ibhome/ibhome.component';

const routes: Routes = [
    { path: '', component: IbhomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent, IbhomeComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }