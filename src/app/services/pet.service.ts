import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  private _filterBy$ = new BehaviorSubject({ term: '' })

  public filterBy$ = this._filterBy$.asObservable()

  // Mock the database
  private _petsDb: Pet[] = [
    { _id: 'p123', name: 'Momo', age: 2, birthDate: new Date('2020-11-12') },
    { _id: 'p124', name: 'Bobo', age: 6, birthDate: new Date('2020-3-30') },
    { _id: 'p125', name: 'Gertomod', age: 1, birthDate: new Date('2020-9-1') }
  ];

  private _pets$ = new BehaviorSubject([]);

  public pets$ = this._pets$.asObservable()

  public query() {
    const filterBy = this._filterBy$.getValue()
    const pets = this._petsDb.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.term.toLowerCase());
    });

    this._pets$.next(pets);
  }

  public setFilter(filterBy) {
    this._filterBy$.next(filterBy)
    this.query()
  }

  shouldBuyPet(petId: string) {
    return this.http.get<{ answer: string }>('https://yesno.wtf/api')
      .pipe(
        map(res => res.answer)
      )
  }

  public getEmptyPet() {
    return { name: '', age: 0, birthDate: new Date() }
  }

  public remove(petId: string) {
    const pets = this._petsDb
    const petIdx = pets.findIndex(pet => pet._id === petId)
    pets.splice(petIdx, 1)
    this._pets$.next(pets);
  }
  // getById().subscribe((pet) => { })

  public getById(petId: string) {
    const pet = this._petsDb.find(pet => pet._id === petId)
    return pet ? of({ ...pet }) : of(null)
  }

  public save(pet: Pet) {
    return pet._id ? this._edit(pet) : this._add(pet)
  }

  private _add(pet: Pet) {
    pet._id = this._makeId()
    this._petsDb.push(pet)
    this._pets$.next(this._petsDb)
    return of(pet)
  }

  private _edit(pet: Pet) {
    const pets = this._petsDb
    const petIdx = pets.findIndex(_pet => _pet._id === pet._id)
    pets.splice(petIdx, 1, pet)
    this._pets$.next(pets)
    return of(pet)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
