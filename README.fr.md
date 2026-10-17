[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Excel pour affiliés et achat média iGaming : calculateur de coût par FTD (C/FTD) et analyseur de cohortes de trafic
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/53808d1c-6d13-4502-a81d-ef846d596902" />
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/268198c3-9abc-4547-9c47-42f447f390e6" />

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346.svg)
![Category](https://img.shields.io/badge/Tool-iGaming%20UA%20%26%20Affiliate%20BI-2251FF.svg)

**Un analyseur de performance pour affiliés et achat média iGaming, un calculateur de coût par depositant primo-acquéreur (C/FTD / CPFTD) et un modèle Excel de décision précoce sur les cohortes. Conçu pour les responsables d'acquisition d'utilisateurs (UA) de casinos et de paris sportifs, les directeurs d'affiliation et les marketeurs à la performance, afin d'évaluer les cohortes de joueurs D3/D4/D7, d'isoler les bannissements de comptes publicitaires et la fraude par abus de bonus, et d'automatiser l'allocation budgétaire avec `SCALE / KEEP / STOP / REVIEW`—disponible comme simulateur gratuit dans le navigateur (sans inscription) et comme classeur Microsoft Excel téléchargeable.**

> **Accédez aux outils d'analyse de trafic et de décision C/FTD pour l'iGaming**
>
> - 🌐 **[Lancez l'analyseur gratuit de C/FTD et de trafic iGaming dans le navigateur](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)** — Auditez les cohortes précoces des fournisseurs, testez les seuils minimaux d'échantillons de FTD et simulez les règles budgétaires d'achat média directement dans votre navigateur, sans installer de logiciel ni créer de compte.
> - 📥 **[Téléchargez le classeur Excel pour affiliés et achat média iGaming (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** — Obtenez le modèle de tableur complet pour les revues budgétaires bimensuelles hors ligne, la calibration des références multi-GEO et le backtest historique du ROI à J30.
>
> *Aucune inscription. Aucune installation. Accès gratuit via le navigateur. *

---

## Métriques clés d'acquisition d'utilisateurs iGaming et points sensibles de trafic résolus

Plutôt que de juger les fournisseurs de trafic sur le volume brut d'inscriptions ou des pics précoce de CPA bruités, ce cadre fondé sur des règles relie la progression précoce du tunnel de joueurs à des portes d'échantillonnage statistiques. Voici comment l'analyseur relie les **points sensibles de l'achat média et de l'affiliation iGaming** aux métriques auditables de **FTD et de rétention** :

| Point sensible UA et affiliation iGaming | Mécanisme d'évaluation et de filtrage fondé sur des règles | KPIs clés de casino et de paris sportifs suivis |
| :--- | :--- | :--- |
| **Coût par depositant primo-acquéreur (C/FTD) incontrôlé** | Compare le coût d'acquisition du fournisseur à des matrices d'objectifs spécifiques par GEO et plateforme sur les marchés Tier-1 à Tier-3. | Coût par FTD (`C/FTD` / `CPFTD`), écart au C/FTD cible (%), coût par inscription (`CPR`) |
| **Volume d'inscriptions cosmétique et conversion de tunnel faible** | Suit la progression des joueurs après l'inscription initiale pour isoler les sources de trafic qui ne convertissent pas en depositants récurrents. | Inscriptions actives nettes, taux de conversion inscription vers FTD (%), ratio de dépôts récurrents, rétention précoce des joueurs |
| **Passage à l'échelle ou arrêt prématuré sur de petites cohortes** | Impose des planchers de dépense minimaux et des seuils d'échantillons de FTD à J3, J4 et J7 avant de déclencher des changements budgétaires. | Plancher de dépense minimale ($300), suffisance d'échantillon de FTD (`D3 >= 10`, `D4 >= 15`, `D7 >= 30`) |
| **Bannissements de comptes publicitaires, cloaking et fraude aux bonus** | Distingue la contre-performance réelle du fournisseur des comptes publicitaires restreints, des postbacks défaillants ou de la fraude aux dépôts de base. | État de santé du compte publicitaire (`Restricted` / `Banned`), indicateurs de risque de fraude, alertes d'anomalie de zéro dépôt récurrent |
| **Allocations budgétaires subjectives d'achat média** | Traduit les métriques de cohortes multi-portes en commandes d'acheminement budgétaire déterministes et explicables avec piste d'audit. | Indicateurs d'action automatisés `SCALE` (+30 % de budget), `KEEP`, `STOP` ou `REVIEW` + ID de la règle déclencheuse |
| **Seuils d'arrêt précoces non validés** | Rétroteste les décisions J3–J7 sur la performance mature des cohortes à J30 pour vérifier si les règles précoces éliminent des joueurs rentables de forte valeur. | Validation des cohortes matures à J30, taux de faux positifs `STOP`, alignement LTV/ROAS entre stade précoce et mature |

---

## Tutoriel pas à pas : auditer les fournisseurs de trafic iGaming et automatiser les décisions budgétaires

L'analyseur fonctionne selon un **rythme de revue bimensuelle de l'UA iGaming reproductible** : configurez une fois vos références GEO/canal, collez les exports bruts du tracker, examinez les indicateurs d'action déclenchés par les règles, puis retrotestez contre les données matures des joueurs à J30.

### Étape 1 : Configurer les références GEO, les portes d'échantillonnage et les règles de C/FTD
Ouvrez l'onglet dédié `Configuration & Thresholds` pour établir l'économie unitaire de votre opérateur et les garde-fous statistiques :

- **Plancher de protection de dépense minimale :** Valeur par défaut de `300 unités monétaires` (évite d'éliminer prématurément des campagnes de test sous-dépensées).
- **Portes de suffisance d'échantillon de FTD par cohorte :** Exige au moins `10 FTD à J3`, `15 FTD à J4` et `30 FTD à J7` avant que les règles de performance ne s'appliquent.
- **Déclencheurs automatiques d'actions budgétaires :**
  - Seuil de `SCALE` : lorsque le `C/FTD réel <= 85%` de l'objectif applicable GEO/plateforme (déclenche une suggestion d'augmentation d'allocation budgétaire de `+30%`).
  - Seuil de `STOP` : lorsque le `C/FTD réel >= 125%` de l'objectif applicable (sous réserve de la suffisance de l'échantillon).

*(Remarque : les valeurs par défaut sont des points de référence illustratifs. Calibrez les objectifs selon vos marges NGR réelles de casino/paris sportifs, votre juridiction de licence et vos coûts de traitement des paiements.)*

### Étape 2 : Importer les exports de postbacks S2S, d'affiliation et de plateformes publicitaires
Exportez les journaux de performance des cohortes depuis votre logiciel de suivi d'affiliation (ex. Affilka, Income Access, Cellxpert, Scaleo), votre MMP (AppsFlyer, Adjust) ou vos régies publicitaires (Meta, Google Ads, Telegram, DSP programmatiques) et collez-les dans la feuille d'entrée :

- **Métadonnées de campagnes et de fournisseurs :** ID fournisseur/affilié, GEO/marché cible, plateforme de trafic, date de lancement et date d'instantané des rapports.
- **Métriques de haut de tunnel et de dépense :** Dépense publicitaire totale, impressions, clics et inscriptions nettes de joueurs actifs.
- **Signaux de monétisation et de risque des joueurs :** Dépôts primo-acquéreurs (nombre de FTD), décomptes de dépôts récurrents, rétention précoce de la cohorte, état de santé du compte publicitaire et annotations manuelles de risque de fraude.

*(Conservez des fenêtres d'attribution et des unités monétaires cohérentes sur toutes les lignes importées.)*

### Étape 3 : Auditer les KPIs de cohortes et exécuter les actions `SCALE / KEEP / STOP / REVIEW`
Accédez aux vues `Decision Engine & KPI Dashboard` pour inspecter l'évaluation automatisée de chaque lot de fournisseurs actifs :

- **Contrôle de suffisance statistique :** Vérifiez si un C/FTD élevé est un échec réel (`STOP`) ou simplement une cohorte sous-échantillonnée dirigée vers `KEEP / MONITOR`.
- **Porte opérationnelle et anti-fraude :** Vérifiez si les campagnes aux FTD suspects de bon marché mais sans aucun dépôt récurrent—ou aux comptes publicitaires restreints—ont été interceptées et dirigées vers `REVIEW`.
- **Audit d'actions explicables :** Lisez la règle exacte qui s'est déclenchée derrière chaque recommandation avant d'ajuster les plafonds d'achat média ou les accords CPA avec les affiliés.

### Étape 4 : Rétrotester contre les résultats matures à J30 et exporter vers Excel
Exécutez ce flux de travail deux fois par semaine pendant les phases de diffusion actives. Dès que les cohortes historiques de joueurs atteignent la **maturité à J30**, consignez leurs résultats réalisés dans la vue de validation historique pour vérifier si vos seuils de C/FTD à J3 et J7 ont correctement prédit la qualité des joueurs à long terme.

> 🎰 **Prêt à standardiser vos revues bimensuelles du trafic et de l'affiliation iGaming ?** 
> Après avoir testé les portes de décision dans l'**[analyseur C/FTD iGaming gratuit dans le navigateur](https://hyvoid.github.io/igaming-affiliate-ftd-analyzer-excel/)**, téléchargez le **[classeur Excel réutilisable d'évaluation des fournisseurs iGaming (.xlsx)](https://theseusworkshop.com/l/fccmw?utm_source=github&utm_medium=GitHub%20README)** pour conserver des journaux d'audit hors ligne, stocker vos matrices de références multi-GEO propriétaires et exécuter des backtests de cohortes récurrents avec votre équipe UA.

---

## Pourquoi j'ai construit ce cadre d'évaluation de trafic iGaming fondé sur des règles

Dans l'acquisition d'utilisateurs iGaming à haute vélocité, les rapports précoces sur les cohortes créent un piège opérationnel coûteux : **les métriques paraissent mathématiquement précises bien avant d'être statistiquement fiables pour justifier un passage à l'échelle ou une coupe budgétaire.**

Considérez trois modes d'échec courants lors d'une revue de campagne précoce :
1. **L'illusion de l'inscription bon marché :** Une source de trafic délivre un volume massif d'inscriptions à un CPI/CPR plancher, mais convertit presque zéro depositant primo-acquéreur (FTD).
2. **La cohorte VIP à combustion lente :** Un fournisseur PPC ou SEO paraît coûteux au C/FTD à J3, mais attire des joueurs de paris sportifs ou de machines à sous à forte intention qui redéposent massivement d'ici J14.
3. **Perturbations de plateforme et de suivi :** Une agence d'achat média historiquement solide montre un pic soudain de C/FTD—non pas parce que la qualité du trafic a dégradé, mais parce qu'un compte publicitaire a subi une restriction masquée ou qu'un pixel de postback S2S a cassé.

### Le « piège de la cohorte à J3 » : Fournisseur A vs Fournisseur B
Imaginez une revue budgétaire à J3 où le **référentiel de coût par FTD (C/FTD) cible est de 40 $** :
- **Le Fournisseur A** a dépensé **300 $** et généré **10 FTD** $\rightarrow$ `C/FTD = $30` (il satisfait la porte d'échantillon à J3 de 10 FTD).
- **Le Fournisseur B** a dépensé **100 $** et généré **2 FTD** $\rightarrow$ `C/FTD = $50` (25 % pire que le référentiel de 40 $).

Dans un tableur naïf, un acheteur média arrête immédiatement le Fournisseur B pour dépassement du CPA cible et passe à l'échelle avec le Fournisseur A. Or, le Fournisseur B n'a généré que **2 FTD**—très en dessous du plancher d'échantillon statistique de 10 FTD et du seuil de protection de dépense de 300 $. Couper le Fournisseur B à J3 est une **résiliation prématurée induite par le bruit des petits échantillons**. Parallèlement, avant d'accorder au Fournisseur A 30 % de budget supplémentaire, l'analyste doit encore vérifier que ces 10 FTD ne sont pas des abuseurs de bonus de base sans aucun dépôt récurrent.

J'ai construit cet analyseur pour transformer cette logique de diagnostic exacte en un **cadre de décision reproductible et fondé sur des règles**—éliminant les débats instinctifs lors des réunions budgétaires bimensuelles.

---

## Tableurs d'affiliation ad hoc vs moteur de décision iGaming fondé sur des règles

| Dimension d'évaluation UA iGaming | Trackers ad hoc traditionnels et revues instinctives | Analyseur de fournisseurs iGaming fondé sur des règles (cet outil) |
| :--- | :--- | :--- |
| **Décisions de mise à l'échelle précoce (J3–J7)** | Les acheteurs média montent les budgets de façon agressive sur la base de quelques FTD précoces bon marché, s'exposant fortement à un trafic de faible LTV. | Impose des **portes d'échantillon de FTD à D3 (10), D4 (15) et D7 (30)** plus des contrôles de dépôts récurrents avant d'émettre un indicateur `SCALE` (+30 %). |
| **Coupes de fournisseurs contre-performants** | Des affiliés ou des ensembles d'annonces prometteurs sont suspendus prématurément en raison d'une forte variance de C/FTD sur de faibles volumes de dépense. | Applique un **plancher de protection de dépense minimale de 300 $** et un contrôle de suffisance d'échantillon pour séparer le bruit statistique de l'échec réel (`STOP`). |
| **Détection de fraude de base et d'abus de bonus** | Les inscriptions bon marché et les dépôts de base minimaux masquent des anneaux de bots automatisés ou un trafic d'incitation à rétention nulle. | Recoupe l'efficacité du C/FTD avec **la progression des dépôts récurrents, la rétention précoce et les annotations de fraude** pour déclencher `REVIEW`. |
| **Bannissements de comptes publicitaires et pannes de postbacks** | Les chutes soudaines de conversion de FTD causées par des restrictions de comptes Meta/Google ou des bugs de suivi S2S sont imputées à la qualité du fournisseur. | Des **portes dédiées de santé de compte et de risque opérationnel** isolent les comptes restreints pour remédiation manuelle plutôt qu'une résiliation aveugle. |
| **Référencement multi-GEO et multicanal** | Les analystes appliquent des objectifs de C/FTD mentaux incohérents entre les marchés Tier-1 (Royaume-Uni/UE), LatAm (Brésil/Mexique) et asiatiques. | Centralise une **matrice de références configurable GEO × Plateforme** pour que chaque fournisseur soit évalué selon des objectifs régionaux standardisés. |
| **Calibration des seuils et backtest à J30** | Les règles d'arrêt précoces à J3/J7 ne sont jamais auditées contre la rentabilité mature des cohortes à 30 jours. | Lie les lots de décisions précoces aux **enregistrements de résultats matures à J30** pour auditer les faux positifs et affiner les bandes de tolérance du C/FTD. |

---

## À qui est destiné cet analyseur iGaming : rôles et flux de travail

Cette boîte à outils d'évaluation à double format (Navigateur + Excel) est conçue pour les équipes de marketing à la performance et commerciales des casinos en ligne, des paris sportifs et des agences iGaming :

- **Responsables UA et marketing à la performance iGaming :** Standardisez vos réunions bimensuelles d'allocation budgétaire. Utilisez le **calculateur de décision de coût par FTD (C/FTD)** pour défendre les actions `SCALE`, `KEEP` et `STOP` avec des preuves transparentes et fondées sur des règles, sur Meta, Google, TikTok et les DSP programmatiques.
- **Responsables d'affiliation casino et paris sportifs :** Auditez objectivement les partenaires d'affiliation externes et les réseaux de sous-affiliés. Utilisez l'**analyseur de qualité des cohortes précoces** pour repérer l'abus de CPA de base (des affiliés qui livrent des FTD de dépôt minimal sans aucun dépôt récurrent) avant de verser des commissions non plafonnées.
- **Agences d'achat média et équipes d'arbitrage :** Protégez vos budgets publicitaires sur des canaux de trafic volatils. Utilisez le **classeur de dépense minimale et de portes d'échantillonnage** pour éviter que des acheteurs média juniors n'éliminent des campagnes à fort potentiel pendant la phase d'apprentissage à J3 ou ne passent à l'échelle avec des comptes publicitaires restreints.
- **Analystes BI, responsables croissance et équipes CRM iGaming :** Comblez l'écart entre les exports d'attribution bruts et les rapports de direction. Utilisez la **feuille de backtest historique à J30** pour calibrer si vos seuils précoces de C/FTD D3/D7 corrèlent réellement avec le revenu net du jeu (NGR) mature à 30 jours.
- **CMOs, directeurs de la croissance et détenteurs de budget :** Établissez une gouvernance centralisée des dépenses d'acquisition externes sans attendre des mois pour construire des pipelines BI d'entrepôt de données sur mesure.

---

## Cas d'usage sectoriels et scénarios d'acquisition iGaming de longue traîne

Que vous lanciez un nouveau casino crypto, que vous développiez un bookmaker LatAm localisé ou que vous gériez plus de 50 affiliés CPA/Hybrid, ce cadre s'adapte aux scénarios spécifiques de trafic iGaming :

### 1. Audit de la qualité des accords CPA et Hybrid d'affiliation (prévention de la fraude de base)
Dans les structures d'affiliation CPA et Hybrid, les sources de trafic peu scrupuleuses manipulent souvent le seuil de dépôt de base—générant des FTD bon marché qui ne placent jamais un second pari. En évaluant **les ratios de dépôts récurrents et la rétention précoce en parallèle du C/FTD**, les responsables d'affiliation peuvent diriger les lots de trafic suspects vers `REVIEW` avant d'approuver des relèvements de plafond.

### 2. Achat média à forte volatilité sur les réseaux sociaux et in-app (Meta, Google, Telegram et Pop/Push)
Les campagnes média payantes dans les verticaux iGaming restreints font face à des bannissements fréquents de comptes publicitaires, des rejets créatifs et des chutes de suivi d'attribution. La **Porte de Santé des Comptes** de l'analyseur garantit que lorsqu'un fournisseur performant subit une restriction côté plateforme, la campagne est signalée pour protection opérationnelle plutôt que classée à tort comme trafic de mauvaise qualité.

### 3. Calibration de lancements de paris sportifs et de casinos multi-GEO (Tier-1 vs marchés émergents)
Un C/FTD de 35 $ peut être très rentable dans des juridictions régulées européennes ou nord-américaines, mais catastrophique sur des marchés émergents à fort volume et faible ARPU (comme le Brésil, l'Inde ou le LatAm). Utilisez la **Matrice de Références Marché × Plateforme** pour normaliser l'évaluation des fournisseurs entre des devises variées et des économies régionales de joueurs.

---

### Périmètre opérationnel et avertissement analytique
*Cette boîte à outils est un modèle d'aide à la décision fondé sur des règles pour les cohortes précoces—ni un tracker d'attribution S2S en temps réel, ni un pare-feu anti-fraude, ni un moteur prédictif de LTV au niveau du joueur, ni un registre financier statutaire. Un C/FTD favorable à J3 ou J7 ne garantit pas le revenu net du jeu (NGR) ni la rentabilité nette à J30. Veillez toujours à ce que les données importées utilisent des fenêtres d'attribution et des unités monétaires cohérentes, et combinez les résultats du tableur avec une revue expérimentée des risques et de la conformité.*

---

## À propos du créateur

Je construis des outils d'aide à la décision légers et inspectables pour les flux opérationnels à enjeux élevés, où trop de variables en mouvement se perdent dans des tableurs déconnectés. La question directrice est simple : **quelles preuves exactes et quels garde-fous statistiques doivent se trouver au même endroit pour prendre la prochaine décision budgétaire en confiance ?**

## Détails techniques

<details>
<summary>Pour les relecteurs techniques, praticiens Excel et collaborateurs</summary>

<details>
<summary><strong>Architecture du classeur</strong></summary>

L'analyseur utilise cinq feuilles de calcul connectées. Chaque feuille a une responsabilité définie, séparant la configuration, les preuves brutes, le calcul des métriques, les règles de décision et la revue de direction.

| Feuille de calcul | Responsabilité | Sortie principale |
|---|---|---|
| `01_Config_Rules` | Configuration centrale des devises, références, seuils d'échantillon, règles de risque et multiplicateurs d'action | Paramètres opérationnels ajustables |
| `02_Raw_Input` | Stocke les données d'acquisition, de conversion, de rétention, de dépense et de risque au niveau du fournisseur | Enregistrements sources validés |
| `03_KPI_Engine` | Calcule les jours écoulés, les jalons d'évaluation, les coûts d'acquisition, les taux de tunnel, la rétention et le CP Score | Métriques de performance comparables |
| `04_Decision_Engine` | Applique dans l'ordre suffisance d'échantillon, portes de risque et seuils de performance | SCALE, KEEP, STOP ou REVIEW |
| `05_Exec_Dashboard` | Présente l'instantané de direction, la liste d'actions et la revue historique à J30 | Preuves de revue budgétaire et backtest des décisions |

Le flux de données prévu est :

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

Les valeurs de configuration alimentent les calculs et les règles de décision. Les enregistrements bruts fournissent les observations. Le moteur de KPI transforme ces observations en métriques comparables, et le moteur de décision applique les règles configurées. Le tableau de bord présente les résultats pour revue.

Cette séparation est volontaire : modifier une référence ne devrait pas exiger de reconstruire la logique de calcul du classeur, et une métrique de performance favorable ne devrait pas contourner une condition de risque bloquante.

<details>
<summary><strong>Dépendance entrée-sortie</strong></summary>

| Entrée ou condition | Calcul affecté | Implication pour la décision |
|---|---|---|
| Dépense et nombre de FTD | Coût par FTD | Comparaison des coûts d'acquisition |
| Nombre de NAR | Coût par NAR | Coût d'acquisition de l'événement NAR configuré |
| Nombres d'inscriptions, de FTD et de STD | Taux de conversion du tunnel | Identifie les fuites de conversion |
| Nombres retenus à J2, J3 et J7 | Taux de rétention | Ajoute des preuves de qualité précoce |
| Date de lancement et date des données | Jours actifs et jalon d'évaluation | Détermine si la cohorte a atteint un point de contrôle |
| État du compte et risque de fraude | Porte de risque | Peut bloquer ou qualifier des recommandations fondées sur la performance |
| Marché et plateforme | Recherche de la référence cible | Établit l'objectif de comparaison applicable |
| Revenus matures à J30 | Revue historique des résultats | Soutient l'évaluation rétrospective des règles |

</details>

</details>

<details>
<summary><strong>La logique métier derrière le moteur de décision</strong></summary>

Le système ne considère pas un coût d'acquisition faible comme une preuve suffisante de la qualité d'un fournisseur. Il sépare quatre questions qui doivent être traitées dans l'ordre :

1. **Les preuves sont-elles suffisantes ?** Un petit échantillon peut faire paraître un fournisseur anormalement efficace ou inefficace. L'analyseur vérifie le jalon d'évaluation pertinent et l'exigence minimale d'échantillon avant de considérer le résultat de performance comme prêt pour la décision.
2. **Existe-t-il des conditions qui priment sur la performance ?** Les restrictions de compte, les indicateurs de fraude et d'autres conditions de risque configurées peuvent bloquer ou qualifier une action fondée sur la performance.
3. **Comment le coût observé se compare-t-il au référentiel approprié ?** Le moteur compare le coût par FTD à l'objectif du marché et de la plateforme concernés, plutôt que de s'appuyer sur un seuil universel de coût d'acquisition.
4. **Quelle action est justifiée maintenant ?** Le moteur renvoie une recommandation structurée et une raison, facilitant la revue de la décision et la distinction entre une restriction opérationnelle et un problème de performance.

Les libellés de décision signifient :

| Action | Interprétation |
|---|---|
| `SCALE` | Les preuves disponibles satisfont la règle de performance configurée et aucune condition de risque bloquante n'empêche la mise à l'échelle |
| `KEEP` | Continuer la surveillance sans augmentation de budget pilotée par la performance ni recommandation d'arrêt |
| `STOP` | Arrêter ou bloquer toute allocation supplémentaire selon les règles de performance ou de risque configurées |
| `REVIEW` | Résoudre une condition de risque ou obtenir une revue humaine avant de considérer le résultat de performance comme exploitable |

Ce sont des recommandations, et non des actions automatisées de paiement, de compte ou de campagne. Les décisions finales restent soumises au contexte opérationnel et à la revue humaine.

</details>

<details>
<summary><strong>Trois pièges qui prennent au dépourvu même les équipes d'acquisition expérimentées</strong></summary>

<details>
<summary><strong>Piège 1 : Considérer un coût par FTD faible comme une preuve de qualité</strong></summary>

**La décision :** Augmenter le budget d'un fournisseur parce que son coût précoce par FTD est inférieur à l'objectif.

**Le défaut caché :** Le fournisseur peut avoir très peu de FTD, un comportement de dépôt récurrent faible, une rétention médiocre ou un indicateur de risque au niveau du compte.

| Approche incorrecte | Approche corrigée |
|---|---|
| Classer les fournisseurs selon le seul coût par FTD | Vérifier la suffisance d'échantillon et le statut de risque avant de comparer les coûts |
| Passer immédiatement à l'échelle avec le fournisseur le moins cher | Passer à l'échelle uniquement lorsque la règle de performance configurée est satisfaite et qu'aucune porte de risque bloquante ne s'applique |

Un coût par FTD faible mesure l'efficacité d'acquisition pour un seul événement. Il n'établit pas la valeur aval et n'exclut pas la fraude. Le processus corrigé préserve le signal de coût tout en exigeant des preuves suffisantes et la réussite des contrôles de risque applicables.

**Implication pour la décision :** Une cohorte bon marché mais immature ou risquée doit rester sous observation ou revue plutôt que de recevoir une augmentation automatique de budget.

<details>
<summary><strong>Référence de formule et de règle</strong></summary>

Conceptuellement :

```text
Cost per FTD = Spend / FTD Count
```

Une décision de mise à l'échelle fondée sur la performance n'est évaluée qu'après les contrôles de suffisance d'échantillon et de risque. Dans le cadre configuré, la condition de mise à l'échelle est :

```text
Cost per FTD <= Target Cost per FTD × Scale Ratio
```

La configuration source utilise une ratio de mise à l'échelle d'exemple de `85%`. Il s'agit d'une règle configurable, et non d'une norme universelle du secteur.

</details>

</details>

<details>
<summary><strong>Piège 2 : Arrêter un fournisseur avant que l'échantillon ne soit suffisant</strong></summary>

**La décision :** Arrêter un fournisseur parce que son coût d'acquisition initial dépasse l'objectif.

**Le défaut caché :** La cohorte n'a peut-être pas encore atteint le jalon d'évaluation requis, et un petit nombre de conversions peut produire des estimations de coût instables.

| Approche incorrecte | Approche corrigée |
|---|---|
| Appliquer le même jugement de performance à chaque âge | Évaluer par rapport au jalon actuel de la cohorte |
| Traiter l'absence de preuve comme une contre-performance confirmée | Renvoyer `KEEP` lorsque l'échantillon est insuffisant, sauf si une règle de risque de priorité supérieure exige une autre action |

L'analyseur utilise des tailles minimales d'échantillon de FTD configurables pour J3, J4 et J7. L'exemple fourni utilise des minimums de 10, 15 et 30 FTD respectivement. Une cohorte qui n'a pas satisfait à l'exigence pertinente n'est pas automatiquement considérée comme un échec.

Cela n'autorise pas à ignorer une restriction de compte réelle ou une fraude confirmée. Les règles de risque sont évaluées séparément et peuvent primer sur la décision de performance fondée sur l'échantillon.

**Implication pour la décision :** Préservez la distinction entre « preuves pas encore suffisantes » et « preuves suffisantes pour arrêter ». Les deux conditions ne devraient pas produire la même conclusion.

<details>
<summary><strong>Référence de la règle de suffisance d'échantillon</strong></summary>

Les règles de points de contrôle prévues sont :

| Point de contrôle d'évaluation | Nombre minimal de FTD en exemple |
|---|---:|
| Jour 3 | 10 |
| Jour 4 | 15 |
| Jour 7 | 30 |
| Jour 30 | Revue de cohorte mature |

Les valeurs configurées doivent être validées contre les cellules de paramètres du classeur réel avant tout déploiement opérationnel. La maturité à J30 ne garantit pas en soi que chaque champ de revenus ou d'attribution est complet.

</details>

</details>

<details>
<summary><strong>Piège 3 : Confondre risque opérationnel et mauvaise performance d'acquisition</strong></summary>

**La décision :** Réduire ou arrêter un fournisseur parce que le tableau de bord montre une performance faible ou incomplète.

**Le défaut caché :** Le résultat peut être affecté par un compte banni ou restreint, une fraude suspectée, des défaillances de suivi, une attribution retardée ou d'autres conditions opérationnelles. Une métrique de performance seule ne peut pas identifier la cause.

| Approche incorrecte | Approche corrigée |
|---|---|
| Interpréter chaque résultat défavorable comme une contre-performance du fournisseur | Inspecter le statut de la porte de risque et la raison du déclenchement |
| Continuer la mise à l'échelle parce que la métrique de coût paraît favorable | Respecter les conditions de risque bloquantes même lorsque la métrique de coût est attractive |
| Traiter un avertissement comme un constat confirmé | Distinguer les conditions signalées, suspectées et confirmées |

La porte de risque sépare les conditions bloquantes des situations qui exigent une investigation humaine. Un compte banni ou une fraude confirmée peuvent bloquer toute allocation supplémentaire. Un compte signalé ou une fraude suspectée peuvent exiger une revue. Une règle configurée de protection à faible dépense peut prévenir un arrêt prématuré fondé sur la performance.

**Implication pour la décision :** L'action suivante devrait traiter le mode d'échec réel—accès au compte, intégrité du suivi, qualité du trafic, maturité de l'échantillon ou économie de l'acquisition—plutôt que d'utiliser des changements de budget en guise de substitut au diagnostic.

<details>
<summary><strong>Interprétation de la porte de risque</strong></summary>

Le cadre source inclut les conditions suivantes :

| Condition | Traitement prévu |
|---|---|
| Le statut du compte est `BANNED` | Condition bloquante ; recommander `STOP` |
| Le statut du compte est `FLAGGED` | Avertissement exigeant une interprétation prudente |
| Le risque de fraude est `CONFIRMED` | Condition bloquante ; recommander `STOP` |
| Le risque de fraude est `SUSPECTED` | Revue manuelle |
| L'échantillon de FTD est suffisant mais le taux de dépôt récurrent est inférieur au minimum configuré | Condition de revue |
| La dépense est inférieure au seuil de dépense minimale configuré | Protection contre une action prématurée fondée sur la performance |

La précédence exacte, les valeurs de statut autorisées et le comportement des formules doivent être vérifiés contre le classeur déployé avant utilisation. Le tableau décrit le cadre de décision prévu, et non une garantie que chaque statut de plateforme externe puisse être détecté automatiquement.

</details>

</details>

</details>

<details>
<summary><strong>Scénario d'exemple</strong></summary>

Considérez un fournisseur hypothétique acquis via une combinaison spécifique de marché et de plateforme. Les chiffres ci-dessous illustrent comment le cadre doit être interprété ; ce ne sont pas des résultats rapportés d'une campagne réelle.

| Métrique | Valeur d'exemple |
|---|---:|
| Dépense | 3,600 |
| Nombre de FTD | 40 |
| Coût cible par FTD | 100 |
| Nombre de dépôts récurrents | 12 |
| Nombre retenus à J3 | 20 |
| Statut du compte | Actif |
| Risque de fraude | Aucun signalé |

Le coût par FTD est :

```text
3,600 / 40 = 90
```

Si la ratio de mise à l'échelle configurée est de 85 %, le seuil de mise à l'échelle est :

```text
100 × 85% = 85
```

Le coût observé de 90 est inférieur à l'objectif de 100, mais il n'est **pas** au niveau ou en dessous du seuil de mise à l'échelle de 85. Dans cet exemple, la métrique de coût seule ne déclenche donc pas `SCALE`.

Le taux de dépôt récurrent est :

```text
12 / 40 = 30%
```

Le taux de rétention à J3 est :

```text
20 / 40 = 50%
```

Ces chiffres ajoutent du contexte sur le comportement aval, mais ils ne doivent pas être interprétés comme des taux universellement bons ou mauvais. Leur signification dépend du marché, de la plateforme, du produit, de la fenêtre d'attribution et du référentiel configuré concernés.

Le moteur vérifie ensuite si la cohorte a atteint le point de contrôle pertinent, si l'échantillon est suffisant et si une porte de risque bloque ou redirige la décision. Si l'échantillon est suffisant et qu'aucune condition de revue ne s'applique, le résultat de coût se situe entre les seuils d'exemple de mise à l'échelle et d'arrêt, donc l'action fondée sur la performance est `KEEP`.

La conclusion opérationnelle n'est ni « ce fournisseur est bon » ni « ce fournisseur est mauvais ». Elle est : **le coût observé est meilleur que l'objectif mais ne satisfait pas la condition de mise à l'échelle configurée ; continuer la surveillance sauf si une condition de risque distincte modifie l'action.**

</details>

<details>
<summary><strong>Référence des formules</strong></summary>

Les formules suivantes décrivent la logique de calcul prévue. Ce sont des modèles de référence, pas un substitut à l'inspection des formules exactes d'une version donnée du classeur. Les références de cellules, les noms de tables, les références structurées et les plages de débordement peuvent différer selon l'implémentation.

<details>
<summary><strong>1. Entrée brute : clés d'enregistrement et contrôles de qualité des données</strong></summary>

**Objectif :** Identifier les enregistrements sources et rendre visibles les entrées manquantes ou incohérentes avant d'interpréter les métriques calculées.

Logique type :

```excel
=IF([@Vendor_Name]="","",[@Vendor_Name]&"|"&[@Market]&"|"&[@Platform]&"|"&TEXT([@Launch_Date],"yyyymmdd"))
```

Il s'agit uniquement d'un modèle illustratif de clé composite. Le classeur de production peut utiliser une définition de clé différente. Si plusieurs enregistrements partagent le même fournisseur, marché, plateforme et date de lancement, la clé doit inclure un identifiant de lot ou de source supplémentaire pour rester unique.

Une sonde de qualité des données devrait identifier séparément les champs obligatoires manquants, les dates invalides, les montants ou nombres négatifs et les totaux de tunnel incohérents. Une clé générée n'est pas la preuve qu'un enregistrement est complet ou unique.

</details>

<details>
<summary><strong>2. Moteur de KPI : jours écoulés, coûts d'acquisition et taux de conversion</strong></summary>

**Objectif :** Standardiser l'âge de la cohorte et calculer des métriques d'acquisition et de tunnel comparables.

Jours écoulés :

```excel
=Data_Date-Launch_Date+1
```

La convention `+1` considère la date de lancement comme le Jour 1. La même convention doit être utilisée de façon cohérente lors de l'attribution des jalons J3, J4, J7 et J30.

Coût par FTD :

```excel
=IF(FTD_Count>0,Spend_Amount/FTD_Count,0)
```

Coût par NAR :

```excel
=IF(NAR_Count>0,Spend_Amount/NAR_Count,0)
```

Taux d'inscription vers FTD :

```excel
=IF(NAR_Count>0,FTD_Count/NAR_Count,0)
```

Taux de FTD vers STD :

```excel
=IF(FTD_Count>0,STD_Count/FTD_Count,0)
```

Ces modèles utilisent zéro lorsque le dénominateur est nul afin d'éviter les erreurs de division. Dans les rapports, toutefois, une sortie nulle ne doit pas être confondue avec un coût mesuré nul ou un taux de conversion confirmé nul. Dans la mesure du possible, affichez l'état de l'échantillon ou du dénominateur qui l'accompagne.

</details>

<details>
<summary><strong>3. Moteur de KPI : rétention et CP Score</strong></summary>

**Objectif :** Ajouter des indicateurs de qualité aval aux comparaisons de coûts d'acquisition.

Un modèle de taux de rétention est :

```excel
=IF(FTD_Count>0,Retained_Count/FTD_Count,0)
```

Le cadre source définit le CP Score comme un score composite pondéré sur trois composantes :

| Composante | Poids |
|---|---:|
| Efficacité des coûts | 50% |
| Santé des dépôts récurrents | 25% |
| Rétention à J3 | 25% |

Le score est normalisé par rapport aux objectifs configurés et au seuil minimal de dépôt récurrent, puis plafonné à la plage 0–100. Cela permet de voir plusieurs indicateurs ensemble sans prétendre que le score est une probabilité prédictive.

Le score doit être interprété à côté des métriques brutes, de la taille d'échantillon, du jalon et du résultat de la porte de risque. Les scores composites peuvent masquer des schémas sous-jacents matériellement différents s'ils sont affichés seuls.

</details>

<details>
<summary><strong>4. Moteur de décision : suffisance d'échantillon, portes de risque et seuils d'action</strong></summary>

**Objectif :** Imposer la séquence de décision prévue : suffisance d'échantillon, contrôles de risque, puis comparaison au référentiel.

Les seuils de performance d'exemple sont :

```text
Scale threshold = Target Cost per FTD × 0.85
Stop threshold  = Target Cost per FTD × 1.25
```

Le cadre fourni utilise ces ratios d'exemple comme paramètres configurables. La règle de mise à l'échelle est satisfaite lorsque le coût par FTD est au niveau ou en dessous du seuil de mise à l'échelle ; la règle d'arrêt est satisfaite lorsque le coût par FTD est au niveau ou au-dessus du seuil d'arrêt, sous réserve des règles de protection et de risque applicables.

L'ordre de décision de haut niveau est :

```text
1. Evaluate blocking risk conditions.
2. Evaluate conditions requiring review.
3. Check sample sufficiency for the current milestone.
4. Apply the configured performance thresholds.
5. Return the action, trigger reason, and budget adjustment factor.
```

Le moteur d'actions ne devrait pas laisser une métrique de coût favorable contourner une condition de risque bloquante. De même, des preuves d'échantillon insuffisantes ne devraient pas être interprétées comme la preuve d'une mauvaise performance.

Le facteur d'ajustement budgétaire est dérivé du multiplicateur d'action configuré. Il représente un ajustement suggéré, et non une modification directe du budget d'une plateforme publicitaire.

</details>

<details>
<summary><strong>5. Tableau de bord de direction : backtest historique à J30</strong></summary>

**Objectif :** Comparer les recommandations précoces aux résultats observés ultérieurement afin que l'équipe puisse évaluer si ses règles sont utiles.

Le cadre source considère les lots historiques ayant atteint au moins 30 jours et présentant des revenus positifs enregistrés à J30. Les règles d'évaluation d'exemple incluent :

- Une décision précoce de `SCALE` est considérée comme réussie lorsque les revenus à J30 divisés par la dépense sont d'au moins 1.0.
- Une décision précoce de `STOP` est considérée comme correcte lorsque le ROI correspondant à J30 est inférieur à 0.6.

Ce sont des définitions d'évaluation configurables, pas des normes universelles. La source n'établit pas que les seuils ont été validés indépendamment sur plusieurs marchés ou plateformes.

Le backtest peut révéler des erreurs systématiques—par exemple, monter à l'échelle avec des cohortes qui ne récupèrent ensuite pas leur dépense, ou arrêter des cohortes qui auraient obtenu des résultats acceptables. Les résultats restent sensibles au retard d'attribution, aux enregistrements de revenus incomplets, à la sélection des cohortes et aux changements des conditions opérationnelles.

</details>

</details>

<details>
<summary><strong>Règles de validation</strong></summary>

Le classeur dépend de données sources cohérentes, de dates de cohorte valides, de références marché/plateforme compatibles et de seuils correctement configurés. Les règles suivantes décrivent le comportement de validation prévu. Les valeurs exactes des listes déroulantes et la gestion des erreurs au niveau des formules doivent être vérifiées contre le classeur déployé.

| Champ ou condition | Règle de validation | Traitement attendu |
|---|---|---|
| `Record_ID` | Chaque enregistrement source devrait avoir un identifiant utilisable ; les clés composites répétées doivent être investiguées | Signaler les doublons potentiels plutôt que de supposer que les enregistrements sont uniques |
| `Vendor_Name` | Requis pour identifier et revoir un enregistrement de fournisseur | Les noms de fournisseurs vides ne devraient pas être traités comme des enregistrements analytiques valides |
| `Market` | Doit correspondre à une référence de marché configurée | Investiguer les valeurs non appariées ; une référence manquante peut empêcher une comparaison d'objectif valide |
| `Platform` | Doit correspondre à une valeur de plateforme configurée | Investiguer l'orthographe incohérente ou les valeurs non prises en charge |
| `Launch_Date` | Doit être une date valide | Les dates invalides empêchent un calcul fiable de l'âge de la cohorte |
| `Data_Date` | Doit être une date valide et cohérente avec la période d'observation | Des dates invalides ou incohérentes peuvent classer à tort les jalons d'évaluation |
| `Spend_Amount` | Doit être numérique et non négatif | Investiguer les valeurs négatives et distinguer la dépense manquante de la dépense nulle réelle |
| `Impressions` | Doit être un nombre non négatif | Investiguer les observations négatives ou non numériques |
| `Clicks` | Doit être un nombre non négatif | Investiguer les valeurs négatives et les relations invraisemblables avec les impressions |
| `NAR_Count` | Doit être un nombre non négatif | Vérifier les définitions de source et la cohérence avec le tunnel d'inscription |
| `FTD_Count` | Doit être un nombre non négatif | Requis pour les calculs de coût par FTD et de conversions associées |
| `FTD_Amount` | Doit être numérique et cohérent avec la convention de devise de la source | Investiguer les valeurs manquantes ou les incohérences de devise |
| `STD_Count` et `TTD_Count` | Doivent être des nombres non négatifs | Vérifier les définitions d'événements et les relations de tunnel attendues |
| `D2_Retained_Count`, `D3_Retained_Count`, `D7_Retained_Count` | Doivent être des nombres non négatifs avec un dénominateur de rétention cohérent | Investiguer les nombres dépassant la cohorte éligible ou reflétant des fenêtres d'observation incohérentes |
| `Day30_Actual_Revenue` | Doit être numérique et interprété de façon cohérente avec la devise choisie et la définition des revenus | Exclure les observations incomplètes ou immatures du backtest selon le cas |
| `Account_Status` | Doit utiliser une valeur de statut reconnue | Les conditions bannies ou signalées doivent suivre les règles de risque configurées |
| `Fraud_Risk_Tag` | Doit utiliser une classification de risque reconnue | Les cas confirmés et suspectés ne doivent pas être traités comme équivalents |
| `Analyst_Notes` | Consigner les incidents de suivi pertinents, les retards d'attribution, les restrictions ou les constats manuels | Fournit un contexte pour la revue et le backtest ultérieurs |
| Recherche de référence | La combinaison marché et plateforme doit résoudre vers la référence prévue | Investiguer les échecs de recherche plutôt que de substituer silencieusement un objectif non lié |
| Suffisance d'échantillon | Le point de contrôle pertinent doit atteindre sa taille minimale d'échantillon configurée | Maintenir les preuves immatures séparées de la contre-performance confirmée |
| Porte de risque | Les conditions bloquantes et de revue doivent être évaluées avant les actions fondées sur la performance | Empêcher des métriques de coût favorables de contourner les conditions bloquantes |
| Plages de débordement de formules | Les cellules de destination doivent rester libres pour les résultats de tableaux dynamiques | Effacer les cellules obstrantes si Excel signale `#SPILL!` |
| Mode de calcul | Le classeur devrait utiliser le recalcul automatique | Recalculer si les résultats semblent obsolètes |
| Références de formules | Les plages de formules et les noms de tables configurés doivent rester intacts | Investiguer les erreurs `#REF!`, `#VALUE!` et similaires avant d'utiliser les recommandations |

<details>
<summary><strong>Notes de qualité des données et de gestion des erreurs</strong></summary>

- **Dénominateur nul :** Les formules de coût et de conversion peuvent renvoyer `0` lorsque leur dénominateur est nul. Cela évite une erreur de division mais n'établit pas un coût mesuré ou un taux de conversion nul. Examinez le nombre sous-jacent avant d'interpréter le résultat.
- **Marché/plateforme non apparié :** Un échec de recherche de référence devrait être résolu au niveau de la source ou de la configuration. Ne supposez pas qu'un objectif manquant signifie que le fournisseur a atteint son objectif.
- **Nom de fournisseur manquant :** L'identifiant d'enregistrement peut rester vide lorsque le champ du nom de fournisseur est vide, selon la formule déployée.
- **Erreurs de débordement de tableau dynamique :** Effacez les cellules qui obstruent la plage de débordement prévue. N'écrasez pas les cellules de sortie générées par formule pour forcer un résultat.
- **Calculs obsolètes :** Vérifiez le mode de calcul d'Excel et recalculez si nécessaire.
- **Formatage des devises :** Les formats d'affichage ne convertissent pas les valeurs entre devises. Confirmez que les montants sources et les références configurées utilisent une base monétaire cohérente.
- **Nombres de rétention et de tunnel :** Vérifiez les définitions des dénominateurs et les fenêtres d'observation. Un ratio mathématiquement valide peut rester trompeur lorsque les événements sources utilisent des définitions de cohorte différentes.

La validation réduit les erreurs évitables, mais elle ne peut établir que chaque rapport source est complet, que chaque conversion est légitime ou que chaque événement d'attribution est correctement attribué. Ces conditions exigent des contrôles opérationnels et un rapprochement avec les plateformes sous-jacentes.

</details>

</details>

<details>
<summary><strong>Exigences d'exécution</strong></summary>

| Élément | Exigence ou recommandation |
|---|---|
| Version d'Excel | Microsoft 365 recommandé ; Excel 2021 ou ultérieur est la base prévue |
| Compatibilité des formules | Utilise des fonctionnalités Excel modernes, y compris les tableaux dynamiques et des fonctions avancées comme `LET`, `FILTER`, `SORT`, `XLOOKUP`, `MAP`, `LAMBDA`, `HSTACK` et `VSTACK` |
| Versions antérieures d'Excel | Excel 2019 et antérieurs ne sont pas pris en charge par l'architecture de formules prévue |
| Format du classeur | `.xlsx` ou `.xlsb`, sous réserve de tests de compatibilité du fichier livré |
| Collaboration | OneDrive ou SharePoint peuvent prendre en charge des flux partagés ; évitez les modifications structurelles simultanées de la table d'entrée |
| Échelle de travail suggérée | Jusqu'à environ 10 000 enregistrements pour un usage courant ; testez les performances avant d'étendre vers 50 000 enregistrements |
| Données historiques | Archivez périodiquement les enregistrements matures anciens lorsque le classeur actif devient difficile à maintenir |

La version réellement prise en charge doit être confirmée contre la version du classeur distribuée. La disponibilité d'une fonction dans une version d'Excel ne garantit pas en soi que chaque formule se comporte de manière identique dans tous les environnements.

</details>

<details>
<summary><strong>Procédure d'exploitation</strong></summary>

<details>
<summary><strong>Revue bimensuelle des fournisseurs et du budget</strong></summary>

1. **Importez les enregistrements sources.** Mettez à jour `02_Raw_Input` avec les dernières informations disponibles sur le fournisseur, le marché, la plateforme, la dépense, la conversion, la rétention et le risque.
2. **Contrôlez la qualité des données.** Revoyez les identifiants manquants, les références non appariées, les dates incohérentes, les nombres invraisemblables et les incidents de suivi.
3. **Revoyez les portes de décision.** Distinguez les échantillons insuffisants, les risques opérationnels et les recommandations fondées sur la performance.
4. **Revoyez le tableau de bord.** Utilisez l'instantané de direction et la liste d'actions pour préparer la revue budgétaire. Confirmez la raison du déclenchement avant de modifier une allocation.
5. **Consignez la décision.** Documentez le contexte pertinent et les dérogations manuelles dans les registres opérationnels appropriés.
6. **Revoyez les cohortes matures.** Comparez les décisions précoces aux résultats à J30 disponibles et investigate les erreurs systématiques.

</details>

<details>
<summary><strong>Maintenance des paramètres</strong></summary>

- Mettez à jour les valeurs de référence marché/plateforme lorsque l'économie des objectifs de l'entreprise change.
- Ajustez les seuils d'échantillon et les ratios d'action via la zone de configuration plutôt qu'en modifiant des formules de décision individuelles.
- Ajoutez de nouveaux marchés ou plateformes uniquement après avoir mis à jour la configuration de référence et de validation concernée.
- Préservez les plages générées par formules et vérifiez les sorties après des modifications structurelles.
- Retestez des cas représentatifs après modification des règles de risque ou des seuils de décision.

</details>

</details>

<details>
<summary><strong>Limites</strong></summary>

Cet analyseur est un cadre d'aide à la décision fondé sur des règles. Il n'est pas une garantie prédictive des revenus à J30 et n'exécute pas automatiquement d'actions de campagne, de paiement ou de compte.

Les signaux d'acquisition précoces peuvent changer en raison de retards d'attribution, de rétrofacturations ultérieures, de défaillances de suivi, de restrictions de plateforme et de différences de qualité de cohortes. Une recommandation n'est pas plus fiable que les données sous-jacentes, les définitions de références, les exigences d'échantillon et les règles.

Le backtest à J30 peut aider à identifier où les règles doivent être ajustées, mais la performance historique ne garantit pas la précision future. Les résultats devraient être segmentés par marché, plateforme et conditions opérationnelles pertinentes lorsque des données suffisantes existent.

</details>

<details>
<summary><strong>Dépannage</strong></summary>

| Symptôme | Cause probable | Contrôle recommandé |
|---|---|---|
| `#SPILL!` | Des cellules bloquent une plage de sortie de tableau dynamique | Effacer les cellules obstrantes sans supprimer la formule source |
| `#N/A` dans les résultats dépendant de références | La combinaison marché/plateforme ne correspond pas aux valeurs de référence configurées | Vérifier l'orthographe, les valeurs autorisées et la couverture des références |
| Coût ou taux nul inattendu | Le dénominateur peut être nul, manquant ou pas encore rapporté | Inspecter les nombres sous-jacents et l'état de complétude des données |
| Les résultats ne se mettent pas à jour | Le mode de calcul ou les dépendances du classeur peuvent être incorrects | Confirmer le calcul automatique et recalculer |
| L'identifiant du fournisseur est vide | Des champs sources requis peuvent être manquants | Vérifier le champ du nom de fournisseur et la formule d'identifiant |
| Taux de rétention ou de conversion invraisemblable | Les nombres peuvent utiliser des définitions de cohorte ou des fenêtres d'observation incohérentes | Rapprocher les définitions d'événements et la population éligible |
| Recommandation `SCALE` ou `STOP` inattendue | La configuration, la précédence de risque ou la sélection de référence peuvent ne pas correspondre aux attentes | Inspecter la raison du déclenchement, la référence applicable, le statut de l'échantillon et les seuils configurés |

</details>

</details>

## La logique métier et la méthodologie

L'analyseur est conçu autour d'un problème pratique de gestion de l'acquisition : les données précoces sont disponibles bien avant que la valeur à long terme d'un fournisseur soit certaine, mais les décisions budgétaires ne peuvent pas toujours attendre la maturité de chaque cohorte. Son objectif est de structurer cette incertitude afin que les décisions puissent être revues de manière cohérente plutôt que prises sur la base d'une métrique séduisante ou alarmante.

- **L'évaluation par jalons** sépare les décisions à J3, J4 et J7. Elle aide l'équipe à éviter de traiter une cohorte immature comme si elle avait la même force probante qu'une cohorte mature.
- **La comparaison aux référentiels** évalue le coût d'acquisition par rapport à l'objectif du marché et de la plateforme concernés. Cela rend les comparaisons de fournisseurs commercialement plus pertinentes que d'appliquer un seuil de coût universel dans des conditions opérationnelles différentes.
- **Le filtrage des risques** sépare les restrictions de comptes et la fraude suspectée ou confirmée des problèmes de performance ordinaires. Il aide l'équipe à identifier quand l'étape suivante devrait être une investigation ou un contrôle des risques plutôt qu'un ajustement budgétaire de routine.
- **La revue multi-indicateurs** combine le coût d'acquisition avec le comportement du tunnel, les signaux de dépôts récurrents et la rétention. Cela fournit plus de contexte pour juger si une acquisition bon marché s'accompagne de preuves de qualité aval.
- **Le backtest à J30** compare les recommandations précoces aux résultats consignés ultérieurement. Il offre un moyen de vérifier si les règles actuelles sont systématiquement trop agressives, trop conservatrices ou insuffisamment sensibles à des conditions opérationnelles spécifiques.

Ces méthodes fonctionnent ensemble comme une séquence de décision : établir si les preuves sont exploitables, vérifier si des conditions de risque s'appliquent, comparer la performance à l'objectif approprié, puis revoir la recommandation à la lumière des résultats ultérieurs.

Le résultat n'est pas une affirmation que la performance précoce peut être connue avec certitude. C'est un processus reproductible pour rendre les décisions précoces plus transparentes, documenter pourquoi une action a été suggérée et améliorer les règles à mesure que de meilleures preuves deviennent disponibles.

## Autres outils de cette série

Theseus Workshop développe des outils légers d'analyse commerciale et d'aide à la décision pour des problèmes opérationnels récurrents.

- **Estimation des coûts de construction et pilotage de projets** — Relie les hypothèses d'estimation au suivi des coûts et de l'exécution au niveau du projet.
- **Réconciliation des stocks et analyse des démarques** — Aide à identifier les écarts entre les enregistrements et les emplacements d'inventaire.
- **Rentabilité par commande et réconciliation financière** — Structure l'analyse des revenus et des coûts autour de commandes individuelles.
- **Prévision commerciale et planification de scénarios** — Aide à évaluer les résultats financiers sous des hypothèses opérationnelles alternatives.

Explorez les projets connexes sur le [profil GitHub de Theseus Workshop](https://github.com/HyVoid). Confirmez la disponibilité et le périmètre actuel de chaque dépôt avant de l'adopter pour un usage opérationnel.

## Licence

Ce projet est destiné à être distribué sous la **Licence Apache 2.0**.

Avant de publier une version, incluez le fichier `LICENSE` applicable dans le dépôt et confirmez que la licence couvre les fichiers réellement distribués. Si la version navigateur, le classeur Excel ou les actifs tiers ont des conditions de licence distinctes, documentez explicitement ces conditions plutôt que de supposer que chaque composant est couvert de la même manière.
