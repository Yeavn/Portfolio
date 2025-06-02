export default function Datenschutz() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1E1E1E] py-24 px-4">
      <div className="w-full max-w-2xl bg-[#353535] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#C1C1C1] mb-6 nav-logo">Datenschutzerklärung</h1>
        <div className="text-[#C1C1C1] space-y-4 text-base leading-relaxed">
          <p>
            <strong>1. Datenschutz auf einen Blick</strong><br />
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>
          <p>
            <strong>2. Datenerfassung auf dieser Website</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
          <p>
            <strong>3. Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <p>
            <strong>4. Ihre Rechte</strong><br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>
          <p>
            <strong>5. Kontakt</strong><br />
            Bei Fragen zum Datenschutz können Sie sich jederzeit an mich wenden:<br />
            Tim Stoepel<br />
            E-Mail: <a href="mailto:info@tim-stoepel.de" className="text-[#FD6F00] hover:underline">info@tim-stoepel.de</a>
          </p>
          <p className="text-xs text-[#878787]">
            Diese Datenschutzerklärung wurde nach bestem Wissen erstellt und gilt für diese Website.
          </p>
        </div>
      </div>
    </div>
  );
}
