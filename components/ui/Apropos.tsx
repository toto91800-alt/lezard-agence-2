import Image from "next/image";

const Apropos = () => {
  return (
    <section className="bg-background px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image à gauche */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/Theonovais.png"
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
            Après avoir affûté son regard entre les rues de Paris et les lignes d’horizon de l’Australie, de l’Indonésie et d’ailleurs, il capte l’adrénaline là où elle explose : au cœur de l’action. Caméra à la main, il façonne un univers brut, intense, où chaque mouvement devient une image vivante.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Aujourd’hui, il transmet sa vision à travers une maison de production qui fusionne esthétisme visuel et énergie pure. De Paris à Montréal, son obsession pour l’instant réel traverse les airs comme un rider dans son envol — toujours à la recherche du moment juste.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Apropos;
