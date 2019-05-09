import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [TodoComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosFeature', reducers)
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
