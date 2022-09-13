import React from "react";
import {
  BannerContainer,
  BannerTitle,
  BannerContent,
  BannerImage,
} from "../../../styles/Banner";
import bannerImageUrl from "../../../assets/banner-4.jpg";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src={bannerImageUrl} alt="banner-image"></BannerImage>
      <BannerContent>
        <BannerTitle variant="h2">Expense Management</BannerTitle>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
