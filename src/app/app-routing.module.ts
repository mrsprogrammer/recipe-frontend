import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Main } from "./main/main.component";

const routes: Routes = [
  {
    path: "main",
    component: Main,
    data: { title: "Main" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/travel" }],
})
export class AppRoutingModule {}
