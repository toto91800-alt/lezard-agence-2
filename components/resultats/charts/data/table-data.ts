// components/resultats/tables/data/table-data.ts

export type UserTarget = {
    position: number
    username: string
    likes: number
    follows: number
    score: number
  }
  
  // ✅ Score basé sur follows & likes
  function calcScore(follows: number, likes: number) {
    return follows * 10 + likes * 2
  }
  
  // ---------------------------
  // Données pour resultats-1
  // ---------------------------
  export const tableDataResultats1: UserTarget[] = [
    { position: 1, username: "@marinabarrial", likes: 487, follows: 782, score: calcScore(782, 487) },
    { position: 2, username: "@martina.merono", likes: 455, follows: 755, score: calcScore(755, 455) },
    { position: 3, username: "@madamarino", likes: 432, follows: 721, score: calcScore(721, 432) },
    { position: 4, username: "@luciacorreaaa", likes: 398, follows: 689, score: calcScore(689, 398) },
    { position: 5, username: "@dani_meroo", likes: 366, follows: 655, score: calcScore(655, 366) },
    { position: 6, username: "@aitanaasoriano", likes: 341, follows: 612, score: calcScore(612, 341) },
    { position: 7, username: "@_claudieta_", likes: 309, follows: 578, score: calcScore(578, 309) },
    { position: 8, username: "@angelamarmol", likes: 275, follows: 545, score: calcScore(545, 275) },
    { position: 9, username: "@liasikora", likes: 244, follows: 498, score: calcScore(498, 244) },
    { position: 10, username: "@qmike", likes: 212, follows: 463, score: calcScore(463, 212) },
  ]
  
  // ---------------------------
  // Données pour resultats-2
  // ---------------------------
  export const tableDataResultats2: UserTarget[] = [
    { position: 1, username: "@cannabis", likes: 501, follows: 799, score: calcScore(799, 501) },
    { position: 2, username: "@stoner__merch", likes: 478, follows: 764, score: calcScore(764, 478) },
    { position: 3, username: "@herbalhabitat", likes: 452, follows: 733, score: calcScore(733, 452) },
    { position: 4, username: "@worldrollingchampionship", likes: 419, follows: 701, score: calcScore(701, 419) },
    { position: 5, username: "@hempiregame", likes: 387, follows: 670, score: calcScore(670, 387) },
    { position: 6, username: "@simleaf", likes: 359, follows: 629, score: calcScore(629, 359) },
    { position: 7, username: "@hippy.hour", likes: 332, follows: 592, score: calcScore(592, 332) },
    { position: 8, username: "@rawgiving", likes: 301, follows: 561, score: calcScore(561, 301) },
    { position: 9, username: "@thefreezepipe", likes: 268, follows: 523, score: calcScore(523, 268) },
    { position: 10, username: "@smokefiends", likes: 239, follows: 488, score: calcScore(488, 239) },
  ]
  
  // ---------------------------
  // Données pour resultats-3
  // ---------------------------
  export const tableDataResultats3: UserTarget[] = [
    { position: 1, username: "@coast.bcn", likes: 522, follows: 812, score: calcScore(812, 522) },
    { position: 2, username: "@maisonhost", likes: 497, follows: 783, score: calcScore(783, 497) },
    { position: 3, username: "@cottonsailbcn", likes: 465, follows: 752, score: calcScore(752, 465) },
    { position: 4, username: "@zwanzigbrand", likes: 439, follows: 720, score: calcScore(720, 439) },
    { position: 5, username: "@merchamsterdam", likes: 407, follows: 685, score: calcScore(685, 407) },
    { position: 6, username: "@lillit.clo", likes: 372, follows: 654, score: calcScore(654, 372) },
    { position: 7, username: "@afterfear_", likes: 344, follows: 619, score: calcScore(619, 344) },
    { position: 8, username: "@skeelsbrand", likes: 318, follows: 583, score: calcScore(583, 318) },
    { position: 9, username: "@oblivionbasic", likes: 286, follows: 550, score: calcScore(550, 286) },
    { position: 10, username: "@lazzy.studios", likes: 259, follows: 515, score: calcScore(515, 259) },
  ]
  
  // ---------------------------
  // Données pour resultats-4
  // ---------------------------
  export const tableDataResultats4: UserTarget[] = [
    { position: 1, username: "@kg_surfer", likes: 546, follows: 825, score: calcScore(825, 546) },
    { position: 2, username: "@noa_dupouy", likes: 520, follows: 794, score: calcScore(794, 520) },
    { position: 3, username: "@surfsessionmag", likes: 489, follows: 760, score: calcScore(760, 489) },
    { position: 4, username: "@billabong_europe", likes: 463, follows: 728, score: calcScore(728, 463) },
    { position: 5, username: "@rvca_europe", likes: 432, follows: 696, score: calcScore(696, 432) },
    { position: 6, username: "@hurley_eu", likes: 401, follows: 662, score: calcScore(662, 401) },
    { position: 7, username: "@kaulivaast", likes: 373, follows: 628, score: calcScore(628, 373) },
    { position: 8, username: "@floresjeremy", likes: 348, follows: 596, score: calcScore(596, 348) },
    { position: 9, username: "@oxbow", likes: 319, follows: 562, score: calcScore(562, 319) },
    { position: 10, username: "@surf_porn", likes: 292, follows: 529, score: calcScore(529, 292) },
  ]
  
  // ---------------------------
  // Données pour resultats-5
  // ---------------------------
  export const tableDataResultats5: UserTarget[] = [
    { position: 1, username: "@louisergt", likes: 560, follows: 835, score: calcScore(835, 560) },
    { position: 2, username: "@justezoe", likes: 533, follows: 805, score: calcScore(805, 533) },
    { position: 3, username: "@yael.pg", likes: 505, follows: 773, score: calcScore(773, 505) },
    { position: 4, username: "@styleto", likes: 478, follows: 742, score: calcScore(742, 478) },
    { position: 5, username: "@mayadorable", likes: 452, follows: 710, score: calcScore(710, 452) },
    { position: 6, username: "@paulinecharbit", likes: 421, follows: 678, score: calcScore(678, 421) },
    { position: 7, username: "@isia", likes: 396, follows: 645, score: calcScore(645, 396) },
    { position: 8, username: "@mlee", likes: 367, follows: 613, score: calcScore(613, 367) },
    { position: 9, username: "@estherluxey", likes: 338, follows: 579, score: calcScore(579, 338) },
    { position: 10, username: "@sulivangwed", likes: 309, follows: 547, score: calcScore(547, 309) },
  ]
  
  // ---------------------------
  // Données pour resultats-6
  // ---------------------------
  export const tableDataResultats6: UserTarget[] = [
    { position: 1, username: "@tiamomtl", likes: 588, follows: 849, score: calcScore(849, 588) },
    { position: 2, username: "@thrivesalon_", likes: 560, follows: 817, score: calcScore(817, 560) },
    { position: 3, username: "@shopdailyru", likes: 534, follows: 785, score: calcScore(785, 534) },
    { position: 4, username: "@strawberrycorduroy", likes: 507, follows: 752, score: calcScore(752, 507) },
    { position: 5, username: "@thesundancecompany", likes: 481, follows: 719, score: calcScore(719, 481) },
    { position: 6, username: "@sunberrytans", likes: 452, follows: 686, score: calcScore(686, 452) },
    { position: 7, username: "@anthony.mtl.creator", likes: 428, follows: 653, score: calcScore(653, 428) },
    { position: 8, username: "@umamia_mtl", likes: 401, follows: 620, score: calcScore(620, 401) },
    { position: 9, username: "@brasserie701", likes: 372, follows: 587, score: calcScore(587, 372) },
    { position: 10, username: "@gasparmtl", likes: 345, follows: 555, score: calcScore(555, 345) },
  ]
  
  // ---------------------------
  // Regroupement
  // ---------------------------
  export const tableDatasets = {
    "resultats-1": tableDataResultats1,
    "resultats-2": tableDataResultats2,
    "resultats-3": tableDataResultats3,
    "resultats-4": tableDataResultats4,
    "resultats-5": tableDataResultats5,
    "resultats-6": tableDataResultats6,
  }
  