export const products = [
  {
    id: 1,
    name: 'Power ball | Поуербол',
    price: '5500',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=35cbbace6105d65fa62d228c790883b845d13cb7-10637298-images-thumbs&n=13',
    hasDiscount: true,
    isNew: true,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 1,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 2,
    name: 'Умный ночник беспроводная зарядка',
    price: '12990',
    unit: 'шт',
    image: 'https://m.media-amazon.com/images/I/61sjWcZPI7L._AC_UL800_QL65_.jpg',
    hasDiscount: true,
    isNew: true,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 3,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 3,
    name: 'Мини принтер',
    price: '8500',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=16b1e541f6a5229c85e7101b9cb4519c2440c7b0-5669278-images-thumbs&n=13',
    hasDiscount: true,
    isNew: true,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 3,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 4,
    name: 'Электро самокат',
    price: '85000',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=6a2d55ac5b50abe1152ab620a2e5f45f286aff33-10299621-images-thumbs&n=13',
    hasDiscount: true,
    isNew: true,
    bestseller: true,
    quantity: 1,
    parentCategoryID: 3,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 5,
    name: 'Мини принтер',
    price: '8500',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=16b1e541f6a5229c85e7101b9cb4519c2440c7b0-5669278-images-thumbs&n=13',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 3,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
];


export const parentCategory = [
  {
    id: 1,
    name: 'Спорт товары',
    image: "https://avatars.mds.yandex.net/i?id=3c66908c4c3b78feb3c3b5d8033f97a0bebdd3a1-10809483-images-thumbs&n=13"
  },
  {
    id: 2,
    name: 'Сезонные товары',
    image: "https://avatars.mds.yandex.net/i?id=2fe6aa159762f8212383f69db0442a72878ce28f-4568513-images-thumbs&n=13"
  },
  {
    id: 3,
    name: 'Электроника',
    image: "https://avatars.mds.yandex.net/i?id=cebe42270b49a84de197fbab3e111f064020b269-8554591-images-thumbs&n=13"
  },
  {
    id: 4,
    name: 'Для детей',
    image: "https://avatars.mds.yandex.net/i?id=ab004cd1cef19238aae2950672608f68d8e37bda-10703615-images-thumbs&n=13"
  },
]




















export const category = [
  {
    id: 1,
    name: 'Напольные',
  },
  {
    id: 2,
    name: 'Настенные',
  },
  {
    id: 3,
    name: 'Бак расширительный',
  },
  {
    id: 4,
    name: 'Группа безовасности',
  },
  {
    id: 5,
    name: 'Гидрострелки и коллекторы',
  },
  {
    id: 6,
    name: 'Трубы для теплого пола',
  },
  {
    id: 7,
    name: 'Коллекторы для теплого пола',
  },
  {
    id: 8,
    name: 'Алюминиевые',
  },
  {
    id: 9,
    name: 'Биметаллические',
  },
  {
    id: 10,
    name: 'Трубы',
  },
  {
    id: 11,
    name: 'ППР фитинги',
  },
  {
    id: 12,
    name: 'Канализационные трубы',
  },
  {
    id: 13,
    name: 'Канализационные фитинги',
  },
  {
    id: 14,
    name: 'Трапы',
  },
  {
    id: 15,
    name: 'Жироуловители',
  },
  {
    id: 16,
    name: 'Электрические',
  },
  {
    id: 17,
    name: 'Косвенные',
  },
  {
    id: 18,
    name: 'Насосное оборудование',
  },
  {
    id: 19,
    name: 'Насосные станции',
  },
  {
    id: 20,
    name: 'Насосные станции многоступенчатые',
  },
  {
    id: 21,
    name: 'Погружные насосы',
  },
  {
    id: 22,
    name: 'Скважинные насосы',
  },
  {
    id: 23,
    name: 'Комплектующие и аксессуары для насосного оборудования',
  },
  {
    id: 24,
    name: 'Смесители',
  },
  {
    id: 25,
    name: 'Сифоны',
  },
  {
    id: 26,
    name: 'Гибкая подводка',
  },
  {
    id: 27,
    name: 'Шланги',
  },
  {
    id: 28,
    name: 'Арматура для унитаза',
  },
]


export const subCategory = [
  {
    id: 1,
    name: 'Для ванны',
    categoryID: 24
  },
  {
    id: 2,
    name: 'Для раковины',
    categoryID: 24
  },
  {
    id: 3,
    name: 'Для душа',
    categoryID: 24
  },
  {
    id: 4,
    name: 'Стойки для душа',
    categoryID: 24
  },
  {
    id: 5,
    name: 'Сливые',
    categoryID: 27
  },
  {
    id: 6,
    name: 'Наливные',
    categoryID: 27
  },
  {
    id: 7,
    name: 'поливочные',
    categoryID: 27
  },
]


export const citiesData = new Map([
  ['Алматы', '+77717312848'],
  ['Астана', '+77013005414'],
  ['Орал', '+77717888891'],
  ['Атырау', '+77715655335'],
  ['Актау', '+77010818618'],
  ['Кандыагаш', '+77010818615'],
])