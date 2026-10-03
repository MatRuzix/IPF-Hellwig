export const site = {
  name: "IPF Hellwig",
  url: "https://www.ipf-hellwig.com",
  description: "IPF Hellwig w Malborku — fizjoterapia, osteopatia stomatologiczna, masaż, podologia, manicure i pedicure. Umów wizytę przy ul. Mickiewicza 31B.",
  phone: "+48 453 696 345",
  phoneHref: "tel:+48453696345",
  address: "ul. Mickiewicza 31B, 82-200 Malbork",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=IPF+Hellwig+Mickiewicza+31B+Malbork",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=IPF+Hellwig%2C+Mickiewicza+31B%2C+82-200+Malbork",
} as const;

export const navigation = [
  { targetId: "treatments", text: "Oferta" },
  { targetId: "why-ipf", text: "Dlaczego my?" },
  { targetId: "our-team", text: "Zespół" },
  { targetId: "contact", text: "Kontakt" },
] as const;

export const bookingProfiles = {
  krystian: { name: "Krystian Hellwig", url: "https://www.znanylekarz.pl/krystian-hellwig/fizjoterapeuta/malbork" },
  marta: { name: "Marta Hellwig", url: "https://www.znanylekarz.pl/marta-hellwig/fizjoterapeuta/malbork" },
} as const;
