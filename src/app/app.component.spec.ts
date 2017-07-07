import {async, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {MdChipsModule} from '@angular/material';

import {AppComponent} from './app.component';
import {DisplayMessages} from './shared/display-messages';
import {HttpAuth} from './shared/services/api/http-auth';
import {PeopleListComponent} from './people-list/people-list.component';
import {PeopleService} from './shared/services/people/people.service';

const expectedTitle = DisplayMessages.APP_TITLE;
const expectedSubtitle = DisplayMessages.APP_SUBTITLE;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, PeopleListComponent],
      imports: [HttpModule, MdChipsModule],
      providers: [HttpAuth, PeopleService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title '` + expectedTitle + `'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(expectedTitle);
  }));

  it('should display a different title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.title = 'Test';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Test');
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ' + expectedTitle);
  }));

  it(`should have as subtitle '` + expectedSubtitle + `'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitle).toEqual(expectedSubtitle);
  }));

  it('should render subtitle in h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(expectedSubtitle);
  }));

  it('should create the people list', async(() => {
    const fixture = TestBed.createComponent(PeopleListComponent);
    const peopleList = fixture.debugElement.componentInstance;
    expect(peopleList).toBeTruthy();
  }));
});
