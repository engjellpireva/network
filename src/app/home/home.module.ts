import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsSidebarComponent } from './groups/groups-sidebar/groups-sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NewPostComponent,
    DashboardComponent,
    SettingsComponent,
    NavbarComponent,
    GroupsComponent,
    GroupsSidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NewPostComponent,
    DashboardComponent,
    SettingsComponent,
    SidebarComponent,
    NavbarComponent,
    GroupsComponent,
  ],
})
export class HomeModule {}
