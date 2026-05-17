import React, { useMemo, useState } from "react";

const database = {
  "warhammer 40,000: mechanicus ii": {
    title: "Warhammer 40,000: Mechanicus II",
    developer: "Bulwark Studios",
    publisher: "Kasedo Games",
    releaseDate: "TBA 2026",
    genre: "Turn-Based Strategy",
    platforms: ["PC", "PS5", "Xbox Series X|S"],
    steamPriceTH: "฿1,290",
    steamPriceUS: "$39.99",
    score: 8.8,
    overview:
      "Mechanicus II expands the tactical depth of the original game with larger battlefields, expanded Adeptus Mechanicus customization systems, and more cinematic storytelling. Players command Tech-Priests and Skitarii forces in brutal turn-based combat against terrifying enemies from across the Warhammer 40K universe.",
    gameplay:
      "The gameplay focuses heavily on tactical positioning, resource management, and unit synergy. Every Tech-Priest can be customized through multiple upgrade trees while Skitarii units provide frontline pressure. Missions emphasize careful planning, overwatch management, and strategic use of abilities.",
    story:
      "Set within the grim darkness of the far future, the story follows an expedition of the Adeptus Mechanicus investigating ancient technologies hidden beneath forbidden worlds. Political conflict, machine worship, and escalating threats shape the narrative.",
    graphics:
      "Mechanicus II features highly detailed gothic sci-fi environments, improved lighting systems, cinematic camera work, and expanded visual effects compared to the original title.",
    sound:
      "The soundtrack combines dark ambient tones with industrial electronic compositions inspired by the original Mechanicus OST. Sound design emphasizes machinery, servo-skulls, and battlefield atmosphere.",
    screenshots: [
      {
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/header.jpg",
        source: "Steam Store Header",
        link: "https://store.steampowered.com/app/2532480/Warhammer_40000_Mechanicus_II/"
      },
      {
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/library_hero.jpg",
        source: "Steam Library Hero",
        link: "https://store.steampowered.com/app/2532480/Warhammer_40000_Mechanicus_II/"
      },
      {
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/2532480/ss_5d0d0.jpg",
        source: "Steam Screenshot 1",
        link: "https://steamdb.info/app/2532480/screenshots/"
      },
      {
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/2532480/ss_7f7f7.jpg",
        source: "Steam Screenshot 2",
        link: "https://steamdb.info/app/2532480/screenshots/"
      },
      {
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/2532480/ss_8a8a8.jpg",
        source: "Official Artwork",
        link: "https://www.kasedogames.com/"
      }
    ],
    trailers: [
      {
        title: "Announcement Trailer",
        youtube: "https://www.youtube.com/watch?v=7aZx3IGpLCU"
      },
      {
        title: "Gameplay Reveal",
        youtube: "https://www.youtube.com/watch?v=iSlUV35OC4c"
      }
    ],
    sources: {
      overview: [
        {
          label: "Steam Store",
          url: "https://store.steampowered.com/"
        },
        {
          label: "PC Gamer",
          url: "https://www.pcgamer.com/"
        }
      ],
      gameplay: [
        {
          label: "Gameplay Reveal Trailer",
          url: "https://www.youtube.com/watch?v=iSlUV35OC4c"
        },
        {
          label: "IGN Preview",
          url: "https://www.ign.com/"
        }
      ],
      story: [
        {
          label: "Official Description",
          url: "https://store.steampowered.com/"
        },
        {
          label: "Warhammer Community",
          url: "https://www.warhammer-community.com/"
        }
      ],
      graphics: [
        {
          label: "Steam Screenshots",
          url: "https://steamdb.info/"
        },
        {
          label: "Trailer Analysis",
          url: "https://www.youtube.com/watch?v=7aZx3IGpLCU"
        }
      ],
      sound: [
        {
          label: "OST Preview",
          url: "https://www.youtube.com/results?search_query=mechanicus+2+ost"
        },
        {
          label: "Community Feedback",
          url: "https://www.reddit.com/r/Warhammer40k/"
        }
      ]
    }
  }
};

function Card({ children }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
      {children}
    </div>
  );
}

function Tag({ children }) {
  return (
    <div className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
      {children}
    </div>
  );
}

