import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-apartment',
  templateUrl: './detail-apartment.component.html',
  styleUrls: ['./detail-apartment.component.css']
})
export class DetailApartmentComponent implements OnInit {
  apartmentId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.apartmentId = id;
      }
    });
  }
}
