import { Injectable } from '@angular/core';
import { IHousingLocation } from './housing-interface';
import { housingLocationList, testHousingLocation } from './housingData';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }


  getTestHousingLocation(): IHousingLocation {
    return testHousingLocation;
  }

  getAllHousingLocations(): IHousingLocation[] {
    return housingLocationList;
  }

  getHousingLocationById(id: number): IHousingLocation | undefined {
    if (id === 9999) {
      return this.getTestHousingLocation();
    }
    return housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,);
  }

}
