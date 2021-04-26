// catId
// 1: Food --- 2: Cooking --- 3: Market --- 4: Entertainment

import Food from "../models/food";

const FoodData = [
  new Food(
    1,
    "Phở",
    "https://res.cloudinary.com/giato/image/upload/v1613138052/beef_pho_pydw6a.jpg",
    1,
    ""
  ),
  new Food(
    2,
    "Trà Sữa",
    "https://res.cloudinary.com/giato/image/upload/v1613138205/milk_tea_rv7jc1.jpg",
    1,
    ""
  ),
  new Food(
    3,
    "Bánh Mì",
    "https://res.cloudinary.com/giato/image/upload/v1613138410/banh_mi_h7oyuk.jpg",
    1,
    ""
  ),
  new Food(
    4,
    "Bún Bò Huế",
    "https://res.cloudinary.com/giato/image/upload/v1613138682/bun_bo_hue_xv3uxl.jpg",
    1,
    ""
  ),
  new Food(
    5,
    "Ăn Văt",
    "https://res.cloudinary.com/giato/image/upload/v1613139022/an_vat_agkh5o.jpg",
    1,
    ""
  ),
  new Food(
    6,
    "Món Nướng",
    "https://res.cloudinary.com/giato/image/upload/v1613138853/quan_nuong_ocgal3.jpg",
    1,
    ""
  ),
];

export default FoodData;
