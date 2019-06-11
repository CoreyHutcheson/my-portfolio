import React from "react";
import { Helmet } from "react-helmet";

const HeadMeta = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta
      name="description"
      content="Portfolio describing Corey Hutcheson's projects and skills."
    />
    <title>Corey Hutcheson</title>
    <html lang="en" />
  </Helmet>
);

export default HeadMeta;
