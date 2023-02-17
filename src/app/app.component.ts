import {
  Component,
  // ViewContainerRef,
  // ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'patanmeal';

  constructor(
    // private vfc: ViewContainerRef,
    // private cfr: ComponentFactoryResolver
  ) {}

  // async addRestro() {
  //   this.vfc.clear();
  //   const { AddRestroComponent } = await import(
  //     './add-restro/add-restro.component'
  //   );
  //   this.vfc.createComponent(
  //     this.cfr.resolveComponentFactory(AddRestroComponent)
  //   );
  // }
  // async login() {
  //   this.vfc.clear();
  //   const { LoginComponent } = await import('./login/login.component');
  //   this.vfc.createComponent(this.cfr.resolveComponentFactory(LoginComponent));
  // }
  // async update() {
  //   this.vfc.clear();
  //   const { UpdateRestroComponent } = await import(
  //     './update-restro/update-restro.component'
  //   );
  //   this.vfc.createComponent(
  //     this.cfr.resolveComponentFactory(UpdateRestroComponent)
  //   );
  // }
  // async register() {
  //   this.vfc.clear();
  //   const { RegisterComponent } = await import('./register/register.component');
  //   this.vfc.createComponent(
  //     this.cfr.resolveComponentFactory(RegisterComponent)
  //   );
  // }
  // async list() {
  //   this.vfc.clear();
  //   const { ListRestroComponent } = await import(
  //     './list-restro/list-restro.component'
  //   );
  //   this.vfc.createComponent(
  //     this.cfr.resolveComponentFactory(ListRestroComponent)
  //   );
  // }
}
