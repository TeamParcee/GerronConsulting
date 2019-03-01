import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent,  } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor() { }

  ngOnInit() {

   
  }


    scrollTo(elementId: string) {
        let y = document.getElementById(elementId).offsetTop;
        this.content.scrollToPoint(0, y, 1200);
    }

    
}
