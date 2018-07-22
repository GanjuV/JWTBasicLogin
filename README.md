# JWTBasicLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
A basic project to show authentication using JWT and fackback-end service. 

Please use below credentials to login the app


Username: vaibhav_ganju@gmail.com
Password: 1234

Please check console and if you find `isExpired   true` please update the JWT token in `fake-backend.ts` file.
I am using sessionStorage and expiration(`exp`) value in my JWT.

## Live version
You can view the live app from below link. 
`https://ganjuv.github.io/JWTBasicLogin/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Proxy Helpful URL
`https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md`

## JWT help 
https://jwt.io/

## To deploy application on GitHub pages follow below steps 
1. npm i -g angular-cli-ghpages
2. ng build --prod --base-href=“https://`username`.github.io/`repository`/”
3. ngh --dir dist/`<project name>` (Angular6 version)
