// All data in this file is fictional. Planted errors in the drafts are on purpose.

const DATA = {

  priceBook: [
    { service: "Standard home clean (2 bed)", price: "$179", notes: "Up to 3 hours" },
    { service: "Deep clean (2 bed)", price: "$249", notes: "First visit or move-in / out" },
    { service: "Handyman - first hour", price: "$95", notes: "Then $65 per extra hour" },
    { service: "Handyman - half day (4 hrs)", price: "$290", notes: "Booked as one block" },
    { service: "Window clean (inside only)", price: "$120", notes: "Ground and first floor" },
    { service: "Recurring clean discount", price: "10% off", notes: "Standard clean, weekly plan only" }
  ],

  // rank: 1 = most urgent. Order rule: damage risk, fixed deadline, ready to book, price question, incomplete.
  leads: [
    { id: "L1", name: "Sarah Mitchell", source: "Website form",
      message: "Hi, can I book a standard clean for a 2-bed apartment sometime this week? Mornings are best.",
      rank: 3, priority: "High", reason: "Ready to book: service and size are clear.", missing: "" },
    { id: "L2", name: "James Carter", source: "Referral",
      message: "Tap under the kitchen sink is leaking into the cupboard. Can someone come today?",
      rank: 1, priority: "Urgent", reason: "Water leak: risk of damage, so it goes first.", missing: "" },
    { id: "L3", name: "Priya Nair", source: "Instagram",
      message: "How much is a deep clean for a 2-bed? Moving in next Monday.",
      rank: 4, priority: "Medium", reason: "Price question. The price book has the answer.", missing: "" },
    { id: "L4", name: "Tom Alvarez", source: "Website form",
      message: "I'd like a cleaner every week, same day if possible. Please send details.",
      rank: 3, priority: "High", reason: "Recurring work: the most value over time.", missing: "" },
    { id: "L5", name: "Emma Wilson", source: "Email",
      message: "Interested in window cleaning (inside only). Thanks!",
      rank: 5, priority: "Low", reason: "Incomplete: cannot book yet.", missing: "A preferred date and the size of the home." },
    { id: "L6", name: "David Kim", source: "Website form",
      message: "Need a handyman for half a day next week - shelves, a door handle, curtain rail.",
      rank: 4, priority: "Medium", reason: "Scheduled work, not urgent.", missing: "" },
    { id: "L7", name: "Lucia Fernandez", source: "Referral",
      message: "Family arriving Saturday. Could we get a clean on Friday? 2-bed house.",
      rank: 2, priority: "High", reason: "Fixed deadline: the visit is on Saturday.", missing: "" },
    { id: "L8", name: "Noah Brooks", source: "Instagram",
      message: "How much do you charge?",
      rank: 5, priority: "Low", reason: "Incomplete: no service named.", missing: "Which service, the size of the home, and a date." }
  ],

  calls: [
    { id: "C1", who: "Sarah Mitchell", agreed: "Standard clean, Thursday 11 a.m., $179.",
      owed: "Send confirmation (draft D6)." },
    { id: "C2", who: "James Carter", agreed: "Emergency visit today. First hour $95.",
      owed: "Confirm the arrival window." },
    { id: "C3", who: "Priya Nair", agreed: "Deep clean quoted at $249 for Monday move-in.",
      owed: "Send the quote (draft D1)." },
    { id: "C4", who: "Tom Alvarez", agreed: "Weekly plan explained. 10% discount applies.",
      owed: "Send plan details." },
    { id: "C5", who: "Lucia Fernandez", agreed: "Clean on Friday 20 Nov, before her Saturday visit. Time to be confirmed.",
      owed: "Ask her to confirm 10 a.m." }
  ],

  drafts: [
    { id: "D1", to: "Priya Nair", about: "Deep clean quote",
      text: "Hi Priya, your deep clean for Monday is $149. Let us know if you'd like to book.",
      verdict: "Blocked",
      reason: "Price $149 does not match the price book ($249 for a deep clean). Call C3 also says $249.",
      corrected: "" },
    { id: "D2", to: "Lucia Fernandez", about: "Friday clean",
      text: "Hi Lucia, we can clean on Friday 21st - see you then!",
      verdict: "Blocked",
      reason: "Date and weekday do not agree: in this scenario Friday is the 20th. No time is given, and call C5 says the time is still to be confirmed.",
      corrected: "" },
    { id: "D3", to: "Sarah Mitchell", about: "Booking note",
      text: "Hi Sara, thanks for booking - we'll see you Thursday.",
      verdict: "Needs correction",
      reason: "Name is spelled Sarah. The agreed time (11 a.m.) and price ($179) are missing.",
      corrected: "Hi Sarah, thanks for booking. We'll see you Thursday at 11 a.m. for your standard clean, $179." },
    { id: "D4", to: "Tom Alvarez", about: "Weekly plan",
      text: "Hi Tom, great news - the weekly plan gives you 10% off the standard clean. Thanks for choosing us!",
      verdict: "Needs correction",
      reason: "The facts are correct, but there is no next step: no start day and no way to confirm.",
      corrected: "Hi Tom, the weekly plan gives you 10% off the standard clean. Reply with the day of the week you prefer and we will confirm your start date." },
    { id: "D5", to: "Emma Wilson", about: "Window cleaning",
      text: "Emma - last chance! Book windows today or lose your slot. We guarantee a spotless finish every time or it's free!",
      verdict: "Blocked",
      reason: "Invents a guarantee and a refund ('or it's free') that are not in our data, and invents a deadline ('lose your slot'). The tone is also pushy. Invented claims are Blocked by the checklist.",
      corrected: "" },
    { id: "D6", to: "Sarah Mitchell", about: "Confirmation",
      text: "Hi Sarah, confirming your standard clean on Thursday at 11 a.m. for $179. If you need to change anything, just reply to this message.",
      verdict: "Approved",
      reason: "Name, service, day, time and price all match call C1 and the price book.",
      corrected: "" }
  ]
};
