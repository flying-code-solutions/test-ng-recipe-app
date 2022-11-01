import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInput: ElementRef;
  @ViewChild('amountInput')
  amountInput: ElementRef;

  @Output()
  ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(): void {
    const iName = this.nameInput.nativeElement.value;
    const iAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(iName, iAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  deleteFirst(): void {
    this.remove.emit();
  }

  clearForm(): void {
    this.nameInput.nativeElement.value = "";
    this.amountInput.nativeElement.value = "";
  }
}
