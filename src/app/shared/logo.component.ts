import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logo; else logoSkeleton">
      <img [src]="logo" alt="NAC Tax Center" style="height: 38px" />
    </ng-container>
    <ng-template #logoSkeleton>
      <div
        style="
          width: 38px;
          height: 38px;
          background: #eaeaea;
          border-radius: 8px;
          animation: pulse 1.2s infinite;
          display: inline-block;
        "
      ></div>
    </ng-template>
    <style>
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    </style>
  `,
})
export class LogoComponent {
  @Input() logo?: string;
}
