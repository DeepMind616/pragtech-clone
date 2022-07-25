import { SetStateAction, useState } from "react";
import { Article, Header, Layout, WorkTogether } from "../components";
import { Container, ToggleButton, Dots, Grid } from "../components/ui";
import WeveBuiltCard from "../components/weveBuilt/WeveBuiltCard";
import data from "../data/data.json";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useMediaQuery } from "react-responsive";

const CaseStudies = () => {
  const [active, setActive] = useState<number>(1);
  const [activeItem, setActiveItem] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const xl = useMediaQuery({ query: "(min-width: 1280px)" });
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const sm = useMediaQuery({ query: "(min-width: 640px)" });

  const perView = xl ? 2.3 : lg ? 2 : md ? 1.6 : sm ? 1.3 : 1;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: "free-snap",
    slides: {
      perView,
      spacing: 20,
    },
    slideChanged(slider: { track: { details: { rel: SetStateAction<number> } } }) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <Header variant="secondary" props={data.header.headerProps.caseStudies} />
      <Container>
        <div className="flex justify-between pt-[62px] pb-[47px] ">
          <ToggleButton texts={["local", "foreign"]} active={active} setActive={setActive} />
          {loaded && instanceRef.current && (
            <div className="flex gap-3">
              {Array.from({
                length: instanceRef.current.track.details.slides.length - (perView < 2 ? 0 : 1), // Only shows all dots if the view is 1 item per slide only
              }).map((_, idx) => {
                return (
                  <Dots
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    active={currentSlide === idx}
                  ></Dots>
                );
              })}
            </div>
          )}
        </div>

        <div ref={sliderRef} className="keen-slider pb-[47px]">
          {data.weveBuilt.slice(0, 3).map((card, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveItem(index);
              }}
              className={`keen-slider__slide rounded-xl cursor-pointer ${
                activeItem === index ? "border-2 border-primary-500" : ""
              }`}
            >
              <WeveBuiltCard card={card} />
            </div>
          ))}
        </div>

        <div className="py-[60px]">
          <Article card={data.weveBuilt[activeItem]} />
        </div>
        <WorkTogether />
      </Container>
    </>
  );
};

CaseStudies.Layout = Layout;

export default CaseStudies;
