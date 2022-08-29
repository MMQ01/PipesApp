import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(valor:any, enMayusculas: boolean = true):string {
        if(enMayusculas){ 
            return valor.toUpperCase();
        }else{
            return valor.toLocaleLowerCase();
        }
    }
}