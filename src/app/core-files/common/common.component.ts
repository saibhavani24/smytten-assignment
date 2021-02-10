import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  swipeCoord?: [number, number];
  swipeTime?: number;
  constructor( ) { }
  ngOnInit() {
  }
  swipeRightToLeft(e: TouchEvent, when: string) {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;
      if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        const swipe = direction[0] < 0 ? 'left' : 'right';
        if (swipe === 'left') {
          this.closeNav();
        }
      }
    }
  }
  openNav() {
    document.body.style.overflow = 'hidden';
    document.getElementById('mobileSidenav').style.width = '80%';
    document.getElementById('sidenav-close').style.display = 'block';
  }
  closeNav() {
    document.body.removeAttribute('style');
    document.getElementById('mobileSidenav').style.width = '0';
    document.getElementById('sidenav-close').style.display = 'none';
  }
}
