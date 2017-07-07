export class People {
  private _company: any;

  private _color: string;

  private _emailNotificationsEnabled: boolean;

  private _enabled: boolean;

  private _firstName: string;

  private _id: string;

  private _email: string;

  private _lastName: string;


  get company(): any {
    return this._company;
  }

  set company(value: any) {
    this._company = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get emailNotificationsEnabled(): boolean {
    return this._emailNotificationsEnabled;
  }

  set emailNotificationsEnabled(value: boolean) {
    this._emailNotificationsEnabled = value;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}
