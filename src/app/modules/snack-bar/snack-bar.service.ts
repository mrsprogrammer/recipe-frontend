import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackBarService {
  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  public open = (message: string, panelClass: "success" | "error") =>
    this.zone.run(() => {
      this.snackBar.open(message, "", {
        duration: 4000,
        panelClass,
      });
    });
}
