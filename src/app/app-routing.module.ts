import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService } },
  { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit', component: ContactEditComponent },
  { path: 'contact', component: ContactAppComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
