import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    username: "@clemencebertrand",
    body: "Grâce à l’outil, j’ai enfin structuré mon image : +400 nouveaux abonnés/mois, plus de DM qualifiés et un feed qui fait pro. J’adore !",
    img: "https://app.lezard-agency.com/api/ig/pdp/clemencebertrand?cb=1757171327650",
  },
  {
    username: "@theride.collective",
    body: "Nos Reels cartonnent et la communauté s’active. + d’engagement chaque semaine et de vrais fans qui reviennent sur chaque post.",
    img: "https://app.lezard-agency.com/api/ig/pdp/theride.collective?cb=1757171543792",
  },
  {
    username: "@shopnatscafe",
    body: "Mon Instagram a enfin décollé : plus de clients en boutique, des stories vues et des messages tous les jours. Tellement simple à piloter !",
    img: "https://app.lezard-agency.com/api/ig/pdp/shopnatscafe?cb=1757171674449",
  },
  {
    username: "@becaybrand",
    body: "Branding plus cohérent, UGC qui performe et communauté qui convertit. Les posts deviennent de vrais leviers de ventes.",
    img: "https://app.lezard-agency.com/api/ig/pdp/becaybrand?cb=1757171714841",
  },
  {
    username: "@mccall.mitchell",
    body: "Calendrier contenu clair, zéro prise de tête et audience qui grandit chaque semaine. J’ai même décroché de nouvelles collabs.",
    img: "https://app.lezard-agency.com/api/ig/pdp/mccall.mitchell?cb=1757171769000",
  },
  {
    username: "@tealer",
    body: "Visibilité en hausse, trafic qualifié et une communauté plus fidèle. On sent la différence sur chaque lancement de collection.",
    img: "https://app.lezard-agency.com/api/ig/pdp/tealer?cb=1757171829821",
  },
  {
    username: "@utopiaevents_mtl",
    body: "Nos événements gagnent en portée : plus de vues, plus de partages et des billets qui partent plus vite grâce aux Reels.",
    img: "https://app.lezard-agency.com/api/ig/pdp/utopiaevents_mtl?cb=1757171619739",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

/** 5 étoiles */
const Stars = () => (
  <div className="mt-0.5 flex items-center gap-0.5 text-amber-500" aria-label="Note 5 sur 5">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="shrink-0 fill-current">
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
      </svg>
    ))}
  </div>
);

type ReviewCardProps = {
  img: string;
  username: string;
  body: string;
};

const ReviewCard = ({ img, username, body }: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={img}
          alt={`${username} avatar`}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold dark:text-white">{username}</p>
          <Stars />
        </div>
      </div>

      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo1() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
      {/* Wrapper avec mask de fondu gauche/droite */}
      <div
        className="
          w-full
          [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
        "
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard
              key={review.username}
              img={review.img}
              username={review.username}
              body={review.body}
            />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard
              key={review.username}
              img={review.img}
              username={review.username}
              body={review.body}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
