import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  category: any[] = [
    {
      "name": "Common House Plants",
      "emoji": '🌱',
      "description": "Plants that we commonly see in every house",
      "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPkFbEva_un1ikV2oITcRIec0xqD6dRNyuw&usqp=CAU',
      
    },
    {
      "name": "Flowering",
      "emoji": '🌼',
      "description": "Decoration plants",
      "image": 'https://cdn.dribbble.com/users/35810/screenshots/6107904/artboard_14_copy.png?compress=1&resize=400x300'
    },
    {
      "name": "Herbal Plants",
      "emoji": '🌿',
      "description": "Plants we can use as a medicine",
      "image": 'https://images.assetsdelivery.com/compings_v2/wahyufrida/wahyufrida1910/wahyufrida191000604.jpg'
    }
  ]

}

