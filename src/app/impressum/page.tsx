import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Pflichtangaben gemäß § 5 TMG.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Impressum() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1E1E1E] py-24 px-4">
      <div className="w-full max-w-2xl bg-[#353535] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#C1C1C1] mb-6 nav-logo">
          Impressum
        </h1>
        <div className="text-[#C1C1C1] space-y-4 text-base leading-relaxed">
          <p>
            <strong>Angaben gemäß § 5 TMG</strong>
            <br />
            Tim Stoepel
            <br />
            Nonnenstraße 50
            <br />
            04229 Leipzig
            <br />
            Deutschland
          </p>
          <p>
            <strong>Kontakt</strong>
            <br />
            Telefon: +49 177 3249272
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@tim-stoepel.de"
              className="text-[#FD6F00] hover:underline"
            >
              info@tim-stoepel.de
            </a>
          </p>
          <p>
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
            <br />
            Tim Stoepel
            <br />
            Nonnenstraße 50
            <br />
            04229 Leipzig
          </p>
          <p className="text-xs text-[#878787]">
            Dieses Impressum gilt auch für die Social-Media-Profile von Tim
            Stoepel.
          </p>
        </div>
      </div>
    </div>
  );
}
