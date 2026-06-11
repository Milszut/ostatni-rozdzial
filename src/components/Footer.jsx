export default function Footer() {
  return (
    <footer className="bg-center bg-cover overflow-hidden" style={{ backgroundImage: "url('/images/banner-background.webp')" }}>
      <div className="bg-black/50 backdrop-blur-lg text-white">
        <div
          className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 mdl:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)] xl:grid-cols-[1fr_minmax(220px,0.8fr)_1fr] gap-10">
          <div className="order-1 text-sm sm:text-base">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Kontakt
            </h3>

            <p>Masz pytania dotyczące konferencji?</p>
            <p className="mb-3">Skontaktuj się z nami, chętnie pomożemy.</p>

            <p className="font-medium">Adres</p>
            <p><span className="block sm:inline">Kościół Zielonoświątkowy</span>{" "}<span className="block sm:inline">Zbór Emaus w Rzeszowie</span></p>
            <p>Dąbrowskiego 1A</p>
            <p className="mb-3">35-036 Rzeszów, Polska</p>
            <p className="font-medium">Mail</p>
            <p><a href="mailto:dynamisconf@gmail.com" className="underline hover:text-orange-500 transition">dynamisconf@gmail.com</a></p>
          </div>

          <div className="order-3 xl:order-2 min-w-[220px] text-sm sm:text-base">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Dokumenty
            </h3>

            <div className="space-y-2">
              <a href="/docs/OSTATNI%20ROZDZIA%C5%81%20-%20POLITYKA%20PRYWATNO%C5%9ACI.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500 transition block">
                Polityka prywatności
              </a>
              <a href="/docs/OSTATNI%20ROZDZIA%C5%81%20-%20REGULAMIN.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500 transition block">
                Regulamin konferencji
              </a>
              <a href="/docs/OSTATNI%20ROZDZIA%C5%81%20-%20ZGODA%20NA%20UDZIA%C5%81%20OSOBY%20NIEPE%C5%81NOLETNIEJ.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500 transition block">
                Zgoda dla osób niepełnoletnich
              </a>
            </div>
          </div>

          <div className="order-2 xl:order-3 text-sm sm:text-base">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Social Media
            </h3>

            <p className="mb-3">
              Bądź na bieżąco z aktualnościami i ważnymi informacjami.
            </p>

            <p className="font-medium">Instagram</p>
            {[
              ["Ostatni Rozdział:", "https://www.instagram.com/dynamis.conf"],
              ["Dynamis:", "https://www.instagram.com/dynamis.mr"],
            ].map(([label, url]) => (
              <div key={url} className="flex flex-col xs:flex-row xs:items-centergap-0 xs:gap-1">
                <span className="whitespace-nowrap">
                  {label}
                </span>
                <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500 transition break-all xs:break-normal">
                  {url}
                </a>
              </div>
            ))}

            <p className="font-medium mt-4">Facebook</p>
            {[
              ["Dynamis:", "https://www.facebook.com/DynamisMR"],
            ].map(([label, url]) => (
              <div key={url} className="flex flex-col xs:flex-row xs:items-center gap-0 xs:gap-1">
                <span className="whitespace-nowrap">
                  {label}
                </span>
                <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500 transition break-all xs:break-normal">
                  {url}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-4 px-6">
          <div className="flex flex-wrap justify-center gap-x-1 text-xs sm:text-sm text-center">
            <span className="whitespace-nowrap">
              © Copyright 2026
            </span>
            <span className="whitespace-nowrap">
              Kościół Zielonoświątkowy
            </span>
            <span className="whitespace-nowrap">
              Zbór Emaus w Rzeszowie.
            </span>
            <span className="whitespace-nowrap">
              Website by{" "}
              <a href="https://www.instagram.com/milosz_cmoch/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500 transition">
                Miłosz Cmoch
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}