import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-iron-man',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './iron-man.component.html',
  styleUrl: './iron-man.component.css'
})
export class IronManComponent {
missions: any = {id: '', missionDesc :'', task :''}
constructor(private missionService : MissionService) {
 }
Addmission(): void {
  this.missionService.addMission(this.missions);
  this.missions=''
}

}
