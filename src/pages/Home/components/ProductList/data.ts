import expressoTradicional from '../../../../assets/expresso-tradicional.png'
import expressoAmericano from '../../../../assets/expresso-americano.png'
import expressoCremoso from '../../../../assets/expresso-cremoso.png'
import expressoGelado from '../../../../assets/expresso-gelado.png'
import cafeComLeite from '../../../../assets/cafe-com-leite.png'
import latte from '../../../../assets/latte.png'
import capuccino from '../../../../assets/capuccino.png'
import macchiato from '../../../../assets/macchiato.png'
import maccocino from '../../../../assets/maccocino.png'
import chocolateQuente from '../../../../assets/chocolate-quente.png'
import cubano from '../../../../assets/cubano.png'
import havaiano from '../../../../assets/havaiano.png'
import arabe from '../../../../assets/arabe.png'
import irlandes from '../../../../assets/irlandes.png'
import { Product } from '../../../../reducers/cart/reducer'

export const ProductListData: Product[] = [
  {
    img: expressoTradicional,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: expressoAmericano,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    img: expressoCremoso,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    img: expressoGelado,
    tags: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    img: cafeComLeite,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    img: latte,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    img: capuccino,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    img: macchiato,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    img: maccocino,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    img: chocolateQuente,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    img: cubano,
    tags: ['Tradicional', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    img: havaiano,
    tags: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    img: arabe,
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    img: irlandes,
    tags: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
