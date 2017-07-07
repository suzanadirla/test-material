import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {MdChipsModule} from '@angular/material';

import {DisplayMessages} from '../shared/display-messages';
import {HttpAuth} from '../shared/services/api/http-auth';
import {PeopleListComponent} from './people-list.component';
import {PeopleFactory, PeopleService} from '../shared/services/people/people.service';
import {People} from '../shared/services/people/model/people';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;
  let compiled: HTMLElement;
  const expectedErrorMessage: string = DisplayMessages.GET_DATA_ERROR;
  const expectedLoadingMessage: string = DisplayMessages.LOADING;
  const expectedNoDataMessage: string = DisplayMessages.NO_DATA;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleListComponent],
      imports: [MdChipsModule, HttpModule],
      providers: [PeopleService, HttpAuth]
    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as error display message '` + expectedErrorMessage + `'`, () => {
    expect(component.errorMessage).toEqual(expectedErrorMessage);
  });

  it(`should have as loading display message '` + expectedLoadingMessage + `'`, () => {
    expect(component.loadingMessage).toEqual(expectedLoadingMessage);
  });

  it(`should have as 'no-data' display message '` + expectedNoDataMessage + `'`, () => {
    expect(component.noDataMessage).toEqual(expectedNoDataMessage);
  });

  it('should initially show loading message', () => {
    expect(compiled.querySelector('.peopleList__message--error')).toBeFalsy();
    expect(compiled.querySelector('.peopleList__mesage--loading')).toBeTruthy();
    expect(compiled.querySelector('.peopleList__message--noData')).toBeFalsy();
  });

  it('should show only no-data message if empty list is fetched', () => {
    component.peopleList = [];
    fixture.detectChanges();
    expect(compiled.querySelector('.peopleList__message--error')).toBeFalsy();
    expect(compiled.querySelector('.peopleList__mesage--loading')).toBeFalsy();
    expect(compiled.querySelector('.peopleList__message--noData')).toBeTruthy();
  });

  it('should show only error message if error detected', () => {
    component.error = true;
    fixture.detectChanges();
    expect(compiled.querySelector('.peopleList__message--error')).toBeTruthy();
    expect(compiled.querySelector('.peopleList__mesage--loading')).toBeFalsy();
    expect(compiled.querySelector('.peopleList__message--noData')).toBeFalsy();
  });

  it('should show list of people after non-empty list is fetched', () => {
    const testList = {
      "entries": [
        {
          "entry": {
            "id": "testId",
            "enabled": true,
            "company": {},
            "emailNotificationsEnabled": true,
            "firstName": "Test"
          }
        }
      ]
    };
    component.peopleList = PeopleFactory.createPeopleList(testList);

    fixture.detectChanges();
    expect(component.peopleList.length).toEqual(1);

    expect(compiled.querySelector('.peopleList__message--error')).toBeFalsy();
    expect(compiled.querySelector('.peopleList__mesage--loading')).toBeFalsy();
    expect(compiled.querySelector('.peopleList__message--noData')).toBeFalsy();
    expect(compiled.querySelector('.peopleList__content')).toBeTruthy();

    expect(compiled.querySelector('.peopleList__content md-chip-list md-chip:nth-child(1)').classList).toContain('mat-accent');
  });

});
