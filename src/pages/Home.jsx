import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiClock } from "react-icons/fi";
import Countdown from "../components/Countdown";

const REGISTER_URL = "https://forms.gle/uWBXJun74Z4KgYiC6";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        <section id="home" className="relative w-full shadow-2xl h-[80vh] sm:h-screen flex flex-col items-center justify-center pt-10 gap-0 bg-center bg-cover" style={{ backgroundImage: "url('/images/banner-background.webp')" }}>
           <div className="h-[52px] sm:h-[68px] lg:h-20 opacity-0">
          </div>
          <img src="/images/banner-text.webp" alt="Banner text" className="max-w-full max-h-[55%] sm:max-h-[65%] object-contain pointer-events-none px-6 sm:px-10"/>

          <div className="">
            <Countdown />
          </div>
        </section>

        <section id="main" className="scroll-mt-20 w-full px-6 sm:px-12 py-10 lg:py-20 section-shadow bg-center bg-cover bg-no-repeat text-center" style={{ backgroundImage: "url('/images/dark-paper.webp')" }}>
          <h1 className="font-gloria text-4xl sm:text-6xl lg:text-7xl text-white mb-10">
            Główne przesłanie
          </h1>

          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 lg:mb-16">
            <div className="flex flex-col items-center text-center gap-4">
              <img src="/images/fire-logo.webp" alt="Napełnieni Duchem" className="w-24 h-24 md:w-30 md:h-30 object-contain" />
              <span className="font-margarine text-white text-base md:text-lg lg:text-2xl">
                NAPEŁNIENI DUCHEM
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <img src="/images/heart-logo.webp" alt="Życie radykalne" className="w-24 h-24 md:w-30 md:h-30 object-contain" />
              <span className="font-margarine text-white text-base md:text-lg lg:text-2xl">
                ŻYCIE RADYKALNE
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <img src="/images/ready-logo.webp" alt="Gotowość" className="w-24 h-24 md:w-30 md:h-30 object-contain" />
              <span className="font-margarine text-white text-base md:text-lg lg:text-2xl">
                GOTOWOŚĆ
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <img src="/images/book-logo.webp" alt="Nasza misja" className="w-24 h-24 md:w-30 md:h-30 object-contain" />
              <span className="font-margarine text-white text-base md:text-lg lg:text-2xl">
                NASZA MISJA<br />W OSTATNIM ROZDZIALE
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto font-playpen text-white text-base lg:text-xl text-left">
            <p className="break-words">
              <span className="font-semibold">NAPEŁNIENIE DUCHEM</span> to początek - pozwalamy Bogu działać w nas i przez nas.
              Z tego rodzi się <span className="font-semibold">ŻYCIE RADYKALNE</span> - pełne, bez kompromisów, zakorzenione w Ewangelii.
              Taka postawa prowadzi do <span className="font-semibold">GOTOWOŚCI</span> - serca, które mówi:{" "}
              <span className="italic">„Oto jestem, poślij mnie!”</span>{" "}
              Wtedy odkrywamy <span className="font-semibold">NASZĄ MISJĘ W OSTATNIM ROZDZIALE</span> - która odnosi się do życia
              każdego z nas w czasach ostatecznych, czyli w naszych, bo życie każdego z nas ostatecznie się skończy.
              Czas, by odważnie wejść w Boży plan i być Jego świadkami tu i teraz.
            </p>

            <p className="mt-6">
              To droga od napełnienia do posłania, od wewnętrznej przemiany do działania w mocy ducha.
            </p>
          </div>
        </section>

        <section id="register" className="scroll-mt-20 w-full px-6 sm:px-12 py-10 lg:py-20 section-shadow bg-center bg-cover bg-no-repeat text-black" style={{ backgroundImage: "url('/images/orange-paper.webp')" }}>
          <h1 className="font-gloria text-4xl sm:text-6xl lg:text-7xl text-black text-center mb-10 lg:mb-16">
            Rejestracja
          </h1>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-gloria text-2xl lg:text-3xl mb-4"><strong>Dla kogo?</strong></h2>
                <div className="font-playpen text-base lg:text-lg text-left">
                  <p>Szkoła średnia, studenci, młodzi dorośli.</p>
                  <p>Osoby indywidualne oraz grupy młodzieżowe.</p>
                  <p className="mt-2">
                    Osoby poniżej 18 roku życia zobowiązane są do dostarczenia pisemnej zgody rodzica lub
                    opiekuna prawnego w wersji papierowej najpóźniej w dniu rozpoczęcia konferencji.
                  </p>
                  <a href="/docs/OSTATNI%20ROZDZIA%C5%81%20-%20ZGODA%20NA%20UDZIA%C5%81%20OSOBY%20NIEPE%C5%81NOLETNIEJ.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white mt-2 transition block">
                    <strong>Zgoda dla osób niepełnoletnich - pobierz</strong>
                  </a>
                  <p className="mt-2">
                    Rejestracja jest obowiązkowa dla wszystkich uczestników konferencji i potrwa do <strong>15 lutego 2026 roku, </strong> do końca dnia.
                  </p>
                </div>
                <img src="/images/separator-line.webp" alt="" className="mt-4 max-w-xl w-full mx-auto" />
              </div>

              <div>
                <h2 className="font-gloria text-2xl lg:text-3xl mb-4"><strong>Nocleg i Wyżywienie</strong></h2>
                <div className="font-playpen text-base lg:text-lg text-left">
                  <p>Istnieje możliwość noclegu na miejscu w budynku, w którym odbywa się konferencja. Należy zabrać własną karimatę oraz śpiwór.</p>
                  <p className="mt-2">Liczba miejsc noclegowych jest ograniczona.</p>
                  <p className="mt-2">Podczas konferencji zapewniamy wyżywienie. W formularzu rejestracyjnym dostępne są dwie opcje do wyboru:</p>
                  <p><strong>Standard</strong> oraz <strong>Vege</strong>.</p>
                  <p className="mt-2">Na miejscu dostępna będzie również kawiarenka.</p>
                </div>
                <img src="/images/separator-line.webp" alt="" className="mt-4 max-w-xl w-full mx-auto" />
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-gloria text-2xl lg:text-3xl mb-4"><strong>Kiedy i gdzie?</strong></h2>
                <div className="font-playpen text-base lg:text-lg">
                  <p><strong>Data:</strong> 20-22 lutego 2026</p>
                  <p><strong>Rozpoczęcie:</strong> Piątek, godz. 16:00</p>
                  <p><strong>Zakończenie:</strong> Niedziela, godz. 10:00</p>

                  <p className="mt-4">
                    <strong>Miejsce:</strong><br />
                    Kościół Zielonoświątkowy Zbór Emaus w Rzeszowie<br />
                    ul. Dąbrowskiego 1A, Rzeszów
                  </p>
                </div>
                <img src="/images/separator-line.webp" alt="" className="mt-4 max-w-xl w-full mx-auto" />
              </div>

              <div>
                <h2 className="font-gloria text-2xl lg:text-3xl mb-4"><strong>Cennik</strong></h2>
                <div className="font-playpen text-base lg:text-lg text-justify">
                  <p>Koszt udziału w konferencji wynosi <strong>130 zł</strong>.</p>
                  <p className="mt-2 text-left">
                    Cena jest jednolita, niezależna od liczby dni oraz wyboru opcji noclegowej.
                  </p>
                  <p className="mt-2 text-left">
                    Opłata za udział w konferencji nie podlega zwrotowi.
                  </p>
                </div>
                <img src="/images/separator-line.webp" alt="" className="mt-4 max-w-xl w-full mx-auto" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-gloria text-2xl lg:text-3xl mb-4"><strong>Płatność</strong></h2>
            <div className="font-playpen text-base lg:text-lg">
              <p>
                Po zarejestrowaniu się uprzejmie prosimy o dokonanie płatności w ciągu <strong>5 dni roboczych</strong>.
              </p>
              <p>
                W przypadku braku wpłaty w tym terminie rejestracja zostanie anulowana.
              </p>
              <p className="mt-2">Płatności należy dokonać przelewem bankowym na poniższe dane:</p>

              <p className="mt-2">
                <strong>Numer konta:</strong><br />
                51 1240 1792 1111 0000 1973 9791
              </p>

              <p className="mt-2">
                <strong>Tytuł przelewu:</strong><br />
                Konferencja Ostatni Rozdział - Imię Nazwisko
              </p>
            </div>

            <img src="/images/separator-line.webp" alt="" className="my-4 max-w-xl w-full mx-auto" />
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-2 rounded-full font-playpen text-black border-4 border-black text-md md:text-lg font-medium hover:bg-black hover:text-white transition whitespace-nowrap">
              Zarejestruj się
            </a>
          </div>
        </section>

        <section id="speakers" className="scroll-mt-20 w-full px-6 py-10 lg:py-20 bg-center section-shadow bg-cover bg-no-repeat text-white" style={{ backgroundImage: "url('/images/dark-orange-paper.webp')" }}>
          <h1 className="font-gloria text-4xl sm:text-6xl lg:text-7xl text-black text-center mb-16">
            Mówcy
          </h1>

          <div className="max-w-7xl mx-auto space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <img src="/images/zbyszek-zarozny.webp" alt="Zbyszek Zarożny" className="w-full max-w-lg rounded-lg object-cover" />
              </div>
              <div className="font-playpen text-black text-base lg:text-lg text-left lg:text-justify break-words">
                <h3 className="font-semibold text-xl lg:text-2xl mb-4">
                  Zbyszek Zarożny
                </h3>
                <p>
                  Od wielu lat angażuje się w pracę z młodzieżą i liderami, pomagając im odkrywać swoją tożsamość, pasję i powołanie.
                  Inspiruje młodych ludzi do życia pełnego wiary, odwagi i miłości.
                  Lider Kościoła Zielonoświątkowego, Centrum Chrześcijańskie „OdNowa” w Wieluniu
                  oraz Dyrektor Duszpasterstwa Młodzieży Kościoła Zielonoświątkowego w Polsce.
                </p>
                <p className="mt-4">
                  Jest współtwórcą znanych wydarzeń chrześcijańskich, takich jak Konferencja Zdobywcy, Momentum i Start Camp.
                  Zbyszek Zarożny to człowiek z sercem dla młodych - pastor, który wierzy, że każdy może mieć wpływ
                  i być światłem tam, gdzie jest.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 font-playpen text-black text-base lg:text-lg text-left lg:text-justify break-words">
                <h3 className="font-semibold text-xl lg:text-2xl mb-4">
                  Marek Skrzypczak
                </h3>
                <p>
                  Pastor, który z pasją i autentycznością dzieli się Słowem Bożym,
                  pokazując, że wiara ma realny wpływ na codzienne życie.
                  W przeszłości służył jako lider młodzieżowy.
                </p>
                <p className="mt-4">
                  Obecnie jest pastorem Kościoła Zielonoświątkowego, Zboru „Emaus” w Rzeszowie,
                  gdzie prowadzi wspólnotę, inspirując do dojrzałej wiary, odwagi w podejmowaniu wyzwań
                  i odpowiedzialnego przywództwa.
                  Jego nauczanie jest biblijne, konkretne i oparte na doświadczeniu.
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <img src="/images/marek-skrzypczak.webp" alt="Marek Skrzypczak" className="w-full max-w-lg rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="lectures" className="scroll-mt-20 w-full px-6 py-10 lg:py-20 section-shadow bg-center bg-cover bg-no-repeat text-white" style={{ backgroundImage: "url('/images/dark-paper.webp')" }}>
          <h1 className="font-gloria text-4xl sm:text-6xl lg:text-7xl text-white text-center mb-6 md:mb-10">
            Wykłady
          </h1>

          <div className="md:max-w-9/10 xl:max-w-9/10 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              <div className="flex flex-col bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                <span className="font-playpen text-sm sm:text-md lg:text-lg opacity-80 text-center mb-2">PIĄTEK</span>

                <span className="font-playpen text-sm sm:text-md lg:text-lg mb-1">Wykład 1</span>
                <p className="font-playpen text-sm sm:text-md lg:text-lg mb-2">Zbyszek Zarożny</p>

                <h3 className="font-playpen text-lg font-semibold mb-3">
                  Moc - Początek Ostatniego Rozdziału
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-playpen font-semibold text-sm lg:text-base">Klucz</span>
                    <span className="font-playpen text-sm opacity-80">(Zachariasza 4,6)</span>
                  </div>
                  <p className="font-playpen italic text-sm lg:text-base">
                    „Nie siłą, nie mocą, lecz moim Duchem - mówi Pan.”
                  </p>
                </div>

                <ul className="font-playpen text-sm lg:text-base list-disc list-inside text-left mb-6 space-y-1">
                  <li>Duch Święty jako autor i siła Ostatniego Rozdziału.</li>
                  <li>Napełnienie to nie opcja, ale fundament.</li>
                  <li>Kościół bez mocy to tylko instytucja, Kościół z mocą - to świadectwo.</li>
                </ul>

                <div className="mt-auto flex items-center justify-center gap-2 text-sm">
                  <FiClock />
                  <span>40 min</span>
                </div>
              </div>

              <div className="flex flex-col bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                <span className="font-playpen text-sm sm:text-md lg:text-lg opacity-80 text-center mb-2">SOBOTA</span>

                <span className="font-playpen text-sm sm:text-md lg:text-lg mb-1">Wykład 2</span>
                <p className="font-playpen text-sm sm:text-md lg:text-lg mb-2">Zbyszek Zarożny</p>

                <h3 className="font-playpen text-lg font-semibold mb-3">
                  Radykalni - Życie, które świeci
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-playpen font-semibold text-sm lg:text-base">Klucz</span>
                    <span className="font-playpen text-sm opacity-80">(Mateusza 5,14)</span>
                  </div>
                  <p className="font-playpen italic text-sm lg:text-base">
                    „Wy jesteście światłością świata.”
                  </p>
                </div>

                <ul className="font-playpen text-sm lg:text-base list-disc text-left list-inside mb-6 space-y-1">
                  <li>Radykalność nie w emocjach, ale w codziennych decyzjach.</li>
                  <li>Jezus - Światłość świata (J 8,12) jako nasz wzór.</li>
                  <li>Chrześcijanin ma żyć tak, by nie dało się go pomylić z resztą świata.</li>
                </ul>

                <div className="mt-auto flex items-center justify-center gap-2 text-sm">
                  <FiClock />
                  <span>40 min</span>
                </div>
              </div>

              <div className="flex flex-col bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                <span className="font-playpen text-sm sm:text-md lg:text-lg opacity-80 text-center mb-2">SOBOTA</span>

                <span className="font-playpen text-sm sm:text-md lg:text-lg mb-1">Wykład 3</span>
                <p className="font-playpen text-sm sm:text-md lg:text-lg mb-2">Marek Skrzypczak</p>

                <h3 className="font-playpen text-lg font-semibold mb-3">
                  Czuwaj! - Gotowość na Zakończenie Historii
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-playpen font-semibold text-sm lg:text-base">Klucz</span>
                    <span className="font-playpen text-sm opacity-80">(Mateusza 25,13)</span>
                  </div>
                  <p className="font-playpen italic text-sm lg:text-base">
                    „Czuwajcie więc, bo nie znacie dnia ani godziny.”
                  </p>
                </div>

                <ul className="font-playpen text-sm lg:text-base list-disc text-left list-inside mb-6 space-y-1">
                  <li>Czasy ostateczne - jak je odczytywać w świetle Pisma, nie plotek.</li>
                  <li>„Twoje słowo jest lampą dla moich stóp.” (Ps 119,105).</li>
                  <li>Postawa czujności i nadziei zamiast strachu.</li>
                </ul>

                <div className="mt-auto flex items-center justify-center gap-2 text-sm">
                  <FiClock />
                  <span>40 min</span>
                </div>
              </div>

              <div className="flex flex-col bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                <span className="font-playpen text-sm sm:text-md lg:text-lg opacity-80 text-center mb-2">SOBOTA</span>

                <span className="font-playpen text-sm sm:text-md lg:text-lg mb-1">Wykład 4</span>
                <p className="font-playpen text-sm sm:text-md lg:text-lg mb-2">Zbyszek Zarożny</p>

                <h3 className="font-playpen text-lg font-semibold mb-3">
                  Misja - Światło w Ciemności
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-playpen font-semibold text-sm lg:text-base">Klucz</span>
                    <span className="font-playpen text-sm opacity-80">(Mateusza 5,14-16)</span>
                  </div>
                  <p className="font-playpen italic text-sm lg:text-base">
                    „Wy jesteście światłością świata, nie zapala się światła, by je schować.”
                  </p>
                </div>

                <ul className="font-playpen text-sm lg:text-base text-left list-disc list-inside mb-6 space-y-1">
                  <li>Ostatni rozdział to nie czas ucieczki, ale misji.</li>
                  <li>Naszym zadaniem jest świecić - w szkole, pracy, rodzinie, narodzie.</li>
                  <li>Światło Kościoła ma być widoczne aż do przyjścia Jezusa.</li>
                </ul>

                <div className="mt-auto flex items-center justify-center gap-2 text-sm">
                  <FiClock />
                  <span>40 min</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
}