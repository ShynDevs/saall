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
    name: 'Космонавтов светильник ночник звездное небо С блютуз колонкой с пультом управления',
    price: '10500',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=277f5e7834149b8823a14da2bdc9d47a3d29655f-10836825-images-thumbs&n=13',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 3,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 6,
    name: 'Звездное небо с блютуз колонкой',
    price: '9500',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=bbe5678f220e069ad3d2d33f024e208b08bd3295-10812288-images-thumbs&ref=rim&n=33&w=248&h=250',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 3,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 6,
    name: 'Светильники ночники',
    price: '9500',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=05ab983eb085e0bab79d6e73a40bb759976836a4-9870747-images-thumbs&ref=rim&n=33&w=250&h=250',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 5,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 6,
    name: 'Кухонная щетка для мытья посуды с дозатором ',
    price: '3000',
    unit: 'шт',
    image: 'https://m.media-amazon.com/images/I/41JKm9vYfSL._SL500_.jpg',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 6,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },

  {
    id: 7,
    name: 'Ночник декор',
    price: '9500',
    unit: 'шт',
    image: '../public/image/product/nochnik.jpg',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 5,
    categoryID: null,
    subCategoryID: null,
    path: 'nochnik.html'
  },
  {
    id: 8,
    name: 'Мини блендер',
    price: '7200',
    unit: 'шт',
    image: 'https://avatars.mds.yandex.net/i?id=5f0a7dd646c42efc1c932016ab5f479ba8877aa7-8400759-images-thumbs&n=13',
    hasDiscount: true,
    isNew: true,
    bestseller: false,
    quantity: 1,
    parentCategoryID: 4,
    categoryID: null,
    subCategoryID: null,
    path: 'blender.html'
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
  {
    id: 5,
    name: 'Для рамадана',
    image: "https://avatars.mds.yandex.net/i?id=7e8949544c39368194731338de926a9e38b665af-11389617-images-thumbs&n=13"
  },
  {
    id: 6,
    name: 'хоз товары',
    image: "https://avatars.mds.yandex.net/i?id=985311db5e7c82685ab25ead7a36de0f71c52ede-12190079-images-thumbs&n=13"
  },
]




















export const category = [
  {
    id: 1,
    name: 'Нажмите на Все продукты',
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