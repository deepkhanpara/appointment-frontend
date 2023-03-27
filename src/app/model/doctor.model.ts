export class Doctor {
    public id: number;
    public name: string; 
    public specification: string; 
    public availabilityFrom:Date;
    public availabilityTo:Date;

    constructor(id: number, name: string, salary: number, specification: string,availabilityFrom: Date, availabilityTo:Date) {
        this.id = id;
        this.name = name;
        this.specification = specification;
        this.availabilityFrom = availabilityFrom;
        this.availabilityTo = availabilityTo;
      }
}
