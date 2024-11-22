import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GalleryImage1 from '../images/GalleryImages/20210422_083252.jpg';
import GalleryImage2 from '../images/GalleryImages/pngImage_1.png';
import GalleryImage3 from '../images/GalleryImages/pngImage_2.png';
import GalleryImage4 from '../images/GalleryImages/pngImage_3.png';
import GalleryImage5 from '../images/GalleryImages/pngImage_4.png';
import GalleryImage6 from '../images/GalleryImages/pngImage_5.png';
const Gallery = () => {
    const images = [
        {
          url: GalleryImage1,
          alt: "House Interior 1",
          title: "Previous works"
        },
        {
          url: GalleryImage2,
          alt: "House Interior 2",
          title: "Previous works"
        },
        {
          url: GalleryImage3,
          alt: "House Interior 3",
          title: "Cranes and scaffolding at a large-scale construction site with a cloudy sky above."
        },
        {
          url: GalleryImage4,
          alt: "House Interior 4",
          title: "Previous works"
        },
        {
          url: GalleryImage5,
          alt: "House Interior 5",
          title: "Framing the future: Skilled workers building a multi-level structure against a stunning mountain backdrop."
        },
        {
          url: GalleryImage6,
          alt: "House Interior 6",
          title: "Equipped for precision: A worker demonstrating the latest construction tool in a framed building"
        }
      ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        className="rounded-lg shadow-xl"
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover h-full w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;