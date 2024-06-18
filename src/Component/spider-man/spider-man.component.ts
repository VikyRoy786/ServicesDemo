import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-spider-man',
  standalone: true,
  imports: [],
  templateUrl: './spider-man.component.html',
  styleUrl: './spider-man.component.css'
})
export class SpiderManComponent  implements OnInit{
  missions : any = {id:'', missionDesc :'', task :''}
  constructor(private missionService : MissionService) {
    
   
  }
  ngOnInit():void{
    this.missionService.missionObservable.subscribe((data) =>{
      this.missions = data;
    });
  }
  remove(n :number){
    this.missionService.remove(n);
  }

}
