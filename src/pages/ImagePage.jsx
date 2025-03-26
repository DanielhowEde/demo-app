import React, { useState } from "react";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

const ImagePage = () => {
  const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
  ];

  const [imageSrc, setImageSrc] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-xl">Random Image</h1>
      <img src={imageSrc} alt="Random" className="border p-2 rounded" />
      <Button onClick={() => setImageSrc(images[Math.floor(Math.random() * images.length)])}>
        New Image
      </Button>
      <BackButton />
    </div>
  );
};

export default ImagePage;
