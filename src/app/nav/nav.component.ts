import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {}

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault();

    this.modal.toggleModal('auth');
  }

  // async logout($event: Event) {
  //   $event.preventDefault();

  //   await this.afAuth.signOut();
  //   await this.router.navigateByUrl('/');
  // }

  public async logout($event: Event) {
    if ($event) {
      $event.preventDefault();
    }

    await this.afAuth.signOut();

    if (this.router) {
      await this.router.navigateByUrl('/');
    }
  }
}
