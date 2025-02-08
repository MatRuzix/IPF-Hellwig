"use client";
type ZnanyLekarzWidgetProps = {
  variant: "krystian" | "marta";
};

import { useEffect } from "react";

const ZnanyLekarzWidget: React.FC<ZnanyLekarzWidgetProps> = ({ variant }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "zl-widget-s";
    script.src = "//platform.docplanner.com/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <a
        id="zl-url"
        className="zl-url max-h-[calc(100vh-144px)]"
        href={`https://www.znanylekarz.pl/${
          variant == "krystian" ? "krystian" : "marta"
        }-hellwig/fizjoterapeuta/malbork`}
        rel="nofollow"
        data-zlw-doctor={`${
          variant == "krystian" ? "krystian" : "marta"
        }-hellwig`}
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
      >
        Krystian Hellwig - ZnanyLekarz.pl
      </a>
    </div>
  );
};

export default ZnanyLekarzWidget;
