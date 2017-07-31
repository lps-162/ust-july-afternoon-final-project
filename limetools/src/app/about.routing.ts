import { AboutComponent } from "app/erp/about/about.component";
import { Route } from "@angular/router";
import { HomeComponent } from "app/erp/home/home.component";

export const aboutRoutes: Route[] = [
    {
        path: 'about',
        component: AboutComponent
    },
];

