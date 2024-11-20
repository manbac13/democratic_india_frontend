import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import Servicecard from "../../Components/ServiceCard";
import { Autoplay } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";

const cards = [
  { title: "General Elections 2024", subTitle: 'Seat Wise Data', route: "general-elections-2024" },
  { title: "State Assemblies", route: "state-assemblies" },
  { title: "Indian Voters", route: "indian-voters" },
  { title: "Dashboard", route: "dashboard" },
];

const ExploreHero = () => {
  const theme = useTheme();
  const smallSS = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={smallSS ? 1 : 2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {cards.map((item) => (
          <SwiperSlide>
            <Servicecard title={item.title} subTitle={item.subTitle} route={item.route} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExploreHero;
