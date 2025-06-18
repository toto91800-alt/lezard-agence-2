import { cn } from "@/lib/utils";
import {Marquee} from "@/components/ui/marquee";

const reviews = [
  {
    name: "Sandra Ferreira",
    username: "@Sandra.Ferreira",
    body: "Great work, and a video project that was a success!",
    img: "/images/reviews1/sandra.jpg",
  },
  {
    name: "Catherine Gleduc",
    username: "@Catherine.Gleduc",
    body: "I love the artistic side of our collaboration! Really happy with the result!",
    img: "/images/reviews1/cat.png",
  },
  {
    name: "Utopia Events",
    username: "@Utopia.Events",
    body: "The work has been outstanding, honestly, we are just thrilled with the results—truly remarkable work.",
    img: "/images/reviews1/Untitled-8.png",
  },
  {
    name: "Juliette Leon",
    username: "@Juliette.Leon",
    body: "Théo has been a great help, delivering high-quality results for all my open-air DJ set events organized last year. I am truly grateful—remarkable talent!",
    img: "/images/reviews1/ll.png",
  },
  {
    name: "The Ride Collective",
    username: "@The Ride Collective",
    body: "The mini-series exceeded our expectations. Filming in the open sea and mountains was absolutely insane!",
    img: "/images/reviews1/TheRide.png",
  },
  {
    name: "Lucien Maynard",
    username: "@Lucien.Maynard",
    body: "I admire your ability to work so much without ever compromising on quality.",
    img: "/images/reviews1/lucienmaynard.jpg",
  },
  {
    name: "Philippe Olivier Crepin",
    username: "@Philippe.Olivier.Crepin",
    body: "What I highlight is the dedication Théo put into our collaboration—truly impressive professionalism.",
    img: "/images/reviews1/popcr.jpg",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo1() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
