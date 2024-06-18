import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
private missionsSubject = new BehaviorSubject<any[]>([{id: '1', missionDesc:'save world', task:'take down thanos'}]); // create subject
missionObservable = this.missionsSubject.asObservable(); // craete observable

addMission(m:any):void{
  let newMission =[...this.missionsSubject.value,m];
 console.log(newMission)
 this.missionsSubject.next(newMission) //publish
}
remove(n :number):void{
  let newMission =[...this.missionsSubject.value];
  newMission.splice(n,1);
  this.missionsSubject.next(newMission);
  console.log(newMission);

}
constructor() { }
}
