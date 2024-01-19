import { Component, OnInit } from '@angular/core';
import { AppServer } from './app.server';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  users: any[] = [];
  newUser: any = {};
  constructor(private appService: AppServer) {}

  ngOnInit() {
    this.appService.getUser().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
  }
  deleteUser(id: number): void {
    this.appService.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfully');
        this.users = this.users.filter((user) => user.id !== id);
      },
      (error: any) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  addUser(newUser: any): void {
    this.appService.addUser(newUser).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.users = [...this.users, response];
        this.newUser = {};
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  updateUser(updateUser: any): void {
    this.appService.updateUser(updateUser).subscribe(
      (response) => {
        updateUser.editMode = false;
        console.log('User update successfully:', response);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
  editUser(user: any): void {
    user.editMode = true;
  }
}
