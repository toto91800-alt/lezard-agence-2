import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    username: "@clemencebertrand",
    key: "clemence",
    img: "https://app.lezard-agency.com/api/ig/pdp/clemencebertrand?cb=1757171327650",
  },
  {
    username: "@theride.collective",
    key: "ride",
    img: "https://app.lezard-agency.com/api/ig/pdp/theride.collective?cb=1757171543792",
  },
  {
    username: "@shopnatscafe",
    key: "shopnat",
    img: "https://app.lezard-agency.com/api/ig/pdp/shopnatscafe?cb=1757171674449",
  },
  {
    username: "@becaybrand",
    key: "becay",
    img: "https://app.lezard-agency.com/api/ig/pdp/becaybrand?cb=1757171714841",
  },
  {
    username: "@mccall.mitchell",
    key: "mccall",
    img: "https://app.lezard-agency.com/api/ig/pdp/mccall.mitchell?cb=1757171769000",
  },
  {
    username: "@tealer",
    key: "tealer",
    img: "https://app.lezard-agency.com/api/ig/pdp/tealer?cb=1757171829821",
  },
  {
    username: "@utopiaevents_mtl",
    key: "utopia",
    img: "https://app.lezard-agency.com/api/ig/pdp/utopiaevents_mtl?cb=1757171619739",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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

const ReviewCard = ({ img, username, body }: ReviewCardProps) => (
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

export function MarqueeDemo1() {
  const { t } = useTranslation();

  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
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
              body={t(`mainpage.reviewsfooter.footer.${review.key}`)}
            />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard
              key={review.username}
              img={review.img}
              username={review.username}
              body={t(`mainpage.reviewsfooter.footer.${review.key}`)}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
