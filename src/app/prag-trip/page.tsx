"use client";

import { useState } from "react";

const parkingOptions = [
  {
    name: "Parking Millennium",
    price: "2,06 € / Stunde",
    note: "Nähe Altstadt · 20 min zur Karlsbrücke",
    link: "https://maps.app.goo.gl/4Q7tdLNbxAyTxhfr9",
    tag: "Günstig",
    tagColor: "bg-emerald-500",
  },
  {
    name: "Parkhaus Rudolfinum",
    price: "2,89 € / Stunde",
    note: "In der Altstadt · 8 min zur Karlsbrücke",
    link: "https://maps.app.goo.gl/4Q7tdLNbxAyTxhfr9",
    tag: "Zentral",
    tagColor: "bg-amber-500",
  },
];

const attractions = [
  {
    name: "Prager Rathausuhr",
    category: "Altstadt",
    description:
      "Das astronomische Wunder aus dem 15. Jahrhundert. Stündlich dreht sich das Karussell der Apostel – ein Spektakel, das du live erlebt haben musst.",
    maps: "https://maps.app.goo.gl/oC3bZ1eZQEk6VX9J7",
    image:
      "https://cdn-imgix.headout.com/media/images/fb2c316f-bd13-4dd1-8bff-165d2f040fe9-1747321711106-main.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop",
    emoji: "⏰",
    tip: "Zur vollen Stunde kommen für das Apostelspiel!",
  },
  {
    name: "Teynkirche",
    category: "Altstadt",
    description:
      "Die gotischen Zwillingstürme prägen die Silhouette des Altstädter Rings. Die Kirche steckt voller Kunstschätze aus Jahrhunderten.",
    maps: "https://maps.app.goo.gl/DpKt2chghgdXWh83A",
    image:
      "https://cdn.praguecitytourism.city/2024/03/14105433/850_3148.jpg",
    emoji: "⛪",
    tip: "Beste Fotos vom Café Montmartre aus.",
  },
  {
    name: "Karlsbrücke",
    category: "Altstadt",
    description:
      "Die berühmteste Brücke Prags verbindet die Altstadt mit der Kleinseite. 30 Barockstatuen säumen den Weg – jede mit ihrer eigenen Geschichte.",
    maps: "https://maps.app.goo.gl/Karlsbrücke",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Puente_Carlos%2C_Praga%2C_Rep%C3%BAblica_Checa%2C_2022-07-02%2C_DD_234-236_HDR.jpg",
    emoji: "🌉",
    tip: "Frühmorgens fast menschenleer – perfekt für Fotos!",
  },
  {
    name: "Prager Burg",
    category: "Hradschin",
    description:
      "Europas größte Burganlage thront über der Stadt. Dom, Paläste und goldenes Gässchen – hier steckt Geschichte in jeder Gasse.",
    maps: "https://maps.app.goo.gl/PragerBurg",
    image:
      "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2022/10/Prager-Burg-mit-Veitsdom-am-Abend-.jpg?resize=1024%2C683&quality=89&ssl=1",
    emoji: "🏰",
    tip: "Blick über die Moldau nicht verpassen!",
  },
  {
    name: "Josefov – Jüdisches Viertel",
    category: "Altstadt",
    description:
      "Das besterhaltene jüdische Viertel Europas. Alte Synagogen, der Alte jüdische Friedhof und eine bewegende Geschichte erwarten euch.",
    maps: "https://maps.app.goo.gl/Josefov",
    image:
      "https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/resources/images/e8fa698d-692d-43a9-b8e0-1b0a24c02d38.jpg",
    emoji: "✡️",
    tip: "Tickets online vorbuchen spart Wartezeit.",
  },
  {
    name: "Wenzelsplatz",
    category: "Neustadt",
    description:
      "Das pulsierende Herz der modernen Stadt. Flanieren, Shoppen, Streetfood – hier trifft Geschichte auf das heutige Prag.",
    maps: "https://maps.app.goo.gl/Wenzelsplatz",
    image:
      "https://prag-infos.de/wp-content/uploads/2018/12/Wenzelsplatz.jpg",
    emoji: "🏛️",
    tip: "Abends besonders schön beleuchtet.",
  },
];

