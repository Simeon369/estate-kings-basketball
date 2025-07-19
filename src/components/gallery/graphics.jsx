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
    <div className="bg-white grid grid-cols-3 md:grid-cols-1 gap-6 p-6">
      {items.map((item) => (
        <div key={item._id} className="">
          <img
            src={item.image.asset.url}
            alt="gallery item"
            className="w-full rounded-lg"
          />
          <p className="mt-2 text-center text-Basketball">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
