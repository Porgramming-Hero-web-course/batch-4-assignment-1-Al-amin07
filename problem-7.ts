{
  //

  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge() {
      return new Date().getFullYear() - this.year;
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  const car2 = new Car("Toyota", "Volvo", 2013);
  const result = car.getCarAge();
  console.log(result)
 

  //
}
