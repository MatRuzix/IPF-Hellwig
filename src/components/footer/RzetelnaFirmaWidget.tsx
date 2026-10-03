"use client";

import { useEffect, useRef, useState } from "react";

// The provider positions its banner against the viewport. An isolated document
// keeps that viewport inside the footer without overriding the provider's UI.
const bannerDocument = [
  '<!doctype html><html lang="pl"><head><meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<base target="_blank"><style>html,body{margin:0;background:transparent}</style>',
  '</head><body><script>',
  '(function(i,s,o,g,r,a,m){',
  'i[r+"_src"]=g;',
  'i[r]="DRUBV8BP";',
  'i[r+"_position"]="left bottom";',
  'i[r+"_theme"]="default";',
  'i[r+"_type"]="circle";',
  'a=s.createElement(o);m=s.getElementsByTagName(o)[0];',
  'a.async=1;a.src="https:"+g+"/script.js";',
  'function observeBanner(){',
  'var root=s.getElementById("_rzf_root");if(!root||!root.shadowRoot)return;',
  'var observedBanner;',
  'function attach(){var banner=root.shadowRoot.querySelector("#ActiveBanner-LayoutContainer");',
  'if(!banner||banner===observedBanner)return;observedBanner=banner;',
  'new ResizeObserver(function(){i.parent.postMessage({type:"ipf-rzf-height",height:Math.ceil(banner.getBoundingClientRect().height+60)},"*");}).observe(banner);',
  '}',
  'new MutationObserver(attach).observe(root.shadowRoot,{childList:true,subtree:true});attach();',
  '}',
  'a.onload=function(){if(s.readyState==="complete"){if(!s.getElementById("_rzf_root"))s.dispatchEvent(new Event("readystatechange"));observeBanner();}else{i.addEventListener("load",observeBanner,{once:true});}};',
  'm.parentNode.insertBefore(a,m);',
  '})(window,document,"script","//aktywnybaner.rzetelnafirma.pl","__rzf_bannerNumber");',
  '</script></body></html>',
].join("");

export default function RzetelnaFirmaWidget() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(126);

  useEffect(() => {
    const resize = (event: MessageEvent) => {
      if (
        event.source !== frameRef.current?.contentWindow ||
        event.data?.type !== "ipf-rzf-height" ||
        typeof event.data.height !== "number" ||
        !Number.isFinite(event.data.height)
      ) return;
      setHeight(Math.min(800, Math.max(126, event.data.height)));
    };
    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl">
      <iframe ref={frameRef} title="Rzetelna Firma — certyfikat IPF Hellwig" srcDoc={bannerDocument} loading="lazy" className="block w-full border-0" style={{ height }} />
    </div>
  );
}
