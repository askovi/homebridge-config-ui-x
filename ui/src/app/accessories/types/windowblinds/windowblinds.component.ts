import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceTypeX } from '../../accessories.component';

import { WindowblindsManageComponent } from './windowblinds.manage.component';

@Component({
  selector: 'app-windowblinds',
  templateUrl: './windowblinds.component.html',
  styleUrls: ['./windowblinds.component.scss']
})
export class WindowblindsComponent implements OnInit {
  @Input() public service: ServiceTypeX;
  model = 1;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onClick() {
    const ref = this.modalService.open(WindowblindsManageComponent, {
      size: 'sm',
    });
    ref.componentInstance.service = this.service;
  }

}
