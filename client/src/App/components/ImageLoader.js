import React, { useState } from "react";

const ImageLoader = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : <div class="smooth-image-placeholder" />}
      <img
        // className={'smooth-image ${loaded ? "image-visible" : "image-hidden"}'}
        className={`smooth-image ${loaded ? "image-visible" : "image-hidden"}`}
        src={src}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

export default ImageLoader;