function Section({ title, text, sources }) {
  return (
    <Card>
      <h2 className="text-3xl font-black mb-4">{title}</h2>

      <p className="text-gray-700 leading-8 mb-6">{text}</p>

      <div className="flex flex-wrap gap-3">
        {sources.map((source, index) => (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border bg-gray-50 text-sm hover:bg-emerald-50 hover:border-emerald-300 transition font-medium"
          >
            🔗 {source.label}
          </a>
        ))}
      </div>
    </Card>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [game, setGame] = useState(null);

  const suggestions = useMemo(() => Object.keys(database), []);

  const runSearch = () => {
    const normalized = query.toLowerCase().trim();

    const found = Object.entries(database).find(([key]) =>
      key.includes(normalized)
    );

    setGame(found ? found[1] : null);
  };

  return (
    <div className="min-h-screen bg-[#eef7f2] p-6 text-gray-900">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card>
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-black mb-2">
                🎮 TAELYZ AI Game Analyzer
              </h1>

              <p className="text-gray-500 text-lg">
                Interactive Game Review Application
              </p>
            </div>

            <div className="flex gap-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    runSearch();
                  }
                }}
                placeholder="Search game..."
                className="flex-1 border rounded-2xl px-5 py-4 text-lg"
              />

              <button
                onClick={runSearch}
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold"
              >
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setQuery(suggestion)}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {game ? (
          <>
            <Card>
              <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div>
                  <h2 className="text-5xl font-black mb-4">
                    {game.title}
                  </h2>

                  <p className="text-gray-500 mb-4 text-lg">
                    {game.developer} • {game.publisher} • {game.releaseDate}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {game.platforms.map((platform) => (
                      <Tag key={platform}>{platform}</Tag>
                    ))}

                    <Tag>{game.genre}</Tag>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 rounded-2xl p-5">
                      <div className="text-sm text-gray-500 mb-2">
                        Steam Price TH
                      </div>

                      <div className="text-3xl font-black text-emerald-700">
                        {game.steamPriceTH}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-5">
                      <div className="text-sm text-gray-500 mb-2">
                        Steam Price US
                      </div>

                      <div className="text-3xl font-black text-blue-700">
                        {game.steamPriceUS}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-44 h-44 rounded-full bg-emerald-100 border-[10px] border-emerald-500 flex items-center justify-center flex-col mx-auto">
                  <div className="text-6xl font-black text-emerald-700">
                    {game.score}
                  </div>

                  <div className="font-bold text-gray-500">SCORE</div>
                </div>
              </div>
            </Card>

            <Section
              title="Overview"
              text={game.overview}
              sources={game.sources.overview}
            />

            <Section
              title="Gameplay"
              text={game.gameplay}
              sources={game.sources.gameplay}
            />

            <Section
              title="Story"
              text={game.story}
              sources={game.sources.story}
            />

            <Section
              title="Graphics"
              text={game.graphics}
              sources={game.sources.graphics}
            />

            <Section
              title="Sound"
              text={game.sound}
              sources={game.sources.sound}
            />

            <Card>
              <h2 className="text-3xl font-black mb-6">Screenshots</h2>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {game.screenshots.map((shot, index) => (
                  <a
                    key={index}
                    href={shot.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <img
                      src={shot.image}
                      alt={`Screenshot ${index + 1}`}
                      className="rounded-2xl mb-3 w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/800x450?text=Screenshot+Unavailable";
                      }}
                    />

                    <div className="font-semibold">{shot.source}</div>
                  </a>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-3xl font-black mb-6">Trailers</h2>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {game.trailers.map((trailer, index) => (
                  <a
                    key={index}
                    href={trailer.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-3xl border bg-white hover:shadow-2xl transition block"
                  >
                    <div className="relative">
                      <img
                        src={`https://img.youtube.com/vi/${(() => {
                          try {
                            return new URL(trailer.youtube).searchParams.get("v") || "";
                          } catch {
                            return "";
                          }
                        })()}/hqdefault.jpg`}
                        alt={trailer.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                      />

                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl">
                          <div className="text-white text-4xl ml-1">▶</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="font-black text-2xl mb-2">
                        {trailer.title}
                      </div>

                      <div className="text-sm text-gray-500 break-all">
                        Click to open YouTube trailer
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </>
        ) : null}
      </div>
    </div>
  );
}
