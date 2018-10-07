import { Directive, ElementRef, Injector } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({
	selector:'app-navbar',
})
export class NavBarComponentNew extends UpgradeComponent {
	constructor(elementRef: ElementRef, injector: Injector) {
		super('navbar', elementRef, injector);
	}

}