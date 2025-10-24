# Recipes
## SPA Application using Angular 11 Framework

### Assumptions:
- User registration
- User login
- Browsing listed recipes divided into categories
- Adding comments to recipes
- Responsiveness

### Environment Requirements:
- Installation of Node.js version >=20
- Installation of Yarn package manager
- Installation of Angular CLI: yarn add global @angular/cli

### Technologies Used:
• Node.js 20\
• Yarn\
• Angular 14\
• Angular Material UI\
• RxJS\
• TypeScript\
• Sass

### Running the Application:
1. Run the command to install packages in the `/src` directory: yarn install
2. Start the project: yarn start
3. Open in the browser at: http://localhost:4200/

### Configuration Files:
In `app/common/global-constants`, configuration of constants:\
public static apiURL: string = "http://localhost:8080/api";\
public static imagesURL: string = "http://localhost:8080/img";\
public static baseHref: string = "/recipes";

### Application Routing:
The routing configuration is located in `app/app-routing.module.ts`.

### Features:
User registration/login\
The logic for user authentication and authorization is located in `app/modules/auth`:\
• `auth.service` – handles login, logout, registration, and token storage/retrieval from localStorage\
• `auth-http.interceptor` – sets `http.header: Authorization: Bearer ${this.authService.getToken()}`\
• `auth-guard.service` – interface for verifying access to browser paths

### Angular Framework
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

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).