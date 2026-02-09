import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  imports: [ReactiveFormsModule],
  templateUrl: './form-one.html',
  styleUrl: './form-one.scss',
})
export class FormOne {



  // profileForm = new FormGroup({
  //   name: new FormControl("pippo"),
  //   surname: new FormControl("de pippis"),
  //   adress: new FormGroup({
  //     city: new FormControl('topolinia'),
  //     street: new FormControl('corso perrone'),
  //     number: new FormControl(12)
  //   })
  // });

  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    name: ['paperone', Validators.required],
    surname: ['de paperis', Validators.maxLength(4)],
    adress: this.fb.group({
      city: ['paperopoli'],
      street: ['via delle oche'],
      number: [12, [Validators.min(1), Validators.required]]
    }),
    aliases: this.fb.array([]),
    children: this.fb.array([]),
  })


  submit() {
    console.log(this.profileForm);
  }

  getAliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.getAliases().push(this.fb.control(''));
  }

  removeAlias(index: number) {
    this.getAliases().removeAt(index);
  }

  getChildren() {
    return this.profileForm.get('children') as FormArray;
  }

  addChild() {
    const group = this.fb.group({
      name: [''],
      surname: [''],
      age:[0]
    })
    this.getChildren().push(group);
  }

  removeChild(index: number) {
    this.getChildren().removeAt(index);
  }


}
