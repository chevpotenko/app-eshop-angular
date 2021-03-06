import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pages = [
            {
                id: 'about',
                caption: 'About',
                description: '',
                // tslint:disable-next-line
                text: 'Lorem ipsum dolor sit amet, enim ludus voluptatum eu pri. Per quot oratio ex, ex decore ornatus sit, vide wisi invidunt id vix. Ex ius quodsi definitiones, no nostro molestiae appellantur sed. Eu possit iudicabit referrentur vim, in graeco diceret assentior eum. Ius audire molestie fabellas ut. Iudico lobortis sed ut, inani regione eleifend mel et. Vix an habemus oportere pericula, usu reque perpetua forensibus an, veri natum usu cu. Suas consul omnium at cum, an eos habeo liber. Dolores mediocrem molestiae ex sit, viderer malorum forensibus et his. Has in cibo propriae, vidisse integre nam ut, cu vel minim invenire intellegebat. Ex duo melius dolores mnesarchum, mea possim numquam facilisis ei, at pri erant ridens delenit. Quo an omnes dolorem imperdiet, duo magna noluisse adversarium eu. Tation prompta evertitur duo ei, id dolor elaboraret his, sed ea iuvaret partiendo suscipiantur. Ut per tale assum dignissim, ut quo nibh numquam consetetur. Justo ridens eam an. Nam ad porro cetero sadipscing. Vix consul tractatos theophrastus et, eum ea fabellas consulatu. Eius idque senserit sit te. Adhuc appareat at ius, sed possim nusquam fabellas ea. Aliquam urbanitas per an, cu nibh posse putent nam, lorem inermis dolorem id pri. Dicat primis dictas.',
                images: [
                    {
                        'caption': 'Image',
                        'src': 'assets/img/pages/about/image_1.jpg'
                    }
                ]
            }
        ];

        const banners = [
            {
                url: '#',
                img: 'assets/img/banners/banner_big.jpg'
            },
            {
                url: '#',
                img: 'assets/img/banners/banner_middle.jpg'
            },
            {
                url: '#',
                img: 'assets/img/banners/banner_small_1.jpg'
            },
            {
                url: '#',
                img: 'assets/img/banners/banner_small_2.jpg'
            }
        ];

        const subscribers = [
            {
                id: 1,
                email: 'test@test.com'
            }
        ];

        const users = [
            {
                id: 1,
                email: 'test@test.com',
                password: 'test'
            },
            {
                id: 2,
                email: 'test2@test.com',
                password: 'test'
            }
        ];

        const catalogs = [
            {
                id: 1,
                name: 'Men',
                parentCategory: '',
                img: ''
            },
            {
                id: 2,
                name: 'Women',
                parentCategory: '',
                img: ''
            },
            {
                id: 3,
                name: 'Bridal',
                parentCategory: '',
                img: ''
            },
            {
                id: 4,
                name: 'Baby&Kids',
                parentCategory: '',
                img: ''
            }
        ];

        const products = [
            {
                id: 0,
                name: 'Fashion Product Name 1',
                category: 'Top',
                price: '100',
                sizes: ['S', 'M', 'L', 'XL'],
                brand: 'Brand 1',
                colors: ['beige', 'orange', 'red'],
                rating: '5',
                discount: '10',
                images: ['shop_item.jpg', 'shop_item.jpg', 'shop_item.jpg']
            },
            {
                id: 1,
                name: 'Fashion Product Name 2',
                category: 'Top',
                price: '100',
                sizes: ['S', 'M', 'L', 'XL'],
                brand: 'Brand 1',
                colors: ['beige', 'orange', 'red'],
                rating: '5',
                discount: '10',
                images: ['shop_item.jpg', 'shop_item.jpg', 'shop_item.jpg']
            },
            {
                id: 2,
                name: 'Fashion Product Name 3',
                category: 'Top',
                price: '100',
                sizes: ['S', 'M', 'L', 'XL'],
                brand: 'Brand 1',
                colors: ['beige', 'orange', 'red'],
                rating: '5',
                discount: '10',
                images: ['shop_item.jpg', 'shop_item.jpg', 'shop_item.jpg']
            },
            {
                id: 3,
                name: 'Fashion Product Name 4',
                category: 'Top',
                price: '100',
                sizes: ['S', 'M', 'L', 'XL'],
                brand: 'Brand 1',
                colors: ['beige', 'orange', 'red'],
                rating: '5',
                discount: '10',
                images: ['shop_item.jpg', 'shop_item.jpg', 'shop_item.jpg']
            }
        ];

        const filters = [
            {
                id: 1,
                name: 'Categories',
                type: 'checkbox',
                values: ['Top', 'Bottom', 'Accessories', 'Footwear', 'Other']
            },
            {
                id: 2,
                name: 'Price',
                type: 'radio',
                values: ['0 - 50 $', '50 - 100 $' , '> 100 $'],
            },
            {
                id: 3,
                name: 'Size',
                type: 'checkbox',
                values: ['S', 'M', 'L'],
            },
            {
                id: 4,
                name: 'Brand',
                type: 'checkbox',
                values: ['Brand 1', 'Brand 2'],
            },
            {
                id: 5,
                name: 'Color',
                type: 'checkbox',
                values: ['Red', 'White']
            }
        ];

        const cart = [
            {
                id: 1,
                product: {
                    id: 1,
                    name: 'Fashion Product Name 1',
                    price: '100',
                    size: '',
                    color: '',
                    qty: 1,
                    total: 100
                }
            },
            {
                id: 2,
                product: {
                    id: 1,
                    name: 'Fashion Product Name 1',
                    price: '100',
                    size: '',
                    color: '',
                    qty: 1,
                    total: 100
                }
            }
        ];

        return { pages, banners, subscribers, users, catalogs, products, filters, cart };
    }
}
