import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {ApiPaths} from '../api/api-endpoint-config';
import {HttpAuth} from '../api/http-auth';
import {People} from './model/people';

@Injectable()
export class PeopleService {

  constructor(
    private http: HttpAuth) {}

  getPeopleData(): Observable<People[]> {
    return this.http.get(ApiPaths.PEOPLE)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .map((response) => {
        return PeopleFactory.createPeopleList(response['list']);
      });
  }

}


export class PeopleFactory {

  public static createPeopleList(peopleListData): People[] {
    return peopleListData['entries'].map((peopleData) => {
      return PeopleFactory.createPeople(peopleData['entry']);
    });

  }

  private static createPeople(peopleData): People {
    let people = new People();

    people.company = peopleData.company || {};
    people.emailNotificationsEnabled = peopleData.emailNotificationsEnabled || false;
    people.enabled = peopleData.enabled || false;
    people.color = people.enabled ? 'accent' : '';
    people.firstName = peopleData.firstName || '';
    people.id = peopleData.id;

    people.email = peopleData.email || '';
    people.lastName = peopleData.lastName || '';

    return people;
  }

}
