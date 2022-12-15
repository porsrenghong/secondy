import { Image } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselBanner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showArrows
      swipeable
      width="100%"
    >
      <div>
        <Image
          showSkeleton
          maxDelay
          objectFit="contain"
          src="https://img.ltwebstatic.com/images3_ach/2022/12/14/16710037933da0a6c1cf0e3f0b7360a19df5b69776.gif"
          alt="Banner 1"
          css={{
            width: "100%",
            "@xsMax": {
              width: "100%",
            },
          }}
        />
      </div>
      <div>
        <Image
          showSkeleton
          maxDelay
          objectFit="contain"
          src="https://img.ltwebstatic.com/images3_ach/2022/12/14/16710037933da0a6c1cf0e3f0b7360a19df5b69776.gif"
          alt="Banner 2"
          css={{
            width: "100%",
            "@xsMax": {
              width: "100%",
            },
          }}
        />
      </div>
      <div>
        <Image
          showSkeleton
          maxDelay
          objectFit="contain"
          src="https://img.ltwebstatic.com/images3_ach/2022/12/14/16710037933da0a6c1cf0e3f0b7360a19df5b69776.gif"
          alt="Banner 3"
          css={{
            width: "100%",
            "@xsMax": {
              width: "100%",
            },
          }}
        />
      </div>
      <div>
        <Image
          showSkeleton
          maxDelay
          objectFit="contain"
          width="100%"
          src="https://img.ltwebstatic.com/images3_ach/2022/12/14/16710037933da0a6c1cf0e3f0b7360a19df5b69776.gif"
          alt="Banner 1"
          css={{
            width: "100%",
            "@xsMax": {
              width: "100%",
            },
          }}
        />
      </div>
    </Carousel>
  );
};

export default CarouselBanner;

//picture of image must have same pixels
