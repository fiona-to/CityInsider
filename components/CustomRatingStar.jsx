import React from "react";
import { Rating } from "react-native-ratings";
import * as Color from "../_constant/color";

const CustomRatingStar = ({ rating, size }) => {
  return (
    <Rating
      type="custom"
      ratingCount={5}
      imageSize={size}
      startingValue={parseFloat(rating)}
      ratingColor={`${Color.primary}`}
      ratingBackgroundColor={`${Color.inActive}`}
      tintColor={`${Color.bgColor}`}
      readonly={true}
    />
  );
};

export default CustomRatingStar;
