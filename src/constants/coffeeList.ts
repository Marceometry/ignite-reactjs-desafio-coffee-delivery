import { CoffeeItem } from '@/@types/coffee'
import { images } from './images'

export const coffeeList: CoffeeItem[] = [
  {
    id: '1',
    imageUrl: images[0],
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 890,
  },
  {
    id: '2',
    imageUrl: images[1],
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 1090,
  },
  {
    id: '3',
    imageUrl: images[2],
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 990,
  },
  {
    id: '4',
    imageUrl: images[3],
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 990,
  },
  {
    id: '5',
    imageUrl: images[4],
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 1090,
  },
  {
    id: '6',
    imageUrl: images[5],
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceInCents: 1190,
  },
  {
    id: '7',
    imageUrl: images[6],
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 1190,
  },
  {
    id: '8',
    imageUrl: images[7],
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    priceInCents: 1090,
  },
  {
    id: '9',
    imageUrl: images[8],
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    priceInCents: 1290,
  },
  {
    id: '10',
    imageUrl: images[9],
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 1090,
  },
  {
    id: '11',
    imageUrl: images[10],
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 1390,
  },
  {
    id: '12',
    imageUrl: images[11],
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    priceInCents: 1290,
  },
  {
    id: '13',
    imageUrl: images[12],
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    priceInCents: 1290,
  },
  {
    id: '14',
    imageUrl: images[13],
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceInCents: 1390,
  },
]
