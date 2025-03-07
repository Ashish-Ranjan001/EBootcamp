import { AbstractControl } from "@angular/forms";
 
 const ageRangeValidator=(control:AbstractControl)=>{
   if(control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)){
      return {'ageError':true}
   }
   return null;
 }
 export default ageRangeValidator;