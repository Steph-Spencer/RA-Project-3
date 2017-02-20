/**
 * Created by anerdatlarge on 2017-02-17.
 */
import { Component, OnInit } from '@angular/core';
import { JournalService } from './journal.service';
import { JournalEntry } from './newblog';

@Component({
    moduleId: module.id,
    selector: 'newblog',
    templateUrl: './newblog.component.html',
    styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {

    public journals: JournalEntry[];
    public entry: JournalEntry;
    public params: string;

    constructor(private journalService: JournalService) { }

    ngOnInit() {
        this.entry = new JournalEntry();
    }

  //  SubmitJournal() {
//        console.log('posting..');
//        this.params = '[' + JSON.stringify(this.entry)+']';
//        let parameters = JSON.stringify($("#apiForm").serializeArray());
//        console.log(parameters);
//    }
}