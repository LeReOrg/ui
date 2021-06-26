const price = [
  {
    _id: 0,
    name: "Tất cả",
    value: 0,
  },
  {
    _id: 1,
    name: "Dưới 100,000đ",
    array: -100000,
  },
  {
    _id: 2,
    name: "Dưới 300,000đ",
    array: -300000,
  },
  {
    _id: 3,
    name: "Dưới 500,000đ",
    array: -500000,
  },
  {
    _id: 4,
    name: "Trên 500,000đ",
    array: 500000 - 2000000,
  },
];

const sort = [
  {
    id: 0,
    name: "Mặc định",
  },
  {
    id: 1,
    name: "Giá Thấp",
  },
  {
    id: 2,
    name: "Giá cao",
  },
];

export { price, sort };
