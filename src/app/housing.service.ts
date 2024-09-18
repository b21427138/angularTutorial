import { Injectable } from '@angular/core';
import { IHousingLocation } from './housing-interface';
// import { housingLocationList, testHousingLocation } from './OldhousingData';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations";

  async getAllHousingLocations(): Promise<IHousingLocation[]> {
    console.log('Fetching housing locations from server');
    const response = (await fetch(this.url));
    const json = response.json();
    console.log('Fetched housing locations from server');
    console.log(json);

    return json;
  }

  getTestHousingLocation(): Promise<IHousingLocation> {
    return this.getHousingLocationById(9999);
  }

  getHousingLocationById(id: number): Promise<IHousingLocation> {
    return this.getAllHousingLocations()
      .then(hls => hls.find((hl) => hl.id === id) as IHousingLocation);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,);
  }

}
