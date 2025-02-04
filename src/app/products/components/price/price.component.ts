import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('componenteHijo - ngOnInit');

    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('componenteHijo - ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('componenteHijo - ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
