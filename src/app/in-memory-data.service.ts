import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  
  createDb() {
    const signup = [
           
    ];

    const user = [{
      id: 'signup',      
      users: [
        {
          email: 'test@test.com',
          password: 'test'
        },
        {
          email: 'test2@test.com',
          password: 'test'
        }
      ]
      
    }];

    const banners = [
      { 
        url: "#",
        img: "assets/img/banners/banner_big.jpg"
      },
      { 
        url: "#",
        img: "assets/img/banners/banner_middle.jpg"
      },
      { 
        url: "#",
        img: "assets/img/banners/banner_small_1.jpg"
      },
      { 
        url: "#",
        img: "assets/img/banners/banner_small_2.jpg"
      }
    ];

    const goods = [
      { 
        name: "Product name here",
        category: "Top",
        price: "100",
        rating: "5",
        discount: "10",
        img: "assets/img/shop/shop_item.jpg"
      },
      { 
        name: "Product name here",
        category: "Top",
        price: "100",
        rating: "5",
        discount: "10",
        img: "assets/img/shop/shop_item.jpg"
      },
      { 
        name: "Product name here",
        category: "Top",
        price: "100",
        rating: "5",
        discount: "10",
        img: "assets/img/shop/shop_item.jpg"
      },
      { 
        name: "Product name here",
        category: "Top",
        price: "100",
        rating: "5",
        discount: "10",
        img: "assets/img/shop/shop_item.jpg"
      }
    ];
    return {banners, goods, user, signup};
  }
}
