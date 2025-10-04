// components/resultats/charts/data/chart-data.ts

export type Point = {
    date: string
    post_like: number
    follow: number
    story_like: number
    swipe_feed: number
  }
  
  // ---------------------------
  // Données pour resultats-1
  // ---------------------------
  export const chartDataResultats1 = {
    data7d: [
      { date: "2024-09-01", post_like: 180, follow: 30, story_like: 200, swipe_feed: 90 },
      { date: "2024-09-02", post_like: 220, follow: 28, story_like: 240, swipe_feed: 110 },
      { date: "2024-09-03", post_like: 150, follow: 35, story_like: 190, swipe_feed: 95 },
      { date: "2024-09-04", post_like: 270, follow: 40, story_like: 280, swipe_feed: 130 },
      { date: "2024-09-05", post_like: 200, follow: 25, story_like: 220, swipe_feed: 100 },
      { date: "2024-09-06", post_like: 240, follow: 32, story_like: 260, swipe_feed: 120 },
      { date: "2024-09-07", post_like: 190, follow: 29, story_like: 210, swipe_feed: 105 },
    ],
    data30d: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-08-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 300) + 50,
      follow: Math.floor(Math.random() * 50) + 5,
      story_like: Math.floor(Math.random() * 300) + 50,
      swipe_feed: Math.floor(Math.random() * 150) + 20,
    })),
    data90d: Array.from({ length: 90 }, (_, i) => ({
      date: `2024-06-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 300) + 50,
      follow: Math.floor(Math.random() * 50) + 5,
      story_like: Math.floor(Math.random() * 300) + 50,
      swipe_feed: Math.floor(Math.random() * 150) + 20,
    })),
  }
  
  // ---------------------------
  // Données pour resultats-2
  // ---------------------------
  export const chartDataResultats2 = {
    data7d: [
      { date: "2024-09-01", post_like: 100, follow: 20, story_like: 150, swipe_feed: 60 },
      { date: "2024-09-02", post_like: 130, follow: 18, story_like: 170, swipe_feed: 80 },
      { date: "2024-09-03", post_like: 90, follow: 25, story_like: 120, swipe_feed: 70 },
      { date: "2024-09-04", post_like: 160, follow: 30, story_like: 200, swipe_feed: 95 },
      { date: "2024-09-05", post_like: 140, follow: 15, story_like: 180, swipe_feed: 85 },
      { date: "2024-09-06", post_like: 170, follow: 22, story_like: 210, swipe_feed: 100 },
      { date: "2024-09-07", post_like: 120, follow: 19, story_like: 160, swipe_feed: 75 },
    ],
    data30d: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-08-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 250) + 30,
      follow: Math.floor(Math.random() * 50) + 5,
      story_like: Math.floor(Math.random() * 280) + 40,
      swipe_feed: Math.floor(Math.random() * 120) + 15,
    })),
    data90d: Array.from({ length: 90 }, (_, i) => ({
      date: `2024-06-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 250) + 30,
      follow: Math.floor(Math.random() * 50) + 5,
      story_like: Math.floor(Math.random() * 280) + 40,
      swipe_feed: Math.floor(Math.random() * 120) + 15,
    })),
  }
  
  // ---------------------------
  // Données pour resultats-3
  // ---------------------------
  export const chartDataResultats3 = {
    data7d: Array.from({ length: 7 }, (_, i) => ({
      date: `2024-09-0${i + 1}`,
      post_like: Math.floor(Math.random() * 280) + 40,
      follow: Math.floor(Math.random() * 50) + 10,
      story_like: Math.floor(Math.random() * 250) + 30,
      swipe_feed: Math.floor(Math.random() * 130) + 20,
    })),
    data30d: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-08-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 280) + 40,
      follow: Math.floor(Math.random() * 50) + 10,
      story_like: Math.floor(Math.random() * 250) + 30,
      swipe_feed: Math.floor(Math.random() * 130) + 20,
    })),
    data90d: Array.from({ length: 90 }, (_, i) => ({
      date: `2024-06-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 280) + 40,
      follow: Math.floor(Math.random() * 50) + 10,
      story_like: Math.floor(Math.random() * 250) + 30,
      swipe_feed: Math.floor(Math.random() * 130) + 20,
    })),
  }
  
  // ---------------------------
  // Données pour resultats-4
  // ---------------------------
  export const chartDataResultats4 = {
    data7d: Array.from({ length: 7 }, (_, i) => ({
      date: `2024-09-0${i + 1}`,
      post_like: Math.floor(Math.random() * 260) + 20,
      follow: Math.floor(Math.random() * 50) + 8,
      story_like: Math.floor(Math.random() * 230) + 25,
      swipe_feed: Math.floor(Math.random() * 110) + 15,
    })),
    data30d: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-08-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 260) + 20,
      follow: Math.floor(Math.random() * 50) + 8,
      story_like: Math.floor(Math.random() * 230) + 25,
      swipe_feed: Math.floor(Math.random() * 110) + 15,
    })),
    data90d: Array.from({ length: 90 }, (_, i) => ({
      date: `2024-06-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 260) + 20,
      follow: Math.floor(Math.random() * 50) + 8,
      story_like: Math.floor(Math.random() * 230) + 25,
      swipe_feed: Math.floor(Math.random() * 110) + 15,
    })),
  }
  
  // ---------------------------
  // Données pour resultats-5
  // ---------------------------
  export const chartDataResultats5 = {
    data7d: Array.from({ length: 7 }, (_, i) => ({
      date: `2024-09-0${i + 1}`,
      post_like: Math.floor(Math.random() * 240) + 15,
      follow: Math.floor(Math.random() * 50) + 6,
      story_like: Math.floor(Math.random() * 220) + 20,
      swipe_feed: Math.floor(Math.random() * 100) + 10,
    })),
    data30d: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-08-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 240) + 15,
      follow: Math.floor(Math.random() * 50) + 6,
      story_like: Math.floor(Math.random() * 220) + 20,
      swipe_feed: Math.floor(Math.random() * 100) + 10,
    })),
    data90d: Array.from({ length: 90 }, (_, i) => ({
      date: `2024-06-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 240) + 15,
      follow: Math.floor(Math.random() * 50) + 6,
      story_like: Math.floor(Math.random() * 220) + 20,
      swipe_feed: Math.floor(Math.random() * 100) + 10,
    })),
  }
  
  // ---------------------------
  // Données pour resultats-6
  // ---------------------------
  export const chartDataResultats6 = {
    data7d: Array.from({ length: 7 }, (_, i) => ({
      date: `2024-09-0${i + 1}`,
      post_like: Math.floor(Math.random() * 200) + 10,
      follow: Math.floor(Math.random() * 50) + 5,
      story_like: Math.floor(Math.random() * 180) + 15,
      swipe_feed: Math.floor(Math.random() * 90) + 8,
    })),
    data30d: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-08-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 200) + 10,
      follow: Math.floor(Math.random() * 50) + 5,
      story_like: Math.floor(Math.random() * 180) + 15,
      swipe_feed: Math.floor(Math.random() * 90) + 8,
    })),
    data90d: Array.from({ length: 90 }, (_, i) => ({
      date: `2024-06-${(i + 1).toString().padStart(2, "0")}`,
      post_like: Math.floor(Math.random() * 200) + 10,
      follow: Math.floor(Math.random() * 50) + 5,
      story_like: Math.floor(Math.random() * 180) + 15,
      swipe_feed: Math.floor(Math.random() * 90) + 8,
    })),
  }
  
  // ---------------------------
  // Map centralisée pour ChartAreaInteractive1
  // ---------------------------
  export const datasets: Record<
    "resultats-1" | "resultats-2" | "resultats-3" | "resultats-4" | "resultats-5" | "resultats-6",
    { data7d: Point[]; data30d: Point[]; data90d: Point[] }
  > = {
    "resultats-1": chartDataResultats1,
    "resultats-2": chartDataResultats2,
    "resultats-3": chartDataResultats3,
    "resultats-4": chartDataResultats4,
    "resultats-5": chartDataResultats5,
    "resultats-6": chartDataResultats6,
  }
  