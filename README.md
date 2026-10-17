# iGaming Affiliate & Media Buying Excel Template: Cost per FTD (C/FTD) & Cohort Traffic Analyzer
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/53808d1c-6d13-4502-a81d-ef846d596902" />
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/268198c3-9abc-4547-9c47-42f447f390e6" />

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346.svg)
![Category](https://img.shields.io/badge/Tool-iGaming%20UA%20%26%20Affiliate%20BI-2251FF.svg)

**An iGaming affiliate and media buying performance analyzer, Cost per First-Time Depositor (C/FTD / CPFTD) calculator, and early cohort decision Excel template. Built for casino and sportsbook user acquisition (UA) managers, affiliate directors, and performance marketers to evaluate D3/D4/D7 player cohorts, isolate ad account bans and bonus-abuse fraud, and automate `SCALE / KEEP / STOP / REVIEW` budget allocation—available as a free browser-based simulator (no signup required) and a downloadable Microsoft Excel workbook.**

> **Access the iGaming Traffic & C/FTD Decision Tools**
>
> - 🌐 **[Launch the Free Web-Based iGaming C/FTD & Traffic Analyzer](YOUR_BROWSER_DEMO_URL)** — Audit early vendor cohorts, test minimum FTD sample thresholds, and simulate media-buying budget rules directly in your browser without installing software or creating an account.
> - 📥 **[Download the iGaming Affiliate & Media Buying Excel Workbook (.xlsx)](https://theseusworkshop.com/l/fccmw)** — Get the full spreadsheet template for offline bi-weekly budget reviews, multi-GEO benchmark calibration, and historical Day 30 ROI backtesting.
>
> *No signup. No installation. Free browser access. *

---

## Core iGaming User Acquisition Metrics & Traffic Pain Points Solved

Instead of judging traffic vendors by raw registration volume or noisy early CPA spikes, this rule-based framework connects early player funnel progression to statistical sample gates. Here is how the analyzer maps **iGaming media buying and affiliate pain points** to auditable **FTD and retention metrics**:

| iGaming UA & Affiliate Pain Point | Rule-Based Evaluation & Gating Mechanism | Key Casino & Sportsbook KPIs Tracked |
| :--- | :--- | :--- |
| **Uncontrolled Cost per First-Time Depositor (C/FTD)** | Benchmarks vendor acquisition cost against GEO- and platform-specific target matrices across Tier-1 to Tier-3 markets. | Cost per FTD (`C/FTD` / `CPFTD`), target C/FTD variance (%), Cost per Registration (`CPR`) |
| **Vanity Registration Volume & Weak Funnel Conversion** | Tracks player progression past initial sign-up to isolate traffic sources that fail to convert into repeat depositors. | Net active registrations, Reg-to-FTD conversion rate (%), repeat deposit ratio, early player retention |
| **Premature Scaling or Killing on Small Cohorts** | Enforces minimum spend floors and Day 3 / Day 4 / Day 7 FTD sample thresholds before triggering budget changes. | Minimum spend gate ($300 floor), FTD sample sufficiency (`D3 >= 10`, `D4 >= 15`, `D7 >= 30`) |
| **Ad Account Bans, Cloaking & Bonus-Abuse Fraud** | Separates genuine vendor underperformance from restricted ad accounts, broken postbacks, or baseline deposit fraud. | Ad account health status (`Restricted` / `Banned`), fraud risk flags, zero-repeat-deposit anomaly alerts |
| **Subjective Media Buying Budget Allocations** | Translates multi-gate cohort metrics into deterministic, explainable budget routing commands with audit trails. | Automated `SCALE` (+30% budget), `KEEP`, `STOP`, or `REVIEW` action flags + triggering rule ID |
| **Unvalidated Early Cut-Off Thresholds** | Backtests Day 3–7 decisions against mature Day 30 cohort performance to verify whether early rules cut profitable whales. | Day 30 mature cohort validation, false-positive `STOP` rate, early-to-mature LTV/ROAS alignment |

---

## Step-by-Step Tutorial: How to Audit iGaming Traffic Vendors & Automate Budget Decisions

The analyzer operates on a repeatable **bi-weekly iGaming UA review cadence**: configure your GEO/channel benchmarks once, paste raw tracker exports, inspect the rule-triggered action flags, and backtest against mature Day 30 player data.

### Step 1: Configure GEO Benchmarks, Sample Gates & C/FTD Rules
Open the dedicated `Configuration & Thresholds` tab to establish your operator unit economics and statistical guardrails:

- **Minimum Spend Protection Floor:** Default set to `300 currency units` (prevents killing under-spent test campaigns prematurely).
- **Cohort FTD Sample Sufficiency Gates:** Requires at least `10 FTDs at Day 3`, `15 FTDs at Day 4`, and `30 FTDs at Day 7` before performance rules fire.
- **Automated Budget Action Triggers:**
  - `SCALE` Threshold: Actual `C/FTD <= 85%` of the applicable GEO/platform target (triggers a suggested `+30%` budget allocation increase).
  - `STOP` Threshold: Actual `C/FTD >= 125%` of the applicable target (given sample sufficiency is met).

*(Note: Default values are illustrative reference points. Calibrate targets against your actual Casino/Sportsbook NGR margins, licensing jurisdiction, and payment processing costs.)*

### Step 2: Import S2S Postback, Affiliate & Ad Platform Exports
Export cohort performance logs from your affiliate tracking software (e.g., Affilka, Income Access, Cellxpert, Scaleo), MMP (AppsFlyer, Adjust), or ad networks (Meta, Google Ads, Telegram, programmatic DSPs) and paste them into the input sheet:

- **Campaign & Vendor Metadata:** Vendor/Affiliate ID, target GEO/market, traffic platform, launch date, and reporting snapshot date.
- **Top-of-Funnel & Spend Metrics:** Total ad spend, impressions, clicks, and net active player registrations.
- **Player Monetization & Risk Signals:** First-time deposits (FTD count), repeat deposit counts, early cohort retention, ad account health status, and manual fraud-risk annotations.

*(Maintain consistent attribution windows and currency units across imported rows.)*

### Step 3: Audit Cohort KPIs & Execute `SCALE / KEEP / STOP / REVIEW` Actions
Navigate to the `Decision Engine & KPI Dashboard` views to inspect the automated evaluation for every active vendor batch:

- **Statistical Sufficiency Check:** Verify whether a high C/FTD is a genuine failure (`STOP`) or simply an under-sampled cohort routed to `KEEP / MONITOR`.
- **Operational & Fraud Gate:** Check if campaigns with suspiciously cheap FTDs but zero repeat deposits—or restricted ad accounts—have been intercepted and routed to `REVIEW`.
- **Explainable Action Audit:** Read the exact rule trigger behind every recommendation before adjusting media-buying caps or affiliate CPA deals.

### Step 4: Backtest Against Mature Day 30 Outcomes & Export to Excel
Run this workflow twice weekly during active campaign flights. Once historical player cohorts reach **Day 30 maturity**, log their realized outcomes into the historical validation view to verify whether your Day 3 and Day 7 C/FTD thresholds accurately predicted long-term player quality.

> 🎰 **Ready to standardize your twice-weekly iGaming traffic and affiliate reviews?** 
> After testing the decision gates in the **[Free Browser-Based iGaming C/FTD Analyzer](YOUR_BROWSER_DEMO_URL)**, download the **[Reusable iGaming Vendor Evaluation Excel Workbook (.xlsx)](YOUR_EXCEL_DOWNLOAD_URL)** to maintain offline audit logs, store proprietary multi-GEO benchmark matrices, and run recurring cohort backtests with your UA team.

---

## Why I Built This Rule-Based iGaming Traffic Evaluation Framework

In high-velocity iGaming user acquisition, early cohort reporting creates a costly operational trap: **metrics look mathematically precise long before they are statistically reliable enough to justify scaling or cutting budget.**

Consider three common failure modes during an early campaign review:
1. **The Cheap Registration Illusion:** A traffic source delivers massive registration volume at rock-bottom CPI/CPR, but converts almost zero first-time depositors (FTDs).
2. **The Slow-Burn VIP Cohort:** A PPC or SEO vendor looks expensive on Day 3 C/FTD, yet attracts high-intent sportsbook or slots players who re-deposit heavily by Day 14.
3. **Platform & Tracking Disruptions:** A historically strong media-buying agency shows a sudden C/FTD spike—not because traffic quality degraded, but because an ad account was shadow-restricted or an S2S postback pixel broke.

### The "Day 3 Cohort Trap": Vendor A vs. Vendor B
Imagine a Day 3 budget review where the target **Cost per FTD (C/FTD) benchmark is $40**:
- **Vendor A** has spent **$300** and generated **10 FTDs** $\rightarrow$ `C/FTD = $30` (meets the 10-FTD Day 3 sample gate).
- **Vendor B** has spent **$100** and generated **2 FTDs** $\rightarrow$ `C/FTD = $50` (25% worse than the $40 benchmark).

In a naive spreadsheet, a media buyer immediately terminates Vendor B for exceeding target CPA and scales Vendor A. However, Vendor B has only generated **2 FTDs**—well below the 10-FTD statistical sample floor and the $300 spend protection threshold. Cutting Vendor B at Day 3 is a **premature termination driven by small-sample noise**. Meanwhile, before giving Vendor A +30% more budget, the analyst still needs to verify that those 10 FTDs aren't baseline bonus abusers with zero repeat deposits.

I built this analyzer to turn that exact diagnostic logic into a **repeatable, rule-based decision framework**—eliminating gut-feel debates during bi-weekly budget meetings.

---

## Ad-Hoc Affiliate Spreadsheets vs. Rule-Based iGaming Decision Engine

| iGaming UA Evaluation Dimension | Traditional Ad-Hoc Trackers & Gut-Feel Reviews | Rule-Based iGaming Vendor Analyzer (This Tool) |
| :--- | :--- | :--- |
| **Early Scaling Decisions (Day 3–7)** | Media buyers scale budgets aggressively based on a few cheap early FTDs, risking heavy exposure to low-LTV traffic. | Enforces **D3 (10), D4 (15), and D7 (30) FTD sample gates** plus repeat-deposit checks before issuing a `SCALE` (+30%) flag. |
| **Underperforming Vendor Cut-Offs** | Promising affiliates or ad sets are paused prematurely due to high C/FTD variance on tiny spend volumes. | Applies a **$300 minimum spend protection floor** and sample sufficiency check to separate statistical noise from true failure (`STOP`). |
| **Baseline Fraud & Bonus Abuse Detection** | Cheap registrations and minimum baseline deposits mask automated bot rings or zero-retention incentive traffic. | Cross-checks C/FTD efficiency against **repeat deposit progression, early retention, and fraud annotations** to trigger `REVIEW`. |
| **Ad Account Bans & Postback Outages** | Sudden drops in FTD conversion caused by Meta/Google account restrictions or S2S tracking bugs are blamed on vendor quality. | Dedicated **account-health and operational risk gates** isolate restricted accounts for manual remediation rather than blind termination. |
| **Multi-GEO & Multi-Channel Benchmarking** | Analysts apply inconsistent mental C/FTD targets across Tier-1 (UK/EU), LatAm (Brazil/Mexico), and Asian markets. | Centralizes a **configurable GEO × Platform benchmark matrix** so every vendor is scored against standardized regional targets. |
| **Threshold Calibration & Day 30 Backtesting** | Early Day 3/Day 7 cut-off rules are never audited against mature 30-day cohort profitability. | Links early decision batches to **mature Day 30 outcome records** to audit false positives and refine C/FTD tolerance bands. |

---

## Who This iGaming Analyzer Is Built For: Roles & Workflows

This dual-format (Browser + Excel) evaluation toolkit is designed for performance marketing and commercial teams across online casinos, sportsbooks, and iGaming agencies:

- **iGaming User Acquisition (UA) & Performance Marketing Managers:** Standardize your twice-weekly budget allocation meetings. Use the **Cost per FTD (C/FTD) decision calculator** to defend `SCALE`, `KEEP`, and `STOP` actions with transparent, rule-based evidence across Meta, Google, TikTok, and programmatic DSPs.
- **Casino & Sportsbook Affiliate Managers:** Audit external affiliate partners and sub-affiliate networks objectively. Use the **early cohort quality analyzer** to spot baseline CPA abuse (affiliates delivering minimum-deposit FTDs with zero repeat deposits) before paying out uncapped commissions.
- **Media Buying Agencies & Arbitrage Teams:** Protect your ad budgets across volatile traffic channels. Use the **minimum-spend and sample-gate workbook** to prevent junior media buyers from killing high-potential campaigns during the Day 3 learning phase or scaling restricted ad accounts.
- **iGaming BI Analysts, Growth Leads & CRM Teams:** Bridge the gap between raw attribution exports and executive reporting. Use the **Day 30 historical backtesting sheet** to calibrate whether your early D3/D7 C/FTD thresholds actually correlate with mature 30-day Net Gaming Revenue (NGR).
- **CMOs, Heads of Growth & Budget Owners:** Establish centralized governance over external acquisition spend without waiting months to build custom data-warehouse BI pipelines.

---

## Industry Use Cases & Long-Tail iGaming Acquisition Scenarios

Whether you are launching a new crypto casino, scaling a localized LatAm sportsbook, or managing 50+ CPA/Hybrid affiliates, this framework adapts to specific iGaming traffic scenarios:

### 1. Affiliate CPA & Hybrid Deal Quality Auditing (Preventing Baseline Fraud)
In CPA and Hybrid affiliate structures, unscrupulous traffic sources often game the baseline deposit threshold—generating cheap FTDs that never place a second wager. By evaluating **repeat-deposit ratios and early retention alongside C/FTD**, affiliate managers can route suspicious traffic batches to `REVIEW` before approving cap increases.

### 2. High-Volatility Social & In-App Media Buying (Meta, Google, Telegram & Pop/Push)
Paid media campaigns in restricted iGaming verticals face frequent ad account bans, creative rejections, and attribution tracking drops. The analyzer's **Account Health Gate** ensures that when a top-performing vendor suffers a platform-side restriction, the campaign is flagged for operational protection rather than misclassified as poor traffic quality.

### 3. Multi-GEO Sportsbook & Casino Launch Calibration (Tier-1 vs. Emerging Markets)
A $35 C/FTD might be highly profitable in regulated European or North American jurisdictions but catastrophic in high-volume, lower-ARPU emerging markets (such as Brazil, India, or LatAm). Use the **Market × Platform Benchmark Matrix** to normalize vendor evaluation across diverse currencies and regional player economics.

---

### Operational Scope & Analytical Disclaimer
*This toolkit is a rule-based early cohort decision-support model—not a real-time S2S attribution tracker, anti-fraud firewall, player-level predictive LTV engine, or statutory financial ledger. A favorable Day 3 or Day 7 C/FTD does not guarantee Day 30 Net Gaming Revenue (NGR) or net profitability. Always ensure imported data uses consistent attribution windows and currency units, and combine spreadsheet outputs with experienced risk and compliance review.*

---

## About the Creator

I build lightweight, inspectable decision-support tools for high-stakes operational workflows where too many moving variables get lost across disconnected spreadsheets. The guiding question is simple: **What exact evidence and statistical guardrails must be in one place to make the next budget commitment confidently?**

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

<details>
<summary><strong>Workbook Architecture</strong></summary>

The analyzer uses five connected worksheets. Each worksheet has a defined responsibility, separating configuration, raw evidence, metric calculation, decision rules, and management review.

| Worksheet | Responsibility | Primary Output |
|---|---|---|
| `01_Config_Rules` | Central configuration for currency, benchmarks, sample thresholds, risk rules, and action multipliers | Adjustable operating parameters |
| `02_Raw_Input` | Stores vendor-level acquisition, conversion, retention, spend, and risk data | Validated source records |
| `03_KPI_Engine` | Calculates elapsed days, evaluation milestones, acquisition costs, funnel rates, retention, and CP Score | Comparable vendor performance metrics |
| `04_Decision_Engine` | Applies sample sufficiency, risk gates, and performance thresholds in sequence | SCALE, KEEP, STOP, or REVIEW |
| `05_Exec_Dashboard` | Presents the executive snapshot, action list, and historical Day 30 review | Budget-review evidence and decision backtesting |

The intended data flow is:

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

Configuration values feed the calculations and decision rules. Raw records supply the observations. The KPI engine transforms those observations into comparable metrics, and the decision engine applies the configured rules. The dashboard presents the results for review.

This separation is intentional: changing a benchmark should not require rebuilding the workbook's calculation logic, and a favorable performance metric should not bypass a blocking risk condition.

<details>
<summary><strong>Input-to-output dependency</strong></summary>

| Input or condition | Affected calculation | Decision implication |
|---|---|---|
| Spend and FTD count | Cost per FTD | Acquisition cost comparison |
| NAR count | Cost per NAR | Cost of acquiring the configured NAR event |
| Registration, FTD, and STD counts | Funnel conversion rates | Identifies conversion leakage |
| Day 2, Day 3, and Day 7 retained counts | Retention rates | Adds early quality evidence |
| Launch date and data date | Days active and evaluation milestone | Determines whether the cohort has reached a checkpoint |
| Account and fraud-risk status | Risk gate | Can block or qualify performance-based recommendations |
| Market and platform | Target benchmark lookup | Establishes the applicable comparison target |
| Mature Day 30 revenue | Historical outcome review | Supports retrospective rule evaluation |

</details>

</details>

<details>
<summary><strong>The Business Logic Behind the Decision Engine</strong></summary>

The system does not treat a low acquisition cost as sufficient proof of vendor quality. It separates four questions that should be answered in order:

1. **Is there enough evidence?** A small sample can make a vendor appear unusually efficient or inefficient. The analyzer checks the relevant evaluation milestone and minimum sample requirement before treating the performance result as decision-ready.
2. **Are there conditions that override performance?** Account restrictions, fraud indicators, and other configured risk conditions can block or qualify a performance-based action.
3. **How does the observed cost compare with the appropriate benchmark?** The engine compares cost per FTD with the target for the relevant market and platform, rather than relying on one universal acquisition-cost threshold.
4. **What action is justified now?** The engine returns a structured recommendation and a reason, making it easier to review the decision and distinguish an operational restriction from a performance problem.

The decision labels mean:

| Action | Interpretation |
|---|---|
| `SCALE` | The available evidence satisfies the configured performance rule and no blocking risk condition prevents scaling |
| `KEEP` | Continue monitoring without a performance-driven budget increase or stop recommendation |
| `STOP` | Stop or block further allocation under the configured performance or risk rules |
| `REVIEW` | Resolve a risk condition or obtain human review before treating the performance result as actionable |

These are recommendations, not automated payment, account, or campaign actions. Final decisions remain subject to operational context and human review.

</details>

<details>
<summary><strong>Three Traps That Catch Even Experienced Acquisition Teams</strong></summary>

<details>
<summary><strong>Trap 1: Treating a low cost per FTD as proof of quality</strong></summary>

**The decision:** Increase a vendor's budget because its early cost per FTD is below the target.

**The hidden flaw:** The vendor may have very few FTDs, weak repeat-deposit behavior, poor retention, or an account-level risk flag.

| Incorrect approach | Corrected approach |
|---|---|
| Rank vendors by cost per FTD alone | Check sample sufficiency and risk status before comparing cost |
| Scale the cheapest vendor immediately | Scale only when the configured performance rule is satisfied and no blocking risk gate applies |

A low cost per FTD measures acquisition efficiency for one event. It does not establish downstream value or rule out fraud. The corrected process preserves the cost signal while requiring enough evidence and passing the applicable risk checks.

**Decision implication:** A cheap but immature or risky cohort should remain under observation or review rather than receiving an automatic budget increase.

<details>
<summary><strong>Formula and rule reference</strong></summary>

Conceptually:

```text
Cost per FTD = Spend / FTD Count
```

A performance-based scaling decision is evaluated only after the sample-sufficiency and risk checks. In the configured framework, the scale condition is:

```text
Cost per FTD <= Target Cost per FTD × Scale Ratio
```

The source configuration uses an example scale ratio of `85%`. This is a configurable rule, not a universal industry standard.

</details>

</details>

<details>
<summary><strong>Trap 2: Stopping a vendor before the sample is sufficient</strong></summary>

**The decision:** Stop a vendor because its initial acquisition cost exceeds the target.

**The hidden flaw:** The cohort may not yet have reached the required evaluation milestone, and a small number of conversions can produce unstable cost estimates.

| Incorrect approach | Corrected approach |
|---|---|
| Apply the same performance judgment at every age | Evaluate against the cohort's current milestone |
| Treat missing evidence as confirmed underperformance | Return `KEEP` when the sample is insufficient, unless a higher-priority risk rule requires another action |

The analyzer uses configurable minimum FTD sample sizes for Day 3, Day 4, and Day 7. The supplied example uses minimums of 10, 15, and 30 FTDs respectively. A cohort that has not met the relevant requirement is not automatically considered a failure.

This is not permission to ignore a genuine account restriction or confirmed fraud. Risk rules are evaluated separately and can take precedence over the sample-based performance decision.

**Decision implication:** Preserve the distinction between “not enough evidence yet” and “enough evidence to stop.” The two conditions should not produce the same conclusion.

<details>
<summary><strong>Sample-sufficiency rule reference</strong></summary>

The intended checkpoint rules are:

| Evaluation checkpoint | Example minimum FTD count |
|---|---:|
| Day 3 | 10 |
| Day 4 | 15 |
| Day 7 | 30 |
| Day 30 | Mature-cohort review |

The configured values should be validated against the actual workbook's parameter cells before operational deployment. Day 30 maturity does not, by itself, guarantee that every revenue or attribution field is complete.

</details>

</details>

<details>
<summary><strong>Trap 3: Confusing operational risk with poor acquisition performance</strong></summary>

**The decision:** Reduce or stop a vendor because the dashboard shows weak or incomplete performance.

**The hidden flaw:** The result may be affected by a banned or restricted account, suspected fraud, tracking failures, delayed attribution, or other operational conditions. A performance metric alone cannot identify the cause.

| Incorrect approach | Corrected approach |
|---|---|
| Interpret every unfavorable result as vendor underperformance | Inspect the risk-gate status and trigger reason |
| Continue scaling because the cost metric looks favorable | Respect blocking risk conditions even when the cost metric is attractive |
| Treat a warning as a confirmed finding | Distinguish flagged, suspected, and confirmed conditions |

The risk gate separates blocking conditions from situations that require human investigation. A banned account or confirmed fraud can block further allocation. A flagged account or suspected fraud condition can require review. A configured low-spend protection rule can prevent a premature performance-based stop.

**Decision implication:** The next action should address the actual failure mode—account access, tracking integrity, traffic quality, sample maturity, or acquisition economics—instead of using budget changes as a substitute for diagnosis.

<details>
<summary><strong>Risk-gate interpretation</strong></summary>

The source framework includes the following conditions:

| Condition | Intended handling |
|---|---|
| Account status is `BANNED` | Blocking condition; recommend `STOP` |
| Account status is `FLAGGED` | Warning requiring careful interpretation |
| Fraud risk is `CONFIRMED` | Blocking condition; recommend `STOP` |
| Fraud risk is `SUSPECTED` | Manual review |
| FTD sample is sufficient but repeat-deposit rate is below the configured minimum | Review condition |
| Spend is below the configured minimum-spend threshold | Protection against premature performance-based action |

Exact precedence, allowed status values, and formula behavior should be checked against the deployed workbook before use. The table describes the intended decision framework, not a guarantee that every external platform status can be detected automatically.

</details>

</details>

</details>

<details>
<summary><strong>Example Scenario</strong></summary>

Consider a hypothetical vendor acquired through a specific market and platform combination. The figures below illustrate how the framework should be interpreted; they are not reported results from a live campaign.

| Metric | Example value |
|---|---:|
| Spend | 3,600 |
| FTD count | 40 |
| Target cost per FTD | 100 |
| Repeat-deposit count | 12 |
| Day 3 retained count | 20 |
| Account status | Active |
| Fraud risk | None reported |

The cost per FTD is:

```text
3,600 / 40 = 90
```

If the configured scale ratio is 85%, the scale threshold is:

```text
100 × 85% = 85
```

The observed cost of 90 is below the target of 100, but it is **not** at or below the scale threshold of 85. Under this example, the cost metric alone therefore does not trigger `SCALE`.

The repeat-deposit rate is:

```text
12 / 40 = 30%
```

The Day 3 retention rate is:

```text
20 / 40 = 50%
```

These figures add context about downstream behavior, but they should not be interpreted as universally good or bad rates. Their meaning depends on the relevant market, platform, product, attribution window, and configured benchmark.

The engine next checks whether the cohort has reached the relevant checkpoint, whether the sample is sufficient, and whether any risk gate blocks or redirects the decision. If the sample is sufficient and no review condition applies, the cost result falls between the example scale and stop thresholds, so the performance-based action is `KEEP`.

The operational conclusion is not “this vendor is good” or “this vendor is bad.” It is: **the observed cost is better than the target but does not meet the configured scale condition; continue monitoring unless a separate risk condition changes the action.**

</details>

<details>
<summary><strong>Formula Reference</strong></summary>

The following formulas describe the intended calculation logic. They are reference patterns, not a substitute for inspecting the exact formulas in a particular workbook release. Cell references, table names, structured references, and spill ranges may differ by implementation.

<details>
<summary><strong>1. Raw Input: record keys and data-quality checks</strong></summary>

**Purpose:** Identify source records and make missing or inconsistent inputs visible before interpreting calculated metrics.

Typical logic:

```excel
=IF([@Vendor_Name]="","",[@Vendor_Name]&"|"&[@Market]&"|"&[@Platform]&"|"&TEXT([@Launch_Date],"yyyymmdd"))
```

This is an illustrative composite-key pattern only. The production workbook may use a different key definition. If multiple records share the same vendor, market, platform, and launch date, the key must include an additional batch or source identifier to remain unique.

A data-quality probe should separately identify missing required fields, invalid dates, negative amounts or counts, and inconsistent funnel totals. A generated key is not proof that a record is complete or unique.

</details>

<details>
<summary><strong>2. KPI Engine: elapsed days, acquisition costs, and conversion rates</strong></summary>

**Purpose:** Standardize cohort age and calculate comparable acquisition and funnel metrics.

Elapsed days:

```excel
=Data_Date-Launch_Date+1
```

The `+1` convention treats the launch date as Day 1. The same convention must be used consistently when assigning Day 3, Day 4, Day 7, and Day 30 milestones.

Cost per FTD:

```excel
=IF(FTD_Count>0,Spend_Amount/FTD_Count,0)
```

Cost per NAR:

```excel
=IF(NAR_Count>0,Spend_Amount/NAR_Count,0)
```

Registration-to-FTD rate:

```excel
=IF(NAR_Count>0,FTD_Count/NAR_Count,0)
```

FTD-to-STD rate:

```excel
=IF(FTD_Count>0,STD_Count/FTD_Count,0)
```

These patterns use zero when the denominator is zero to avoid division errors. In reporting, however, a zero output must not be confused with a measured zero cost or a confirmed zero conversion rate. Where practical, show an accompanying sample or denominator status.

</details>

<details>
<summary><strong>3. KPI Engine: retention and CP Score</strong></summary>

**Purpose:** Add downstream quality indicators to acquisition-cost comparisons.

A retention-rate pattern is:

```excel
=IF(FTD_Count>0,Retained_Count/FTD_Count,0)
```

The source framework defines CP Score as a composite score weighted across three components:

| Component | Weight |
|---|---:|
| Cost efficiency | 50% |
| Repeat-deposit health | 25% |
| Day 3 retention | 25% |

The score is normalized against configured targets and the minimum repeat-deposit threshold, then capped to the range 0–100. This allows several indicators to be viewed together without claiming that the score is a predictive probability.

A score should be interpreted alongside the raw metrics, sample size, milestone, and risk-gate result. Composite scores can conceal materially different underlying patterns if displayed alone.

</details>

<details>
<summary><strong>4. Decision Engine: sample sufficiency, risk gates, and action thresholds</strong></summary>

**Purpose:** Enforce the intended decision sequence: sample sufficiency, risk checks, then benchmark comparison.

The example performance thresholds are:

```text
Scale threshold = Target Cost per FTD × 0.85
Stop threshold  = Target Cost per FTD × 1.25
```

The supplied framework uses these example ratios as configurable parameters. The scale rule is met when cost per FTD is at or below the scale threshold; the stop rule is met when cost per FTD is at or above the stop threshold, subject to the applicable protection and risk rules.

The high-level decision order is:

```text
1. Evaluate blocking risk conditions.
2. Evaluate conditions requiring review.
3. Check sample sufficiency for the current milestone.
4. Apply the configured performance thresholds.
5. Return the action, trigger reason, and budget adjustment factor.
```

The action engine should not let a favorable cost metric override a blocking risk condition. Similarly, insufficient sample evidence should not be interpreted as proof of poor performance.

The budget adjustment factor is derived from the configured action multiplier. It represents a suggested adjustment, not a direct modification of an advertising platform's budget.

</details>

<details>
<summary><strong>5. Executive Dashboard: historical Day 30 backtesting</strong></summary>

**Purpose:** Compare early recommendations with later observed outcomes so the team can evaluate whether its rules are useful.

The source framework considers historical batches that have reached at least 30 days and have positive recorded Day 30 revenue. The example evaluation rules include:

- An early `SCALE` decision is considered successful when Day 30 revenue divided by spend is at least 1.0.
- An early `STOP` decision is considered correct when the corresponding Day 30 ROI is below 0.6.

These are configurable evaluation definitions, not universal standards. The source does not establish that the thresholds have been independently validated across markets or platforms.

Backtesting can expose systematic errors—for example, scaling cohorts that later fail to recover spend or stopping cohorts that would have performed acceptably. Results remain sensitive to attribution lag, incomplete revenue records, cohort selection, and changes in operating conditions.

</details>

</details>

<details>
<summary><strong>Validation Rules</strong></summary>

The workbook depends on consistent source data, valid cohort dates, compatible market/platform benchmarks, and correctly configured thresholds. The following rules describe the intended validation behavior. Exact dropdown values and formula-level error handling should be verified against the deployed workbook.

| Field or condition | Validation rule | Expected handling |
|---|---|---|
| `Record_ID` | Each source record should have a usable identifier; repeated composite keys must be investigated | Flag potential duplicates rather than assuming records are unique |
| `Vendor_Name` | Required for identifying and reviewing a vendor record | Blank vendor names should not be treated as valid analytical records |
| `Market` | Must match a configured market benchmark | Investigate unmatched values; a missing benchmark can prevent valid target comparison |
| `Platform` | Must match a configured platform value | Investigate inconsistent spelling or unsupported values |
| `Launch_Date` | Must be a valid date | Invalid dates prevent reliable cohort-age calculation |
| `Data_Date` | Must be a valid date and consistent with the observation period | Invalid or inconsistent dates can misclassify evaluation milestones |
| `Spend_Amount` | Must be numeric and non-negative | Investigate negative values and distinguish missing spend from genuine zero spend |
| `Impressions` | Must be a non-negative count | Investigate negative or nonnumeric observations |
| `Clicks` | Must be a non-negative count | Investigate negative values and implausible relationships with impressions |
| `NAR_Count` | Must be a non-negative count | Check source definitions and consistency with the registration funnel |
| `FTD_Count` | Must be a non-negative count | Required for cost-per-FTD and related conversion calculations |
| `FTD_Amount` | Must be numeric and consistent with the source currency convention | Investigate missing values or currency mismatches |
| `STD_Count` and `TTD_Count` | Must be non-negative counts | Verify event definitions and expected funnel relationships |
| `D2_Retained_Count`, `D3_Retained_Count`, `D7_Retained_Count` | Must be non-negative counts with a consistent retention denominator | Investigate counts that exceed the eligible cohort or reflect inconsistent observation windows |
| `Day30_Actual_Revenue` | Must be numeric and interpreted consistently with the chosen currency and revenue definition | Exclude incomplete or immature observations from backtesting as appropriate |
| `Account_Status` | Must use a recognized status value | Banned or flagged conditions should follow the configured risk rules |
| `Fraud_Risk_Tag` | Must use a recognized risk classification | Confirmed and suspected cases must not be treated as equivalent |
| `Analyst_Notes` | Record relevant tracking incidents, attribution delays, restrictions, or manual findings | Provides context for later review and backtesting |
| Benchmark lookup | Market and platform combination must resolve to the intended benchmark | Investigate lookup failures instead of silently substituting an unrelated target |
| Sample sufficiency | Relevant checkpoint must meet its configured minimum sample size | Keep immature evidence separate from confirmed underperformance |
| Risk gate | Blocking and review conditions must be evaluated before performance-based actions | Prevent favorable cost metrics from overriding blocking conditions |
| Formula spill ranges | Destination cells must remain clear for dynamic-array results | Clear obstructing cells if Excel reports `#SPILL!` |
| Calculation mode | Workbook should use automatic recalculation | Recalculate if results appear stale |
| Formula references | Formula ranges and configured table names must remain intact | Investigate `#REF!`, `#VALUE!`, and similar errors before using recommendations |

<details>
<summary><strong>Data-quality and error-handling notes</strong></summary>

- **Zero denominator:** Cost and conversion formulas may return `0` when their denominator is zero. This avoids a division error but does not establish a measured zero cost or conversion rate. Review the underlying count before interpreting the result.
- **Unmatched market/platform:** A benchmark lookup failure should be resolved at the source or configuration level. Do not assume that a missing target means the vendor has met its target.
- **Missing vendor name:** The record identifier may remain blank when the vendor-name field is blank, depending on the deployed formula.
- **Dynamic-array spill errors:** Clear cells that obstruct the intended spill range. Do not overwrite formula-generated output cells to force a result.
- **Stale calculations:** Check Excel's calculation mode and recalculate when necessary.
- **Currency formatting:** Display formats do not convert values between currencies. Confirm that source amounts and configured benchmarks use a consistent currency basis.
- **Retention and funnel counts:** Check denominator definitions and observation windows. A mathematically valid ratio can still be misleading when source events use different cohort definitions.

Validation reduces preventable errors, but it cannot establish that every source report is complete, every conversion is legitimate, or every attribution event is correctly assigned. Those conditions require operational checks and reconciliation with the underlying platforms.

</details>

</details>

<details>
<summary><strong>Runtime Requirements</strong></summary>

| Item | Requirement or recommendation |
|---|---|
| Excel version | Microsoft 365 recommended; Excel 2021 or later is the intended baseline |
| Formula compatibility | Uses modern Excel functionality, including dynamic arrays and advanced functions such as `LET`, `FILTER`, `SORT`, `XLOOKUP`, `MAP`, `LAMBDA`, `HSTACK`, and `VSTACK` |
| Older Excel versions | Excel 2019 and earlier are not supported by the intended formula architecture |
| Workbook format | `.xlsx` or `.xlsb`, subject to compatibility testing of the delivered file |
| Collaboration | OneDrive or SharePoint can support shared workflows; avoid simultaneous structural edits to the input table |
| Suggested working scale | Up to approximately 10,000 records for routine use; test performance before expanding toward 50,000 records |
| Historical data | Archive older, mature records periodically when the active workbook becomes difficult to maintain |

The actual supported version should be confirmed against the workbook release being distributed. A function's availability in an Excel version does not, by itself, guarantee that every formula behaves identically across environments.

</details>

<details>
<summary><strong>Operating Procedure</strong></summary>

<details>
<summary><strong>Twice-weekly vendor and budget review</strong></summary>

1. **Import source records.** Update `02_Raw_Input` with the latest available vendor, market, platform, spend, conversion, retention, and risk information.
2. **Check data quality.** Review missing identifiers, unmatched benchmarks, inconsistent dates, implausible counts, and tracking incidents.
3. **Review decision gates.** Distinguish insufficient samples, operational risk, and performance-based recommendations.
4. **Review the dashboard.** Use the executive snapshot and action list to prepare the budget review. Confirm the triggering reason before changing an allocation.
5. **Record the decision.** Document relevant context and manual overrides in the appropriate operational records.
6. **Revisit mature cohorts.** Compare early decisions with available Day 30 outcomes and investigate systematic errors.

</details>

<details>
<summary><strong>Parameter maintenance</strong></summary>

- Update market/platform benchmark values when the business's target economics change.
- Adjust sample thresholds and action ratios through the configuration area rather than editing individual decision formulas.
- Add new markets or platforms only after updating the relevant benchmark and validation configuration.
- Preserve formula-generated ranges and verify outputs after structural changes.
- Re-test representative cases after modifying risk rules or decision thresholds.

</details>

</details>

<details>
<summary><strong>Limitations</strong></summary>

This analyzer is a rules-based decision-support framework. It is not a predictive guarantee of Day 30 revenue and does not automatically execute campaign, payment, or account actions.

Early acquisition signals can change because of attribution delays, later chargebacks, tracking failures, platform restrictions, and differences in cohort quality. A recommendation is only as reliable as the underlying data, benchmark definitions, sample requirements, and rules.

Day 30 backtesting can help identify where the rules need adjustment, but historical performance does not guarantee future accuracy. Results should be segmented by relevant market, platform, and operating conditions where sufficient data exists.

</details>

<details>
<summary><strong>Troubleshooting</strong></summary>

| Symptom | Likely cause | Recommended check |
|---|---|---|
| `#SPILL!` | Cells block a dynamic-array output range | Clear obstructing cells without deleting the source formula |
| `#N/A` in benchmark-dependent results | Market/platform combination does not match configured reference values | Check spelling, allowed values, and benchmark coverage |
| Unexpected zero cost or rate | The denominator may be zero, missing, or not yet reported | Inspect the underlying counts and data-completeness status |
| Results do not update | Calculation mode or workbook dependencies may be incorrect | Confirm automatic calculation and recalculate |
| Vendor identifier is blank | Required source fields may be missing | Check the vendor-name field and the identifier formula |
| Implausible retention or conversion rate | Counts may use inconsistent cohort definitions or observation windows | Reconcile event definitions and eligible population |
| Unexpected `SCALE` or `STOP` recommendation | Configuration, risk precedence, or benchmark selection may not match expectations | Inspect the trigger reason, applicable benchmark, sample status, and configured thresholds |

</details>

</details>

## The Business Logic & Methodology

The analyzer is designed around a practical acquisition-management problem: early data is available well before a vendor's long-term value is certain, but budget decisions cannot always wait until every cohort matures. Its purpose is to structure that uncertainty so decisions can be reviewed consistently rather than made from one attractive or alarming metric.

- **Milestone-based evaluation** separates Day 3, Day 4, and Day 7 decisions. It helps the team avoid treating an immature cohort as if it had the same evidential strength as a mature one.
- **Benchmark comparison** evaluates acquisition cost against the target for the relevant market and platform. This makes vendor comparisons more commercially meaningful than applying one universal cost threshold across different operating conditions.
- **Risk gating** separates account restrictions and suspected or confirmed fraud from ordinary performance problems. It helps the team identify when the next step should be investigation or risk control rather than a routine budget adjustment.
- **Multi-indicator review** combines acquisition cost with funnel behavior, repeat-deposit signals, and retention. This provides more context for judging whether inexpensive acquisition is accompanied by evidence of downstream quality.
- **Day 30 backtesting** compares early recommendations with later recorded outcomes. It provides a way to review whether the current rules are systematically too aggressive, too conservative, or insufficiently sensitive to specific operating conditions.

These methods work together as a decision sequence: establish whether the evidence is usable, check whether risk conditions apply, compare performance with the appropriate target, and then review the recommendation against later outcomes.

The result is not a claim that early performance can be known with certainty. It is a repeatable process for making early decisions more transparent, documenting why an action was suggested, and improving the rules as better evidence becomes available.

## Other Tools in This Series

Theseus Workshop develops lightweight business-analysis and decision-support tools for recurring operational problems.

- **Construction Cost Estimating & Project Control** — Connects estimating assumptions with project-level cost and execution tracking.
- **Inventory Reconciliation & Shrinkage Analysis** — Helps identify discrepancies across inventory records and locations.
- **Order-Level Profitability & Financial Reconciliation** — Structures revenue and cost analysis around individual orders.
- **Business Forecasting & Scenario Planning** — Helps evaluate financial outcomes under alternative operating assumptions.

Explore the related projects on the [Theseus Workshop GitHub profile](https://github.com/HyVoid). Confirm the availability and current scope of each repository before adopting it for operational use.

## License

This project is intended to be distributed under the **Apache License 2.0**.

Before publishing a release, include the applicable `LICENSE` file in the repository and confirm that the license covers the actual files being distributed. If the browser version, Excel workbook, or third-party assets have separate licensing terms, document those terms explicitly rather than assuming that every component is covered identically.