const breakfastOptions = [
  {
    name: "Café Savoy",
    type: "Wiener Café",
    price: "€€€",
    description:
      "Eines der schönsten Cafés der Stadt – neobarocke Decke, frische Croissants und tschechische Eier­gerichte. Das perfekte erste Frühstück in Prag.",
    maps: "https://maps.app.goo.gl/PM6HiGDJUiY4gEbw9",
    image:
      "https://cdn.praguecitytourism.city/2024/03/13090410/savoy-2.jpg",
    emoji: "☕",
    tip: "Reservierung empfohlen! Beliebt bei Einheimischen & Touristen.",
    hours: "Mo–Fr 8:00–22:30 · Sa–So 9:00–22:30",
  },
  {
    name: "Bella Vida café",
    type: "Café",
    price: "€€",
    description:
      "",
    maps: "https://maps.app.goo.gl/MqfcezRF7gKeGUW48",
    image:
      "https://pct-wp-prod.storage.googleapis.com/2024/12/10102323/186998999_5413061602068556_9068538109623073432_n.jpg",
    emoji: "🥐",
    tip: "Ich mag Züge.",
    hours: "Mo–Do & So 8:00–18:00 · Fr & Sa 8:00–20:00",
  },
  {
    name: "Bagel Lounge Malostranská",
    type: "Geiler Bagel Schuppen",
    price: "€€",
    description:
      "",
    maps: "https://bagellounge.cz/menu/malostranska",
    image:
      "https://d48-a.sdn.cz/d_48/c_img_QO_0/wCbaX6.jpeg?fl=res,600,400,3,ffffff",
    emoji: "🥯",
    tip: "Keine Ahnung... 161!",
    hours: "Mo-So 8:00-18:00",
  },
  {
    name: "Místo",
    type: "Specialty Coffee",
    price: "€",
    description:
      "Kleines, gemütliches Specialty-Coffee-Café nahe der Karlsbrücke. Perfekt für einen schnellen, starken Kaffee und ein Croissant vor dem Sightseeing.",
    maps: "https://maps.app.goo.gl/MistoPrague",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    emoji: "☕",
    tip: "Früh kommen – die Plätze sind begrenzt und die Locals kennen es.",
    hours: "Mo–Fr 7:30–18:00 · Sa–So 8:30–18:00",
  },
];

