# Przepisy kulinarne
## Aplikacja SPA z użyciem frameworka Angular 11

### Założenia:
- możliwośc rejestracji użytkownika
- logowanie
- możliwość przeglądania wylistowanych przepisów kulinarnych podzielonych na kategorie
- możliwość dodania komentarza do przepisu
- responsywność

### Wymagania środowiskowe:
- instalacja środowiska Node.js w wersji >12
- instalacja menadżera pakietów Yarn
- instalacja Angular CLI: yarn add global @angular/cli

### Użyte technologie:
• Node.js 12\
• Yarn\
• Angular 11\
• Angular Material UI\
• RxJS\
• TypeScript\
• Sass

### Uruchomienie:
1. Wywołane w katalogu /src polecenia pobierającego pakiety: yarn install
2. Uruchomienie projektu: yarn start
3. Otwarcie w przeglądarce pod adresem: http://localhost:4200/

### Pliki konfiguracyjne:
W app/common/global-constans konfiguracja stałych: \
public static apiURL: string = "http://localhost:8080/api"; \
public static imagesURL: string = "http://localhost:8080/img"; \
public static baseHref: string = "/recipes";

### Routing aplikacji:
W app/app-routing.module.ts znajduje się konfiguracja routingu.

### Funkcjonalności:
Rejestracja użytkownika/logowanie\ 
Logika dotycząca autoryzacji i uwierzytelniania użytkownika znajduje się w app/modules/auth:\
• auth.service – obsługa logowania, wylogowania, rejestracji oraz zapis, odczyt token z localStorage \
• auth-http.interceptor – ustawianie http.header: Authorization: `Bearer ${this.authService.getToken()}` \
• auth-guard.service – interfejs weryfikujący dostęp dla ścieżki przeglądarki



#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
