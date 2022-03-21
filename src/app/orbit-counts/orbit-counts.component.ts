import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	

for (let i = 0; i < this.satelliteList.length; i++){
      let type = this.satelliteList[i].type; 
      this.satelliteList[i].count = 0; 
      let index = this.satelliteTypes.indexOf(type.toLowerCase()); 
  
      if(index !== -1) { 
      this.satelliteCount.push(this.satelliteList[i]); 
      this.satelliteTypes.splice(index, 1); 
    }
      for(let j = 0; j < this.satelliteList.length; j++) {
        if(type === this.satelliteList[j].type) {
          this.satelliteList[i].count += 1;
        }
      }
    }
    
    return this.satelliteCount;
 } 

}
