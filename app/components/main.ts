import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { template } from './classes/template';

@Component({
  selector: 'app-content',
  templateUrl: 'app/templates/'+template+'/main.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app/templates/'+template+'/css/main.css']
})
export class main { }
