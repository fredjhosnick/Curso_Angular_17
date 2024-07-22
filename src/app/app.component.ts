import { Component } from '@angular/core';
import { ContainerAllModule } from './container-all/container-all.module';


@Component({
	selector: 'app-root',
	standalone: true,
	imports:[ContainerAllModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'angular17-course-for-work';
}