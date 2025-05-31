export class Teacher {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ) {}

  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName
    };
  }
}