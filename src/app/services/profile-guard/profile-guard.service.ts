import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProfileGuardService implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        return this.canLoad();
    }

    canLoad() {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/user/signin']);
        }
        return this.authService.isLoggedIn();
    }
}
