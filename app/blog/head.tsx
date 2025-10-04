export default function Head() {
    return (
      <>
        {/* 🌐 Balises générales du blog */}
        <title>Blog | Lézard Agency</title>
        <meta
          name="description"
          content="Découvrez nos articles et ressources pour booster votre croissance."
        />
  
        {/* 🔗 SEO / Social */}
        <meta property="og:title" content="Blog | Lézard Agency" />
        <meta
          property="og:description"
          content="Découvrez nos articles et ressources pour booster votre croissance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lezard-agency.com/blog" />
  
        {/* 🧭 SEO technique */}
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
        {/* 🖼️ Favicon (tu peux changer le chemin) */}
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  }
  