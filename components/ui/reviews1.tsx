import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  { username: "@Sandra.Ferreira", body: "Great work, and a video project that was a success!", img: "/images/reviews1/sandra.jpg" },
  { username: "@Catherine.Gleduc", body: "I love the artistic side of our collaboration! Really happy with the result!", img: "/images/reviews1/cat.png" },
  { username: "@Utopia.Events", body: "The work has been outstanding, honestly, we are just thrilled with the results—truly remarkable work.", img: "/images/reviews1/Untitled-8.png" },
  { username: "@Juliette.Leon", body: "Théo has been a great help, delivering high-quality results for all my open-air DJ set events organized last year. I am truly grateful—remarkable talent!", img: "/images/reviews1/ll.png" },
  { username: "@The Ride Collective", body: "The mini-series exceeded our expectations. Filming in the open sea and mountains was absolutely insane!", img: "/images/reviews1/TheRide.png" },
  { username: "@Lucien.Maynard", body: "I admire your ability to work so much without ever compromising on quality.", img: "/images/reviews1/lucienmaynard.jpg" },
  { username: "@Philippe.Olivier.Crepin", body: "What I highlight is the dedication Théo put into our collaboration—truly impressive professionalism.", img: "/images/reviews1/popcr.jpg" },
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
