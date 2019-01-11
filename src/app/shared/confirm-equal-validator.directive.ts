import { Validator } from "@angular/forms/src/directives/validators";
import { Directive } from "@angular/core";
import { AbstractControl } from '@angular/forms/src/model';
import { NG_VALIDATORS } from "@angular/forms";
import { Input } from "@angular/core";


@Directive({
    selector:'[passwordValidator]',
providers:[{
    provide:NG_VALIDATORS,//this is opaque token
    useExisting:ConfirmEqualValidatorDirective,//here, we are adding our custom validator (ConfirmEqualValidatorDirective) to the list of validator that angular mantains
    multi:true
}]
})
export class ConfirmEqualValidatorDirective implements Validator{
    @Input() passwordValidator:string; //passing name of password field as parameter
validate(control: AbstractControl): {[key:string]:any}|null{   //here, validate method returns object if validation is success and null if validation fails
    
    const controlToCompare=control.parent.get(this.passwordValidator);
    if(controlToCompare && controlToCompare.value!==control.value){
        return { 'notEqual': true};
    }
    else
    return ;
}
}