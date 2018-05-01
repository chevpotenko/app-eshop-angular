import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  
createDb() {
  const cart = [{
    id: 'add',      
    totalQty: 2    
  }];

  const shoppingcart = {
    items: [
      {
        item: {
          _id: 1,
          name: "Product name here",
          category: "Top",
          price: "100",
          rating: "5",
          discount: "10",
          img: "assets/img/shop/shop_item.jpg"
        },
        qty: 1,
        total: 100
      },
      {
        item: {
          _id: 1,
          name: "Product name here",
          category: "Top",
          price: "100",
          rating: "5",
          discount: "10",
          img: "assets/img/shop/shop_item.jpg"
        },
        qty: 2,
        total: 200
      }
    ],
    totalPrice: 300,
    totalQty: 3
  };

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
      _id: 1,
      name: "Product name here",
      category: "Top",
      price: "100",
      rating: "5",
      discount: "10",
      img: "assets/img/shop/shop_item.jpg"
    },
    { 
      _id: 2,
      name: "Product name here",
      category: "Top",
      price: "100",
      rating: "5",
      discount: "10",
      img: "assets/img/shop/shop_item.jpg"
    },
    { 
      _id: 3,
      name: "Product name here",
      category: "Top",
      price: "100",
      rating: "5",
      discount: "10",
      img: "assets/img/shop/shop_item.jpg"
    },
    { 
      _id: 4,
      name: "Product name here",
      category: "Top",
      price: "100",
      rating: "5",
      discount: "10",
      img: "assets/img/shop/shop_item.jpg"
    }
  ];
  return {banners, goods, cart, user, signup, shoppingcart};
  }
}
