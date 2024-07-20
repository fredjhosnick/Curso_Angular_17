import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  inputMessage = 'Ingresa';
  disabledButton = false;

 input(event:Event):void{
  const inputEvent = event.target as HTMLInputElement;;
  console.log('Evento input...',inputEvent.value);
  
 }

  clickSaveData = ():void=>{
    console.log('Guarda los datos...');
    

  }

}
