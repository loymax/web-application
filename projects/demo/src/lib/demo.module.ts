import { NgModule } from "@angular/core";
import { DemoComponent } from "./demo.component";
import { RouterModule, Routes } from '@angular/router';
import { LmxAuthGuard } from '@loymax/auth';

const demoRoutes: Routes = [
    { path: '', component: DemoComponent, canActivate: [LmxAuthGuard] },
];

@NgModule({
    declarations: [
        DemoComponent,
    ],
    imports: [
        RouterModule.forChild(demoRoutes),
    ],
})
export class DemoModule { }