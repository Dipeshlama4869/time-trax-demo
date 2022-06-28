import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-module.strategy';
import { ClientModule } from './modules/client/client.module';

const routes: Routes = [
  // { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'client', loadChildren: './modules/client/client.module#ClientModule' },
  { path: '', pathMatch: 'full', redirectTo: '/attendance' },
  { path: '**', redirectTo: '/attendance' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), ClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
