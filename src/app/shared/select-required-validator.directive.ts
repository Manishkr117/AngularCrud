import {Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import { AbstractControl } from '@angular/forms/src/model';
import { NG_VALIDATORS } from '@angular/forms/';

@Directive({
    
selector:'[appSelectValidator]',
providers:[{
    provide:NG_VALIDATORS,//this is opaque token
    useExisting:SelectRequiredValidatorDirective,
    multi:true
}]
})

export class SelectRequiredValidatorDirective implements Validator{
    @Input() appSelectValidator:string;
validate(control: AbstractControl): {[key:string]:any}|null{
return control.value===this.appSelectValidator?{'defaultSelected': true}: null;
}
}