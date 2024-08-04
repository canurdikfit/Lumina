import DiscoveryBackground from "./../assets/imgs/Discovery_banner.png";
import Carousel from "./Carousel";
import Contact from "./Contact";

export default function Discovery() {
  return (
    <div className="relative overflow-hidden">
      <div className="px-6 md:px-14 lg:px-20 flex flex-col items-center">
        <div className="absolute z-10 top-0 w-full bg-gradient-to-b from-black via-black/65 to-black/0 h-[150px] md:h-[300px]" />
        <div className="absolute z-10 bg-black backdrop-blur h-full w-full opacity-75" />
        <img
          src={DiscoveryBackground}
          alt="Banner Image"
          className="absolute h-full w-full object-cover object-center"
        />

        <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-2 items-center z-20 pt-20 lg:pt-32 xl:pt-40 gap-y-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-left md:text-4xl lg:text-6xl">
              Discover a wide <br />
              Range of Culture
            </h2>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent
              sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis
              pellentesque convallis quam scelerisque. Ut nisl adipiscing varius
              sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim
              sit. Consectetur egestas tortor fermentum blandit{" "}
            </p>
          </div>

          <Carousel />
        </div>
      </div>
      <Contact />
    </div>
  );
}
