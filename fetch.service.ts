import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  data: object = [
    {
      id: 101,
      firstname: ' Sadiya ',
      lastname: 'Khan',
      email: 'SK@gmail.com',
      phone_number: 123456,
      date_of_birth: ' 03-08-97',
      designation: 'Drug dealer'
    },
    {
      id: 102,
      firstname: ' Amulya',
      lastname: 'Yadav',
      email: 'Ay@gmail.com',
      phone_number: 234567,
      date_of_birth: ' 22-11-96',
      designation: 'Officer'
    },
    {
      id: 103,
      firstname: ' Shubhra',
      lastname: 'Sotie',
      email: 'SS@gmail.com',
      phone_number: 345678,
      date_of_birth: '02-01-96',
      designation: 'Maid'
    },
    {
      id: 104,
      firstname: ' Mansi ',
      lastname: 'Bhatija',
      email: 'MB@gmail.com',
      phone_number: 987456,
      date_of_birth: '29-09-96',
      designation: 'Gardener'
    },
    {
      id: 105,
      firstname: ' Yash ',
      lastname: 'Singh',
      email: 'Ys@gmail.com',
      phone_number: 456987,
      date_of_birth: ' 30-10-98',
      designation: 'Driver'
    },
  ];
  setData(content) {
    content = this.data;
  }
  getData() {
    return this.data;
  }
  getColumns() {
    return Object.keys(this.data[0]);
  }
}
