import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const banners = [
      { 
        url: "#",
        img: "img/banners/banner_big.jpg"
      },
      { 
        url: "#",
        img: "img/banners/banner_middle.jpg"
      },
      { 
        url: "#",
        img: "img/banners/banner_small_1.jpg"
      },
      { 
        url: "#",
        img: "img/banners/banner_small_2.jpg"
      }
    ];

    const goods = [
      { 
        name: "Product name here",
        category: "Top",
        price: "100",
        rating: "5",
        discount: "10"
      }
    ];
    return {banners, goods};
  }
}
