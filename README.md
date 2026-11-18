# Morning Ops QC Demo - AI Evaluation



### Live demo: https://a-cristina-lazcano-r.github.io/morning-ops-qc-demo/



A small demo of an AI-assisted morning routine for a fictional Dallas home-services business, with a human quality-control step before anything can be sent to a customer.



All data in this project is fictional. BrightPath Home Services, its customers, prices and messages were invented for this demo. No real client or personal data is used.



### The problem



|**Question**|**Answer**|
|-|-|
|What is the problem?|A small business owner starts the day buried: overnight leads sit unsorted, yesterday's calls are in notes, and follow-ups go out late or with a wrong price.|
|Who benefits?|The owner, who gets a trustworthy morning brief instead of an inbox, and customers, who never receive a wrong quote.|
|How is success measured?|Morning brief ready in under 10 minutes; every outbound draft passes the QC gate before sending; no wrong-price email sent in testing.|





### What it does

1. Intake: loads overnight leads and yesterday's call notes. Nothing is sent.
2. Sort: ranks each lead by urgency (damage risk first, then fixed deadlines, ready-to-book, price questions, incomplete leads) and names what is missing.
3. Summarise: turns each call note into who, what was agreed, and what is still owed.
4. Draft: shows a follow-up draft for each open item. Drafts are held, never sent.
5. QC gate: every draft gets a verdict (Approved, Needs correction, or Blocked) with the reason in plain words.
6. Morning brief: one page with counts, blocked items and the decisions the owner needs to make today.



### The QC gate

No draft is ever auto-sent. If a check cannot be verified from the source data, the verdict is Blocked, not Approved.



* **Accuracy**: price matches the price book; date and weekday agree; name, service, time and place match the call note.
* **Completeness**: everything promised is included; one clear next step; unanswered questions are flagged, not guessed.
* **Tone, safety and privacy**: plain and friendly; no invented claims, discounts or guarantees; no other customer's data or credentials.



**Verdicts:** Approved (all checks pass), Needs correction (intent is right, a fixable detail is wrong), Blocked (a wrong price or date, an invented claim, or a privacy problem).



**Example caught by the gate:** draft D1 quoted a deep clean at $149. The price book and the call note both say $249, so it was Blocked.



### Test log



I ran each draft through the checklist myself before comparing my verdict with the page's.



|Case|Expected|My verdict|Page showed|Result and what I changed|
|-|-|-|-|-|
|D1 - wrong price|Blocked|Blocked|Blocked|Agreed|
|D2 - wrong date / weekday|Blocked|Blocked|Blocked|Agreed|
|D3 - wrong name spelling|Needs correction|Needs correction|Needs correction|Agreed|
|D4 - missing next step|Needs correction|Needs correction|Needs correction|Agreed|
|D5 - tone / invented guarantee|Needs correction|Blocked|Needs correction|Disagreed. The draft invents a guarantee, a refund and a deadline. The checklist says invented claims are Blocked. Changed D5 to Blocked.|
|D6 - clean control draft|Approved|Approved|Approved|Agreed|
|Stress test - D1 price edited to $249|Approved|Approved|Blocked|Miss. The page kept showing Blocked because verdicts are pre-written in the data file and the page does not read the draft text. Fix planned for version 2.|





Also checked: the page is readable on a phone.



### Honesty note



Version 1 uses pre-written, rule-based outputs to demonstrate the workflow and the QC gate. It does not call a live AI model, and its verdicts are stored in the data file rather than calculated. The stress test above shows the limit of this approach. The judgement (the checklist, the verdicts and the test findings) is real, even where the generation is simulated.



What I would add next

* Version 2: make the gate calculate verdicts itself, for example by comparing every price in a draft against the price book, so new drafts can be tested at any time.
* Real AI drafts: connect an AI model to write the drafts, with the same QC gate checking them.



### Files

* index.html - the demo page
* data.js - the fictional data (price book, leads, calls and drafts)