export default function PragTrip() {
  const [activeSection, setActiveSection] = useState<"attractions" | "parking" | "breakfast">(
    "attractions"
  );
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedBreakfast, setExpandedBreakfast] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans">
      {/* Custom styles via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; }

        .display-font { font-family: 'Playfair Display', serif; }

        .hero-bg {
          background-image: 
            radial-gradient(ellipse at 20% 50%, rgba(180, 120, 60, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(100, 60, 160, 0.12) 0%, transparent 50%),
            url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_Night_View_of_Prague_%286975049566%29.jpg/1280px-A_Night_View_of_Prague_%286975049566%29.jpg');
          background-size: cover;
          background-position: center;
        }

        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .gold-accent { color: #C9A84C; }
        .gold-border { border-color: #C9A84C; }
        .gold-bg { background-color: #C9A84C; }

        .pill {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .tab-active {
          background: #C9A84C;
          color: #1c1917;
        }

        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .img-cover {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        @media (min-width: 768px) {
          .img-cover { height: 240px; }
        }

        .tip-box {
          background: rgba(201, 168, 76, 0.1);
          border-left: 3px solid #C9A84C;
        }

        .map-btn {
          background: #C9A84C;
          color: #1c1917;
          font-weight: 600;
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.2s;
        }
        .map-btn:hover { opacity: 0.85; }

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent);
          margin: 32px 0;
        }
      `}</style>

      {/* HERO */}
      <div className="hero-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
        <div className="relative px-5 pt-16 pb-20 text-center">
          <div className="pill gold-bg mb-4" style={{ color: "#1c1917" }}>
            🇨🇿 Tagesausflug
          </div>
          <h1
            className="display-font text-5xl md:text-7xl font-black leading-none mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Prag
          </h1>
          <p className="display-font text-lg md:text-2xl gold-accent italic mb-6">
            Ein Tag voller Geschichte & Magie
          </p>
          <p className="text-stone-400 text-sm max-w-xs mx-auto leading-relaxed">
            Alle Infos für euren perfekten Freundschaftstrip in die Goldene Stadt
          </p>

          {/* Quick stats */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            {[
              { icon: "🗺️", label: `${attractions.length} Highlights` },
              { icon: "🅿️", label: "2 Parkoptionen" },
              { icon: "🍳", label: `${breakfastOptions.length} Cafés` },
              { icon: "🕐", label: "1 Tag" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-xl px-3 py-2 text-center">
                <div className="text-lg">{s.icon}</div>
                <div className="text-xs text-stone-400 mt-1 whitespace-nowrap">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY TABS */}
      <div className="sticky top-0 z-30 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
        <div className="flex max-w-lg mx-auto px-4 py-3 gap-2">
          <button
            onClick={() => setActiveSection("attractions")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeSection === "attractions"
                ? "tab-active"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            🏛️ Sights
          </button>
          <button
            onClick={() => setActiveSection("breakfast")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeSection === "breakfast"
                ? "tab-active"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            🍳 Frühstück
          </button>
          <button
            onClick={() => setActiveSection("parking")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeSection === "parking"
                ? "tab-active"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            🅿️ Parken
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-lg mx-auto px-4 py-8">
        {/* ATTRACTIONS */}
        {activeSection === "attractions" && (
          <div>
            <div className="mb-6">
              <h2 className="display-font text-2xl font-bold mb-1">
                Was ihr sehen müsst
              </h2>
              <p className="text-stone-500 text-sm">
                Tippt auf eine Karte für mehr Details
              </p>
            </div>

            <div className="space-y-4">
              {attractions.map((attr, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl overflow-hidden card-hover cursor-pointer"
                  onClick={() =>
                    setExpandedCard(expandedCard === i ? null : i)
                  }
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={attr.image}
                      alt={attr.name}
                      className="img-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_Night_View_of_Prague_%286975049566%29.jpg/800px-A_Night_View_of_Prague_%286975049566%29.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="pill bg-stone-800 text-stone-300 mb-1">
                          {attr.category}
                        </span>
                        <h3 className="display-font text-xl font-bold text-white leading-tight">
                          {attr.emoji} {attr.name}
                        </h3>
                      </div>
                      <span
                        className="text-stone-400 text-xl transition-transform duration-300"
                        style={{
                          transform:
                            expandedCard === i
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        ↓
                      </span>
                    </div>
                  </div>

                  {/* Expandable content */}
                  {expandedCard === i && (
                    <div className="p-4 space-y-3">
                      <p className="text-stone-300 text-sm leading-relaxed">
                        {attr.description}
                      </p>
                      <div className="tip-box rounded-lg p-3">
                        <p className="text-xs gold-accent font-semibold mb-1">
                          💡 Insider-Tipp
                        </p>
                        <p className="text-stone-300 text-sm">{attr.tip}</p>
                      </div>
                      <a
                        href={attr.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        📍 In Google Maps öffnen
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BREAKFAST */}
        {activeSection === "breakfast" && (
          <div>
            <div className="mb-6">
              <h2 className="display-font text-2xl font-bold mb-1">
                Frühstück & Kaffee
              </h2>
              <p className="text-stone-500 text-sm">
                Der perfekte Start in euren Prag-Tag
              </p>
            </div>

            <div className="space-y-4">
              {breakfastOptions.map((cafe, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl overflow-hidden card-hover cursor-pointer"
                  onClick={() =>
                    setExpandedBreakfast(expandedBreakfast === i ? null : i)
                  }
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={cafe.image}
                      alt={cafe.name}
                      className="img-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_Night_View_of_Prague_%286975049566%29.jpg/800px-A_Night_View_of_Prague_%286975049566%29.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="pill bg-stone-800 text-stone-300 mb-1">
                          {cafe.type}
                        </span>
                        <h3 className="display-font text-xl font-bold text-white leading-tight">
                          {cafe.emoji} {cafe.name}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="gold-accent font-semibold text-sm">{cafe.price}</span>
                        <span
                          className="text-stone-400 text-xl transition-transform duration-300"
                          style={{
                            transform:
                              expandedBreakfast === i
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        >
                          ↓
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  {expandedBreakfast === i && (
                    <div className="p-4 space-y-3">
                      <p className="text-stone-300 text-sm leading-relaxed">
                        {cafe.description}
                      </p>
                      <div className="flex items-center gap-2 text-stone-400 text-xs">
                        <span>🕐</span>
                        <span>{cafe.hours}</span>
                      </div>
                      <div className="tip-box rounded-lg p-3">
                        <p className="text-xs gold-accent font-semibold mb-1">
                          💡 Insider-Tipp
                        </p>
                        <p className="text-stone-300 text-sm">{cafe.tip}</p>
                      </div>
                      <a
                        href={cafe.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        📍 Link öffnen
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="tip-box rounded-xl p-4 mt-4">
              <p className="text-xs gold-accent font-semibold mb-1">
                💡 Allgemeiner Tipp
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                In Prag zahlt ihr für Kaffee deutlich weniger als in Deutschland.
                Tschechischer Kaffee ist stark – perfekt für einen langen Sightseeing-Tag!
              </p>
            </div>
          </div>
        )}

        {/* PARKING */}
        {activeSection === "parking" && (
          <div>
            <div className="mb-6">
              <h2 className="display-font text-2xl font-bold mb-1">
                Parken in Prag
              </h2>
              <p className="text-stone-500 text-sm">
                Beide Optionen liegen nahe der Altstadt
              </p>
            </div>

            <div className="space-y-4">
              {parkingOptions.map((p, i) => (
                <div key={i} className="glass rounded-2xl p-5 card-hover">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className={`pill ${p.tagColor} text-white mb-2`}>
                        {p.tag}
                      </span>
                      <h3 className="display-font text-xl font-bold">
                        {p.name}
                      </h3>
                    </div>
                    <span className="text-3xl">🅿️</span>
                  </div>

                  <div className="section-divider" style={{ margin: "16px 0" }} />

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-stone-500 text-sm w-16 shrink-0">
                        Preis
                      </span>
                      <span className="gold-accent font-semibold">
                        {p.price}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-stone-500 text-sm w-16 shrink-0">
                        Lage
                      </span>
                      <span className="text-stone-300 text-sm">{p.note}</span>
                    </div>
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-btn w-full justify-center"
                    style={{ display: "flex" }}
                  >
                    📍 Navigation starten
                  </a>
                </div>
              ))}
            </div>

            {/* Parking tip */}
            <div className="tip-box rounded-xl p-4 mt-4">
              <p className="text-xs gold-accent font-semibold mb-1">
                💡 Tipp fürs Parken
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                Prag hat eine Stadtmaut-Zone. Das Parkhaus Rudolfinum liegt
                direkt an der Altstadt – perfekt wenn ihr früh ankommt und den
                Tag zu Fuß verbringen wollt.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="text-center py-10 px-4">
        <div className="section-divider" />
        <p className="display-font text-stone-600 text-sm italic">
          Habt eine unvergessliche Zeit in Prag 🥂
        </p>
      </footer>
    </div>
  );
}