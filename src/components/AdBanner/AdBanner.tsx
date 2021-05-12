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
      data-ad-client="ca-pub-5551676193326146"
     data-ad-slot="5190525340"
     data-ad-format="auto"
     data-full-width-responsive="true"
    />
  );
};

export default AdBanner;
