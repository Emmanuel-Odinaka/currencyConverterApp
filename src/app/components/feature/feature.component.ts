import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  currencies = ['USD', 'EUR', 'GBP', 'JPY', 'NGN'];
  errorMessage = 'Error, please both currency should differ';
  banks;
  base = 'USD';
  value = 'NGN';
  featureForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private currenciesService: CurrenciesService
  ) {}
  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      currencyBase: ['', Validators.required],
      currencyValue: ['', Validators.required],
    });
  }

  get first() {
    return this.featureForm.controls;
  }

  onSubmitted() {
    if (this.featureForm.invalid) {
      return;
    }
    this.base = this.featureForm.value.currencyBase;
    this.value = this.featureForm.value.currencyValue;
    this.currenciesService
      .getCurrency(this.base, this.value)
      .subscribe((data) => {
        console.log(data[`${this.base}_${this.value}`]);
        this.banks = data[`${this.base}_${this.value}`];
      });
    console.log(this.featureForm);
  }
}
