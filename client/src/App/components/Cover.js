import React from "react";
import cx from "classnames";
import UseImage from "./UseImage";

const Cover = ({ src, alt = "" }) => {
  const { loaded } = UseImage({ src });
  return <img className={cx("smooth", { loaded })} src={src} alt={alt} />;
};

export default Cover;
