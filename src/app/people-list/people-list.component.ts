import {Component, Input, OnInit} from '@angular/core';

import {DisplayMessages} from '../shared/display-messages';
import {People} from '../shared/services/people/model/people';
import {PeopleService} from '../shared/services/people/people.service';
import {MdChipEvent} from '@angular/material';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: People[] = [];
  loading: boolean = true;
  error: boolean = false;
  errorMessage: string = DisplayMessages.GET_DATA_ERROR;
  loadingMessage: string = DisplayMessages.LOADING;
  noDataMessage: string = DisplayMessages.NO_DATA;
  selectedPeople: People[] = [];

  @Input() selectable: boolean = false;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.fetchPeopleData();
  }

  fetchPeopleData() {
    this.loading = true;

    this.peopleService.getPeopleData().subscribe(
      (data) => {
        this.loading = false;
        this.error = false;
        this.peopleList = data;
        console.log(data);

      },
      (error) => {
        this.loading = false;
        this.error = true;
        console.log(error);
      }
    );
  }

  onChipSelect(event: MdChipEvent, people: People) {
    setTimeout(() => {
      this.selectedPeople.push(people);
    }, 0);
  }

  onChipDeselect(event: MdChipEvent, people: People) {
    let removeIndex = this.selectedPeople
      .map((person: People) => {
        return person.id
      })
      .indexOf(people.id);
    this.selectedPeople.splice(removeIndex, 1);
  }
}
