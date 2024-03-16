import { Routes, RouterModule } from "@angular/router";
import { Component, ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { AuthGuard } from "./guards/auth.guard";



const appRoute: Routes = [
    { path: '', component: LoginComponent},
    { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
    // { path: 'cuenta/perfil', component: PerfilComponent, canActivate: [AuthGuard] },
    // { path: 'cuenta/ordenes', component: IndexOrdenesComponent, canActivate: [AuthGuard] },
    // { path: 'cuenta/ordenes/:id', component: DetalleOrdenComponent, canActivate: [AuthGuard] },
    // { path: 'cuenta/direcciones', component: DireccionesComponent, canActivate: [AuthGuard] },
    // { path: 'cuenta/reviews', component: IndexReviewComponent, canActivate: [AuthGuard] },
    // { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },

]

export const appRoutingPorviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);