import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Travel } from "./travel/travel.component";

const routes: Routes = [
  {
    path: "travel",
    component: Travel,
    data: { title: "Travel" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
