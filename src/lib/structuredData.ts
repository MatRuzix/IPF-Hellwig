import { site } from "./site";
import offer from "./data/offer";

export const clinicStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": site.url + "/#clinic",
  name: site.name,
  url: site.url + "/",
  description: site.description,
  image: site.url + "/hero_img_2.jpg",
  logo: site.url + "/logo-ipf.png",
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Mickiewicza 31B",
    postalCode: "82-200",
    addressLocality: "Malbork",
    addressCountry: "PL",
  },
  hasMap: site.mapsUrl,
  availableService: [
    { "@type": "MedicalTherapy", name: "Fizjoterapia ogólna" },
    { "@type": "MedicalTherapy", name: "Osteopatia" },
    { "@type": "MedicalTherapy", name: "Chiropraktyka" },
    { "@type": "MedicalTherapy", name: "Masaż" },
    { "@type": "MedicalTherapy", name: "Osteopatia stomatologiczna" },
    { "@type": "MedicalTherapy", name: "Zabieg podologiczny" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi IPF Hellwig",
    itemListElement: offer.map(({ header, text }) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: header,
        description: text,
      },
    })),
  },
};
