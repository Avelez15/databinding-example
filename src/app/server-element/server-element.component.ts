import { Component, Input, ViewEncapsulation,OnInit,OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
 OnChanges,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log (changes);

  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck () {
    console.log('ngDocheck called')
  }

  ngAfterContentInit() {
    console.log ('ngAfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }
}
