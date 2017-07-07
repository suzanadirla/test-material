export interface PeopleListJSON {
  entries: PeopleJSON[];
}

export interface PeopleJSON {
  entry: PeopleJSONEntry;
}

export interface PeopleJSONEntry {
  company: any;

  emailNotificationsEnabled: boolean;

  enabled: boolean;

  firstName: string;

  id: string;

  email?: string;

  lastName?: string;

  [propName: string]: any;
}
