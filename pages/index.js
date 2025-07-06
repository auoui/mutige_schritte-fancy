
import Link from 'next/link';

export default function Home() {
  return (
    <div className="startseite">
      <header className="menu">
        <nav>
          <Link href="/">Start</Link>
          <Link href="/heldenreise">Held*innenreise</Link>
          <Link href="/angebote">Angebote</Link>
          <Link href="/komplimente">Komplimente</Link>
          <Link href="/mehr-ueber-mich">Mehr über mich</Link>
        </nav>
      </header>

      <div className="ueber-mich">
        <h2>Über mich</h2>
        <p className="zitat">„Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte. Ich habe während meiner Reise das letzte Puzzleteil gefunden, welches mir noch gefehlt hatte, um alles miteinander zu verbinden. Die Heldenreise ist für mich, mein inneres Strahlen in Verbindung mit anderen zu bringen und die Erfahrung, dass Verbindung auch Vertrauen bedeuten kann. Selbsterfahrungsprozesse zu unterstützen bedeutet für mich, deutlich w...
      </div>

      <div className="angebote">
        <div className="spalte">
          <Link href="/heldenreise"><div className="angebot">Held*innenreise</div></Link>
          <Link href="/aktuelles"><div className="angebot">Aktuelles</div></Link>
          <Link href="/einzel-sessions"><div className="angebot">Einzel-Sessions Gestalttherapie i.A.</div></Link>
        </div>
        <div className="spalte">
          <Link href="/komplimente"><div className="angebot">Tagesseminare: Komplimente machen</div></Link>
          <Link href="/was-will-ich"><div className="angebot">Was will ich wirklich?</div></Link>
        </div>
      </div>

      <footer>
        <p>Kontakt & Anmeldung</p>
        <p>Fine Belger Platzhalter</p>
        <p>Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a></p>
      </footer>
    </div>
  );
}
