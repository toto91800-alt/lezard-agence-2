import Image from "next/image";

const Apropos = () => {
  return (
    <section className="bg-background px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image à gauche */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/tatata.webp"
            alt="Portrait d'Émilie"
            width={600}
            height={600}
            className="rounded-lg object-cover "
          />
        </div>

        {/* Texte à droite */}
        <div className="w-full lg:w-1/2">
          {/* Nom avec style graphique */}
          <h2 className="text-5xl md:text-6xl font-black tracking-wider text-foreground mb-8">
            Théo Novais
          </h2>

          {/* Texte descriptif */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Après mes études, j’ai pris la route, l’appareil en bandoulière, poussé par une soif de comprendre le monde au-delà des cartes. L’Australie, l’Asie, l’Europe, l’Amérique : autant de paysages que de visages, de cultures que de récits. Pendant quatre ans, j’ai affûté mon regard et mon art, travaillant pour des marques locales comme pour de grandes enseignes.
            Aujourd’hui vidéaste, photographe et consultant en stratégie de contenu, je crois qu’un projet est avant tout le reflet d’une âme. C’est pourquoi j’aime apprendre à connaître celles et ceux qui les portent. Car derrière chaque entreprise, il y a une ambition, une sensibilité, une histoire unique et c’est cela que je m’efforce de capturer.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Du toit glacé du Mont Blanc à 4 800 mètres, jusqu’aux eaux salées d’un tournage en mer, j’ai cherché l’image juste. Mais je l’ai trouvée aussi dans un regard, un geste, un lieu chargé d’émotion, comme ceux que l’on retrouve dans les petites structures familiales, où chaque détail compte.
            Riche de ces expériences, inspiré par le monde, je mets aujourd’hui ma vision au service de la vôtre. Pour créer, ensemble, du contenu qui a du sens et de l’âme.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Apropos;
