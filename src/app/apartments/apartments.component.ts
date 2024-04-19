import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../core/models/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const residenceId = this.route.snapshot.params['residenceId'];

    // Simulation de données d'appartements pour la résidence spécifique
    this.apartments = [
      { id: 1, appartNum: 101, floorNum: 1, surface: 80, terrace: 'oui', surfaceTerrace: 20, category: 'S+1', description: 'Appartement spacieux avec terrasse', residence: { id: residenceId, name: 'Nom de la résidence', address: 'Adresse de la résidence', image: 'chemin/de/l/image' } },
      { id: 2, appartNum: 102, floorNum: 1, surface: 90, terrace: 'non', surfaceTerrace: 0, category: 'S+1', description: 'Appartement lumineux', residence: { id: residenceId, name: 'Nom de la résidence', address: 'Adresse de la résidence', image: 'chemin/de/l/image' } },
      // Ajoutez d'autres appartements selon vos besoins
    ];
  }

  addToFavorites(apartment: Apartment): void {
    // Ajouter la logique pour ajouter l'appartement aux favoris
    console.log('Ajouter aux favoris : ', apartment);
  }
}
