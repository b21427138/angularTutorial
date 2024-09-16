import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { NgFor } from '@angular/common';
import { IHousingLocation } from '../housing-interface';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: IHousingLocation[] = [];
  testHousingLocation: IHousingLocation;
  filteredLocationList: IHousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.testHousingLocation = this.housingService.getTestHousingLocation();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (text == '') {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((location) => {
      return location?.city.toLowerCase().includes(text.toLowerCase());
    });
  }

  onKeyUp($event: KeyboardEvent) {
    console.log($event.code);
  }

  submit($event: SubmitEvent) {
    $event.preventDefault();
    console.log('Enter pressed');
  }
}
