import { Component, computed, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {


  backgroundColor = input('');
  fontColor = input('');
  transparecy = signal(64)

  tranparentColor = computed(() => {
    let color = this.backgroundColor();
    color = color + this.transparecy().toString(16);
    console.log(color);
    return color
  });


  constructor() {
    console.log('HeaderComponent constructor', this.backgroundColor());

    effect(() => {
      console.log('HeaderComponent effect', this.backgroundColor());
      console.log('HeaderComponent effect', this.fontColor());
    });
  }

  ngOnInit() {
    console.log('onInit', this.backgroundColor())
    //manipolare input
  }

  ngAfterViewInit() {
    //manipolare html
  }

  ngOnChanges() {
    //manipolare input nel momento in cui cambia
  }

  ngOnDestroy() {
    //pulire risorse
  }

  removeTrasparency() {
    this.transparecy.update(old => old + 16);
  }
  addTrasparency() {
    this.transparecy.update(old => old - 16);
  }

}
