document.getElementById('illnessForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const illnesses = document.getElementById('illnessInput').value.split(',').map(i => i.trim().toLowerCase());
  const file = document.getElementById('fileInput').files[0];
  let result = '';

  const declinedList = [
    "all types of cancer", "heart failure", "epilepsy", "stroke", "copd", "ckd",
    "chronic kidney disease", "cirrhosis", "liver failure", "type 1 diabetes", "pancreatitis",
    "sickle cell disease", "thalassemia", "multiple sclerosis", "muscular dystrophy",
    "cerebral palsy", "systemic lupus", "rheumatoid arthritis", "ankylosing spondylitis",
    "obstructive sleep apnoea", "nephrotic syndrome", "nephritic syndrome", "valve diseases",
    "brain tumour", "cardiomyopathy", "all pediatric cardiac disorder"
  ];

  const riskCombo = ["diabetes", "hypertension", "cholesterol", "lipid disorders", "obesity", "high bmi", "smoking"];
  const matchCombo = illnesses.filter(i => riskCombo.includes(i));
  if (matchCombo.length >= 3) {
    result = "Declined in the normal health insurance plan. Try your luck with the specialized plan exclusively meant for CUSTOMERS WITH PED.";
  } else {
    for (let illness of illnesses) {
      if (illness.includes("diabetes")) {
        const diabetesType = prompt("Is this Type 1 or Type 2 Diabetes?");
        const insulinUse = prompt("Is the user using insulin? (yes/no)");
        if (diabetesType === "type 1" || insulinUse === "yes") {
          result = "Declined in the normal health insurance plan. Try your luck with the specialized plan exclusively meant for CUSTOMERS WITH PED.";
          break;
        }
      } else if (declinedList.some(d => illness.includes(d))) {
        const confirmDecline = confirm(`Do you confirm the illness "${illness}" falls under declined list?`);
        if (confirmDecline) {
          result = "Declined in the normal health insurance plan. Try your luck with the specialized plan exclusively meant for CUSTOMERS WITH PED.";
          break;
        }
      }
    }
  }
  if (!result) result = "Accepted. Proceed with normal underwriting.";

  document.getElementById('resultArea').innerText = result;
});