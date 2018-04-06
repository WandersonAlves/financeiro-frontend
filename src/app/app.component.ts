import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('close-circle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close-circle.svg'));
    iconRegistry.addSvgIcon('money-bag', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/money-bag.svg'));
  }
}
