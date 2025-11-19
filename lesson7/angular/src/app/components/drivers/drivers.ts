import { Component } from '@angular/core';
import { Driver } from '../../models/driver';
import { ApiCall } from '../../services/api-call';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drivers',
  imports: [CommonModule],
  templateUrl: './drivers.html',
  // styleUrl: './drivers.css',
})
export class Drivers {
    drivers: Driver[] = [];
    nextId: number = Math.floor(Math.random());


  constructor(private apiCallService: ApiCall) { }

  ngOnInit() {

    this.getDrivers1();
  }
  getDrivers1() {
    this.apiCallService.get('drivers').subscribe(
      {
        next: (data) => {
          console.log(data)
          this.drivers = data;
        },
        error: (error) => console.error(error),
        complete: () => console.info('complete')
      });
  }

  addDriver() {
    let newDriver = new Driver();
    newDriver.id = this.nextId++;
    newDriver.name = 'sara'+newDriver.id;

    this.apiCallService.post('drivers', newDriver).subscribe(
      {
        next: (success) => {
          console.log(success)
          this.getDrivers1();
        },
        error: (error) => { console.log(error) },
        complete: () => { console.log('complete') }
      }
    )
  }

  deleteDriver(driverId:number){
    this.apiCallService.delete('drivers',driverId).subscribe(
       {
        next: (success) => {
          console.log(success)
          this.getDrivers1();
        },
        error: (error) => { console.log(error) },
        complete: () => { console.log('complete') }
      }
    )
  }


  putDriver(driverId:number){
    let updatedDriver=new Driver();
    updatedDriver.id=driverId;
    updatedDriver.name='updated sara';
      
        this.apiCallService.put('drivers',updatedDriver, driverId).subscribe(
          {
        next: (success) => {
          console.log(success)
          this.getDrivers1();
        },
        error: (error) => { console.log(error) },
        complete: () => { console.log('complete') }
      }
        )


  }
  }



