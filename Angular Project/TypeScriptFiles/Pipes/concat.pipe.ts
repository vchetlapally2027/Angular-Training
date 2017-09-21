import {  Pipe,PipeTransform} from "@angular/core";
@Pipe({
    name:'concat'
})
export class ConcatPipe implements PipeTransform{
    transform(v:string,...a:string[]):string{
        return v+" From Pipe"
    }
}