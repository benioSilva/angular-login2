import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-menu-link',
    templateUrl: './menu-link.component.html',
    styleUrls: ['./menu-link.component.css']
})
export class MenuLinkComponent {
    @Input() link: string = ""
    @Input() label: string = ""

}