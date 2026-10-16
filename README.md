# iGaming Vendor Early Performance & Decision Analyzer

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346.svg)
![Category](https://img.shields.io/badge/Tool-Early%20Performance%20Decision%20Support-2251FF.svg)

**Evaluate acquisition vendors earlier, separate genuine performance problems from operational risks, and make more consistent budget decisions using a transparent, rule-based framework. Free browser access requires no installation or signup; an Excel version supports offline analysis and repeatable operational reviews.**

> **Choose how to work with the analyzer**
>
> - 🌐 **Browser version:** Open the web-based version to evaluate the workflow without installing software or creating an account.
> - 📥 **Excel version:** Use the workbook for offline analysis, internal review records, and recurring budget decisions.
>
> No signup. No installation. Free browser access.
>
> **Access links:** The public browser-demo URL and Excel distribution or purchase URL must be added before publication. This repository's source specification does not provide verified URLs.

## What It Helps You Track

- **Acquisition cost against market-specific targets** — identify vendors whose cost per first-time depositor (C/FTD) is materially better or worse than the applicable benchmark.
- **Early funnel quality** — compare net active registrations, first deposits, repeat deposits, and retention instead of judging acquisition by registration volume alone.
- **Evidence quality at Day 3, Day 4, and Day 7** — distinguish a promising early result from a conclusion based on too few first-time depositors.
- **Account and traffic risks** — flag restricted or banned advertising accounts, suspected fraudulent traffic, and unusually weak repeat-deposit behavior before treating the numbers as ordinary performance.
- **Recommended budget actions** — produce explainable `SCALE`, `KEEP`, `STOP`, or `REVIEW` recommendations, including the rule that triggered each result.
- **Historical decision performance** — compare early decisions with mature Day 30 results to assess whether the current thresholds are identifying valuable traffic or cutting off promising vendors too early.

## Quick Start Workflow

The analyzer follows a simple operating cycle: configure the rules once, import existing performance data, review the resulting recommendations, and refresh the data on a regular schedule.

### 1. Set the evaluation parameters

Open the dedicated configuration area and define the market/platform benchmarks, minimum sample requirements, minimum-spend protection threshold, and budget-action rules.

The reference configuration includes:

- Minimum spend protection threshold: 300 currency units.
- Minimum FTD samples: 10 at Day 3, 15 at Day 4, and 30 at Day 7.
- Scale threshold: C/FTD at or below 85% of the applicable target.
- Stop threshold: C/FTD at or above 125% of the applicable target.
- Suggested scale adjustment: increase the next budget allocation by 30%.

These are example starting parameters, not universal iGaming benchmarks. Replace them with targets validated against the actual market, acquisition channel, business economics, and historical performance.

### 2. Import the existing data

Export performance data from advertising platforms and attribution systems, or copy the relevant data from existing spreadsheets into the designated input area.

The source workflow covers vendor identity, market, platform, launch date, reporting date, spend, impressions, clicks, registration and deposit counts, retention, account health, and fraud-risk annotations.

Preserve the required field definitions and reporting periods. The analyzer cannot correct inconsistent attribution windows, incompatible currency units, or inaccurate source data simply by importing them.

### 3. Review the results

Move to the KPI, decision, and dashboard views. The calculation framework derives acquisition costs, conversion rates, retention indicators, sample sufficiency, risk flags, benchmark deviations, and recommended actions.

Review the reason behind each recommendation before changing an allocation. A low cost per first-time depositor does not automatically establish that a vendor is profitable, and an adverse early result does not automatically justify termination.

### 4. Refresh the data periodically

Refresh the imported data during the regular budget-review cycle. The intended operating cadence is twice weekly, with additional investigation whenever account restrictions, attribution failures, or suspicious traffic patterns appear.

For historical batches, add the mature Day 30 outcome when it becomes available. Use these observations to review the quality of earlier decisions and recalibrate thresholds when the evidence supports a change.

**Set the rules. Import the data. Review the evidence. Make the decision. Refresh when the next review is due.**

## Why I Built This

Early acquisition reporting creates a specific management problem: the numbers can look precise before they are reliable enough to support a budget decision.

A vendor may deliver registrations at a low cost but produce very few first-time depositors. Another may appear expensive during the first few days but attract users who return and deposit again. A third may show a sudden performance decline because an advertising account has been restricted or attribution has stopped working correctly.

Treating all three situations as ordinary acquisition performance leads to different kinds of waste: scaling low-quality traffic, terminating promising vendors, or blaming a vendor for a platform-side failure.

Consider a hypothetical Day 3 review. Vendor A has spent 300 currency units and generated 10 first-time depositors, giving it a C/FTD of 30. Vendor B has spent 100 and generated two first-time depositors, giving it a C/FTD of 50. If the applicable benchmark is 40, Vendor A looks more efficient on cost. Vendor B's result, however, is based on only two first-time depositors and falls below the configured minimum sample of 10.

The correct conclusion is not that Vendor B has definitively failed. Its evidence is insufficient. Vendor A may qualify for further evaluation, but repeat deposits, retention, account health, and traffic quality still matter before additional budget is committed.

I built this analyzer to make that reasoning reusable. It turns recurring questions into a consistent review framework instead of requiring every analyst to reconstruct the logic from scratch during a budget meeting.

## Common iGaming Acquisition Problems This Solves

| Problem | Without This Tool | With This Tool |
|---|---|---|
| Premature scaling | A low early acquisition cost is mistaken for reliable evidence of quality. | Sample requirements and additional quality indicators provide context before scaling. |
| Premature termination | A noisy result from a small cohort triggers a stop decision. | Insufficient evidence is distinguished from a sufficiently sampled performance failure. |
| Fraudulent or low-quality traffic | Cheap registrations and initial deposits conceal weak repeat-deposit behavior. | Deposit progression, retention indicators, and fraud annotations provide additional warning signals. |
| Platform-side disruption | Account restrictions or tracking failures are attributed to vendor capability. | Account-health and risk gates route affected cases to protection or manual review. |
| Inconsistent vendor comparisons | Analysts apply different thresholds to different markets or platforms. | A centralized benchmark matrix provides a common, configurable evaluation framework. |
| Unverified decision rules | Early decisions are debated without checking their eventual outcomes. | Mature historical batches can be reviewed against configured Day 30 outcome criteria. |

## Who This Is For

This tool is intended for iGaming acquisition managers, affiliate and media-buying teams, growth analysts, performance-marketing leads, and budget owners who regularly compare external traffic vendors across markets and advertising platforms.

It is particularly useful when a team manages many vendors, conducts frequent budget reviews, and needs consistent decision explanations without building a full analytics infrastructure.

It is not a replacement for an attribution platform, fraud-detection service, player-level lifetime-value model, financial reporting system, or experienced risk review. It does not guarantee Day 30 revenue or establish profitability from early indicators alone.

No spreadsheet expertise is needed to begin with the browser version. Open it and start reviewing the workflow. Use the Excel version when offline records, repeatable internal analysis, and greater control over the working model are important.

## About

I build lightweight trackers and decision-support tools for recurring business problems that involve too many moving parts to manage reliably in one's head or across disconnected spreadsheets.

The central question is practical: **What information needs to be in one place to make the next decision more confidently?**

The iGaming Vendor Early Performance & Decision Analyzer is one example of this approach. It packages a repeatable analytical process into an accessible tool, with explicit rules, visible assumptions, and a path to review decisions against subsequent outcomes.

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Workbook Architecture

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

#### Input-to-output dependency

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

### The Business Logic Behind the Decision Engine

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

### Three Traps That Catch Even Experienced Acquisition Teams

#### Trap 1: Treating a low cost per FTD as proof of quality

**The decision:** Increase a vendor's budget because its early cost per FTD is below the target.

**The hidden flaw:** The vendor may have very few FTDs, weak repeat-deposit behavior, poor retention, or an account-level risk flag.

| Incorrect approach | Corrected approach |
|---|---|
| Rank vendors by cost per FTD alone | Check sample sufficiency and risk status before comparing cost |
| Scale the cheapest vendor immediately | Scale only when the configured performance rule is satisfied and no blocking risk gate applies |

A low cost per FTD measures acquisition efficiency for one event. It does not establish downstream value or rule out fraud. The corrected process preserves the cost signal while requiring enough evidence and passing the applicable risk checks.

**Decision implication:** A cheap but immature or risky cohort should remain under observation or review rather than receiving an automatic budget increase.

<details>
<summary>Formula and rule reference</summary>

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

#### Trap 2: Stopping a vendor before the sample is sufficient

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
<summary>Sample-sufficiency rule reference</summary>

The intended checkpoint rules are:

| Evaluation checkpoint | Example minimum FTD count |
|---|---:|
| Day 3 | 10 |
| Day 4 | 15 |
| Day 7 | 30 |
| Day 30 | Mature-cohort review |

The configured values should be validated against the actual workbook's parameter cells before operational deployment. Day 30 maturity does not, by itself, guarantee that every revenue or attribution field is complete.

</details>

#### Trap 3: Confusing operational risk with poor acquisition performance

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
<summary>Risk-gate interpretation</summary>

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

### Example Scenario

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

### Formula Reference

The following formulas describe the intended calculation logic. They are reference patterns, not a substitute for inspecting the exact formulas in a particular workbook release. Cell references, table names, structured references, and spill ranges may differ by implementation.

<details>
<summary>1. Raw Input: record keys and data-quality checks</summary>

**Purpose:** Identify source records and make missing or inconsistent inputs visible before interpreting calculated metrics.

Typical logic:

```excel
=IF([@Vendor_Name]="","",[@Vendor_Name]&"|"&[@Market]&"|"&[@Platform]&"|"&TEXT([@Launch_Date],"yyyymmdd"))
```

This is an illustrative composite-key pattern only. The production workbook may use a different key definition. If multiple records share the same vendor, market, platform, and launch date, the key must include an additional batch or source identifier to remain unique.

A data-quality probe should separately identify missing required fields, invalid dates, negative amounts or counts, and inconsistent funnel totals. A generated key is not proof that a record is complete or unique.

</details>

<details>
<summary>2. KPI Engine: elapsed days, acquisition costs, and conversion rates</summary>

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
<summary>3. KPI Engine: retention and CP Score</summary>

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
<summary>4. Decision Engine: sample sufficiency, risk gates, and action thresholds</summary>

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
<summary>5. Executive Dashboard: historical Day 30 backtesting</summary>

**Purpose:** Compare early recommendations with later observed outcomes so the team can evaluate whether its rules are useful.

The source framework considers historical batches that have reached at least 30 days and have positive recorded Day 30 revenue. The example evaluation rules include:

- An early `SCALE` decision is considered successful when Day 30 revenue divided by spend is at least 1.0.
- An early `STOP` decision is considered correct when the corresponding Day 30 ROI is below 0.6.

These are configurable evaluation definitions, not universal standards. The source does not establish that the thresholds have been independently validated across markets or platforms.

Backtesting can expose systematic errors—for example, scaling cohorts that later fail to recover spend or stopping cohorts that would have performed acceptably. Results remain sensitive to attribution lag, incomplete revenue records, cohort selection, and changes in operating conditions.

</details>

</details>
### Validation Rules

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

#### Data-quality and error-handling notes

- **Zero denominator:** Cost and conversion formulas may return `0` when their denominator is zero. This avoids a division error but does not establish a measured zero cost or conversion rate. Review the underlying count before interpreting the result.
- **Unmatched market/platform:** A benchmark lookup failure should be resolved at the source or configuration level. Do not assume that a missing target means the vendor has met its target.
- **Missing vendor name:** The record identifier may remain blank when the vendor-name field is blank, depending on the deployed formula.
- **Dynamic-array spill errors:** Clear cells that obstruct the intended spill range. Do not overwrite formula-generated output cells to force a result.
- **Stale calculations:** Check Excel's calculation mode and recalculate when necessary.
- **Currency formatting:** Display formats do not convert values between currencies. Confirm that source amounts and configured benchmarks use a consistent currency basis.
- **Retention and funnel counts:** Check denominator definitions and observation windows. A mathematically valid ratio can still be misleading when source events use different cohort definitions.

Validation reduces preventable errors, but it cannot establish that every source report is complete, every conversion is legitimate, or every attribution event is correctly assigned. Those conditions require operational checks and reconciliation with the underlying platforms.

### Runtime Requirements

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

### Operating Procedure

#### Twice-weekly vendor and budget review

1. **Import source records.** Update `02_Raw_Input` with the latest available vendor, market, platform, spend, conversion, retention, and risk information.
2. **Check data quality.** Review missing identifiers, unmatched benchmarks, inconsistent dates, implausible counts, and tracking incidents.
3. **Review decision gates.** Distinguish insufficient samples, operational risk, and performance-based recommendations.
4. **Review the dashboard.** Use the executive snapshot and action list to prepare the budget review. Confirm the triggering reason before changing an allocation.
5. **Record the decision.** Document relevant context and manual overrides in the appropriate operational records.
6. **Revisit mature cohorts.** Compare early decisions with available Day 30 outcomes and investigate systematic errors.

#### Parameter maintenance

- Update market/platform benchmark values when the business's target economics change.
- Adjust sample thresholds and action ratios through the configuration area rather than editing individual decision formulas.
- Add new markets or platforms only after updating the relevant benchmark and validation configuration.
- Preserve formula-generated ranges and verify outputs after structural changes.
- Re-test representative cases after modifying risk rules or decision thresholds.

### Limitations

This analyzer is a rules-based decision-support framework. It is not a predictive guarantee of Day 30 revenue and does not automatically execute campaign, payment, or account actions.

Early acquisition signals can change because of attribution delays, later chargebacks, tracking failures, platform restrictions, and differences in cohort quality. A recommendation is only as reliable as the underlying data, benchmark definitions, sample requirements, and rules.

Day 30 backtesting can help identify where the rules need adjustment, but historical performance does not guarantee future accuracy. Results should be segmented by relevant market, platform, and operating conditions where sufficient data exists.

### Troubleshooting

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

