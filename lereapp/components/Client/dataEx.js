const city = [
  {
    idCity: 1,
    nameCity: "Hồ chí Minh",
  },
  {
    idCity: 1,
    nameCity: "Hà Nội",
  },
];
const district = [
  {
    idDistrct: 1,
    idCity: 1,
    nameCity: "Go Vap",
  },
  {
    idDistrct: 2,
    idCity: 1,
    nameCity: "Phu Nhuan",
  },
  {
    idDistrct: 3,
    idCity: 2,
    nameCity: "Hang Buom",
  },
  {
    idDistrct: 4,
    idCity: 2,
    nameCity: "Pho Ha Noi",
  },
];
const ward = [
  {
    idWard: 1,
    idDistrct: 1,
    nameCity: "Go Vap w",
  },
  {
    idWard: 2,
    idDistrct: 1,
    nameCity: "Phu Nhuan w",
  },
  {
    idWard: 3,
    idDistrct: 2,
    nameCity: "Hang Buom w",
  },
  {
    idDistrct: 4,
    idDistrct: 2,
    nameCity: "Pho Ha Noi w",
  },
];
export  {
    city,ward,district
}