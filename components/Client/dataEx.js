const city = [
  {
    idCity: 1,
    name: "Hồ chí Minh",
  },
  {
    idCity: 1,
    name: "Hà Nội",
  },
];
const district = [
  {
    idDistrict: 1,
    idCity: 1,
    name: "Go Vap",
  },
  {
    idDistrict: 2,
    idCity: 1,
    name: "Phu Nhuan",
  },
  {
    idDistrict: 3,
    idCity: 2,
    name: "Hang Buom",
  },
  {
    idDistrict: 4,
    idCity: 2,
    name: "Pho Ha Noi",
  },
];
const ward = [
  {
    idWard: 1,
    idDistrict: 1,
    name: "Go Vap w",
  },
  {
    idWard: 2,
    idDistrict: 1,
    name: "Phu Nhuan w",
  },
  {
    idWard: 3,
    idDistrict: 2,
    name: "Hang Buom w",
  },
  {
    idWard: 4,
    idDistrict: 2,
    name: "Pho Ha Noi w",
  },
];
export  {
    city,ward,district
}