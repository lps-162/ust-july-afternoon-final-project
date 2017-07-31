
import { Route } from "@angular/router";
import { HomeComponent } from "app/erp/home/home.component";
import { NotFoundComponent } from "app/erp/not-found/not-found.component";

export const miscRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
