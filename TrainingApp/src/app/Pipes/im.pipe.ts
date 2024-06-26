import { Pipe, PipeTransform } from '@angular/core';
import { Index } from '../models/index-mass.model';
@Pipe({
    name: "indexmass", standalone: true
})
export class IndexMassPipe implements PipeTransform {

    public transform(value: Index) {
        var result = value.weight/(Math.pow(value.height/100, 2))
        if (Number.isNaN(result)){
            return ""
    }
    if (result < 10){
        return `Вы скелет, ваш индекс массы тела равен ${result.toFixed(2)}`
    }
    if (result < 20){
        return `Вы чуть чуть худой, ваш индекс массы тела равен ${result.toFixed(2)}`
    }
    if (result < 25){
        return `Вы norm, ваш индекс массы тела равен ${result.toFixed(2)}`
    }
    return `Вы полный, ваш индекс массы тела равен ${result.toFixed(2)}`
}}