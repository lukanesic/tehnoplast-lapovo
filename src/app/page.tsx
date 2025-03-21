import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/ui/Hero";
import Overview from "@/components/ui/Overview";
import StatsSection from "@/components/ui/StatsSection";
import VideoSection from "@/components/ui/VideoSection";
import { izrada, proces } from "@/data";

export default function Home() {
  // Ako stranica nije staticna zove se get translation iz next-intl/server. Tj, kada ne pozivas podatke
  // const t = useTranslations('Home')
  return (
    <MainLayout color="white">
      <main>
        <Hero
          heading="Potpuno rešenje za izradu i ugradnju PVC & ALU stolarije"
          description="Tehnoplast je specijalizovan za dizajn, proizvodnju i ugradnju PVC i ALU stolarije, pružajući kvalitetna rešenja za domove i poslovne prostore širom Evrope."
          image="/images/hero/hero.jpg"
        />
        <Overview
          accord={true}
          accordData={izrada}
          title="Beskompromisna izrada"
          subtitle="Svaki prostor prilagođavamo vašim željama, pretvarajući ideje u stvarnost pažljivom izradom i vrhunskim materijalima. Naši proizvodi kombinuju dizajn, funkcionalnost i kvalitet, pružajući rešenja skrojena po meri svakog klijenta."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="/kontakt"
          btn={true}
          showLink={true}
        />

        <Overview
          accord={false}
          accordData={null}
          btn={false}
          title="Dostavljamo samo uspešne projekte"
          subtitle="Naši proizvodi u izgradnji nosivih konstrukcija i u svim vrstama ograda, kako u industrijskom tako i u privatnom sektoru."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="/kontakt"
          showLink={false}
        />

        <StatsSection />

        <VideoSection />

        <Overview
          accord={true}
          accordData={proces}
          btn={false}
          title="Širom Evrope"
          subtitle="Oblikujemo prostore širom Evrope, spajajući savremeni dizajn, vrhunsku izradu i visokokvalitetne materijale. Naši projekti u Nemačkoj, Francuskoj i Srbiji odražavaju posvećenost detaljima, funkcionalnosti i inovacijama, pružajući rešenja prilagođena specifičnim potrebama klijenata."
          text="Ukoliko imate dodatnih pitanja budite slobodni da nas kontaktirate."
          btnText="Kontakt"
          link="/kontakt"
          showLink={false}
        />
      
      </main>
    </MainLayout>
  );
}
