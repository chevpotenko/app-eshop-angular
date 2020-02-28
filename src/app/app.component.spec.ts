import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShopService } from './services/shop/shop.service';
import { UserService } from './services/user/user.service';

import { AppComponent } from './app.component';

import { HeaderComponent } from './modules/shared/header/header.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { DataService } from './services/data/data.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule ],
            declarations: [ AppComponent, HeaderComponent, FooterComponent ],
            providers:  [ DataService, ShopService, UserService ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
