import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
  isClassCollapsed = true;
  isImportAttendanceCollapsed = true;
  isAttendanceCollapsed = true;
  isBranchCollapsed = true;
  isStaticticsCollapsed = true;
  isFriendsCollapsed = true;
  contactTab: boolean;
  chatTab: boolean = true;
  toggle1: boolean;
  toggle2: boolean;
  toggle3: boolean = true;
  toggle4: boolean;
  toggle5: boolean;
  toggle6: boolean;
  toggle7: boolean;
  toggle8: boolean;
  toggle9: boolean;
  toggle10: boolean;
  fontSelect: any;
  // menuIconSelect: any;
  staticscard: boolean = true;
  friendscard: boolean = true;
  constructor(private router: Router, @Inject(AppComponent) private app: AppComponent) {
    if((this.router.url).includes('attendance')) {
      this.isAttendanceCollapsed = false;
    }
    if((this.router.url).includes('branch')) {
      this.isBranchCollapsed = false;
    }
    if((this.router.url).includes('class')) {
      this.isClassCollapsed = false;
    }
    if((this.router.url).includes('import-attendance-log')) {
      this.isImportAttendanceCollapsed = false;
    }
  }

  ngOnInit(): void {

  }


  onTab(number) {
    this.chatTab = false;
    this.contactTab = false;
    if (number == '1') {
      this.chatTab = true;
    }
    else if (number == '2') {
      this.contactTab = true;
    }
  }



  toggleUserMenu() {
    const body = document.getElementsByClassName('user_div')[0];

    if (body.classList.contains('open')) {
      body.classList.remove('open');
    }
    else {
      body.classList.add('open');
    }
    document.getElementsByClassName('overlay')[0].classList.toggle("open");
  }
  

  toggleMenu() {
    const body = document.getElementsByTagName('body')[0];

    if (body.classList.contains('offcanvas-active')) {
      body.classList.remove('offcanvas-active');
    }
    else {
      body.classList.add('offcanvas-active');
    }
  }
  cToggoleMenu() {
    const body = document.getElementsByTagName('body')[0].classList.remove("offcanvas-active");
    document.getElementsByClassName('overlay')[0].classList.toggle("open");
  }

  CardRemoveStatics() {
    this.staticscard = false;
  }
  CardRemoveFriends() {
    this.friendscard = false;
  }

}
