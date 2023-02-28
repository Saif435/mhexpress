import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientAreaComponent } from 'src/client-area/client-area.component';

const routes: Routes = [
  { path: '', component: ClientAreaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
