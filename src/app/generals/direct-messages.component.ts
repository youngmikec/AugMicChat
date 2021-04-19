import { style } from '@angular/animations'
import { Component } from '@angular/core'

@Component({
    selector: 'direct-messages',
    template: `
        <div (click)="toggleContent()" class="dm">
            <li><a>Direct Messages</a></li>
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `,
    styles: [`
        li a {
            cursor: pointer;
            list-style: none;
            text-decoration: none;
            color: rgba(1, 1, 109, 0.8);
            position: relative;
            list-style-type: none;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bolder;
            font-size: 15px;
            padding: 0 15px;
            align-items: center;
            cursor: pointer;
            margin-left: -45px;
        }

        li a::before {
            content: '';
            position: absolute;
            top: 0;
            height: 220%;
            width: 3px;
            background-color: rgba(1, 1, 109, 0.8);
            left: 0;
            margin-left: 5px;
            /* opacity: 0; */
            transform: scaleY(0);
            transition: transform 0.2s, opacity 0.2s
        }

        li a:hover::before {
            opacity: 0.8;
            transform: scaleY(1);
        }
    `]
})

export class DirectMessages {
    visible: boolean = true

    toggleContent(){
        this.visible = !this.visible
    }
}