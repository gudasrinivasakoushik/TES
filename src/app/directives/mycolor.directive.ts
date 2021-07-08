import { HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

   // }
   @HostBinding('style.color') color:string
   @HostBinding('style.backgroundColor') bgcolor:string | undefined
 
   constructor(private eleRef:ElementRef, private renderer:Renderer2) {
     this.color = 'black'
    }
 
    @HostListener('mouseover') onMouseOver(){
      this.color ='red'
      this.bgcolor = 'pink'
 
    }
    @HostListener('mouseleave') onMouseLeave(){
     this.color ='green'
     this.bgcolor = 'white'
 
 }

}
