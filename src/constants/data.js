import images from './images';

const wines = [
  {
    title: 'Charosa',
    price: 'Rs.640',
    tags: '750 ml',
  },
  {
    title: 'Fratelli Wines',
    price: 'Rs.1700',
    tags: '750 ml',
  },
  {
    title: 'Sula',
    price: 'Rs.950',
    tags: '750 ml',
  },
  {
    title: 'Budwieser',
    price: 'Rs.200',
    tags: '750 ml',
  },
  {
    title: 'Bro Code',
    price: 'Rs.180',
    tags: '450 ml',
  },
];

const cocktails = [
  {
    title: 'Swa Liquid',
    price: 'Rs.400',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Rs.1200',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Rs.820',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'Rs.1500',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Rs.1080',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Vegan Restaurant of the year',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
  },
];

export default { wines, cocktails, awards };
