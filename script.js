const emotionMap = {
  "anger+anticipation": {
    name: "Aggressive Planning",
    purpose: "Drive urgent action toward a goal.",
    urge: "Push ahead forcefully.",
    opposite: "Passive Hesitation"
  },
  "anger+disgust": {
    name: "Contempt",
    purpose: "Reject what is beneath moral standards.",
    urge: "Dismiss, criticize, separate.",
    opposite: "Admiration"
  },
  "anger+fear": {
    name: "Jealousy",
    purpose: "Protect attachments under threat.",
    urge: "Cling, confront, defend.",
    opposite: "Admiration"
  },
  "anger+joy": {
    name: "Righteous Joy",
    purpose: "Celebrate assertive victories or justice.",
    urge: "Stand proud, speak out.",
    opposite: "Resentment"
  },
  "anger+sadness": {
    name: "Envy",
    purpose: "Fuel frustration over what others have.",
    urge: "Compare, compete, stew.",
    opposite: "Gratitude"
  },
  "anger+surprise": {
    name: "Outrage",
    purpose: "React to unexpected injustice.",
    urge: "Protest, act fast, demand correction.",
    opposite: "Calm Acceptance"
  },
  "anger+trust": {
    name: "Loyal Defensiveness",
    purpose: "Protect valued people or groups.",
    urge: "Shield, support, resist threats.",
    opposite: "Betrayal"
  },
  "anticipation+disgust": {
    name: "Suspicion",
    purpose: "Scan for hidden threats or betrayal.",
    urge: "Pause, investigate cautiously.",
    opposite: "Trust"
  },
  "anticipation+fear": {
    name: "Anxiety",
    purpose: "Prepare for a possible threat.",
    urge: "Avoid, overthink, retreat.",
    opposite: "Confidence"
  },
  "anticipation+joy": {
    name: "Hope",
    purpose: "Fuel motivation toward a better future.",
    urge: "Dream, plan, take action.",
    opposite: "Despair"
  },
  "anticipation+sadness": {
    name: "Worry",
    purpose: "Dwell on what could go wrong or be lost.",
    urge: "Prepare, withdraw.",
    opposite: "Assurance"
  },
  "anticipation+surprise": {
    name: "Curiosity",
    purpose: "Open to new possibilities and questions.",
    urge: "Explore, investigate.",
    opposite: "Apathy"
  },
  "anticipation+trust": {
    name: "Optimism",
    purpose: "Believe in good outcomes and people.",
    urge: "Engage, commit, explore.",
    opposite: "Cynicism"
  },
  "disgust+fear": {
    name: "Shame",
    purpose: "Withdraw from social rejection or impurity.",
    urge: "Hide, isolate.",
    opposite: "Pride"
  },
  "disgust+joy": {
    name: "Guilt-Free Pleasure",
    purpose: "Indulge despite inner conflict.",
    urge: "Enjoy, then distance.",
    opposite: "Contentment"
  },
  "disgust+sadness": {
    name: "Remorse",
    purpose: "Reflect on harmful behavior or failure.",
    urge: "Apologize, withdraw.",
    opposite: "Self-Acceptance"
  },
  "disgust+surprise": {
    name: "Revulsion",
    purpose: "React strongly to something offensive.",
    urge: "Reject, turn away.",
    opposite: "Fascination"
  },
  "disgust+trust": {
    name: "Moral Conflict",
    purpose: "Struggle to accept something you value.",
    urge: "Distance, doubt.",
    opposite: "Faith"
  },
  "fear+joy": {
    name: "Excitement",
    purpose: "Approach something thrilling but risky.",
    urge: "Leap in with caution.",
    opposite: "Dread"
  },
  "fear+sadness": {
    name: "Guilt",
    purpose: "Correct or repair damage caused.",
    urge: "Confess, apologize.",
    opposite: "Indifference"
  },
  "fear+surprise": {
    name: "Shock",
    purpose: "Orient to sudden danger.",
    urge: "Freeze, assess.",
    opposite: "Preparedness"
  },
  "fear+trust": {
    name: "Vulnerability",
    purpose: "Take emotional risks despite fear.",
    urge: "Open up carefully.",
    opposite: "Defensiveness"
  },
  "joy+sadness": {
    name: "Bittersweetness",
    purpose: "Appreciate something beautiful yet passing.",
    urge: "Reflect, feel deeply.",
    opposite: "Emotional Detachment"
  },
  "joy+surprise": {
    name: "Awe",
    purpose: "Respond to vast beauty or wonder.",
    urge: "Pause, marvel.",
    opposite: "Contempt"
  },
  "joy+trust": {
    name: "Love",
    purpose: "Strengthen emotional closeness and care.",
    urge: "Nurture, connect.",
    opposite: "Loathing"
  },
  "sadness+surprise": {
    name: "Disappointment",
    purpose: "Grieve an unmet expectation.",
    urge: "Withdraw, sulk.",
    opposite: "Contentment"
  },
  "sadness+trust": {
    name: "Grief",
    purpose: "Mourn loss with a sense of connection.",
    urge: "Remember, reach out.",
    opposite: "Detachment"
  },
  "surprise+trust": {
    name: "Delight",
    purpose: "Celebrate joyful unexpected events.",
    urge: "Share, smile.",
    opposite: "Disdain"
  },
  "anger+anticipation+disgust": {
    name: "Cynical Drive",
    purpose: "Pursue goals while feeling morally conflicted.",
    urge: "Push forward with skepticism.",
    opposite: "Inspired Passion"
  },
  "anger+anticipation+fear": {
    name: "Frenzied Urgency",
    purpose: "React quickly to a threatening situation.",
    urge: "Act fast, defend, avoid failure.",
    opposite: "Calm Confidence"
  },
  "anger+anticipation+joy": {
    name: "Righteous Motivation",
    purpose: "Pursue what matters with fire and hope.",
    urge: "Lead, take action boldly.",
    opposite: "Hopelessness"
  },
  "anger+anticipation+sadness": {
    name: "Frustrated Drive",
    purpose: "Push toward healing or fairness through pain.",
    urge: "Act while grieving.",
    opposite: "Surrender"
  },
  "anger+anticipation+surprise": {
    name: "Explosive Ambition",
    purpose: "Respond to an unexpected call to act.",
    urge: "Launch quickly.",
    opposite: "Careful Delay"
  },
  "anger+anticipation+trust": {
    name: "Defensive Loyalty",
    purpose: "Protect something you believe in.",
    urge: "Stand up, speak out.",
    opposite: "Betrayal"
  },
  "anger+disgust+fear": {
    name: "Righteous Rage",
    purpose: "Defend values under perceived threat.",
    urge: "Confront, resist, correct.",
    opposite: "Indifference"
  },
  "anger+disgust+joy": {
    name: "Triumphant Scorn",
    purpose: "Celebrate overcoming something toxic.",
    urge: "Mock, celebrate victory.",
    opposite: "Shame"
  },
  "anger+disgust+sadness": {
    name: "Bitter Regret",
    purpose: "Acknowledge pain and judgment about past.",
    urge: "Withdraw, punish self or others.",
    opposite: "Forgiveness"
  },
  "anger+disgust+surprise": {
    name: "Furious Shock",
    purpose: "Explode in response to an offensive surprise.",
    urge: "React, reject, confront.",
    opposite: "Understanding"
  },
  "anger+disgust+trust": {
    name: "Conflicted Allegiance",
    purpose: "Feel torn between loyalty and moral disgust.",
    urge: "Split attention, distance emotionally.",
    opposite: "Clear Devotion"
  },
  "anger+fear+joy": {
    name: "Rebellious Excitement",
    purpose: "Break out of fear with joy-fueled action.",
    urge: "Risk, defy, laugh.",
    opposite: "Resigned Conformity"
  },
  "anger+fear+sadness": {
    name: "Desperate Fight",
    purpose: "Resist total loss or failure.",
    urge: "Fight to survive.",
    opposite: "Collapse"
  },
  "anger+fear+surprise": {
    name: "Explosive Panic",
    purpose: "Respond violently to sudden danger.",
    urge: "Strike fast, defend.",
    opposite: "Strategic Calm"
  },
  "anger+fear+trust": {
    name: "Protectiveness",
    purpose: "Defend what matters with intensity.",
    urge: "Guard, assert.",
    opposite: "Neglect"
  },
  "anger+joy+sadness": {
    name: "Passionate Grief",
    purpose: "Mourn deeply while caring fiercely.",
    urge: "Honor and fight for memory.",
    opposite: "Numbness"
  },
  "anger+joy+surprise": {
    name: "Energetic Disruption",
    purpose: "Celebrate an unexpected victory.",
    urge: "Burst forward.",
    opposite: "Suppression"
  },
  "anger+joy+trust": {
    name: "Empowered Boldness",
    purpose: "Take action with strength and care.",
    urge: "Lead with love.",
    opposite: "Self-Doubt"
  },
  "anger+sadness+trust": {
    name: "Grieving Protector",
    purpose: "Mourn and defend someone or something lost.",
    urge: "Guard memory or legacy.",
    opposite: "Neglectful Apathy"
  },
  "anger+surprise+trust": {
    name: "Urgent Loyalty",
    purpose: "Rush to defend a trusted cause.",
    urge: "React, step in.",
    opposite: "Abandonment"
  },
  "anticipation+disgust+joy": {
    name: "Conflicted Excitement",
    purpose: "Look forward to something you feel guilty about.",
    urge: "Move forward cautiously.",
    opposite: "Clean Contentment"
  },
  "anticipation+disgust+sadness": {
    name: "Regretful Hesitation",
    purpose: "Dread future pain or error.",
    urge: "Hold back, review.",
    opposite: "Hopeful Trust"
  },
  "anticipation+disgust+surprise": {
    name: "Dread",
    purpose: "React to an alarming potential.",
    urge: "Stop, avoid.",
    opposite: "Anticipatory Curiosity"
  },
  "anticipation+disgust+trust": {
    name: "Guarded Optimism",
    purpose: "Hope carefully while staying realistic.",
    urge: "Proceed cautiously.",
    opposite: "Naive Hope"
  },
  "anticipation+fear+joy": {
    name: "Adrenaline Rush",
    purpose: "Take thrilling risks.",
    urge: "Jump, run, play.",
    opposite: "Flat Avoidance"
  },
  "anticipation+fear+sadness": {
    name: "Hopelessness",
    purpose: "Expect a painful future.",
    urge: "Withdraw, shut down.",
    opposite: "Hope"
  },
  "anticipation+fear+surprise": {
    name: "Terror",
    purpose: "React to imminent unknown danger.",
    urge: "Panic, flee.",
    opposite: "Confidence"
  },
  "anticipation+disgust+fear": {
   name: "Dread",
   purpose: "React to an alarming potential or moral threat.",
   urge: "Freeze, avoid, overanalyze.",
   opposite: "Prepared Confidence"
  },
  "anticipation+fear+trust": {
    name: "Courage",
    purpose: "Act despite fear.",
    urge: "Face challenge bravely.",
    opposite: "Avoidance"
  },
  "anticipation+joy+sadness": {
    name: "Hopeful Grief",
    purpose: "Grieve while still looking forward.",
    urge: "Remember and rebuild.",
    opposite: "Emotional Stuckness"
  },
  "anticipation+joy+surprise": {
    name: "Eager Delight",
    purpose: "Respond with energy to a pleasant surprise.",
    urge: "Celebrate, engage.",
    opposite: "Boredom"
  },
  "anticipation+joy+trust": {
    name: "Optimism",
    purpose: "Approach the future with joyful confidence.",
    urge: "Plan, commit, believe.",
    opposite: "Cynicism"
  },
  "anticipation+sadness+surprise": {
    name: "Dismay",
    purpose: "React with sorrow to sudden disappointment.",
    urge: "Step back, withdraw.",
    opposite: "Gratitude"
  },
  "disgust+fear+joy": {
    name: "Guilty Pleasure",
    purpose: "Enjoy something that feels wrong or risky.",
    urge: "Indulge with caution.",
    opposite: "Pure Joy"
  },
  "disgust+fear+sadness": {
    name: "Self-Loathing",
    purpose: "Condemn and isolate the self.",
    urge: "Hide, punish, shrink.",
    opposite: "Self-Acceptance"
  },
  "disgust+fear+surprise": {
    name: "Horror",
    purpose: "Recoil from shocking danger or violation.",
    urge: "Flee, shut down.",
    opposite: "Calm Curiosity"
  },
  "disgust+fear+trust": {
    name: "Conflicted Submission",
    purpose: "Follow someone/something despite discomfort.",
    urge: "Obey, doubt, distance.",
    opposite: "Empowered Confidence"
  },
  "disgust+joy+sadness": {
    name: "Tainted Grief",
    purpose: "Mourn something that was also corrupt or wrong.",
    urge: "Detach, reflect, purge.",
    opposite: "Honor and Cherish"
  },
  "disgust+joy+surprise": {
    name: "Disturbing Amusement",
    purpose: "React to something funny but wrong.",
    urge: "Laugh and recoil.",
    opposite: "Moral Clarity"
  },
  "disgust+joy+trust": {
    name: "Ambivalent Connection",
    purpose: "Care for something/someone with internal conflict.",
    urge: "Engage and critique.",
    opposite: "Unquestioning Devotion"
  },
  "disgust+sadness+surprise": {
    name: "Ashamed Disappointment",
    purpose: "Grieve a mistake you’re embarrassed by.",
    urge: "Withdraw, fix, apologize.",
    opposite: "Self-Compassion"
  },
  "disgust+sadness+trust": {
    name: "Regretful Accountability",
    purpose: "Own a moral failing with humility.",
    urge: "Repair, be honest.",
    opposite: "Denial"
  },
  "disgust+surprise+trust": {
    name: "Moral Outrage",
    purpose: "React to unexpected ethical breach.",
    urge: "Expose, call out.",
    opposite: "Passive Tolerance"
  },
  "fear+joy+sadness": {
    name: "Nostalgia",
    purpose: "Long for something joyful that is now gone.",
    urge: "Remember, protect, revisit.",
    opposite: "Emotional Numbness"
  },
  "fear+joy+surprise": {
    name: "Thrill",
    purpose: "Engage in risk with surprise and energy.",
    urge: "Run toward it!",
    opposite: "Fearful Restraint"
  },
  "fear+joy+trust": {
    name: "Daring",
    purpose: "Act with faith despite risk.",
    urge: "Go for it bravely.",
    opposite: "Avoidance"
  },
  "fear+sadness+surprise": {
    name: "Trauma Response",
    purpose: "React to sudden painful fear.",
    urge: "Collapse, hide.",
    opposite: "Resilient Recovery"
  },
  "fear+sadness+trust": {
    name: "Wounded Vulnerability",
    purpose: "Open up while still hurting.",
    urge: "Be honest, seek care.",
    opposite: "Armored Isolation"
  },
  "fear+surprise+trust": {
    name: "Startled Concern",
    purpose: "React urgently for someone you trust.",
    urge: "Check in, support.",
    opposite: "Neglect"
  },
  "joy+sadness+surprise": {
    name: "Emotional Whiplash",
    purpose: "React to sudden highs and lows.",
    urge: "Cry and laugh together.",
    opposite: "Emotional Flatness"
  },
  "joy+sadness+trust": {
    name: "Heartfelt Remembrance",
    purpose: "Grieve someone or something you loved deeply.",
    urge: "Reflect, honor.",
    opposite: "Forgetfulness"
  },
  "joy+surprise+trust": {
    name: "Delight",
    purpose: "Celebrate something unexpectedly positive.",
    urge: "Share joyfully.",
    opposite: "Apathy"
  },
  "sadness+surprise+trust": {
    name: "Reassured Grief",
    purpose: "Be surprised by comfort while mourning.",
    urge: "Accept support.",
    opposite: "Abandonment"
  },
  "anticipation+sadness+trust": {
    name: "Resilient Grief",
    purpose: "Move forward even while hurting.",
    urge: "Keep going through pain.",
    opposite: "Despair"
  },
  "anticipation+surprise+trust": {
    name: "Inspiring Spark",
    purpose: "Feel energized by unexpected potential.",
    urge: "Act, speak, invest.",
    opposite: "Disappointment"
  }

};

