import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TechSkillComponent } from './components/tech-skill/tech-skill.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { WorkItemComponent } from './components/work-item/work-item.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    InputComponent,
    TextAreaComponent,
    TechSkillComponent,
    AccordionComponent,
    WorkItemComponent,
    CardComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    TextAreaComponent,
    TechSkillComponent,
    AccordionComponent,
    WorkItemComponent,
    CardComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
