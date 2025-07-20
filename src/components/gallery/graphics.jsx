import { useEffect, useState } from "react";
import { sanity } from "../../lib/sanityClient";

export default function Gallery() {
  const [items, setItems] = useState([]);

  const galleryQuery = `*[_type == "gallery"]{
    _id,
    image{
      asset->{
        url
      }
    },
    description
  }`;

  useEffect(() => {
    sanity.fetch(galleryQuery).then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="bg-white px-4 py-8">
      <div className=" md:columns-1 columns-3 gap-4 space-y-4">
        {items.map((item) => (
          <div key={item._id} className="relative flex justify-center items-end break-inside-avoid">
            <img
              src={item.image.asset.url}
              alt="gallery item"
              className="w-full rounded-lg object-cover"
            />
            <p className="absolute text-center text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
