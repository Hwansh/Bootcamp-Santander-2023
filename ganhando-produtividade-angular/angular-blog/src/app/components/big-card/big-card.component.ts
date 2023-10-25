import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  // photoCover: String ="https://disneyplusbrasil.com.br/wp-content/uploads/2022/08/Marvel-Studios-MCU.jpg"
  // cardTitle: String="Marvel Studios"
  // cardDescription: String= `Marvel Studios é um estúdio de cinema norte-americano
  //   parte do conglomerado The Walt Disney Company.
  //   Marvel Studios trabalha em conjunto com a Walt Disney.
  //   Studios para distribuição e marketing.`
  @Input()
  photoCover: String =""
  @Input()
  cardTitle: String=""
  @Input()
  cardDescription: String=""
  @Input()
  Id:string="0"
  
  constructor(){}

  ngOnInit(): void{}
}
