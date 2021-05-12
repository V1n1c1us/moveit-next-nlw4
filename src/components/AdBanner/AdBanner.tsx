import React, { useEffect } from "react";
declare global { interface Window { adsbygoogle: any; } }

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block"
      }}
      data-ad-client="<your-client-id>"
      data-ad-slot="<slot-id>"
    />
  );
};

export default AdBanner;
