import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//implements OnInit
export class AppComponent {
  rdoMenu = 'Legal Entities';
  isLogedIn = false;

  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  // private async configureOAuth(): Promise<void> {
  //   this.oauthService.loginUrl = 'https://login.microsoftonline.com/d5cfea79-9306-4d6b-bddd-916ad69e2ffb/oauth2/v2.0/authorize';
  //   this.oauthService.clientId = 'a0a87f16-3921-439f-8657-a2d05d26b749';
  //   this.oauthService.resource = 'api://047544ae-2546-48c5-93b4-fb8ba6489061';
  //   this.oauthService.logoutUrl = 'https://login.microsoftonline.com/d5cfea79-9306-4d6b-bddd-916ad69e2ffb/oauth2/v2.0/logout';
  //   this.oauthService.redirectUri = window.location.origin + '/';
  //   this.oauthService.scope = 'openid';
  //   this.oauthService.oidc = true;
  //   this.oauthService.setStorage(sessionStorage);
  // }

  // async ngOnInit() {
  //   if (true) {
  //     await this.configureOAuth();
  //     this.oauthService.tryLogin({});

  //     if (!this.oauthService.getAccessToken()) {
  //       await this.oauthService.initImplicitFlow();
  //     }
  //     console.log(this.oauthService.getAccessToken());
  //   }
  // }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
