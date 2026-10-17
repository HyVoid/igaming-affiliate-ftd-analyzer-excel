[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# iGaming-Affiliate- und Media-Buying-Excel-Vorlage: Cost per FTD (C/FTD) & Kohorten-Traffic-Analyzer
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/53808d1c-6d13-4502-a81d-ef846d596902" />
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/268198c3-9abc-4547-9c47-42f447f390e6" />

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346.svg)
![Category](https://img.shields.io/badge/Tool-iGaming%20UA%20%26%20Affiliate%20BI-2251FF.svg)

**Ein Performance-Analyzer für iGaming-Affiliates und Media Buying, ein Rechner für die Kosten pro Ersteinzahler (C/FTD / CPFTD) und eine Excel-Vorlage für frühe Kohortenentscheidungen. Entwickelt für User-Acquisition-Manager (UA) von Casinos und Sportwetten, Affiliate-Direktoren und Performance-Marketer, um D3/D4/D7-Spielerkohorten zu bewerten, Ad-Account-Sperren und Bonus-Missbrauchs-Betrug zu isolieren und die Budgetzuweisung mit `SCALE / KEEP / STOP / REVIEW` zu automatisieren—verfügbar als kostenloser browserbasierter Simulator (keine Registrierung erforderlich) und als herunterladbare Microsoft-Excel-Arbeitsmappe.**

> **Zugang zu den iGaming-Traffic- und C/FTD-Entscheidungstools**
>
> - 🌐 **[Starten Sie den kostenlosen webbasierten iGaming-C/FTD- und Traffic-Analyzer](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)** — Prüfen Sie frühe Lieferantenkohorten, testen Sie minimale FTD-Stichprobenschwellen und simulieren Sie Media-Buying-Budgetregeln direkt im Browser, ohne Software zu installieren oder ein Konto anzulegen.
> - 📥 **[Laden Sie die iGaming-Affiliate- und Media-Buying-Excel-Arbeitsmappe herunter (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** — Holen Sie sich die vollständige Tabellenvorlage für Offline-Budgetüberprüfungen alle zwei Wochen, Multi-GEO-Benchmark-Kalibrierung und historisches Day-30-ROI-Backtesting.
>
> *Keine Registrierung. Keine Installation. Kostenloser Browserzugriff. *

---

## Kernmetriken der iGaming-User-Acquisition und gelöste Traffic-Schwachstellen

Statt Traffic-Lieferanten nach roher Registrierungsmenge oder verrauschten frühen CPA-Ausschlägen zu beurteilen, verknüpft dieser regelbasierte Rahmen den frühen Fortschritt des Spieler-Funnels mit statistischen Stichproben-Schranken. So ordnet der Analyzer **Media-Buying- und Affiliate-Schwachstellen im iGaming** überprüfbaren **FTD- und Retention-Metriken** zu:

| iGaming-UA- und Affiliate-Schwachstelle | Regelbasierte Bewertungs- und Schrankenmechanik | Verfolgte KPIs für Casino & Sportwetten |
| :--- | :--- | :--- |
| **Unkontrollierte Cost per First-Time Depositor (C/FTD)** | Vergleicht die Akquisitionskosten des Lieferanten mit GEO- und plattformspezifischen Zielmatrizen über Tier-1- bis Tier-3-Märkte. | Cost per FTD (`C/FTD` / `CPFTD`), Abweichung vom Ziel-C/FTD (%), Cost per Registration (`CPR`) |
| **Ansehens-Registrierungsvolumen & schwache Funnel-Konversion** | Verfolgt die Spielerprogression nach der Erstregistrierung, um Traffic-Quellen zu isolieren, die nicht in wiederkehrende Einzahler konvertieren. | Netto-aktive Registrierungen, Reg-to-FTD-Konversionsrate (%), Quote wiederkehrender Einzahlungen, frühe Spieler-Retention |
| **Verfrühte Skalierung oder Beendigung bei kleinen Kohorten** | Erzwingt Mindestausgaben-Untergrenzen und FTD-Stichprobenschwellen an Tag 3, Tag 4 und Tag 7, bevor Budgetänderungen ausgelöst werden. | Mindestausgaben-Schranke ($300-Untergrenze), FTD-Stichprobenausreichendheit (`D3 >= 10`, `D4 >= 15`, `D7 >= 30`) |
| **Ad-Account-Sperren, Cloaking & Bonus-Missbrauchs-Betrug** | Trennt echte Lieferanten-Minderleistung von eingeschränkten Ad-Accounts, defekten Postbacks oder Basiseinzahlungs-Betrug. | Ad-Account-Gesundheitsstatus (`Restricted` / `Banned`), Betrugsrisiko-Markierungen, Warnungen bei Anomalie „keine wiederkehrenden Einzahlungen“ |
| **Subjektive Media-Buying-Budgetzuweisungen** | Übersetzt Multi-Gate-Kohortenmetriken in deterministische, erklärbare Budget-Weiterleitungsbefehle mit Audit-Trail. | Automatisierte `SCALE`-Flags (+30 % Budget), `KEEP`, `STOP` oder `REVIEW` + auslösende Regel-ID |
| **Unvalidierte frühe Abbruchschwellen** | Backtestet Tag-3–7-Entscheidungen gegen die ausgereifte Tag-30-Kohortenperformance, um zu prüfen, ob frühe Regeln profitierende High-Value-Spieler abschneiden. | Tag-30-Validierung ausgereifter Kohorten, Fehlalarmquote bei `STOP`, LTV/ROAS-Abgleich früh zu ausgereift |

---

## Schritt-für-Schritt-Anleitung: iGaming-Traffic-Lieferanten prüfen und Budgetentscheidungen automatisieren

Der Analyzer arbeitet mit einem wiederholbaren **zweiwöchentlichen iGaming-UA-Review-Zyklus**: Konfigurieren Sie Ihre GEO-/Kanal-Benchmarks einmal, fügen Sie Roh-Tracker-Exporte ein, prüfen Sie die regelgesteuerten Aktionsflags und backtesten Sie gegen ausgereifte Tag-30-Spieldaten.

### Schritt 1: GEO-Benchmarks, Stichproben-Schranken und C/FTD-Regeln konfigurieren
Öffnen Sie den dedizierten Tab `Configuration & Thresholds`, um die Stückökonomie Ihres Operators und statistische Schutzschranken festzulegen:

- **Mindestausgaben-Schutzuntergrenze:** Standardmäßig `300 Währungseinheiten` (verhindert, dass unterfinanzierte Testkampagnen verfrüht abgeschaltet werden).
- **Schranken für ausreichende Kohorten-FTD-Stichproben:** Erfordert mindestens `10 FTDs an Tag 3`, `15 FTDs an Tag 4` und `30 FTDs an Tag 7`, bevor Performanceregeln greifen.
- **Automatisierte Budget-Aktionstrigger:**
  - `SCALE`-Schwelle: Tatsächliches `C/FTD <= 85%` des anwendbaren GEO/Plattform-Ziels (löst eine empfohlene Budgeterhöhung von `+30%` aus).
  - `STOP`-Schwelle: Tatsächliches `C/FTD >= 125%` des anwendbaren Ziels (sofern die Stichprobenausreichendheit erfüllt ist).

*(Hinweis: Die Standardwerte sind illustrative Referenzpunkte. Kalibrieren Sie die Ziele anhand Ihrer tatsächlichen Casino-/Sportwetten-NGR-Margen, Ihrer Lizenzjurisdiktion und Ihrer Zahlungsabwicklungskosten.)*

### Schritt 2: S2S-Postback-, Affiliate- und Werbeplattform-Exporte importieren
Exportieren Sie Kohorten-Performance-Protokolle aus Ihrer Affiliate-Tracking-Software (z. B. Affilka, Income Access, Cellxpert, Scaleo), Ihrem MMP (AppsFlyer, Adjust) oder Werbenetzwerken (Meta, Google Ads, Telegram, programmatische DSPs) und fügen Sie sie in das Eingabeblatt ein:

- **Kampagnen- und Lieferanten-Metadaten:** Lieferanten-/Affiliate-ID, Ziel-GEO/-Markt, Traffic-Plattform, Startdatum und Report-Snapshot-Datum.
- **Funnel-Top- und Ausgabenmetriken:** Gesamte Werbeausgaben, Impressionen, Klicks und netto-aktive Spielerregistrierungen.
- **Spieler-Monetarisierungs- und Risikosignale:** Ersteinzahlungen (FTD-Anzahl), Anzahl wiederkehrender Einzahlungen, frühe Kohorten-Retention, Ad-Account-Gesundheitsstatus und manuelle Betrugsrisiko-Vermerke.

*(Halten Sie Attributionsfenster und Währungseinheiten über alle importierten Zeilen hinweg konsistent.)*

### Schritt 3: Kohorten-KPIs prüfen und `SCALE / KEEP / STOP / REVIEW`-Aktionen ausführen
Navigieren Sie zu den Ansichten `Decision Engine & KPI Dashboard`, um die automatisierte Bewertung jedes aktiven Lieferantenstapels einzusehen:

- **Statistischer Ausreichendheitscheck:** Prüfen Sie, ob ein hoher C/FTD ein echtes Versagen (`STOP`) ist oder einfach eine unterstichproben Kohorte, die an `KEEP / MONITOR` verwiesen wird.
- **Operational- und Betrugsschranke:** Prüfen Sie, ob Kampagnen mit verdächtig billigen FTDs, aber null wiederkehrenden Einzahlungen—oder eingeschränkte Ad-Accounts—abgefangen und an `REVIEW` verwiesen wurden.
- **Erklärbare Aktionsprüfung:** Lesen Sie die genaue Auslöserregel hinter jeder Empfehlung, bevor Sie Media-Buying-Limits oder Affiliate-CPA-Vereinbarungen anpassen.

### Schritt 4: Gegen ausgereifte Tag-30-Ergebnisse backtesten und nach Excel exportieren
Führen Sie diesen Workflow während aktiver Kampagnenlaufzeiten zweimal pro Woche aus. Sobald historische Spielerkohorten die **Tag-30-Reife** erreichen, protokollieren Sie ihre realisierten Ergebnisse in der historischen Validierungsansicht, um zu prüfen, ob Ihre Tag-3- und Tag-7-C/FTD-Schwellen die langfristige Spielerqualität korrekt vorhergesagt haben.

> 🎰 **Bereit, Ihre zweiwöchentlichen iGaming-Traffic- und Affiliate-Reviews zu standardisieren?** 
> Nach dem Testen der Entscheidungsschranken im **[kostenlosen browserbasierten iGaming-C/FTD-Analyzer](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)** laden Sie die **[wiederverwendbare iGaming-Lieferantenbewertungs-Excel-Arbeitsmappe (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** herunter, um Offline-Audit-Protokolle zu führen, proprietäre Multi-GEO-Benchmark-Matrizen zu speichern und wiederkehrende Kohorten-Backtests mit Ihrem UA-Team durchzuführen.

---

## Warum ich diesen regelbasierten iGaming-Traffic-Bewertungsrahmen gebaut habe

In der schnelllebigen iGaming-User-Acquisition erzeugt frühe Kohortenberichterstattung eine teure operative Falle: **Metriken wirken mathematisch präzise, lange bevor sie statistisch zuverlässig genug sind, um Skalierung oder Budgetkürzung zu rechtfertigen.**

Betrachten Sie drei häufige Fehlermodi während einer frühen Kampagnenprüfung:
1. **Die Illusion der billigen Registrierung:** Eine Traffic-Quelle liefert massive Registrierungsvolumina zu absoluten Bottom-CPI/CPR, konvertiert aber fast null Ersteinzahler (FTDs).
2. **Die langsam brennende VIP-Kohorte:** Ein PPC- oder SEO-Lieferant wirkt an Tag 3 beim C/FTD teuer, zieht aber hochintentierte Sportwetten- oder Slots-Spieler an, die bis Tag 14 stark nachzahlen.
3. **Plattform- und Tracking-Störungen:** Eine historisch starke Media-Buying-Agentur zeigt einen plötzlichen C/FTD-Anstieg—nicht weil die Traffic-Qualität nachgelassen hat, sondern weil ein Ad-Account schattig beschränkt wurde oder ein S2S-Postback-Pixel ausgefallen ist.

### Die „Tag-3-Kohortenfalle“: Lieferant A vs. Lieferant B
Stellen Sie sich eine Budgetüberprüfung an Tag 3 vor, bei der das **Ziel für die Cost per FTD (C/FTD) bei $40 liegt**:
- **Lieferant A** hat **$300** ausgegeben und **10 FTDs** generiert $\rightarrow$ `C/FTD = $30` (erfüllt die Tag-3-Stichprobenschranke von 10 FTDs).
- **Lieferant B** hat **$100** ausgegeben und **2 FTDs** generiert $\rightarrow$ `C/FTD = $50` (25 % schlechter als der $40-Benchmark).

In einer naiven Tabelle beendet ein Media Buyer Lieferant B sofort wegen Überschreitung des Ziel-CPA und skaliert Lieferant A. Lieferant B hat jedoch nur **2 FTDs** generiert—weit unter der statistischen Stichprobenuntergrenze von 10 FTDs und der $300-Ausgabenschutzschwelle. Lieferant B an Tag 3 zu kappen ist eine **verfrühte Beendigung aufgrund von Kleinstichproben-Rauschen**. Gleichzeitig muss der Analyst vor einer +30%-Budgeterhöhung für Lieferant A noch verifizieren, dass diese 10 FTDs keine Baseline-Bonusmissbraucher ohne wiederkehrende Einzahlungen sind.

Ich habe diesen Analyzer gebaut, um genau diese Diagnoselogik in einen **wiederholbaren, regelbasierten Entscheidungsrahmen** zu überführen—und Bauchgefühl-Debatten in den zweiwöchentlichen Budgetmeetings zu eliminieren.

---

## Ad-hoc-Affiliate-Tabellen vs. regelbasierter iGaming-Entscheidungsmotor

| iGaming-UA-Bewertungsdimension | Traditionelle Ad-hoc-Tracker & Bauchgefühl-Reviews | Regelbasierter iGaming-Lieferantenanalyzer (dieses Tool) |
| :--- | :--- | :--- |
| **Frühe Skalierungsentscheidungen (Tag 3–7)** | Media Buyer skalieren Budgets aggressiv auf Basis einiger weniger billiger früher FTDs und riskieren hohe Exposition gegenüber Traffic mit niedrigem LTV. | Erzwingt **D3- (10), D4- (15) und D7- (30) FTD-Stichprobenschranken** plus Wiederkehreinzahlungsprüfungen, bevor ein `SCALE`-Flag (+30 %) ausgegeben wird. |
| **Kappung von Minderleistungslieferanten** | Vielversprechende Affiliates oder Anzeigensets werden verfrüht pausiert wegen hoher C/FTD-Varianz bei winzigen Ausgabenvolumina. | Wendet eine **$300-Mindestausgaben-Schutzuntergrenze** und einen Stichprobenausreichendheitscheck an, um statistisches Rauschen von echtem Versagen (`STOP`) zu trennen. |
| **Erkennung von Baseline-Betrug & Bonusmissbrauch** | Billige Registrierungen und minimale Basiseinzahlungen verschleiern automatisierte Bot-Ringe oder Incentive-Traffic ohne Retention. | Gegenprüft C/FTD-Effizienz mit **Wiederkehreinzahlungsprogression, früher Retention und Betrugsvermerken**, um `REVIEW` auszulösen. |
| **Ad-Account-Sperren & Postback-Ausfälle** | Plötzliche Einbrüche der FTD-Konversion durch Meta/Google-Kontobeschränkungen oder S2S-Tracking-Fehler werden der Lieferantenqualität angelastet. | Dedizierte **Account-Gesundheits- und operationale Risikoschranken** isolieren eingeschränkte Konten zur manuellen Behebung statt blinder Kappung. |
| **Multi-GEO- & Multikanal-Benchmarking** | Analysten wenden inkonsistente mentale C/FTD-Ziele über Tier-1- (UK/EU), LatAm- (Brasilien/Mexiko) und asiatische Märkte an. | Zentralisiert eine **konfigurierbare GEO × Plattform-Benchmark-Matrix**, sodass jeder Lieferant an standardisierte regionale Ziele gemessen wird. |
| **Schwellenkalibrierung & Tag-30-Backtesting** | Frühe Tag-3/Tag-7-Abbruchregeln werden nie gegen die ausgereifte 30-Tage-Kohortenrentabilität auditiert. | Verknüpft frühe Entscheidungsstapel mit **ausgereiften Tag-30-Ergebnisdatensätzen**, um Fehlalarme zu auditieren und C/FTD-Toleranzbänder zu verfeinern. |

---

## Für wen dieser iGaming-Analyzer gebaut ist: Rollen & Workflows

Dieses Dual-Format-Bewertungstoolkit (Browser + Excel) ist für Performance-Marketing- und kommerzielle Teams in Online-Casinos, Sportwetten und iGaming-Agenturen konzipiert:

- **iGaming-User-Acquisition- (UA) und Performance-Marketing-Manager:** Standardisieren Sie Ihre zweiwöchentlichen Budgetzuweisungsmeetings. Nutzen Sie den **Cost-per-FTD- (C/FTD) Entscheidungsrechner**, um `SCALE`-, `KEEP`- und `STOP`-Aktionen mit transparenten, regelbasierten Nachweisen über Meta, Google, TikTok und programmatische DSPs zu begründen.
- **Casino- und Sportwetten-Affiliate-Manager:** Auditieren Sie externe Affiliate-Partner und Sub-Affiliate-Netzwerke objektiv. Nutzen Sie den **Frühkohorten-Qualitätsanalyzer**, um Baseline-CPA-Missbrauch zu erkennen (Affiliates, die Mindesteinzahlungs-FTDs ohne wiederkehrende Einzahlungen liefern), bevor Sie deckellose Provisionen auszahlen.
- **Media-Buying-Agenturen & Arbitrage-Teams:** Schützen Sie Ihre Werbebudgets über volatile Traffic-Kanäle. Nutzen Sie die **Mindestausgaben- und Stichprobenschranken-Arbeitsmappe**, um zu verhindern, dass Junior-Media-Buyer vielversprechende Kampagnen in der Tag-3-Lernphase kappen oder eingeschränkte Ad-Accounts skalieren.
- **iGaming-BI-Analysten, Growth-Leads & CRM-Teams:** Überbrücken Sie die Lücke zwischen Roh-Attributionsexporten und Executive-Reporting. Nutzen Sie das **Tag-30-historische Backtesting-Blatt**, um zu kalibrieren, ob Ihre frühen D3/D7-C/FTD-Schwellen tatsächlich mit dem ausgereiften 30-Tage-Net Gaming Revenue (NGR) korrelieren.
- **CMOs, Growth-Leads & Budgetverantwortliche:** Etablieren Sie zentralisierte Governance über externe Akquisitionsausgaben, ohne monatelang auf kundenspezifische Data-Warehouse-BI-Pipelines zu warten.

---

## Branchen-Anwendungsfälle und Long-Tail-iGaming-Akquisitionsszenarien

Ob Sie ein neues Krypto-Casino starten, ein lokalisiertes LatAm-Sportwettenangebot skalieren oder 50+ CPA/Hybrid-Affiliates verwalten—dieser Rahmen passt sich spezifischen iGaming-Traffic-Szenarien an:

### 1. Qualitätsprüfung von Affiliate-CPA- und Hybrid-Deals (Verhinderung von Baseline-Betrug)
In CPA- und Hybrid-Affiliate-Strukturen spielen unseriöse Traffic-Quellen oft die Basiseinzahlungsschwelle aus—sie generieren billige FTDs, die nie eine zweite Wette platzieren. Durch die Bewertung von **Wiederkehreinzahlungsquoten und früher Retention neben dem C/FTD** können Affiliate-Manager verdächtige Traffic-Stapel an `REVIEW` verweisen, bevor Limit-Erhöhungen freigegeben werden.

### 2. Hochvolatiles Social- und In-App-Media-Buying (Meta, Google, Telegram & Pop/Push)
Paid-Media-Kampagnen in eingeschränkten iGaming-Vertikalen sehen sich häufigen Ad-Account-Sperren, Kreativ-Ablehnungen und Attributions-Tracking-Ausfällen gegenüber. Die **Account-Health-Schranke** des Analyzers stellt sicher, dass, wenn ein top-performender Lieferant eine plattformseitige Einschränkung erleidet, die Kampagne für operativen Schutz markiert wird, statt fälschlich als schlechte Traffic-Qualität eingestuft zu werden.

### 3. Multi-GEO-Kalibrierung für Sportwetten- und Casino-Launches (Tier-1 vs. Schwellenmärkte)
Ein C/FTD von $35 kann in regulierten europäischen oder nordamerikanischen Jurisdiktionen hochprofitabel sein, in hochvolumigen, ARPU-schwachen Schwellenmärkten (wie Brasilien, Indien oder LatAm) jedoch katastrophal. Nutzen Sie die **Markt × Plattform-Benchmark-Matrix**, um die Lieferantenbewertung über verschiedene Währungen und regionale Spielerökonomien zu normalisieren.

---

### Operationaler Umfang & analytischer Haftungsausschluss
*Dieses Toolkit ist ein regelbasiertes Entscheidungsunterstützungsmodell für frühe Kohorten—kein Echtzeit-S2S-Attributionstracker, keine Anti-Betrug-Firewall, keine spielerbezogene prädiktive LTV-Engine und kein gesetzliches Finanzledger. Ein günstiges C/FTD an Tag 3 oder Tag 7 garantiert keinen Tag-30-Net Gaming Revenue (NGR) oder Nettogewinnlichkeit. Stellen Sie stets sicher, dass importierte Daten konsistente Attributionsfenster und Währungseinheiten verwenden, und kombinieren Sie die Tabellenergebnisse mit erfahrener Risiko- und Compliance-Prüfung.*

---

## Über den Ersteller

Ich baue leichte, überprüfbare Entscheidungsunterstützungstools für risikoreiche operative Workflows, in denen zu viele bewegliche Variablen in voneinander getrennten Tabellen verloren gehen. Die Leitfrage ist einfach: **Welche genauen Nachweise und statistischen Schutzschranken müssen an einem Ort zusammenkommen, um die nächste Budgetzusage confident zu treffen?**

## Technische Details

<details>
<summary>Für technische Reviewer, Excel-Praktiker und Mitwirkende</summary>

<details>
<summary><strong>Arbeitsmappen-Architektur</strong></summary>

Der Analyzer verwendet fünf verbundene Arbeitsblätter. Jedes Arbeitsblatt hat eine definierte Verantwortung und trennt Konfiguration, Rohdaten, Metrikberechnung, Entscheidungsregeln und Management-Review.

| Arbeitsblatt | Verantwortung | Primäre Ausgabe |
|---|---|---|
| `01_Config_Rules` | Zentrale Konfiguration für Währung, Benchmarks, Stichprobenschwellen, Risikoregeln und Aktionsmultiplikatoren | Anpassbare Betriebsparameter |
| `02_Raw_Input` | Speichert Akquisitions-, Konversions-, Retentions-, Ausgaben- und Risikodaten auf Lieferantenebene | Validierte Quelldatensätze |
| `03_KPI_Engine` | Berechnet verstrichene Tage, Bewertungsmeilensteine, Akquisitionskosten, Funnel-Raten, Retention und CP Score | Vergleichbare Lieferanten-Performancemetriken |
| `04_Decision_Engine` | Wendet nacheinander Stichprobenausreichendheit, Risikoschranken und Perfomanceschwellen an | SCALE, KEEP, STOP oder REVIEW |
| `05_Exec_Dashboard` | Präsentiert den Executive-Snapshot, die Aktionsliste und das historische Tag-30-Review | Budget-Review-Nachweise und Entscheidungs-Backtesting |

Der vorgesehene Datenfluss ist:

```text
01_Config_Rules
       │
       ├──────────────────────────────┐
       ▼                              ▼
02_Raw_Input ──► 03_KPI_Engine ──► 04_Decision_Engine
                                          │
                                          ▼
                                  05_Exec_Dashboard
                                          │
                                          ▼
                                  Day 30 Backtesting
                                          │
                                          ▼
                              Recalibrate operating rules
```

Konfigurationswerte speisen die Berechnungen und Entscheidungsregeln. Rohdatensätze liefern die Beobachtungen. Die KPI-Engine transformiert diese Beobachtungen in vergleichbare Metriken, und die Decision Engine wendet die konfigurierten Regeln an. Das Dashboard präsentiert die Ergebnisse zur Überprüfung.

Diese Trennung ist beabsichtigt: Das Ändern eines Benchmarks sollte keinen Neuaufbau der Berechnungslogik der Arbeitsmappe erfordern, und eine günstige Performancemetrik sollte keine blockierende Risikobedingung umgehen.

<details>
<summary><strong>Eingabe-Ausgabe-Abhängigkeit</strong></summary>

| Eingabe oder Bedingung | Betroffene Berechnung | Entscheidungsimplikation |
|---|---|---|
| Ausgaben und FTD-Anzahl | Cost per FTD | Vergleich der Akquisitionskosten |
| NAR-Anzahl | Cost per NAR | Kosten für das konfigurierte NAR-Ereignis |
| Registrierungs-, FTD- und STD-Anzahlen | Funnel-Konversionsraten | Identifiziert Konversionslecks |
| Tag-2-, Tag-3- und Tag-7-Retentionszahlen | Retentionsraten | Ergänzt frühe Qualitätshinweise |
| Startdatum und Datumsdatum | Aktive Tage und Bewertungsmeilenstein | Bestimmt, ob die Kohorte einen Checkpoint erreicht hat |
| Account- und Betrugsrisikostatus | Risikoschranke | Kann performanzbasierte Empfehlungen blockieren oder qualifizieren |
| Markt und Plattform | Ziel-Benchmark-Lookup | Legt das anwendbare Vergleichsziel fest |
| Ausgereifter Tag-30-Umsatz | Historische Ergebnisprüfung | Unterstützt die rückwirkende Regelbewertung |

</details>

</details>

<details>
<summary><strong>Die Geschäftslogik hinter dem Decision Engine</strong></summary>

Das System betrachtet niedrige Akquisitionskosten nicht als ausreichenden Beweis für Lieferantenqualität. Es trennt vier Fragen, die der Reihe nach beantwortet werden sollten:

1. **Gibt es genug Beweise?** Eine kleine Stichprobe kann einen Lieferanten ungewöhnlich effizient oder ineffizient erscheinen lassen. Der Analyzer prüft den relevanten Bewertungsmeilenstein und die Mindeststichprobenanforderung, bevor das Performance-Ergebnis als entscheidungsreif behandelt wird.
2. **Gibt es Bedingungen, die die Performance außer Kraft setzen?** Kontobeschränkungen, Betrugsindikatoren und andere konfigurierte Risikobedingungen können eine performanzbasierte Aktion blockieren oder qualifizieren.
3. **Wie verhält sich die beobachteten Kosten zum passenden Benchmark?** Der Motor vergleicht die Cost per FTD mit dem Ziel für den relevanten Markt und die relevante Plattform, statt sich auf eine universelle Akquisitionskostenschwelle zu stützen.
4. **Welche Aktion ist jetzt gerechtfertigt?** Der Motor gibt eine strukturierte Empfehlung und eine Begründung zurück, was die Überprüfung der Entscheidung und die Unterscheidung zwischen operativer Einschränkung und Performanceproblem erleichtert.

Die Entscheidungslabels bedeuten:

| Aktion | Interpretation |
|---|---|
| `SCALE` | Die verfügbaren Beweise erfüllen die konfigurierte Performanceregel, und keine blockierende Risikobedingung verhindert die Skalierung |
| `KEEP` | Weitere Überwachung ohne performanzgetriebene Budgeterhöhung oder Stopp-Empfehlung |
| `STOP` | Beenden oder Blockieren weiterer Zuteilung gemäß den konfigurierten Performance- oder Risikoregeln |
| `REVIEW` | Eine Risikobedingung lösen oder eine manuelle Prüfung einholen, bevor das Performance-Ergebnis als umsetzbar behandelt wird |

Dies sind Empfehlungen, keine automatisierten Zahlungs-, Konto- oder Kampagnenaktionen. Letzte Entscheidungen bleiben dem operativen Kontext und der menschlichen Prüfung unterworfen.

</details>

<details>
<summary><strong>Drei Fallen, die selbst erfahrene Akquisitionsteams erwischen</strong></summary>

<details>
<summary><strong>Falle 1: Niedrige Cost per FTD als Qualitätsbeweis behandeln</strong></summary>

**Die Entscheidung:** Das Budget eines Lieferanten erhöhen, weil seine frühen Cost per FTD unter dem Ziel liegen.

**Der versteckte Mangel:** Der Lieferant hat möglicherweise sehr wenige FTDs, schwaches Wiederkehreinzahlungsverhalten, schlechte Retention oder ein Account-Level-Risikoflag.

| Falscher Ansatz | Korrigierter Ansatz |
|---|---|
| Lieferanten allein nach Cost per FTD ranken | Stichprobenausreichendheit und Risikostatus prüfen, bevor Kosten verglichen werden |
| Den billigsten Lieferanten sofort skalieren | Nur skalieren, wenn die konfigurierte Performanceregel erfüllt ist und keine blockierende Risikoschranke greift |

Niedrige Cost per FTD messen die Akquisitionseffizienz für ein einzelnes Ereignis. Sie belegen keinen nachgelagerten Wert und schließen Betrug nicht aus. Der korrigierte Prozess bewahrt das Kostensignal, verlangt aber ausreichend Beweise und das Bestehen der anwendbaren Risikoprüfungen.

**Entscheidungsimplikation:** Eine billige, aber unreife oder riskante Kohorte sollte unter Beobachtung oder Prüfung bleiben, statt automatisch eine Budgeterhöhung zu erhalten.

<details>
<summary><strong>Formel- und Regelreferenz</strong></summary>

Konzeptionell:

```text
Cost per FTD = Spend / FTD Count
```

Eine performanzbasierte Skalierungsentscheidung wird erst nach den Prüfungen auf Stichprobenausreichendheit und Risiko bewertet. Im konfigurierten Rahmen lautet die Skalierungsbedingung:

```text
Cost per FTD <= Target Cost per FTD × Scale Ratio
```

Die Quellkonfiguration verwendet eine Beispiel-Skalierungsquote von `85%`. Dies ist eine konfigurierbare Regel, kein universeller Industriestandard.

</details>

</details>

<details>
<summary><strong>Falle 2: Einen Lieferanten stoppen, bevor die Stichprobe ausreichend ist</strong></summary>

**Die Entscheidung:** Einen Lieferanten stoppen, weil seine anfänglichen Akquisitionskosten das Ziel überschreiten.

**Der versteckte Mangel:** Die Kohorte hat den erforderlichen Bewertungsmeilenstein möglicherweise noch nicht erreicht, und eine kleine Anzahl von Konversionen kann instabile Kostenschätzungen erzeugen.

| Falscher Ansatz | Korrigierter Ansatz |
|---|---|
| Dasselbe Performanceurteil in jedem Alter anwenden | Gegen den aktuellen Meilenstein der Kohorte bewerten |
| Fehlende Beweise als bestätigte Minderleistung behandeln | `KEEP` zurückgeben, wenn die Stichprobe unzureichend ist, sofern keine höher priorisierte Risikoregel eine andere Aktion erfordert |

Der Analyzer verwendet konfigurierbare minimale FTD-Stichprobengrößen für Tag 3, Tag 4 und Tag 7. Das mitgelieferte Beispiel verwendet Mindestwerte von 10, 15 bzw. 30 FTDs. Eine Kohorte, die die relevante Anforderung nicht erfüllt hat, gilt nicht automatisch als Fehlschlag.

Dies ist keine Erlaubnis, eine echte Kontobeschränkung oder bestätigten Betrug zu ignorieren. Risikoregeln werden separat bewertet und können Vorrang vor der stichprobenbasierten Performanceentscheidung haben.

**Entscheidungsimplikation:** Bewahren Sie die Unterscheidung zwischen „noch nicht genug Beweise“ und „genug Beweise zum Stoppen“. Die beiden Bedingungen sollten nicht zur selben Schlussfolgerung führen.

<details>
<summary><strong>Referenz der Stichprobenausreichendheitsregel</strong></summary>

Die vorgesehenen Checkpoint-Regeln sind:

| Bewertungs-Checkpoint | Beispielhafte minimale FTD-Anzahl |
|---|---:|
| Tag 3 | 10 |
| Tag 4 | 15 |
| Tag 7 | 30 |
| Tag 30 | Review ausgereifter Kohorte |

Die konfigurierten Werte sollten vor dem operativen Einsatz gegen die Parameterzellen der tatsächlichen Arbeitsmappe validiert werden. Die Tag-30-Reife garantiert nicht von sich aus, dass alle Umsatz- oder Attributionsfelder vollständig sind.

</details>

</details>

<details>
<summary><strong>Falle 3: Operationales Risiko mit schlechter Akquisitionsperformance verwechseln</strong></summary>

**Die Entscheidung:** Einen Lieferanten reduzieren oder stoppen, weil das Dashboard schwache oder unvollständige Performance zeigt.

**Der versteckte Mangel:** Das Ergebnis kann durch einen gesperrten oder eingeschränkten Account, verdächtigen Betrug, Tracking-Ausfälle, verzögerte Attribution oder andere operationale Bedingungen beeinflusst sein. Eine Performancemetrik allein kann die Ursache nicht identifizieren.

| Falscher Ansatz | Korrigierter Ansatz |
|---|---|
| Jedes ungünstige Ergebnis als Lieferantenminderleistung interpretieren | Status der Risikoschranke und Auslösegrund prüfen |
| Weiter skalieren, weil die Kostenmetrik günstig wirkt | Blockierende Risikobedingungen respektieren, selbst wenn die Kostenmetrik attraktiv ist |
| Eine Warnung als bestätigten Befund behandeln | Markierte, verdächtige und bestätigte Bedingungen unterscheiden |

Die Risikoschranke trennt blockierende Bedingungen von Situationen, die menschliche Untersuchung erfordern. Ein gesperrter Account oder bestätigter Betrug kann weitere Zuteilung blockieren. Ein markierter Account oder verdächtiger Betrug kann eine Prüfung erfordern. Eine konfigurierte Niedrigausgaben-Schutzregel kann einen verfrühten performanzbasierten Stopp verhindern.

**Entscheidungsimplikation:** Die nächste Aktion sollte den tatsächlichen Fehlermodus adressieren—Kontozugang, Tracking-Integrität, Traffic-Qualität, Stichprobenreife oder Akquisitionsökonomie—statt Budgetänderungen als Diagnoseersatz zu verwenden.

<details>
<summary><strong>Interpretation der Risikoschranke</strong></summary>

Der Quellrahmen umfasst folgende Bedingungen:

| Bedingung | Vorgesehene Handhabung |
|---|---|
| Account-Status ist `BANNED` | Blockierende Bedingung; `STOP` empfehlen |
| Account-Status ist `FLAGGED` | Warnung, die sorgfältige Interpretation erfordert |
| Betrugsrisiko ist `CONFIRMED` | Blockierende Bedingung; `STOP` empfehlen |
| Betrugsrisiko ist `SUSPECTED` | Manuelle Prüfung |
| FTD-Stichprobe ausreichend, aber Wiederkehreinzahlungsquote unter dem konfigurierten Minimum | Prüfbedingung |
| Ausgaben unter der konfigurierten Mindestausgabenschwelle | Schutz vor verfrühter performanzbasierter Aktion |

Die genaue Priorität, zulässige Statuswerte und das Formelverhalten sollten vor der Nutzung gegen die bereitgestellte Arbeitsmappe geprüft werden. Die Tabelle beschreibt den vorgesehenen Entscheidungsrahmen, keine Garantie, dass jeder externe Plattformstatus automatisch erkannt werden kann.

</details>

</details>

</details>

<details>
<summary><strong>Beispielszenario</strong></summary>

Betrachten Sie einen hypothetischen Lieferanten, der über eine bestimmte Markt-Plattform-Kombination akquiriert wurde. Die folgenden Zahlen illustrieren, wie der Rahmen zu interpretieren ist; es sind keine gemeldeten Ergebnisse aus einer Live-Kampagne.

| Metrik | Beispielwert |
|---|---:|
| Ausgaben | 3,600 |
| FTD-Anzahl | 40 |
| Ziel-Cost-per-FTD | 100 |
| Anzahl wiederkehrender Einzahlungen | 12 |
| Tag-3-Retentionszahl | 20 |
| Account-Status | Aktiv |
| Betrugsrisiko | Keine gemeldet |

Die Cost per FTD ist:

```text
3,600 / 40 = 90
```

Wenn die konfigurierte Skalierungsquote 85 % beträgt, ist die Skalierungsschwelle:

```text
100 × 85% = 85
```

Die beobachteten Kosten von 90 liegen unter dem Ziel von 100, aber **nicht** auf oder unter der Skalierungsschwelle von 85. Unter diesem Beispiel löst die Kostenmetrik allein daher kein `SCALE` aus.

Die Wiederkehreinzahlungsquote ist:

```text
12 / 40 = 30%
```

Die Tag-3-Retentionsrate ist:

```text
20 / 40 = 50%
```

Diese Zahlen liefern Kontext zum nachgelagerten Verhalten, sollten aber nicht als universell gute oder schlechte Quoten interpretiert werden. Ihre Bedeutung hängt vom relevanten Markt, der Plattform, dem Produkt, dem Attributionsfenster und dem konfigurierten Benchmark ab.

Der Motor prüft als Nächstes, ob die Kohorte den relevanten Checkpoint erreicht hat, ob die Stichprobe ausreichend ist und ob eine Risikoschranke die Entscheidung blockiert oder umleitet. Ist die Stichprobe ausreichend und keine Prüfbedingung anwendbar, liegt das Kostenergebnis zwischen den Beispiel-Skalierungs- und Stopp-Schwellen, sodass die performanzbasierte Aktion `KEEP` lautet.

Die operationale Schlussfolgerung lautet nicht „dieser Lieferant ist gut“ oder „dieser Lieferant ist schlecht“. Sie lautet: **Die beobachteten Kosten sind besser als das Ziel, erfüllen aber nicht die konfigurierte Skalierungsbedingung; Überwachung fortsetzen, sofern keine separate Risikobedingung die Aktion ändert.**

</details>

<details>
<summary><strong>Formelreferenz</strong></summary>

Die folgenden Formeln beschreiben die vorgesehene Berechnungslogik. Es sind Referenzmuster, kein Ersatz für die Prüfung der exakten Formeln einer bestimmten Arbeitsmappen-Version. Zellbezüge, Tabellennamen, strukturierte Bezüge und Überlaufbereiche können je nach Implementierung abweichen.

<details>
<summary><strong>1. Rohinput: Datensatzschlüssel und Datenqualitätsprüfungen</strong></summary>

**Zweck:** Quelldatensätze identifizieren und fehlende oder inkonsistente Eingaben sichtbar machen, bevor berechnete Metriken interpretiert werden.

Typische Logik:

```excel
=IF([@Vendor_Name]="","",[@Vendor_Name]&"|"&[@Market]&"|"&[@Platform]&"|"&TEXT([@Launch_Date],"yyyymmdd"))
```

Dies ist nur ein illustratives Verbundschlüssel-Muster. Die Produktionsarbeitsmappe kann eine andere Schlüsseldefinition verwenden. Teilen mehrere Datensätze denselben Lieferanten, Markt, dieselbe Plattform und dasselbe Startdatum, muss der Schlüssel einen zusätzlichen Stapel- oder Quellenbezeichner enthalten, um eindeutig zu bleiben.

Eine Datenqualitätssonde sollte fehlende Pflichtfelder, ungültige Daten, negative Beträge oder Anzahlen und inkonsistente Funnel-Summen gesondert identifizieren. Ein generierter Schlüssel ist kein Beweis dafür, dass ein Datensatz vollständig oder eindeutig ist.

</details>

<details>
<summary><strong>2. KPI-Engine: verstrichene Tage, Akquisitionskosten und Konversionsraten</strong></summary>

**Zweck:** Kohortenalter standardisieren und vergleichbare Akquisitions- und Funnel-Metriken berechnen.

Verstrichene Tage:

```excel
=Data_Date-Launch_Date+1
```

Die `+1`-Konvention behandelt das Startdatum als Tag 1. Dasselbe Konvention muss konsistent verwendet werden, wenn Tag-3-, Tag-4-, Tag-7- und Tag-30-Meilensteine zugewiesen werden.

Cost per FTD:

```excel
=IF(FTD_Count>0,Spend_Amount/FTD_Count,0)
```

Cost per NAR:

```excel
=IF(NAR_Count>0,Spend_Amount/NAR_Count,0)
```

Registrierungs-zu-FTD-Rate:

```excel
=IF(NAR_Count>0,FTD_Count/NAR_Count,0)
```

FTD-zu-STD-Rate:

```excel
=IF(FTD_Count>0,STD_Count/FTD_Count,0)
```

Diese Muster verwenden Null, wenn der Nenner null ist, um Divisionsfehler zu vermeiden. In Berichten darf ein Nulleergebnis jedoch nicht mit gemessenen Nulkosten oder einer bestätigten Nullkonversionsrate verwechselt werden. Zeigen Sie, wo möglich, einen begleitenden Stichproben- oder Nennerstatus an.

</details>

<details>
<summary><strong>3. KPI-Engine: Retention und CP Score</strong></summary>

**Zweck:** Nachgelagerte Qualitätsindikatoren zu den Akquisitionskostenvergleichen hinzufügen.

Ein Retentionsraten-Muster ist:

```excel
=IF(FTD_Count>0,Retained_Count/FTD_Count,0)
```

Der Quellrahmen definiert den CP Score als gewichteten Composite-Score über drei Komponenten:

| Komponente | Gewicht |
|---|---:|
| Kosteneffizienz | 50% |
| Wiederkehreinzahlungs-Gesundheit | 25% |
| Tag-3-Retention | 25% |

Der Score wird gegen konfigurierte Ziele und die minimale Wiederkehreinzahlungsschwelle normalisiert und dann auf den Bereich 0–100 begrenzt. So können mehrere Indikatoren gemeinsam betrachtet werden, ohne dass der Score eine prädiktive Wahrscheinlichkeit beansprucht.

Der Score sollte neben den Rohmetriken, der Stichprobengröße, dem Meilenstein und dem Risikoschranken-Ergebnis interpretiert werden. Composite-Scores können wesentlich unterschiedliche zugrunde liegende Muster verbergen, wenn sie allein angezeigt werden.

</details>

<details>
<summary><strong>4. Decision Engine: Stichprobenausreichendheit, Risikoschranken und Aktionsschwellen</strong></summary>

**Zweck:** Die vorgesehene Entscheidungssequenz erzwingen: Stichprobenausreichendheit, Risikoprüfungen, dann Benchmark-Vergleich.

Die Beispiel-Perfomanceschwellen sind:

```text
Scale threshold = Target Cost per FTD × 0.85
Stop threshold  = Target Cost per FTD × 1.25
```

Der bereitgestellte Rahmen verwendet diese Beispielquoten als konfigurierbare Parameter. Die Skalierungsregel ist erfüllt, wenn die Cost per FTD auf oder unter der Skalierungsschwelle liegt; die Stoppregel ist erfüllt, wenn die Cost per FTD auf oder über der Stopp-Schwelle liegt, vorbehaltlich der anwendbaren Schutz- und Risikoregeln.

Die übergeordnete Entscheidungsreihenfolge ist:

```text
1. Evaluate blocking risk conditions.
2. Evaluate conditions requiring review.
3. Check sample sufficiency for the current milestone.
4. Apply the configured performance thresholds.
5. Return the action, trigger reason, and budget adjustment factor.
```

Der Aktionsmotor sollte nicht zulassen, dass eine günstige Kostenmetrik eine blockierende Risikobedingung übergeht. Ebenso sollte unzureichende Stichprobenevidenz nicht als Beweis schlechter Performance interpretiert werden.

Der Budgetanpassungsfaktor leitet sich aus dem konfigurierten Aktionsmultiplikator ab. Er stellt eine empfohlene Anpassung dar, keine direkte Änderung des Budgets einer Werbeplattform.

</details>

<details>
<summary><strong>5. Executive-Dashboard: historisches Tag-30-Backtesting</strong></summary>

**Zweck:** Frühe Empfehlungen mit später beobachteten Ergebnissen vergleichen, damit das Team bewerten kann, ob seine Regeln nützlich sind.

Der Quellrahmen berücksichtigt historische Stapel, die mindestens 30 Tage erreicht haben und positive erfasste Tag-30-Umsätze aufweisen. Die Beispiel-Bewertungsregeln umfassen:

- Eine frühe `SCALE`-Entscheidung gilt als erfolgreich, wenn der Tag-30-Umsatz geteilt durch die Ausgaben mindestens 1.0 beträgt.
- Eine frühe `STOP`-Entscheidung gilt als korrekt, wenn das entsprechende Tag-30-ROI unter 0.6 liegt.

Dies sind konfigurierbare Bewertungsdefinitionen, keine universellen Standards. Die Quelle belegt nicht, dass die Schwellen unabhängig über Märkte oder Plattformen hinweg validiert wurden.

Backtesting kann systematische Fehler aufdecken—z. B. Skalierung von Kohorten, die ihre Ausgaben später nicht wieder einspielen, oder Stopp von Kohorten, die akzeptabel performt hätten. Die Ergebnisse bleiben sensitiv für Attributionsverzögerung, unvollständige Umsatzdatensätze, Kohortenauswahl und Änderungen der Betriebsbedingungen.

</details>

</details>

<details>
<summary><strong>Validierungsregeln</strong></summary>

Die Arbeitsmappe hängt von konsistenten Quelldaten, gültigen Kohortendaten, kompatiblen Markt-/Plattform-Benchmarks und korrekt konfigurierten Schwellen ab. Die folgenden Regeln beschreiben das vorgesehene Validierungsverhalten. Exakte Dropdown-Werte und formelebene Fehlerbehandlung sollten gegen die bereitgestellte Arbeitsmappe verifiziert werden.

| Feld oder Bedingung | Validierungsregel | Erwartete Handhabung |
|---|---|---|
| `Record_ID` | Jeder Quelldatensatz sollte einen nutzbaren Bezeichner haben; wiederholte Verbundschlüssel müssen untersucht werden | Potenzielle Duplikate markieren, statt Datensätze als eindeutig anzunehmen |
| `Vendor_Name` | Erforderlich, um einen Lieferantendatensatz zu identifizieren und zu prüfen | Leere Lieferantennamen sollten nicht als gültige analytische Datensätze behandelt werden |
| `Market` | Muss einem konfigurierten Marktbenchmark entsprechen | Nicht übereinstimmende Werte untersuchen; ein fehlender Benchmark kann einen gültigen Zielvergleich verhindern |
| `Platform` | Muss einem konfigurierten Plattformwert entsprechen | Inkonsistente Schreibweise oder nicht unterstützte Werte untersuchen |
| `Launch_Date` | Muss ein gültiges Datum sein | Ungültige Daten verhindern eine zuverlässige Kohortenalter-Berechnung |
| `Data_Date` | Muss ein gültiges Datum sein und mit dem Beobachtungszeitraum übereinstimmen | Ungültige oder inkonsistente Daten können Bewertungsmeilensteine falsch klassifizieren |
| `Spend_Amount` | Muss numerisch und nicht negativ sein | Negative Werte untersuchen und fehlende Ausgaben von echten Nulkausgaben unterscheiden |
| `Impressions` | Muss eine nicht negative Anzahl sein | Negative oder nichtnumerische Beobachtungen untersuchen |
| `Clicks` | Muss eine nicht negative Anzahl sein | Negative Werte und unplausible Beziehungen zu Impressionen untersuchen |
| `NAR_Count` | Muss eine nicht negative Anzahl sein | Quelldefinitionen und Konsistenz mit dem Registrierungsfunnel prüfen |
| `FTD_Count` | Muss eine nicht negative Anzahl sein | Erforderlich für Cost-per-FTD- und verwandte Konversionsberechnungen |
| `FTD_Amount` | Muss numerisch und konsistent mit der Währungskonvention der Quelle sein | Fehlende Werte oder Währungsdiskrepanzen untersuchen |
| `STD_Count` und `TTD_Count` | Müssen nicht negative Anzahlen sein | Ereignisdefinitionen und erwartete Funnel-Beziehungen prüfen |
| `D2_Retained_Count`, `D3_Retained_Count`, `D7_Retained_Count` | Müssen nicht negative Anzahlen mit konsistentem Retentionsnenner sein | Anzahlen untersuchen, die die förderfähige Kohorte überschreiten oder inkonsistente Beobachtungsfenster widerspiegeln |
| `Day30_Actual_Revenue` | Muss numerisch und konsistent mit der gewählten Währung und Umsatzdefinition interpretiert werden | Unvollständige oder unreife Beobachtungen nach Bedarf vom Backtesting ausschließen |
| `Account_Status` | Muss einen anerkannten Statuswert verwenden | Gesperrte oder markierte Bedingungen sollten den konfigurierten Risikoregeln folgen |
| `Fraud_Risk_Tag` | Muss eine anerkannte Risikoklassifizierung verwenden | Bestätigte und verdächtige Fälle dürfen nicht als gleichwertig behandelt werden |
| `Analyst_Notes` | Relevante Tracking-Vorfälle, Attributionsverzögerungen, Beschränkungen oder manuelle Befunde erfassen | Liefert Kontext für spätere Prüfung und Backtesting |
| Benchmark-Lookup | Die Markt-Plattform-Kombination muss zum vorgesehenen Benchmark auflösen | Lookup-Fehler untersuchen, statt stillschweigend ein unrelatiertes Ziel einzusetzen |
| Stichprobenausreichendheit | Der relevante Checkpoint muss seine konfigurierte Mindeststichprobengröße erfüllen | Unreife Evidenz getrennt von bestätigter Minderleistung halten |
| Risikoschranke | Blockierende und Prüfbedingungen müssen vor performanzbasierten Aktionen bewertet werden | Verhindern, dass günstige Kostenmetriken blockierende Bedingungen übergehen |
| Formel-Überlaufbereiche | Zielzellen müssen für dynamische Array-Ergebnisse frei bleiben | Hinderniszellen löschen, wenn Excel `#SPILL!` meldet |
| Berechnungsmodus | Arbeitsmappe sollte automatische Neuberechnung verwenden | Neu berechnen, wenn Ergebnisse veraltet erscheinen |
| Formelbezüge | Formelbereiche und konfigurierte Tabellennamen müssen intakt bleiben | `#REF!`-, `#VALUE!`- und ähnliche Fehler untersuchen, bevor Empfehlungen verwendet werden |

<details>
<summary><strong>Hinweise zu Datenqualität und Fehlerbehandlung</strong></summary>

- **Nullnenner:** Kosten- und Konversionsformeln können `0` zurückgeben, wenn ihr Nenner null ist. Dies vermeidet einen Divisionsfehler, belegt aber keine gemessenen Nulkosten oder Nullkonversionsrate. Prüfen Sie die zugrunde liegende Anzahl, bevor Sie das Ergebnis interpretieren.
- **Nicht übereinstimmender Markt/Plattform:** Ein Benchmark-Lookup-Fehler sollte auf Quell- oder Konfigurationsebene behoben werden. Gehen Sie nicht davon aus, dass ein fehlendes Ziel bedeutet, dass der Lieferant sein Ziel erreicht hat.
- **Fehlender Lieferantenname:** Der Datensatzbezeichner kann leer bleiben, wenn das Lieferantennamen-Feld leer ist, abhängig von der bereitgestellten Formel.
- **Dynamische Array-Überlauffehler:** Zellen löschen, die den vorgesehenen Überlaufbereich blockieren. Formelgenerierte Ausgabezellen nicht überschreiben, um ein Ergebnis zu erzwingen.
- **Veraltete Berechnungen:** Berechnungsmodus von Excel prüfen und bei Bedarf neu berechnen.
- **Währungsformatierung:** Anzeigeformate konvertieren keine Werte zwischen Währungen. Bestätigen Sie, dass Quellbeträge und konfigurierte Benchmarks eine konsistente Währungsbasis verwenden.
- **Retention- und Funnel-Zahlen:** Nennerdefinitionen und Beobachtungsfenster prüfen. Eine mathematisch gültige Quote kann weiterhin irreführend sein, wenn Quelereignisse unterschiedliche Kohortendefinitionen verwenden.

Validierung reduziert vermeidbare Fehler, kann aber nicht belegen, dass jeder Quellbericht vollständig, jede Konversion legitim oder jedes Attributionsereignis korrekt zugeordnet ist. Diese Bedingungen erfordern operationale Prüfungen und Abstimmung mit den zugrunde liegenden Plattformen.

</details>

</details>

<details>
<summary><strong>Laufzeitanforderungen</strong></summary>

| Element | Anforderung oder Empfehlung |
|---|---|
| Excel-Version | Microsoft 365 empfohlen; Excel 2021 oder höher ist die vorgesehene Basis |
| Formelkompatibilität | Nutzt moderne Excel-Funktionalität, einschließlich dynamischer Arrays und fortgeschrittener Funktionen wie `LET`, `FILTER`, `SORT`, `XLOOKUP`, `MAP`, `LAMBDA`, `HSTACK` und `VSTACK` |
| Ältere Excel-Versionen | Excel 2019 und früher werden von der vorgesehenen Formelarchitektur nicht unterstützt |
| Arbeitsmappenformat | `.xlsx` oder `.xlsb`, vorbehaltlich Kompatibilitätstests der gelieferten Datei |
| Zusammenarbeit | OneDrive oder SharePoint können geteilte Workflows unterstützen; gleichzeitige strukturelle Bearbeitungen der Eingabetabelle vermeiden |
| Empfohlene Arbeitsgröße | Bis ca. 10.000 Datensätze für den Routineeinsatz; Performance testen, bevor auf 50.000 Datensätze expandiert wird |
| Historische Daten | Ältere, ausgereifte Datensätze regelmäßig archivieren, wenn die aktive Arbeitsmappe schwer zu pflegen wird |

Die tatsächlich unterstützte Version sollte gegen die verteilte Arbeitsmappen-Version bestätigt werden. Die Verfügbarkeit einer Funktion in einer Excel-Version garantiert nicht von sich aus, dass jede Formel sich in allen Umgebungen identisch verhält.

</details>

<details>
<summary><strong>Ablaufprozedur</strong></summary>

<details>
<summary><strong>Zweiwöchentliches Lieferanten- und Budget-Review</strong></summary>

1. **Quelldatensätze importieren.** Aktualisieren Sie `02_Raw_Input` mit den neuesten verfügbaren Lieferanten-, Markt-, Plattform-, Ausgaben-, Konversions-, Retentions- und Risikoinformationen.
2. **Datenqualität prüfen.** Fehlende Bezeichner, nicht übereinstimmende Benchmarks, inkonsistente Daten, unplausible Anzahlen und Tracking-Vorfälle prüfen.
3. **Entscheidungsschranken prüfen.** Unzureichende Stichproben, operationales Risiko und performanzbasierte Empfehlungen unterscheiden.
4. **Dashboard prüfen.** Executive-Snapshot und Aktionsliste zur Vorbereitung des Budget-Reviews nutzen. Auslösegrund bestätigen, bevor eine Zuteilung geändert wird.
5. **Entscheidung dokumentieren.** Relevanten Kontext und manuelle Übersteuerungen in den entsprechenden operativen Aufzeichnungen festhalten.
6. **Ausgereifte Kohorten erneut prüfen.** Frühe Entscheidungen mit verfügbaren Tag-30-Ergebnissen vergleichen und systematische Fehler untersuchen.

</details>

<details>
<summary><strong>Parameterwartung</strong></summary>

- Markt-/Plattform-Benchmark-Werte aktualisieren, wenn sich die Zielökonomie des Unternehmens ändert.
- Stichprobenschwellen und Aktionsquoten über den Konfigurationsbereich anpassen, statt einzelne Entscheidungsformeln zu bearbeiten.
- Neue Märkte oder Plattformen erst nach Aktualisierung der relevanten Benchmark- und Validierungskonfiguration hinzufügen.
- Formelgenerierte Bereiche erhalten und Ausgaben nach strukturellen Änderungen verifizieren.
- Repräsentative Fälle nach Änderung von Risikoregeln oder Entscheidungsschwellen erneut testen.

</details>

</details>

<details>
<summary><strong>Einschränkungen</strong></summary>

Dieser Analyzer ist ein regelbasierter Entscheidungsunterstützungsrahmen. Er ist keine prädiktive Garantie für Tag-30-Umsätze und führt keine Kampagnen-, Zahlungs- oder Kontoaktionen automatisch aus.

Frühe Akquisitionssignale können sich durch Attributionsverzögerungen, spätere Rückbuchungen, Tracking-Ausfälle, Plattformbeschränkungen und Unterschiede in der Kohortenqualität ändern. Eine Empfehlung ist nur so zuverlässig wie die zugrunde liegenden Daten, Benchmark-Definitionen, Stichprobenanforderungen und Regeln.

Tag-30-Backtesting kann helfen zu erkennen, wo Regeln angepasst werden müssen, aber historische Performance garantiert keine zukünftige Genauigkeit. Ergebnisse sollten nach relevantem Markt, Plattform und Betriebsbedingungen segmentiert werden, wo ausreichend Daten existieren.

</details>

<details>
<summary><strong>Fehlerbehebung</strong></summary>

| Symptom | Wahrscheinliche Ursache | Empfohlene Prüfung |
|---|---|---|
| `#SPILL!` | Zellen blockieren einen dynamischen Array-Ausgabebereich | Hinderniszellen löschen, ohne die Quellformel zu entfernen |
| `#N/A` in benchmarkabhängigen Ergebnissen | Markt-/Plattform-Kombination entspricht nicht den konfigurierten Referenzwerten | Schreibweise, zulässige Werte und Benchmark-Abdeckung prüfen |
| Unerwartete Nulkosten oder Nullrate | Der Nenner kann null, fehlend oder noch nicht gemeldet sein | Zugrunde liegende Anzahlen und Datenvollständigkeit prüfen |
| Ergebnisse aktualisieren nicht | Berechnungsmodus oder Arbeitsmappenabhängigkeiten können falsch sein | Automatische Berechnung bestätigen und neu berechnen |
| Lieferantenbezeichner ist leer | Erforderliche Quellfelder können fehlen | Lieferantennamen-Feld und Bezeichnerformel prüfen |
| Unplausible Retentions- oder Konversionsrate | Anzahlen können inkonsistente Kohortendefinitionen oder Beobachtungsfenster verwenden | Ereignisdefinitionen und förderfähige Population abgleichen |
| Unerwartete `SCALE`- oder `STOP`-Empfehlung | Konfiguration, Risikopriorität oder Benchmark-Auswahl entsprechen möglicherweise nicht den Erwartungen | Auslösegrund, anwendbaren Benchmark, Stichprobenstatus und konfigurierte Schwellen prüfen |

</details>

</details>

## Die Geschäftslogik & Methodik

Der Analyzer ist um ein praktisches Akquisitionsmanagementproblem herum konzipiert: Frühe Daten sind lange verfügbar, bevor der langfristige Wert eines Lieferanten sicher ist, aber Budgetentscheidungen können nicht immer warten, bis jede Kohorte ausgereift ist. Sein Zweck ist es, diese Unsicherheit zu strukturieren, damit Entscheidungen konsistent überprüft werden können, statt aus einer einzelnen attraktiven oder alarmierenden Metrik getroffen zu werden.

- **Meilensteinbasierte Bewertung** trennt die Entscheidungen an Tag 3, Tag 4 und Tag 7. Sie hilft dem Team zu vermeiden, eine unreife Kohorte so zu behandeln, als hätte sie dieselbe Beweiskraft wie eine ausgereifte.
- **Benchmark-Vergleich** bewertet die Akquisitionskosten gegen das Ziel für den relevanten Markt und die relevante Plattform. Das macht Lieferantenvergleiche kommerziell aussagekräftiger als die Anwendung einer universellen Kostenschwelle über unterschiedliche Betriebsbedingungen.
- **Risikoschranken** trennen Kontobeschränkungen und verdächtigen oder bestätigten Betrug von gewöhnlichen Performanceproblemen. Sie helfen dem Team zu erkennen, wann der nächste Schritt eine Untersuchung oder Risikokontrolle statt einer routinemäßigen Budgetanpassung sein sollte.
- **Multi-Indikator-Review** kombiniert Akquisitionskosten mit Funnel-Verhalten, Wiederkehreinzahlungssignalen und Retention. Es liefert mehr Kontext, um zu beurteilen, ob eine günstige Akquisition von Nachweisen nachgelagerter Qualität begleitet wird.
- **Tag-30-Backtesting** vergleicht frühe Empfehlungen mit später erfassten Ergebnissen. Es bietet eine Möglichkeit zu prüfen, ob die aktuellen Regeln systematisch zu aggressiv, zu konservativ oder unzureichend sensibel für bestimmte Betriebsbedingungen sind.

Diese Methoden wirken als Entscheidungssequenz zusammen: Feststellen, ob die Evidenz nutzbar ist; prüfen, ob Risikobedingungen greifen; die Performance mit dem passenden Ziel vergleichen; und dann die Empfehlung gegen spätere Ergebnisse überprüfen.

Das Ergebnis ist keine Behauptung, dass frühe Performance mit Sicherheit bekannt sein kann. Es ist ein wiederholbarer Prozess, um frühe Entscheidungen transparenter zu machen, zu dokumentieren, warum eine Aktion vorgeschlagen wurde, und die Regeln zu verbessern, sobald bessere Evidenz verfügbar ist.

## Weitere Tools dieser Serie

Theseus Workshop entwickelt leichte Business-Analyse- und Entscheidungsunterstützungstools für wiederkehrende operationale Probleme.

- **Baukostenkalkulation & Projektsteuerung** — Verknüpft Kalkulationsannahmen mit kosten- und ausführungsbezogenem Projekttracking.
- **Bestandsabstimmung & Schwundanalyse** — Hilft, Diskrepanzen über Bestandsaufzeichnungen und Standorte hinweg zu identifizieren.
- **Auftragsebene-Rentabilität & Finanzielle Abstimmung** — Strukturiert Umsatz- und Kostenanalyse um einzelne Aufträge.
- **Business-Forecasting & Szenarioplanung** — Hilft, finanzielle Ergebnisse unter alternativen Betriebsannahmen zu bewerten.

Erkunden Sie die verwandten Projekte auf dem [Theseus-Workshop-GitHub-Profil](https://github.com/HyVoid). Bestätigen Sie die Verfügbarkeit und den aktuellen Umfang jedes Repositorys, bevor Sie es für den operativen Einsatz übernehmen.

## Lizenz

Dieses Projekt soll unter der **Apache-Lizenz 2.0** vertrieben werden.

Fügen Sie vor der Veröffentlichung eines Releases die anwendbare `LICENSE`-Datei in das Repository ein und bestätigen Sie, dass die Lizenz die tatsächlich verteilten Dateien abdeckt. Wenn die Browser-Version, die Excel-Arbeitsmappe oder Drittanbieter-Assets separate Lizenzbedingungen haben, dokumentieren Sie diese Bedingungen ausdrücklich, statt anzunehmen, dass jede Komponente gleichermaßen abgedeckt ist.
