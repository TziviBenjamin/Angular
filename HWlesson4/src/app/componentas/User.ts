export class User {
  name: string;
  age: number;
  email: string;
  agreedToTerms: boolean;

  constructor(name: string, age: number, email: string, agreedToTerms: boolean) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.agreedToTerms = agreedToTerms;
  }
}