const baseEmotions = [
  'joy','trust','fear',
  'sadness','disgust',
  'anger','surprise','anticipation'
];


function randomPastel() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
}

function setAccent(color) {
  document.documentElement.style.setProperty('--accent', color);
}

document.addEventListener('DOMContentLoaded', () => {
  setAccent(randomPastel());
});


function combineEmotions() {
  const e1 = document.getElementById("emotion1").value;
  const e2 = document.getElementById("emotion2").value;
  const e3 = document.getElementById("emotion3").value;

  const selected = [e1, e2, e3].filter(Boolean); // remove empty
  const sortedKey = selected.sort().join("+");   // sort and join

  const emotion = emotionMap[sortedKey];

  const box = document.getElementById("resultBox");
  box.style.display = "block";
  // trigger animation
  requestAnimationFrame(() => box.classList.add("show"));

  setAccent(randomPastel());

  if (emotion) {
    document.getElementById("emotionName").innerText = emotion.name;
    document.getElementById("emotionPurpose").innerText = emotion.purpose;
    document.getElementById("emotionUrge").innerText = emotion.urge;
    document.getElementById("emotionOpposite").innerText = emotion.opposite;
  } else {
    document.getElementById("emotionName").innerText = "Unknown or unlisted combination.";
    document.getElementById("emotionPurpose").innerText = "No known defined function.";
    document.getElementById("emotionUrge").innerText = "Unknown.";
    document.getElementById("emotionOpposite").innerText = "Unknown.";
  }
}

function resetForm() {
  ['emotion1','emotion2','emotion3'].forEach(id => {
    // 1) clear the hidden <select>
    const sel = document.getElementById(id);
    sel.value = '';

    // 2) reset the visible dropdown label
    const label = document
      .querySelector(`.dropdown[data-name="${id}"] .dropdown-selected`);
    if (label) label.textContent = '-- select --';
  });

  // hide the result card with your existing animation
  const box = document.getElementById("resultBox");
  box.classList.remove("show");
  setTimeout(() => {
    box.style.display = "none";
  }, 300);
}
