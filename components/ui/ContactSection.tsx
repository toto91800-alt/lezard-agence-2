"use client";

import React from "react";

export default function ContactSection() {
    return (
        <section className="w-full pt-32 pb-20 px-6 bg-background">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Texte gauche */}
                <div className="text-foreground">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                        NOUS CONTACTER
                    </h2>
                    <p className="text-lg leading-relaxed text-center md:text-left text-muted-foreground">
                        Vous avez un projet photo ou vidéo pour un mariage, un événement corporatif, un anniversaire ou toute autre occasion ? <br />
                        Remplissez le formulaire ci-dessous ou contactez-nous directement par courriel ou téléphone.
                    </p>


                    <div className="mt-8 text-center md:text-left">
                        <p className="font-medium text-lg text-title-hero">theo.novais@lezard-agency.com</p>
                        <p className="text-lg mt-2 text-title-hero">+33 6 95 93 08 68</p>
                    </div>
                </div>

                {/* Formulaire */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-foreground">Nom *</label>
                            <input
                                type="text"
                                placeholder="Saisissez votre nom"
                                className="w-full border-b border-muted-foreground bg-transparent px-1 py-2 focus:outline-none focus:border-foreground"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-foreground">E-mail *</label>
                            <input
                                type="email"
                                placeholder="Saisissez votre e-mail"
                                className="w-full border-b border-muted-foreground bg-transparent px-1 py-2 focus:outline-none focus:border-foreground"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-foreground">Téléphone</label>
                            <input
                                type="text"
                                placeholder="Saisissez votre numéro"
                                className="w-full border-b border-muted-foreground bg-transparent px-1 py-2 focus:outline-none focus:border-foreground"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-foreground">Adresse</label>
                            <input
                                type="text"
                                placeholder="Saisissez votre adresse"
                                className="w-full border-b border-muted-foreground bg-transparent px-1 py-2 focus:outline-none focus:border-foreground"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-foreground">Objet</label>
                        <input
                            type="text"
                            placeholder="Saisissez l'objet"
                            className="w-full border-b border-muted-foreground bg-transparent px-1 py-2 focus:outline-none focus:border-foreground"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-foreground">Message</label>
                        <textarea
                            rows={4}
                            placeholder="Rédigez votre message ici..."
                            className="w-full border-b border-muted-foreground bg-transparent px-1 py-2 focus:outline-none focus:border-foreground"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            onClick={() => alert("Formulaire envoyé ✅")}
                            className="w-full md:w-auto px-8 py-3 rounded-xl font-semibold transition hover:opacity-90"
                            style={{
                                backgroundColor: "var(--background-hero)",
                                color: "var(--title-hero)",
                            }}
                        >
                            Envoyer
                        </button>

                    </div>
                </form>
            </div>
        </section>
    );
}
