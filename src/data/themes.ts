// Die fuenf Themen-Bloecke kommen 1:1 aus essaybuch.md,
// zu fuenf Kategorien gebuendelt. Keine erfundenen Themen.
export interface Theme {
  title: string;
  blurb: string;
}

export const themes: Theme[] = [
  {
    title: "Wer bin ich",
    blurb:
      "Identitaet jenseits des Jobs: wer ich nach zwei Elternzeiten eigentlich bin, wenn niemand mehr nach der Berufsbezeichnung fragt.",
  },
  {
    title: "Fuck, I'm a mom now",
    blurb:
      "Meilensteine und erste Male: vom ersten Date nach der Geburt bis zum ersten Kita-Tag als Befreiungsschlag.",
  },
  {
    title: "Außen & Meinungen",
    blurb:
      "Warum alle eine Meinung haben, es alle besser wissen und die „warte mal ab“-Eltern nie aufhoeren. Und warum man manchmal innerlich kuendigen moechte.",
  },
  {
    title: "Körper, Schlaf, Alltag",
    blurb:
      "Schlafmangel, der kurze Geduldsfaden, der Spiegel und die leise Kunst, trotz allem nicht verrueckt zu werden.",
  },
  {
    title: "Politik & Arbeitswelt",
    blurb:
      "Wie Arbeitsmarkt und Politik Eltern behandeln, wenn das Kind da ist. Und dass der Arbeitsmarkt fuer kinderlose, partnerlose Menschen geschaffen ist.",
  },
];