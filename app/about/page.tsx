import React from "react";

export default function AboutPage() {
  return (
    <main className="flex flex-col max-w-7xl justify-center items-center mx-auto py-24 px-8 bg-white">
      <h1 className="text-4xl font-bold mb-10">O Geoportalu</h1>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Geneza projektu</h2>
        <p className="text-justify text-lg">
          Geoportal został stworzony z myślą o uporządkowaniu i zarządzaniu
          danymi związanymi z pracownikami, sklepami oraz sieciami sklepów, w
          tym ich magazynami. Nasz zespół zauważył rosnącą potrzebę
          centralizacji tych informacji, aby ułatwić zarządzanie i optymalizację
          zasobów.
        </p>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Działanie Geoportalu</h2>
        <p className="text-justify text-lg">
          Nasz Geoportal oferuje zaawansowane funkcje umożliwiające użytkownikom
          szybki dostęp do dokładnych danych. System integruje informacje o
          lokalizacjach sklepów, ich pracownikach oraz stanach magazynowych, co
          pozwala na lepsze planowanie i zarządzanie.
        </p>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Funkcje Geoportalu</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Centralizacja danych o pracownikach, sklepach i magazynach.</li>
          <li>Interaktywne mapy przedstawiające lokalizacje sklepów.</li>
          <li>Raportowanie i analiza danych w czasie rzeczywistym.</li>
          <li>Możliwość integracji z innymi systemami zarządzania.</li>
        </ul>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Korzyści z używania Geoportalu
        </h2>
        <p className="text-justify text-lg">
          Korzystanie z Geoportalu przynosi wiele korzyści, takich jak
          zwiększona efektywność zarządzania zasobami, lepsza organizacja pracy
          oraz możliwość podejmowania bardziej świadomych decyzji opartych na
          dokładnych danych. System jest intuicyjny i łatwy w użyciu, co
          sprawia, że może być stosowany zarówno przez małe, jak i duże
          przedsiębiorstwa.
        </p>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p className="text-justify text-lg">
          Jeśli masz pytania lub potrzebujesz dodatkowych informacji, skontaktuj
          się z nami pod adresem email:{" "}
          <a href="mailto:kontakt@geoportal.com" className="text-blue-500">
            geoportal.przemytnikow@student.uczelnia.edu.pl
          </a>
          .
        </p>
      </section>
    </main>
  );
}
