import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
<Carousel showArrows={true} showIndicators={false} showThumbs={false} infiniteLoop={true} dynamicHeight={true}>
<div>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/-GgUOTRxF4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
<iframe width="700" height="400" src="https://www.youtube.com/embed/FQVYKF7f6cY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
<iframe width="700" height="400" src="https://www.youtube.com/embed/XPwtc-WtsOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</Carousel>
);
