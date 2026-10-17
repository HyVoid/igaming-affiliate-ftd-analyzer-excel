[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# iGaming Affiliate & Media Buying Excel-sjabloon: Cost per FTD (C/FTD) & cohorten Traffic-analyzer
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/53808d1c-6d13-4502-a81d-ef846d596902" />
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/268198c3-9abc-4547-9c47-42f447f390e6" />

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346.svg)
![Category](https://img.shields.io/badge/Tool-iGaming%20UA%20%26%20Affiliate%20BI-2251FF.svg)

**Een performance-analyzer voor iGaming-affiliates en media buying, een calculator voor de kosten per eerstestorter (C/FTD / CPFTD) en een Excel-sjabloon voor vroege cohortbeslissingen. Gebouwd voor user acquisition-managers (UA) bij casino's en sportsbooks, affiliate-directeuren en performance-marketeers om D3/D4/D7-spelerscohorten te beoordelen, advertentie-accountverbanningen en bonusmisbruikfraude te isoleren, en budgettoewijzing via `SCALE / KEEP / STOP / REVIEW` te automatiseren—beschikbaar als gratis browsergebaseerde simulator (geen registratie vereist) en als downloadbare Microsoft Excel-werkmap.**

> **Toegang tot de iGaming-traffic- en C/FTD-beslissingstools**
>
> - 🌐 **[Open de gratis webgebaseerde iGaming C/FTD- & Traffic-analyzer](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)** — Audit vroege leverancierscohorten, test minimale FTD-steekproefdrempels en simuleer media-buying-budgetregels rechtstreeks in je browser zonder software te installeren of een account aan te maken.
> - 📥 **[Download de iGaming Affiliate & Media Buying Excel-werkmap (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** — Ontvang de volledige spreadsheetsjabloon voor offline tweewekelijkse budgetbeoordelingen, multi-GEO-benchmarkkalibratie en historische Day 30 ROI-backtesting.
>
> *Geen registratie. Geen installatie. Gratis browsertoegang. *

---

## Kernmetriken voor iGaming user acquisition & opgeloste trafficproblemen

In plaats van trafficleveranciers te beoordelen op ruwe registratievolumes of ruise vroege CPA-pieken, koppelt deze op regels gebaseerde framework de vroege progressie van de spelerfunnel aan statistische steekproefpoorten. Zo brengt de analyzer **iGaming media-buying- en affiliateproblemen** in kaart bij controleerbare **FTD- en retentiemetriken**:

| iGaming UA- & affiliateprobleem | Op regels gebaseerd beoordelings- en gate-mechanisme | Gevolgde belangrijkste casino- & sportsbook-KPI's |
| :--- | :--- | :--- |
| **Ongecontroleerde Cost per First-Time Depositor (C/FTD)** | Vergelijkt de acquisitiekosten van de leverancier met GEO- en platformspecifieke doelmatrijzen over Tier-1 tot Tier-3-markten. | Cost per FTD (`C/FTD` / `CPFTD`), afwijking van doel-C/FTD (%), Cost per Registration (`CPR`) |
| **Vanity-registratievolume & zwakke funnelconversie** | Volgt de progressie van spelers na de eerste registratie om trafficbronnen te isoleren die niet converteren naar terugkerende storters. | Netto actieve registraties, reg-to-FTD-conversieratio (%), terugkerende stortingsratio, vroege spelersretentie |
| **Voortijdig opschalen of stoppen bij kleine cohorten** | Legt minimale uitgavendrempels en FTD-steekproefdrempels op dag 3, dag 4 en dag 7 vast voordat budgetwijzigingen worden geactiveerd. | Minimale uitgavenpoort ($300-vloer), FTD-steekproefvoldoendeheid (`D3 >= 10`, `D4 >= 15`, `D7 >= 30`) |
| **Advertentie-accountverbanningen, cloaking & bonusmisbruikfraude** | Scheidt echte ondermaatse prestaties van leveranciers van beperkte advertentie-accounts, defecte postbacks of basisstortingsfraude. | Advertentie-accountstatus (`Restricted` / `Banned`), frauderisicomarkeringen, meldingen van nul-terugkerende-storting-anomalie |
| **Subjectieve media-buying-budgettoewijzingen** | Vertaalt multi-gate-cohortmetriken naar deterministische, uitlegbare budgetrouteringsopdrachten met auditspoor. | Geautomatiseerde `SCALE`-vlaggen (+30% budget), `KEEP`, `STOP` of `REVIEW` + triggerende regel-ID |
| **Ongevalideerde vroege afbreekdrempels** | Backtest dag 3–7-beslissingen tegen volwassen dag 30-cohortprestaties om te verifiëren of vroege regels winstgevende whales wegsnijden. | Validatie van volwassen dag 30-cohort, vals-positieve `STOP`-ratio, vroeg-tot-volwassen LTV/ROAS-afstemming |

---

## Stapsgewijze handleiding: iGaming-trafficleveranciers auditen & budgetbeslissingen automatiseren

De analyzer werkt volgens een herhaalbare **tweewekelijkse iGaming UA-beoordelingscyclus**: stel je GEO-/kanaalbenchmarks eenmaal in, plak ruwe tracker-exports, bekijk de regelgestuurde actievlaggen en backtest tegen volwassen dag 30-spelersgegevens.

### Stap 1: GEO-benchmarks, steekproefpoorten & C/FTD-regels configureren
Open het speciale tabblad `Configuration & Thresholds` om de eenheidseconomie van je operator en statistische vangrails vast te leggen:

- **Minimale uitgavenbeschermingsvloer:** Standaard ingesteld op `300 valuta-eenheden` (voorkomt dat onvoldoende gefinancierde testcampagnes voortijdig worden afgeschoten).
- **Poorten voor cohort-FTD-steekproefvoldoendeheid:** Vereist minimaal `10 FTD's op dag 3`, `15 FTD's op dag 4` en `30 FTD's op dag 7` voordat prestatieregels worden geactiveerd.
- **Geautomatiseerde budgetactietriggers:**
  - `SCALE`-drempel: feitelijke `C/FTD <= 85%` van het toepasselijke GEO/platformdoel (activeert een voorgestelde budgetverhoging van `+30%`).
  - `STOP`-drempel: feitelijke `C/FTD >= 125%` van het toepasselijke doel (mits aan de steekproefvoldoendeheid is voldaan).

*(Let op: de standaardwaarden zijn illustratieve referentiepunten. Kalibreer de doelen op basis van je feitelijke casino-/sportsbook-NGR-marges, licentiejurisdictie en betalingsverwerkingskosten.)*

### Stap 2: S2S-postback-, affiliate- & advertentieplatformexports importeren
Exporteer cohortprestatiegegevens uit je affiliate-trackersoftware (bijv. Affilka, Income Access, Cellxpert, Scaleo), MMP (AppsFlyer, Adjust) of advertentienetwerken (Meta, Google Ads, Telegram, programmatische DSP's) en plak ze in het invoerblad:

- **Campagne- & leveranciersmetadata:** leverancier/affiliate-ID, doel-GEO/-markt, trafficplatform, lanceerdatum en rapportagesnapshotdatum.
- **Funnel-top- & uitgavenmetriken:** totale advertentie-uitgaven, vertoningen, klikken en netto actieve spelersregistraties.
- **Spelersmonetisatie- & risicosignalen:** eerste stortingen (FTD-aantal), aantallen terugkerende stortingen, vroege cohortretentie, advertentie-accountstatus en handmatige frauderisiconotities.

*(Houd attributievensters en valuta-eenheden consistent over alle geïmporteerde rijen.)*

### Stap 3: Cohort-KPI's auditen & `SCALE / KEEP / STOP / REVIEW`-acties uitvoeren
Navigeer naar de weergaven `Decision Engine & KPI Dashboard` om de geautomatiseerde beoordeling van elke actieve leveranciersbatch te inspecteren:

- **Statistische voldoendeheidscontrole:** Controleer of een hoge C/FTD een echt falen is (`STOP`) of slechts een onderbemonsterde cohort die naar `KEEP / MONITOR` wordt gerouteerd.
- **Operationele & fraudespoort:** Controleer of campagnes met verdacht goedkope FTD's maar nul terugkerende stortingen—of beperkte advertentie-accounts—zijn onderschept en naar `REVIEW` gerouteerd.
- **Uitlegbare actieaudit:** Lees de exacte triggerregel achter elke aanbeveling voordat je media-buying-limieten of affiliate-CPA-afspraken aanpast.

### Stap 4: Backtesten tegen volwassen dag 30-uitkomsten & exporteren naar Excel
Voer deze workflow twee keer per week uit tijdens actieve campagneperiodes. Zodra historische spelerscohorten **dag 30-rijpheid** bereiken, log hun gerealiseerde uitkomsten in de historische validatieweergave om te verifiëren of je dag 3- en dag 7-C/FTD-drempels de langetermijnkwaliteit van spelers nauwkeurig voorspeld hebben.

> 🎰 **Klaar om je tweewekelijkse iGaming-traffic- en affiliate-reviews te standaardiseren?** 
> Nadat je de beslissingspoorten hebt getest in de **[gratis browsergebaseerde iGaming C/FTD-analyzer](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)**, download je de **[herbruikbare iGaming-leveranciersevaluatie-Excel-werkmap (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** om offline auditlogs bij te houden, propriëtaire multi-GEO-benchmarkmatrizen op te slaan en terugkerende cohortbacktests met je UA-team uit te voeren.

---

## Waarom ik dit op regels gebaseerde iGaming-trafficbeoordelingsframework heb gebouwd

In snelle iGaming user acquisition creëert vroege cohortrapportage een kostbare operationele valkuil: **metriken zien er wiskundig precies uit lang voordat ze statistisch betrouwbaar genoeg zijn om opschalen of budget snijden te rechtvaardigen.**

Beschouw drie veelvoorkomende faalwijzen tijdens een vroege campagnebeoordeling:
1. **De illusie van de goedkope registratie:** Een trafficbron levert enorme registratievolumes tegen bodemprijs CPI/CPR, maar converteert vrijwel nul eerste storters (FTD's).
2. **De langzaam brandende VIP-cohort:** Een PPC- of SEO-leverancier lijkt duur op dag 3-C/FTD, maar trekt hoogintentie-sportsbook- of slots-spelers aan die tegen dag 14 flink nastorten.
3. **Platform- & trackingverstoringen:** Een historisch sterke media-buying-agency toont een plotselinge C/FTD-piek—niet omdat de traffickwaliteit verslechterde, maar omdat een advertentie-account shadow-restricted werd of een S2S-postbackpixel brak.

### De "dag 3-cohortvalkuil": Leverancier A vs. leverancier B
Stel je een budgetbeoordeling op dag 3 voor waarin het **doel voor de Cost per FTD (C/FTD) $40 is**:
- **Leverancier A** heeft **$300** uitgegeven en **10 FTD's** gegenereerd $\rightarrow$ `C/FTD = $30` (voldoet aan de dag 3-steekproefpoort van 10 FTD's).
- **Leverancier B** heeft **$100** uitgegeven en **2 FTD's** gegenereerd $\rightarrow$ `C/FTD = $50` (25% slechter dan de $40-benchmark).

In een naïeve spreadsheet beëindigt een media buyer leverancier B onmiddellijk wegens overschrijding van de doel-CPA en schaalt leverancier A op. Leverancier B heeft echter slechts **2 FTD's** gegenereerd—ruim onder de statistische steekproefvloer van 10 FTD's en de $300-uitgavenbeschermingsdrempel. Leverancier B op dag 3 snijden is een **voortijdige beëindiging veroorzaakt door kleine-steekproefruis**. Ondertussen moet de analoog, voordat leverancier A +30% meer budget krijgt, nog verifiëren dat die 10 FTD's geen baseline-bonusmisbruikers zonder terugkerende stortingen zijn.

Ik heb deze analyzer gebouwd om exact die diagnostische logica om te zetten in een **herhaalbaar, op regels gebaseerd beslisframework**—waarmee buikgevoeldebatten tijdens tweewekelijkse budgetvergaderingen verdwijnen.

---

## Ad-hoc-affiliate-spreadsheets vs. op regels gebaseerde iGaming-beslisengine

| iGaming UA-beoordelingsdimensie | Traditionele ad-hoctrackers & buikgevoelreviews | Op regels gebaseerde iGaming-leveranciersanalyzer (deze tool) |
| :--- | :--- | :--- |
| **Vroege opschaalbeslissingen (dag 3–7)** | Media buyers schalen budgetten agressief op basis van een paar goedkope vroege FTD's, met het risico van zware blootstelling aan laag-LTV-traffic. | Legt **D3- (10), D4- (15) en D7- (30) FTD-steekproefpoorten** vast plus terugkerende-stortingcontroles voordat een `SCALE`-vlag (+30%) wordt afgegeven. |
| **Afsnijden van ondermaats presterende leveranciers** | Veelbelovende affiliates of advertentiesets worden voortijdig gepauzeerd vanwege hoge C/FTD-variantie bij kleine uitgavenvolumes. | Past een **$300 minimale uitgavenbeschermingsvloer** en een steekproefvoldoendeheidscontrole toe om statistische ruis te scheiden van echt falen (`STOP`). |
| **Detectie van baselinefraude & bonusmisbruik** | Goedkope registraties en minimale basisstortingen maskeren geautomatiseerde botnetwerken of incentivetraffic zonder retentie. | Toetst C/FTD-efficiëntie aan **terugkerende-stortingsprogressie, vroege retentie en fraudenotities** om `REVIEW` te activeren. |
| **Advertentie-accountverbanningen & postbackuitval** | Plotselinge dalingen in FTD-conversie veroorzaakt door Meta/Google-accountbeperkingen of S2S-trackingbugs worden op leverancierskwaliteit afgeschoven. | Speciale **accountstatus- en operationele risicopoorten** isoleren beperkte accounts voor handmatige remediering in plaats van blinde beëindiging. |
| **Multi-GEO- & multikanaalbenchmarking** | Analisten hanteren inconsistente mentale C/FTD-doelen over Tier-1- (VK/EU), LatAm- (Brazilië/Mexico) en Aziatische markten. | Centraliseert een **configureerbare GEO × Platform-benchmarkmatrix** zodat elke leverancier wordt beoordeeld aan gestandaardiseerde regionale doelen. |
| **Drempelkalibratie & dag 30-backtesting** | Vroege dag 3/dag 7-afbreekregels worden nooit geaudit tegen volwassen 30-daagse cohortwinstgevendheid. | Koppelt vroege beslissingsbatches aan **volwassen dag 30-uitkomstartrecords** om vals-positieven te auditen en C/FTD-tolerantiebanden te verfijnen. |

---

## Voor wie deze iGaming-analyzer is gebouwd: rollen & workflows

Deze toolkit voor evaluatie in dubbel formaat (browser + Excel) is ontworpen voor performance-marketing- en commerciële teams bij online casino's, sportsbooks en iGaming-agencies:

- **iGaming user acquisition- (UA) & performance-marketingmanagers:** Standaardiseer je tweewekelijkse budgettoewijzingsvergaderingen. Gebruik de **Cost-per-FTD- (C/FTD) beslissingscalculator** om `SCALE`-, `KEEP`- en `STOP`-acties te verdedigen met transparante, op regels gebaseerde bewijzen over Meta, Google, TikTok en programmatische DSP's.
- **Casino- & sportsbook-affiliatemanagers:** Audit externe affiliatepartners en sub-affiliatenetwerken objectief. Gebruik de **vroege cohortkwaliteitanalyzer** om baseline-CPA-misbruik te signaleren (affiliates die minimaal-stortings-FTD's leveren met nul terugkerende stortingen) voordat je onbegrenste commissies uitbetaalt.
- **Media-buying-agencies & arbitrageteams:** Bescherm je advertentiebudgetten over vluchtige traffickanalen. Gebruik de **minimale-uitgaven- en steekproefpoort-werkmap** om te voorkomen dat junior media buyers veelbelovende campagnes afschieten tijdens de dag 3-leerfase of beperkte advertentie-accounts opschalen.
- **iGaming BI-analisten, growth leads & CRM-teams:** Overbrug de kloof tussen ruwe attributie-exports en executive rapportage. Gebruik het **dag 30-historische backtestingsblad** om te kalibreren of je vroege D3/D7-C/FTD-drempels daadwerkelijk correleren met volwassen 30-daagse Net Gaming Revenue (NGR).
- **CMO's, heads of growth & budgeteigenaren:** Vestig gecentraliseerde governance over externe acquisitie-uitgaven zonder maanden te wachten op custom data-warehouse-BI-pipelines.

---

## Branchecases & long-tail iGaming-acquisitiescenario's

Of je nu een nieuw crypto-casino lanceert, een gelokaliseerd LatAm-sportsbook opschalt of 50+ CPA/Hybrid-affiliates beheert, dit framework past zich aan specifieke iGaming-traffic-scenario's aan:

### 1. Kwaliteitsaudits van affiliate CPA- & Hybrid-deals (baselinefraude voorkomen)
In CPA- en Hybrid-affiliatestructuren spelen onscrupuleuze trafficbronnen vaak de basisstortingsdrempel uit—ze genereren goedkope FTD's die nooit een tweede inzet plaatsen. Door **terugkerende-stortingsratio's en vroege retentie naast C/FTD te evalueren**, kunnen affiliatemanagers verdachte trafficbatches naar `REVIEW` routeren voordat limietverhogingen worden goedgekeurd.

### 2. Hoogvolatiel social & in-app media buying (Meta, Google, Telegram & Pop/Push)
Paid media-campagnes in beperkte iGaming-verticalen krijgen vaak te maken met advertentie-accountverbanningen, creatieve afwijzingen en attributietrackinguitval. De **Account Health-poort** van de analyzer zorgt ervoor dat wanneer een topklasse-leverancier een platformbeperking ondervindt, de campagne wordt gemarkeerd voor operationele bescherming in plaats van ten onrechte geclassificeerd als slechte traffickwaliteit.

### 3. Multi-GEO-sportsbook- & casino-lanceerkalibratie (Tier-1 vs. opkomende markten)
Een C/FTD van $35 kan zeer winstgevend zijn in gereguleerde Europese of Noord-Amerikaanse jurisdicties, maar catastrofaal in hoogvolume, laag-ARPU-opkomende markten (zoals Brazilië, India of LatAm). Gebruik de **Markt × Platform-benchmarkmatrix** om leveranciersevaluatie te normaliseren over diverse valuta en regionale spelereconomieën.

---

### Operationele reikwijdte & analytische disclaimer
*Deze toolkit is een op regels gebaseerd beslisondersteuningsmodel voor vroege cohorten—geen realtime S2S-attributietracker, geen antifraudewall, geen op spelersniveau voorspellende LTV-engine en geen wettelijk financieel grootboek. Een gunstige dag 3- of dag 7-C/FTD garandeert geen dag 30-Net Gaming Revenue (NGR) of netto winstgevendheid. Zorg er altijd voor dat geïmporteerde data consistente attributievensters en valuta-eenheden gebruikt, en combineer spreadsheetuitvoer met ervaren risico- en compliancebeoordeling.*

---

## Over de maker

Ik bouw lichtgewicht, controleerbare beslisondersteuningstools voor high-stakes operationele workflows waarin te veel bewegende variabelen verloren gaan in losgekoppelde spreadsheets. De leidende vraag is eenvoudig: **welke exacte bewijzen en statistische vangrails moeten op één plek samenkomen om de volgende budgettoezegging met vertrouwen te doen?**

## Technische details

<details>
<summary>Voor technische reviewers, Excel-practitioners en medewerkers</summary>

<details>
<summary><strong>Werkmaparchitectuur</strong></summary>

De analyzer gebruikt vijf verbonden werkbladen. Elk werkblad heeft een gedefinieerde verantwoordelijkheid, die configuratie, ruw bewijsmateriaal, metriekberekening, beslisregels en managementreview scheidt.

| Werkblad | Verantwoordelijkheid | Primaire output |
|---|---|---|
| `01_Config_Rules` | Centrale configuratie van valuta, benchmarks, steekproefdrempels, risicoregels en actiemultiplicatoren | Aanpasbare bedrijfsparameters |
| `02_Raw_Input` | Slaat acquisitie-, conversie-, retentie-, uitgaven- en risicogegevens op leveranciersniveau op | Gevalideerde bronrecords |
| `03_KPI_Engine` | Berekent verstreken dagen, beoordelingsmijlpalen, acquisitiekosten, funnelratio's, retentie en CP Score | Vergelijkbare leveranciersprestatiemetriken |
| `04_Decision_Engine` | Past sequentieel steekproefvoldoendeheid, risicopoorten en prestatiedrempels toe | SCALE, KEEP, STOP of REVIEW |
| `05_Exec_Dashboard` | Toont de executive snapshot, actielijst en historische dag 30-review | Budgetreview-bewijs en beslissingsbacktesting |

De beoogde gegevensstroom is:

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

Configuratiewaarden voeden de berekeningen en beslisregels. Ruwe records leveren de observaties. De KPI-engine transformeert die observaties in vergelijkbare metrieken, en de beslisengine past de geconfigureerde regels toe. Het dashboard presenteert de resultaten voor beoordeling.

Deze scheiding is opzettelijk: het wijzigen van een benchmark zou geen herbouw van de berekeningslogica van de werkmap vereisen, en een gunstige prestatiemetriek zou een blokkerende risicoconditie niet mogen omzeilen.

<details>
<summary><strong>Invoer-naar-uitvoerafhankelijkheid</strong></summary>

| Invoer of conditie | Betrokken berekening | Beslisimplicatie |
|---|---|---|
| Uitgaven en FTD-aantal | Cost per FTD | Vergelijking van acquisitiekosten |
| NAR-aantal | Cost per NAR | Kosten van het geconfigureerde NAR-evenement |
| Registratie-, FTD- en STD-aantallen | Funnelconversieratio's | Identificeert conversielekkage |
| Behouden aantallen op dag 2, dag 3 en dag 7 | Retentieratio's | Voegt vroeg kwaliteitsbewijs toe |
| Lanceerdatum en datadatum | Actieve dagen en beoordelingsmijlpaal | Bepaalt of de cohort een checkpoint heeft bereikt |
| Account- en frauderisicostatus | Risicopoort | Kan prestatiegebaseerde aanbevelingen blokkeren of kwalificeren |
| Markt en platform | Doelbenchmarklookup | Vaststellen van het toepasselijke vergelijkingsdoel |
| Volwassen dag 30-omzet | Historische uitkomstenreview | Ondersteunt retrospectieve regelevaluatie |

</details>

</details>

<details>
<summary><strong>De bedrijfslogica achter de beslisengine</strong></summary>

Het systeem beschouwt lage acquisitiekosten niet als voldoende bewijs van leverancierskwaliteit. Het scheidt vier vragen die in volgorde beantwoord moeten worden:

1. **Is er genoeg bewijs?** Een kleine steekproef kan een leverancier ongewoon efficiënt of inefficiënt laten lijken. De analyzer controleert de relevante beoordelingsmijlpaal en minimale steekproefvereiste voordat het prestatieresultaat als beslisrijp wordt behandeld.
2. **Zijn er condities die prestaties buiten werking stellen?** Accountbeperkingen, fraude-indicatoren en andere geconfigureerde risicocondities kunnen een prestatiegebaseerde actie blokkeren of kwalificeren.
3. **Hoe verhoudt de geobserveerde kosten zich tot de juiste benchmark?** De engine vergelijkt de cost per FTD met het doel voor de relevante markt en het platform, in plaats van te vertrouwen op één universele acquisitiekostendrempel.
4. **Welke actie is nu gerechtvaardigd?** De engine geeft een gestructureerde aanbeveling en reden terug, wat het herzien van de beslissing en het onderscheiden van een operationele beperking en een prestatieprobleem vergemakkelijkt.

De beslislabels betekenen:

| Actie | Interpretatie |
|---|---|
| `SCALE` | Het beschikbare bewijs voldoet aan de geconfigureerde prestatieregel en geen blokkerende risicoconditie verhindert opschalen |
| `KEEP` | Doorgaan met monitoren zonder prestatiegestuurde budgetverhoging of stopaanbeveling |
| `STOP` | Stoppen of blokkeren van verdere toewijzing onder de geconfigureerde prestatie- of risicoregels |
| `REVIEW` | Een risicoconditie oplossen of menselijke review verkrijgen voordat het prestatieresultaat als uitvoerbaar wordt behandeld |

Dit zijn aanbevelingen, geen geautomatiseerde betalings-, account- of campagneacties. Definitieve beslissingen blijven onderworpen aan operationele context en menselijke review.

</details>

<details>
<summary><strong>Drie valkuilen die zelfs ervaren acquisitieteams vangen</strong></summary>

<details>
<summary><strong>Valkuil 1: Een lage cost per FTD als kwaliteitsbewijs behandelen</strong></summary>

**De beslissing:** Het budget van een leverancier verhogen omdat de vroege cost per FTD onder het doel ligt.

**De verborgen gebrekkigheid:** De leverancier heeft mogelijk heel weinig FTD's, zwak terugkerend stortingsgedrag, slechte retentie of een accountniveau-risicovlag.

| Onjuiste aanpak | Gecorrigeerde aanpak |
|---|---|
| Leveranciers rangschikken op cost per FTD alleen | Steekproefvoldoendeheid en risicostatus controleren voordat kosten worden vergeleken |
| De goedkoopste leverancier onmiddellijk opschalen | Alleen opschalen wanneer de geconfigureerde prestatieregel is vervuld en geen blokkerende risicopoort van toepassing is |

Een lage cost per FTD meet acquisitie-efficiëntie voor één evenement. Deze stelt geen downstream-waarde vast en sluit fraude niet uit. Het gecorrigeerde proces behoudt het kostensignaal terwijl het voldoende bewijs en het doorlopen van de toepasselijke risicocontroles vereist.

**Beslisimplicatie:** Een goedkope maar onrijpe of risicovolle cohort moet onder observatie of review blijven in plaats van automatisch een budgetverhoging te ontvangen.

<details>
<summary><strong>Formule- en regelreferentie</strong></summary>

Conceptueel:

```text
Cost per FTD = Spend / FTD Count
```

Een prestatiegebaseerde opschaalbeslissing wordt pas beoordeeld na de controles op steekproefvoldoendeheid en risico. In het geconfigureerde framework luidt de schaalconditie:

```text
Cost per FTD <= Target Cost per FTD × Scale Ratio
```

De bronconfiguratie gebruikt een voorbeeldschaalratio van `85%`. Dit is een configureerbare regel, geen universele industriestandaard.

</details>

</details>

<details>
<summary><strong>Valkuil 2: Een leverancier stoppen voordat de steekproef voldoende is</strong></summary>

**De beslissing:** Een leverancier stoppen omdat de initiële acquisitiekosten het doel overschrijden.

**De verborgen gebrekkigheid:** De cohort heeft de vereiste beoordelingsmijlpaal mogelijk nog niet bereikt, en een klein aantal conversies kan instabiele kostenramingen opleveren.

| Onjuiste aanpak | Gecorrigeerde aanpak |
|---|---|
| Hetzelfde prestatieoordeel op elke leeftijd toepassen | Beoordelen aan het huidige mijlpaal van de cohort |
| Ontbrekend bewijs als bevestigde ondermaatse prestatie behandelen | `KEEP` teruggeven wanneer de steekproef onvoldoende is, tenzij een hoger geprioriteerde risicoregel een andere actie vereist |

De analyzer gebruikt configureerbare minimale FTD-steekproefgroottes voor dag 3, dag 4 en dag 7. Het meegeleverde voorbeeld gebruikt minimums van respectievelijk 10, 15 en 30 FTD's. Een cohort dat niet aan de relevante eis heeft voldaan, wordt niet automatisch als mislukking beschouwd.

Dit is geen toestemming om een echte accountbeperking of bevestigde fraude te negeren. Risicoregels worden afzonderlijk geëvalueerd en kunnen voorrang hebben op de steekproefgebaseerde prestatiebeslissing.

**Beslisimplicatie:** Behoud het onderscheid tussen "nog niet genoeg bewijs" en "genoeg bewijs om te stoppen". De twee condities mogen niet tot dezelfde conclusie leiden.

<details>
<summary><strong>Referentie van de steekproefvoldoendeheidsregel</strong></summary>

De beoogde checkpointregels zijn:

| Beoordelingscheckpoint | Voorbeeld minimale FTD-aantal |
|---|---:|
| Dag 3 | 10 |
| Dag 4 | 15 |
| Dag 7 | 30 |
| Dag 30 | Review van volwassen cohort |

De geconfigureerde waarden moeten vóór operationele inzet worden gevalideerd tegen de parametercellen van de feitelijke werkmap. Dag 30-rijpheid garandeert niet op zichzelf dat elk omzet- of attributieveld compleet is.

</details>

</details>

<details>
<summary><strong>Valkuil 3: Operationeel risico verwarren met slechte acquisitieprestatie</strong></summary>

**De beslissing:** Een leverancier verminderen of stoppen omdat het dashboard zwakke of onvolledige prestaties toont.

**De verborgen gebrekkigheid:** Het resultaat kan worden beïnvloed door een verbannen of beperkte account, vermoede fraude, trackingfalen, vertraagde attributie of andere operationele condities. Een prestatiemetriek alleen kan de oorzaak niet identificeren.

| Onjuiste aanpak | Gecorrigeerde aanpak |
|---|---|
| Elk ongunstig resultaat interpreteren als leveranciersondermaatse prestatie | Status van de risicopoort en triggerreden inspecteren |
| Doorgaan met opschalen omdat de kostenmetriek gunstig lijkt | Blokkerende risicocondities respecteren, zelfs wanneer de kostenmetriek aantrekkelijk is |
| Een waarschuwing als bevestigde bevinding behandelen | Gemarkeerde, vermoede en bevestigde condities onderscheiden |

De risicopoort scheidt blokkerende condities van situaties die menselijk onderzoek vereisen. Een verbannen account of bevestigde fraude kan verdere toewijzing blokkeren. Een gemarkeerde account of vermoede fraudeconditie kan review vereisen. Een geconfigureerde lage-uitgavenbeschermingsregel kan een voortijdige prestatiegebaseerde stop voorkomen.

**Beslisimplicatie:** De volgende actie moet de feitelijke faalwijze adresseren—accounttoegang, trackingintegriteit, traffickwaliteit, steekproefrijpheid of acquisitie-economie—in plaats van budgetwijzigingen als diagnosevervanging te gebruiken.

<details>
<summary><strong>Interpretatie van de risicopoort</strong></summary>

Het bronframework omvat de volgende condities:

| Conditie | Beoogde afhandeling |
|---|---|
| Accountstatus is `BANNED` | Blokkerende conditie; `STOP` aanbevelen |
| Accountstatus is `FLAGGED` | Waarschuwing die zorgvuldige interpretatie vereist |
| Frauderisico is `CONFIRMED` | Blokkerende conditie; `STOP` aanbevelen |
| Frauderisico is `SUSPECTED` | Handmatige review |
| FTD-steekproef is voldoende maar terugkerende-stortingsratio ligt onder het geconfigureerde minimum | Reviewconditie |
| Uitgaven liggen onder de geconfigureerde minimale-uitgavendrempel | Bescherming tegen voortijdige prestatiegebaseerde actie |

De exacte prioritering, toegestane statuswaarden en formulegedrag moeten vóór gebruik worden gecontroleerd tegen de ingezette werkmap. De tabel beschrijft het beoogde beslisframework, geen garantie dat elke externe platformstatus automatisch kan worden gedetecteerd.

</details>

</details>

</details>

<details>
<summary><strong>Voorbeeldscenario</strong></summary>

Beschouw een hypothetische leverancier die via een specifieke markt- en platformcombinatie is geacquireerd. De onderstaande cijfers illustreren hoe het framework geïnterpreteerd moet worden; het zijn geen gerapporteerde resultaten uit een live campagne.

| Metriek | Voorbeeldwaarde |
|---|---:|
| Uitgaven | 3,600 |
| FTD-aantal | 40 |
| Doel-cost-per-FTD | 100 |
| Aantal terugkerende stortingen | 12 |
| Behouden aantal op dag 3 | 20 |
| Accountstatus | Actief |
| Frauderisico | Geen gerapporteerd |

De cost per FTD is:

```text
3,600 / 40 = 90
```

Als de geconfigureerde schaalratio 85% is, is de schaaldrempel:

```text
100 × 85% = 85
```

De geobserveerde kosten van 90 liggen onder het doel van 100, maar zijn **niet** op of onder de schaaldrempel van 85. Onder dit voorbeeld activeert de kostenmetriek alleen daarom geen `SCALE`.

De terugkerende-stortingsratio is:

```text
12 / 40 = 30%
```

De dag 3-retentieratio is:

```text
20 / 40 = 50%
```

Deze cijfers voegen context toe over downstream-gedrag, maar mogen niet worden geïnterpreteerd als universeel goede of slechte ratio's. Hun betekenis hangt af van de relevante markt, het platform, het product, het attributievenster en de geconfigureerde benchmark.

De engine controleert vervolgens of de cohort het relevante checkpoint heeft bereikt, of de steekproef voldoende is en of een risicopoort de beslissing blokkeert of herleidt. Als de steekproef voldoende is en geen reviewconditie van toepassing is, valt het kostenresultaat tussen de voorbeeldschaal- en stopdrempels, dus de prestatiegebaseerde actie is `KEEP`.

De operationele conclusie is niet "deze leverancier is goed" of "deze leverancier is slecht". Het is: **de geobserveerde kosten zijn beter dan het doel maar voldoen niet aan de geconfigureerde schaalconditie; monitoring voortzetten tenzij een afzonderlijke risicoconditie de actie wijzigt.**

</details>

<details>
<summary><strong>Formulereferentie</strong></summary>

De volgende formules beschrijven de beoogde berekeningslogica. Het zijn referentiepatronen, geen vervanging voor het inspecteren van de exacte formules in een specifieke werkmaprelease. Celverwijzingen, tabelnamen, gestructureerde verwijzingen en spill-bereiken kunnen per implementatie verschillen.

<details>
<summary><strong>1. Ruwe invoer: recordsleutels en datakwaliteitscontroles</strong></summary>

**Doel:** Bronrecords identificeren en ontbrekende of inconsistente invoeren zichtbaar maken voordat berekende metrieken worden geïnterpreteerd.

Typische logica:

```excel
=IF([@Vendor_Name]="","",[@Vendor_Name]&"|"&[@Market]&"|"&[@Platform]&"|"&TEXT([@Launch_Date],"yyyymmdd"))
```

Dit is slechts een illustratief samengesteld-sleutelpatroon. De productiewerkmap kan een andere sleuteldefinitie gebruiken. Als meerdere records dezelfde leverancier, markt, platform en lanceerdatum delen, moet de sleutel een extra batch- of bronidentificator bevatten om uniek te blijven.

Een datakwaliteitsonde zou afzonderlijk ontbrekende verplichte velden, ongeldige datums, negatieve bedragen of aantallen en inconsistente funneltotalen moeten identificeren. Een gegenereerde sleutel is geen bewijs dat een record compleet of uniek is.

</details>

<details>
<summary><strong>2. KPI-engine: verstreken dagen, acquisitiekosten en conversieratio's</strong></summary>

**Doel:** Cohortleeftijd standaardiseren en vergelijkbare acquisitie- en funnelmetriken berekenen.

Verstreken dagen:

```excel
=Data_Date-Launch_Date+1
```

De `+1`-conventie behandelt de lanceerdatum als dag 1. Dezelfde conventie moet consistent worden gebruikt bij het toewijzen van dag 3-, dag 4-, dag 7- en dag 30-mijlpalen.

Cost per FTD:

```excel
=IF(FTD_Count>0,Spend_Amount/FTD_Count,0)
```

Cost per NAR:

```excel
=IF(NAR_Count>0,Spend_Amount/NAR_Count,0)
```

Registratie-naar-FTD-ratio:

```excel
=IF(NAR_Count>0,FTD_Count/NAR_Count,0)
```

FTD-naar-STD-ratio:

```excel
=IF(FTD_Count>0,STD_Count/FTD_Count,0)
```

Deze patronen gebruiken nul wanneer de noemer nul is om delingsfouten te vermijden. In rapportages mag een nuloutput echter niet worden verward met gemeten nulkosten of een bevestigde nulconversieratio. Toon waar praktisch een begeleidende steekproef- of noemerstatus.

</details>

<details>
<summary><strong>3. KPI-engine: retentie en CP Score</strong></summary>

**Doel:** Downstream-kwaliteitsindicatoren toevoegen aan acquisitiekostenvergelijkingen.

Een retentieratio-patroon is:

```excel
=IF(FTD_Count>0,Retained_Count/FTD_Count,0)
```

Het bronframework definieert de CP Score als een gewogen samengestelde score over drie componenten:

| Component | Gewicht |
|---|---:|
| Kostenefficiëntie | 50% |
| Terugkerende-stortingsgezondheid | 25% |
| Dag 3-retentie | 25% |

De score wordt genormaliseerd tegen geconfigureerde doelen en de minimale terugkerende-stortingsdrempel, en vervolgens afgekapt tot het bereik 0–100. Dit maakt het mogelijk om meerdere indicatoren samen te bekijken zonder te beweren dat de score een voorspellende waarschijnlijkheid is.

De score moet worden geïnterpreteerd naast de ruwe metrieken, steekproefgrootte, mijlpaal en risicopoortresultaat. Samengestelde scores kunnen wezenlijk verschillende onderliggende patronen verbergen als ze alleen worden weergegeven.

</details>

<details>
<summary><strong>4. Beslisengine: steekproefvoldoendeheid, risicopoorten en actiedrempels</strong></summary>

**Doel:** De beoogde beslissingsvolgorde afdwingen: steekproefvoldoendeheid, risicocontroles, dan benchmarkvergelijking.

De voorbeeldprestatiedrempels zijn:

```text
Scale threshold = Target Cost per FTD × 0.85
Stop threshold  = Target Cost per FTD × 1.25
```

Het meegeleverde framework gebruikt deze voorbeeldratio's als configureerbare parameters. De schaalregel is vervuld wanneer de cost per FTD op of onder de schaaldrempel ligt; de stopregel is vervuld wanneer de cost per FTD op of boven de stopdrempel ligt, onder voorbehoud van de toepasselijke beschermings- en risicoregels.

De beslissingsvolgorde op hoog niveau is:

```text
1. Evaluate blocking risk conditions.
2. Evaluate conditions requiring review.
3. Check sample sufficiency for the current milestone.
4. Apply the configured performance thresholds.
5. Return the action, trigger reason, and budget adjustment factor.
```

De actieengine mag niet toestaan dat een gunstige kostenmetriek een blokkerende risicoconditie omzeilt. Evenzo mag onvoldoende steekproefbewijs niet worden geïnterpreteerd als bewijs van slechte prestatie.

De budgetaanpassingsfactor wordt afgeleid uit de geconfigureerde actiemultiplicator. Het vertegenwoordigt een voorgestelde aanpassing, geen directe wijziging van het budget van een advertentieplatform.

</details>

<details>
<summary><strong>5. Executive dashboard: historische dag 30-backtesting</strong></summary>

**Doel:** Vroege aanbevelingen vergelijken met later geobserveerde uitkomsten zodat het team kan evalueren of zijn regels nuttig zijn.

Het bronframework beschouwt historische batches die ten minste 30 dagen hebben bereikt en positieve geregistreerde dag 30-omzet hebben. De voorbeeldbeoordelingsregels omvatten:

- Een vroege `SCALE`-beslissing wordt als succesvol beschouwd wanneer de dag 30-omzet gedeeld door de uitgaven ten minste 1.0 is.
- Een vroege `STOP`-beslissing wordt als correct beschouwd wanneer de bijbehorende dag 30-ROI onder 0.6 ligt.

Dit zijn configureerbare beoordelingsdefinities, geen universele standaarden. De bron stelt niet vast dat de drempels onafhankelijk zijn gevalideerd over markten of platforms heen.

Backtesting kan systematische fouten blootleggen—bijvoorbeeld het opschalen van cohorten die later hun uitgaven niet terugverdienen of het stoppen van cohorten die acceptabel zouden hebben gepresteerd. Resultaten blijven gevoelig voor attributievertraging, onvolledige omzetrecords, cohortselectie en veranderingen in bedrijfscondities.

</details>

</details>

<details>
<summary><strong>Validatieregels</strong></summary>

De werkmap is afhankelijk van consistente brongegevens, geldige cohortdatums, compatibele markt/platformbenchmarks en correct geconfigureerde drempels. De volgende regels beschrijven het beoogde validatiegedrag. Exacte dropdownwaarden en formuleniveaufoutafhandeling moeten worden geverifieerd tegen de ingezette werkmap.

| Veld of conditie | Validatieregel | Verwachte afhandeling |
|---|---|---|
| `Record_ID` | Elk bronrecord zou een bruikbare identificator moeten hebben; herhaalde samengestelde sleutels moeten worden onderzocht | Mogelijke duplicaten markeren in plaats van ervan uit te gaan dat records uniek zijn |
| `Vendor_Name` | Vereist voor het identificeren en herzien van een leveranciersrecord | Blanke leveranciersnamen mogen niet als geldige analytische records worden behandeld |
| `Market` | Moet overeenkomen met een geconfigureerde marktbenchmark | Niet-matcherende waarden onderzoeken; een ontbrekende benchmark kan een geldige doelvergelijking verhinderen |
| `Platform` | Moet overeenkomen met een geconfigureerde platformwaarde | Inconsistente spelling of niet-ondersteunde waarden onderzoeken |
| `Launch_Date` | Moet een geldige datum zijn | Ongeldige datums verhinderen een betrouwbare cohortleeftijdsberekening |
| `Data_Date` | Moet een geldige datum zijn en consistent met de observatieperiode | Ongeldige of inconsistente datums kunnen beoordelingsmijlpalen verkeerd classificeren |
| `Spend_Amount` | Moet numeriek en niet-negatief zijn | Negatieve waarden onderzoeken en ontbrekende uitgaven onderscheiden van echte nuluitgaven |
| `Impressions` | Moet een niet-negatief aantal zijn | Negatieve of niet-numerieke observaties onderzoeken |
| `Clicks` | Moet een niet-negatief aantal zijn | Negatieve waarden en onwaarschijnlijke relaties met vertoningen onderzoeken |
| `NAR_Count` | Moet een niet-negatief aantal zijn | Brondefinities en consistentie met de registratiefunnel controleren |
| `FTD_Count` | Moet een niet-negatief aantal zijn | Vereist voor cost-per-FTD- en gerelateerde conversieberekeningen |
| `FTD_Amount` | Moet numeriek zijn en consistent met de valutaconventie van de bron | Ontbrekende waarden of valutadiscrepanties onderzoeken |
| `STD_Count` en `TTD_Count` | Moeten niet-negatieve aantallen zijn | Evenementdefinities en verwachte funnelrelaties verifiëren |
| `D2_Retained_Count`, `D3_Retained_Count`, `D7_Retained_Count` | Moeten niet-negatieve aantallen zijn met een consistente retentienoemer | Aantallen onderzoeken die de in aanmerking komende cohort overschrijden of inconsistente observatievensters weerspiegelen |
| `Day30_Actual_Revenue` | Moet numeriek zijn en consistent geïnterpreteerd met de gekozen valuta en omzetdefinitie | Onvolledige of onrijpe observaties naar behoefte van backtesting uitsluiten |
| `Account_Status` | Moet een erkende statuswaarde gebruiken | Verbannen of gemarkeerde condities moeten de geconfigureerde risicoregels volgen |
| `Fraud_Risk_Tag` | Moet een erkende risicoclassificatie gebruiken | Bevestigde en vermoede gevallen mogen niet als gelijkwaardig worden behandeld |
| `Analyst_Notes` | Relevante trackingincidenten, attributievertragingen, beperkingen of handmatige bevindingen registreren | Biedt context voor latere review en backtesting |
| Benchmarklookup | Markt- en platformcombinatie moet resoluteren naar de beoogde benchmark | Lookupfouten onderzoeken in plaats van stilletjes een onrelatie doel te substitueren |
| Steekproefvoldoendeheid | Het relevante checkpoint moet zijn geconfigureerde minimale steekproefgrootte halen | Onrijp bewijs gescheiden houden van bevestigde ondermaatse prestatie |
| Risicopoort | Blokkerende en reviewcondities moeten worden geëvalueerd vóór prestatiegebaseerde acties | Voorkomen dat gunstige kostenmetrieken blokkerende condities omzeilen |
| Formule-spill-bereiken | Bestemmingscellen moeten vrij blijven voor dynamische-arrayresultaten | Obstakelcellen wissen als Excel `#SPILL!` meldt |
| Berekeningsmodus | Werkmap zou automatische herberekening moeten gebruiken | Herberekenen als resultaten verouderd lijken |
| Formuleverwijzingen | Formulebereiken en geconfigureerde tabelnamen moeten intact blijven | `#REF!`-, `#VALUE!`- en soortgelijke fouten onderzoeken voordat aanbevelingen worden gebruikt |

<details>
<summary><strong>Datakwaliteits- en foutafhandelingsnotities</strong></summary>

- **Nulnoemer:** Kosten- en conversieformules kunnen `0` teruggeven wanneer hun noemer nul is. Dit voorkomt een delingsfout maar stelt geen gemeten nulkosten of conversieratio vast. Bekijk het onderliggende aantal voordat je het resultaat interpreteert.
- **Niet-matcherende markt/platform:** Een benchmarklookupfout moet op bron- of configuratieniveau worden opgelost. Ga niet ervan uit dat een ontbrekend doel betekent dat de leverancier zijn doel heeft gehaald.
- **Ontbrekende leveranciersnaam:** De recordidentificator kan leeg blijven wanneer het veld voor de leveranciersnaam leeg is, afhankelijk van de ingezette formule.
- **Dynamische-array-spillfouten:** Wis cellen die het beoogde spill-bereik blokkeren. Overschrijf geen formulegegenereerde uitvoercellen om een resultaat af te dwingen.
- **Verouderde berekeningen:** Controleer de berekeningsmodus van Excel en herbereken indien nodig.
- **Valutaopmaak:** Weergaveformaten converteren geen waarden tussen valuta's. Bevestig dat bronbedragen en geconfigureerde benchmarks een consistente valutabasis gebruiken.
- **Retentie- en funnellaantallen:** Controleer noemerdefinities en observatievensters. Een wiskundig geldige ratio kan nog steeds misleidend zijn wanneer bronerevenementen verschillende cohortdefinities gebruiken.

Validatie vermijdbare fouten verminderd, maar kan niet vaststellen dat elk bronrapport compleet is, elke conversie legitiem is of elk attributieevenement correct is toegewezen. Die condities vereisen operationele controles en afstemming met de onderliggende platforms.

</details>

</details>

<details>
<summary><strong>Runtimesvereisten</strong></summary>

| Item | Vereiste of aanbeveling |
|---|---|
| Excel-versie | Microsoft 365 aanbevolen; Excel 2021 of later is de beoogde basis |
| Formulecompatibiliteit | Gebruikt moderne Excel-functionaliteit, waaronder dynamische arrays en geavanceerde functies zoals `LET`, `FILTER`, `SORT`, `XLOOKUP`, `MAP`, `LAMBDA`, `HSTACK` en `VSTACK` |
| Oudere Excel-versies | Excel 2019 en eerder worden niet ondersteund door de beoogde formulearchitectuur |
| Werkmapformaat | `.xlsx` of `.xlsb`, onder voorbehoud van compatibiliteitstests van het geleverde bestand |
| Samenwerking | OneDrive of SharePoint kunnen gedeelde workflows ondersteunen; vermijd gelijktijdige structurele bewerkingen van de invoertabel |
| Voorgestelde werkschaal | Tot ca. 10.000 records voor routinegebruik; test prestaties vóór uitbreiding richting 50.000 records |
| Historische gegevens | Archiveer oudere, volwassen records periodiek wanneer de actieve werkmap moeilijk te onderhouden wordt |

De daadwerkelijk ondersteunde versie moet worden bevestigd tegen de werkmaprelease die wordt gedistribueerd. De beschikbaarheid van een functie in een Excel-versie garandeert niet op zichzelf dat elke formule zich in alle omgevingen identiek gedraagt.

</details>

<details>
<summary><strong>Bedieningsprocedure</strong></summary>

<details>
<summary><strong>Tweewekelijkse leveranciers- en budgetreview</strong></summary>

1. **Bronrecords importeren.** Werk `02_Raw_Input` bij met de nieuwste beschikbare leveranciers-, markt-, platform-, uitgaven-, conversie-, retentie- en risicoinformatie.
2. **Datakwaliteit controleren.** Bekijk ontbrekende identificatoren, niet-matcherende benchmarks, inconsistente datums, onwaarschijnlijke aantallen en trackingincidenten.
3. **Beslispoorten herzien.** Onderscheid onvoldoende steekproeven, operationeel risico en prestatiegebaseerde aanbevelingen.
4. **Dashboard herzien.** Gebruik de executive snapshot en actielijst om de budgetreview voor te bereiden. Bevestig de triggerreden voordat je een toewijzing wijzigt.
5. **Beslissing vastleggen.** Documenteer relevante context en handmatige overrides in de juiste operationele registraties.
6. **Volwassen cohorten herzien.** Vergelijk vroege beslissingen met beschikbare dag 30-uitkomsten en onderzoek systematische fouten.

</details>

<details>
<summary><strong>Parameteronderhoud</strong></summary>

- Werk markt-/platformbenchmarkwaarden bij wanneer de doeleconomie van het bedrijf verandert.
- Pas steekproefdrempels en actioratio's aan via het configuratiegebied in plaats van individuele beslisformules te bewerken.
- Voeg nieuwe markten of platforms alleen toe na het bijwerken van de relevante benchmark- en validatieconfiguratie.
- Behoud formulegegenereerde bereiken en verifieer outputs na structurele wijzigingen.
- Test representatieve gevallen opnieuw na het wijzigen van risicoregels of beslisdrempels.

</details>

</details>

<details>
<summary><strong>Beperkingen</strong></summary>

Deze analyzer is een op regels gebaseerd beslisondersteuningsframework. Het is geen voorspellende garantie voor dag 30-omzet en voert geen campagne-, betalings- of accountacties automatisch uit.

Vroege acquisitiesignalen kunnen veranderen door attributievertraging, latere terugvorderingen, trackingfalen, platformbeperkingen en verschillen in cohortkwaliteit. Een aanbeveling is alleen zo betrouwbaar als de onderliggende data, benchmarkdefinities, steekproefvereisten en regels.

Dag 30-backtesting kan helpen identificeren waar regels aangepast moeten worden, maar historische prestatie garandeert geen toekomstige nauwkeurigheid. Resultaten moeten worden gesegmenteerd naar relevante markt, platform en bedrijfscondities waar voldoende gegevens bestaan.

</details>

<details>
<summary><strong>Probleemoplossing</strong></summary>

| Symptoom | Waarschijnlijke oorzaak | Aanbevolen controle |
|---|---|---|
| `#SPILL!` | Cellen blokkeren een dynamisch-arrayuitvoerbereik | Obstakelcellen wissen zonder de bronformule te verwijderen |
| `#N/A` in benchmarkafhankelijke resultaten | Markt/platformcombinatie komt niet overeen met geconfigureerde referentiewaarden | Spelling, toegestane waarden en benchmarkdekking controleren |
| Onverwachte nulkosten of -ratio | De noemer kan nul, ontbrekend of nog niet gerapporteerd zijn | Onderliggende aantallen en gegevensvolledigheidsstatus inspecteren |
| Resultaten worden niet bijgewerkt | Berekeningsmodus of werkmapafhankelijkheden kunnen onjuist zijn | Automatische berekening bevestigen en herberekenen |
| Leveranciersidentificator is leeg | Vereiste bronvelden kunnen ontbreken | Het veld voor de leveranciersnaam en de identificatorformule controleren |
| Onwaarschijnlijke retentie- of conversieratio | Aantallen kunnen inconsistente cohortdefinities of observatievensters gebruiken | Evenementdefinities en in aanmerking komende populatie afstemmen |
| Onverwachte `SCALE`- of `STOP`-aanbeveling | Configuratie, risicoprioriteit of benchmarkselectie kan niet overeenkomen met verwachtingen | Triggerreden, toepasselijke benchmark, steekproefstatus en geconfigureerde drempels inspecteren |

</details>

</details>

## De bedrijfslogica & methodologie

De analyzer is ontworpen rond een praktisch acquisitiemanagementprobleem: vroege gegevens zijn ruim beschikbaar voordat de langetermijnwaarde van een leverancier zeker is, maar budgetbeslissingen kunnen niet altijd wachten tot elke cohort rijp is. Het doel is die onzekerheid te structureren zodat beslissingen consistent kunnen worden herzien in plaats van te worden genomen op basis van één aantrekkelijke of alarmerende metriek.

- **Mijlpaalgebaseerde beoordeling** scheidt de beslissingen op dag 3, dag 4 en dag 7. Het helpt het team om te voorkomen dat een onrijpe cohort wordt behandeld alsof deze dezelfde bewijskracht heeft als een volwassen.
- **Benchmarkvergelijking** beoordeelt acquisitiekosten tegen het doel voor de relevante markt en het relevante platform. Dit maakt leveranciersvergelijkingen commercieel zinvoller dan het toepassen van één universele kostendrempel over verschillende bedrijfscondities.
- **Risicogating** scheidt accountbeperkingen en vermoede of bevestigde fraude van gewone prestatieproblemen. Het helpt het team te identificeren wanneer de volgende stap onderzoek of risicobeheersing moet zijn in plaats van een routinematige budgetaanpassing.
- **Multi-indicatorreview** combineert acquisitiekosten met funnelgedrag, terugkerende-stortingssignalen en retentie. Dit biedt meer context om te beoordelen of goedkope acquisitie gepaard gaat met bewijs van downstream-kwaliteit.
- **Dag 30-backtesting** vergelijkt vroege aanbevelingen met later geregistreerde uitkomsten. Het biedt een manier om te herzien of de huidige regels systematisch te agressief, te conservatief of onvoldoende gevoelig voor specifieke bedrijfscondities zijn.

Deze methoden werken samen als een beslissingsvolgorde: vaststellen of het bewijs bruikbaar is, controleren of risicocondities van toepassing zijn, prestatie vergelijken met het juiste doel, en vervolgens de aanbeveling herzien tegen latere uitkomsten.

Het resultaat is geen claim dat vroege prestatie met zekerheid bekend kan zijn. Het is een herhaalbaar proces om vroege beslissingen transparanter te maken, te documenteren waarom een actie werd voorgesteld en de regels te verbeteren naarmate beter bewijs beschikbaar komt.

## Andere tools in deze serie

Theseus Workshop ontwikkelt lichtgewicht business-analyse- en beslisondersteuningstools voor terugkerende operationele problemen.

- **Bouwkostenschatting & projectbeheersing** — Koppelt schattingsaannames aan kosten- en uitvoeringstracking op projectniveau.
- **Voorraadreconciliatie & shrinkage-analyse** — Helpt discrepanties tussen voorraadrecords en locaties te identificeren.
- **Order-niveau winstgevendheid & financiële reconciliatie** — Structureert omzet- en kostenanalyse rond individuele orders.
- **Business forecasting & scenarioplanning** — Helpt financiële uitkomsten te evalueren onder alternatieve bedrijfsaannames.

Verken de gerelateerde projecten op het [Theseus Workshop GitHub-profiel](https://github.com/HyVoid). Bevestig de beschikbaarheid en huidige reikwijdte van elke repository voordat je deze voor operationeel gebruik adopteert.

## Licentie

Dit project is bedoeld om te worden gedistribueerd onder de **Apache-licentie 2.0**.

Voeg vóór het publiceren van een release het toepasselijke `LICENSE`-bestand toe aan de repository en bevestig dat de licentie de daadwerkelijk gedistribueerde bestanden dekt. Als de browserversie, de Excel-werkmap of assets van derden afzonderlijke licentievoorwaarden hebben, documenteer die voorwaarden expliciet in plaats van ervan uit te gaan dat elke component op dezelfde manier wordt gedekt.
