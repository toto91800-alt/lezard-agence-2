import { HeroVideoDialog } from "@/components/ui/HeroVideoDialog";

export function HeroVideoTop() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="/video/kora.mp4"
        thumbnailSrc="/images/igloofest/koratemplate.webp"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="/video/kora.mp4"
        thumbnailSrc="/images/igloofest/koratemplate.webp"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
