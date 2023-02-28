import React, { useState } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import SiteLogo from "../../public/logo.png";
import Cover from "./Cover.js";

const srcs = [SiteLogo, SiteLogo];

const useSrcs = () => {
  const [selectedSrc, setSrc] = useState(srcs[0]);
  return {
    buttons: srcs.map((src, i) => (
      <button
        className={cx({ active: src === selectedSrc })}
        onClick={() => setSrc(src)}
        key={src}
      >
        image {i + 1}
      </button>
    )),
    // force to re-render
    // this is just example
    cover: srcs.map((src) =>
      src === selectedSrc ? <Cover key={src} src={selectedSrc} /> : null
    ),
  };
};

export default useSrcs;
