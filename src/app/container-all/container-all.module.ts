import { NgModule } from '@angular/core';
import { ContainerAllComponent } from './container-all.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { ContainerNavComponent } from './container-nav/container-nav.component';
import { MenuComponent } from './container-nav/menu/menu.component';
import { SocialMediaComponent } from './container-nav/social-media/social-media.component';
import { CardsComponent } from './container-main/cards/cards.component';
import { CardComponent } from './container-main/cards/card/card.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    ContainerAllComponent,
    ContainerNavComponent,
    ContainerMainComponent,
    MenuComponent,
    SocialMediaComponent,
    CardsComponent,
    CardComponent,
    BannerComponent],
  exports:[ContainerAllComponent],
})
export class ContainerAllModule { }
