import {HttpModule} from '@angular/http';
import {TestBed, inject} from '@angular/core/testing';

import {HttpAuth} from '../api/http-auth';
import {PeopleFactory, PeopleService} from './people.service';
import {PeopleListJSON} from './model/people-json';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HttpAuth, PeopleService]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});

describe('PeopleFactory', () => {
  const fixture: PeopleListJSON = {
    "entries": [
      {
        "entry": {
          "id": "admin",
          "enabled": true,
          "company": {},
          "emailNotificationsEnabled": true,
          "firstName": "Administrator",
          "email": "admin@alfresco.com"
        }
      },
      {
        "entry": {
          "telephone": "012211331100",
          "lastName": "Jackson",
          "emailNotificationsEnabled": true,
          "location": "Threepwood, UK",
          "mobile": "012211331100",
          "id": "mjackson",
          "statusUpdatedAt": "2011-02-15T20:13:09.649+0000",
          "description": "Mike is a demo user for the sample Alfresco Team site.",
          "company": {},
          "enabled": false,
          "email": "mjackson@example.com",
          "firstName": "Mike",
          "avatarId": "3fbde500-298b-4e80-ae50-e65a5cbc2c4d",
          "userStatus": "Working on a new web design for the corporate site",
          "jobTitle": "Web Site Manager",
          "skypeId": "mjackson"
        }
      }
    ]

  };

  it('should create list of people', () => {
    let peopleList = PeopleFactory.createPeopleList(fixture);

    expect(peopleList[0].company).toBe(fixture.entries[0].entry.company);
    expect(peopleList[0].emailNotificationsEnabled).toBe(fixture.entries[0].entry.emailNotificationsEnabled);
    expect(peopleList[0].enabled).toBe(fixture.entries[0].entry.enabled);
    expect(peopleList[0].color).toBe('accent');
    expect(peopleList[0].firstName).toBe(fixture.entries[0].entry.firstName);
    expect(peopleList[0].id).toBe(fixture.entries[0].entry.id);
    expect(peopleList[0].email).toBe(fixture.entries[0].entry.email);
    expect(peopleList[0].lastName).toBe('');

    expect(peopleList[1].company).toBe(fixture.entries[1].entry.company);
    expect(peopleList[1].emailNotificationsEnabled).toBe(fixture.entries[1].entry.emailNotificationsEnabled);
    expect(peopleList[1].enabled).toBe(fixture.entries[1].entry.enabled);
    expect(peopleList[1].color).toBe('');
    expect(peopleList[1].firstName).toBe(fixture.entries[1].entry.firstName);
    expect(peopleList[1].id).toBe(fixture.entries[1].entry.id);
    expect(peopleList[1].email).toBe(fixture.entries[1].entry.email);
  expect(peopleList[1].lastName).toBe(fixture.entries[1].entry.lastName);
  });

});
