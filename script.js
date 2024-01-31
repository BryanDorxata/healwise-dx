function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const individualTherapyValue = getQueryParam("Individual-therapy");
const supportGroupValue = getQueryParam("Support-Group");
const familyCouplesTherapyValue = getQueryParam("Family-Couples-Therapy");
const peerSupportValue = getQueryParam("Peer-Support");
const groupTherapyValue = getQueryParam("Group-Therapy");
const guidedSelfHelpValue = getQueryParam("Guided-Self-Help");
const basicCrisisSupportValue = getQueryParam("Basic-Crisis-Support");
const chatServiceValue = getQueryParam("Chat-Service");
const mentalHealthProfessionalValue = getQueryParam(
  "Mental-Health-Professional"
);
const peerValue = getQueryParam("Peer");
const trainedVolunteerValue = getQueryParam("Trained-Volunteer");
const serviceCurrentlyUnknownValue = getQueryParam("Service-Currently-Unknown");
const medicationManagementServicesValue = getQueryParam(
  "Medication-Management-Services"
);
const appValue = getQueryParam("App");
const textServiceValue = getQueryParam("Text-Service");
const hotlineValue = getQueryParam("Hotline");
const serviceFreeValue = getQueryParam("Is-This-Service-Free");
const noInsuranceNeededValue = getQueryParam("No-insurance-needed");
const medicareValue = getQueryParam("Medicare");
const medicaidValue = getQueryParam("Medicaid-Public-Insurance");
const privateInsuranceValue = getQueryParam("Private-insurance");
const slidingScaleValue = getQueryParam("Sliding-scale");
const feeWaiverValue = getQueryParam("Fee-waiver");
const transportationAssistanceValue = getQueryParam(
  "Transportation-assistance"
);
const noneValue = getQueryParam("None");
const adultsValue = getQueryParam("Adults");
const youngAdultsValue = getQueryParam("Young-adults");
const childrenValue = getQueryParam("Children");
const adolescentsTeensValue = getQueryParam("Adolescents-teens");
const seniorsOlderAdultsValue = getQueryParam("Seniors-older-adults");
const raceAsianValue = getQueryParam("Asian");
const raceBlackValue = getQueryParam("Black");
const raceIndigenousValue = getQueryParam("Indigenous");
const raceLatinoHispanicValue = getQueryParam("Latino-Hispanic");
const raceNoSpecializedServicesValue = getQueryParam(
  "Race-no-specialized-services"
);
const genderMenValue = getQueryParam("Men");

const genderWomenValue = getQueryParam("Women");
const genderTransgenderValue = getQueryParam("Transgender-gender-identity");
const genderGenderqueerValue = getQueryParam("Genderqueer");
const genderAgenderValue = getQueryParam("Agender");
const orientGayValue = getQueryParam("Gay");
const orientLesbianValue = getQueryParam("Lesbian");
const orientBisexualValue = getQueryParam("Bisexual");
const orientTransgenderValue = getQueryParam("Transgender-sexual-orientation");
const orientQueerValue = getQueryParam("Queer");
const orientQuestioningValue = getQueryParam("Questioning");
const orientNonBinaryValue = getQueryParam("Non-binary");
const orientAsexualValue = getQueryParam("Asexual-Aromantic");
const accessAsianValue = getQueryParam("Access-asian");
const accessBlackValue = getQueryParam("Access-black");
const accessIndigenousValue = getQueryParam("Access-indigenous");
const accessLatinoHispanicValue = getQueryParam("Access-latino");
const accessNoSpecializedServicesValue = getQueryParam(
  "Access-no-specialized-services"
);
const accessDeafOrHardOfHearingValue = getQueryParam("Deaf-or-Hard-of-hearing");
const accessIntellectuallyDevelopmentallyDisabledValue = getQueryParam(
  "Intellectually-Developmentally-Disabled"
);
const accessPhysicallyDisabledValue = getQueryParam("Physically-Disabled");
const accessVisuallyImpairedValue = getQueryParam("Visually-Impaired");

const trueITRadio = document.querySelector(
  'input[name="individual-therapy-radio"][value="true"]'
);
const trueSGRadio = document.querySelector(
  'input[name="support-group-radio"][value="true"]'
);
const trueFCTRadio = document.querySelector(
  'input[name="family-couples-therapy-radio"][value="true"]'
);
const truePSRadio = document.querySelector(
  'input[name="peer-support-radio"][value="true"]'
);
const trueGTRadio = document.querySelector(
  'input[name="group-therapy-radio"][value="true"]'
);
const trueGSHRadio = document.querySelector(
  'input[name="guided-self-help-radio"][value="true"]'
);
const trueBCSRadio = document.querySelector(
  'input[name="basic-crisis-support-radio"][value="true"]'
);
const trueCSRadio = document.querySelector(
  'input[name="chat-service-radio"][value="true"]'
);
const trueMHPRadio = document.querySelector(
  'input[name="mental-health-professional-radio"][value="true"]'
);
const truePRadio = document.querySelector(
  'input[name="peer-radio"][value="true"]'
);
const trueTVRadio = document.querySelector(
  'input[name="trained-volunteer-radio"][value="true"]'
);
const trueSCURadio = document.querySelector(
  'input[name="service-currently-unknown-radio"][value="true"]'
);
const trueMMSRadio = document.querySelector(
  'input[name="medication-management-services-radio"][value="true"]'
);
const trueAppRadio = document.querySelector(
  'input[name="app-radio"][value="true"]'
);
const trueTSRadio = document.querySelector(
  'input[name="text-service-radio"][value="true"]'
);
const trueHotlineRadio = document.querySelector(
  'input[name="hotline-radio"][value="true"]'
);
const serviceFreeRadio = document.querySelector(
  'input[name="service-free-radio"][value="true"]'
);
const noInsuranceNeededRadio = document.querySelector(
  'input[name="no-insurance-radio"][value="true"]'
);
const trueMedicareRadio = document.querySelector(
  'input[name="medicare-radio"][value="true"]'
);
const trueMedicaidRadio = document.querySelector(
  'input[name="medicaid-radio"][value="true"]'
);
const truePrivateInsuranceRadio = document.querySelector(
  'input[name="private-insurance-radio"][value="true"]'
);
const trueSlidingScaleRadio = document.querySelector(
  'input[name="sliding-scale-radio"][value="true"]'
);
const trueFeeWaiverRadio = document.querySelector(
  'input[name="fee-waiver-radio"][value="true"]'
);
const trueTransportationAssistanceRadio = document.querySelector(
  'input[name="transportation-assistance-radio"][value="true"]'
);
const trueNoneRadio = document.querySelector(
  'input[name="insurance-none-radio"][value="true"]'
);
const trueAdultsRadio = document.querySelector(
  'input[name="adults-radio"][value="true"]'
);
const trueYoungAdultsRadio = document.querySelector(
  'input[name="young-adults-radio"][value="true"]'
);
const trueChildrenRadio = document.querySelector(
  'input[name="children-radio"][value="true"]'
);
const trueAdolescentsTeensRadio = document.querySelector(
  'input[name="adolescents-teens-radio"][value="true"]'
);
const trueSeniorsOlderAdultsRadio = document.querySelector(
  'input[name="seniors-older-adults-radio"][value="true"]'
);
const trueRaceAsianRadio = document.querySelector(
  'input[name="race-asian-radio"][value="true"]'
);
const trueRaceBlackRadio = document.querySelector(
  'input[name="race-black-radio"][value="true"]'
);
const trueRaceIndigenousRadio = document.querySelector(
  'input[name="race-indigenous-radio"][value="true"]'
);
const trueRaceLatinoHispanicRadio = document.querySelector(
  'input[name="race-latino-radio"][value="true"]'
);
const trueRaceNoSpecializedServicesRadio = document.querySelector(
  'input[name="race-no-specialized-services-radio"][value="true"]'
);
const trueGenderMenRadio = document.querySelector(
  'input[name="gender-men-radio"][value="true"]'
);
const trueGenderWomenRadio = document.querySelector(
  'input[name="gender-woman-radio"][value="true"]'
);
const trueGenderTransgenderRadio = document.querySelector(
  'input[name="gender-transgender-radio"][value="true"]'
);
const trueGenderGenderqueerRadio = document.querySelector(
  'input[name="gender-queer-radio"][value="true"]'
);
const trueGenderAgenderRadio = document.querySelector(
  'input[name="gender-agender-radio"][value="true"]'
);
const trueOrientGayRadio = document.querySelector(
  'input[name="orient-gay-radio"][value="true"]'
);
const trueOrientLesbianRadio = document.querySelector(
  'input[name="orient-lesbian-radio"][value="true"]'
);
const trueOrientBisexualRadio = document.querySelector(
  'input[name="orient-bisexual-radio"][value="true"]'
);
const trueOrientTransgenderRadio = document.querySelector(
  'input[name="orient-transgender-radio"][value="true"]'
);
const trueOrientQueerRadio = document.querySelector(
  'input[name="orient-queer-radio"][value="true"]'
);
const trueOrientQuestioningRadio = document.querySelector(
  'input[name="orient-questioning-radio"][value="true"]'
);
const trueOrientNonBinaryRadio = document.querySelector(
  'input[name="orient-non-binary-radio"][value="true"]'
);
const trueOrientAsexualRadio = document.querySelector(
  'input[name="orient-asexual-radio"][value="true"]'
);
const trueAccessAsianRadio = document.querySelector(
  'input[name="access-asian-radio"][value="true"]'
);
const trueAccessBlackRadio = document.querySelector(
  'input[name="access-black-radio"][value="true"]'
);
const trueAccessIndigenousRadio = document.querySelector(
  'input[name="access-indigenous-radio"][value="true"]'
);
const trueAccessLatinoHispanicRadio = document.querySelector(
  'input[name="access-latino-radio"][value="true"]'
);
const trueAccessNoSpecializedServicesRadio = document.querySelector(
  'input[name="access-no-specialized-services-radio"][value="true"]'
);
const trueAccessDeafOrHardOfHearingRadio = document.querySelector(
  'input[name="access-deaf-radio"][value="true"]'
);
const trueAccessIntellectuallyDevelopmentallyDisabledRadio =
  document.querySelector(
    'input[name="access-intellectually-radio"][value="true"]'
  );
const trueAccessPhysicallyDisabledRadio = document.querySelector(
  'input[name="access-physically-disabled-radio"][value="true"]'
);
const trueAccessVisuallyImpairedRadio = document.querySelector(
  'input[name="access-visually-impaired-radio"][value="true"]'
);

if (individualTherapyValue === "on") {
  if (trueITRadio) {
    trueITRadio.checked = true;
  }
}
if (supportGroupValue === "on") {
  if (trueSGRadio) {
    trueSGRadio.checked = true;
  }
}
if (familyCouplesTherapyValue === "on") {
  if (trueFCTRadio) {
    trueFCTRadio.checked = true;
  }
}
if (peerSupportValue === "on") {
  if (truePSRadio) {
    truePSRadio.checked = true;
  }
}
if (groupTherapyValue === "on") {
  if (trueGTRadio) {
    trueGTRadio.checked = true;
  }
}
if (guidedSelfHelpValue === "on") {
  if (trueGSHRadio) {
    trueGSHRadio.checked = true;
  }
}
if (basicCrisisSupportValue === "on") {
  if (trueBCSRadio) {
    trueBCSRadio.checked = true;
  }
}
if (chatServiceValue === "on") {
  if (trueCSRadio) {
    trueCSRadio.checked = true;
  }
}
if (mentalHealthProfessionalValue === "on") {
  if (trueMHPRadio) {
    trueMHPRadio.checked = true;
  }
}
if (peerValue === "on") {
  if (truePRadio) {
    truePRadio.checked = true;
  }
}
if (trainedVolunteerValue === "on") {
  if (trueTVRadio) {
    trueTVRadio.checked = true;
  }
}
if (serviceCurrentlyUnknownValue === "on") {
  if (trueSCURadio) {
    trueSCURadio.checked = true;
  }
}
if (medicationManagementServicesValue === "on") {
  if (trueMMSRadio) {
    trueMMSRadio.checked = true;
  }
}
if (appValue === "on") {
  if (trueAppRadio) {
    trueAppRadio.checked = true;
  }
}
if (textServiceValue === "on") {
  if (trueTSRadio) {
    trueTSRadio.checked = true;
  }
}
if (hotlineValue === "on") {
  if (trueHotlineRadio) {
    trueHotlineRadio.checked = true;
  }
}
if (serviceFreeValue === "TRUE") {
  if (serviceFreeRadio) {
    serviceFreeRadio.checked = true;
  }
}
if (noInsuranceNeededValue === "on") {
  if (noInsuranceNeededRadio) {
    noInsuranceNeededRadio.checked = true;
  }
}
if (medicareValue === "on") {
  if (trueMedicareRadio) {
    trueMedicareRadio.checked = true;
  }
}
if (medicaidValue === "on") {
  if (trueMedicaidRadio) {
    trueMedicaidRadio.checked = true;
  }
}
if (privateInsuranceValue === "on") {
  if (truePrivateInsuranceRadio) {
    truePrivateInsuranceRadio.checked = true;
  }
}
if (slidingScaleValue === "on") {
  if (trueSlidingScaleRadio) {
    trueSlidingScaleRadio.checked = true;
  }
}
if (feeWaiverValue === "on") {
  if (trueFeeWaiverRadio) {
    trueFeeWaiverRadio.checked = true;
  }
}
if (transportationAssistanceValue === "on") {
  if (trueTransportationAssistanceRadio) {
    trueTransportationAssistanceRadio.checked = true;
  }
}
if (noneValue === "on") {
  if (trueNoneRadio) {
    trueNoneRadio.checked = true;
  }
}
if (adultsValue === "on") {
  if (trueAdultsRadio) {
    trueAdultsRadio.checked = true;
  }
}
if (youngAdultsValue === "on") {
  if (trueYoungAdultsRadio) {
    trueYoungAdultsRadio.checked = true;
  }
}
if (childrenValue === "on") {
  if (trueChildrenRadio) {
    trueChildrenRadio.checked = true;
  }
}
if (adolescentsTeensValue === "on") {
  if (trueAdolescentsTeensRadio) {
    trueAdolescentsTeensRadio.checked = true;
  }
}
if (seniorsOlderAdultsValue === "on") {
  if (trueSeniorsOlderAdultsRadio) {
    trueSeniorsOlderAdultsRadio.checked = true;
  }
}
if (raceAsianValue === "on") {
  if (trueRaceAsianRadio) {
    trueRaceAsianRadio.checked = true;
  }
}
if (raceBlackValue === "on") {
  if (trueRaceBlackRadio) {
    trueRaceBlackRadio.checked = true;
  }
}
if (raceIndigenousValue === "on") {
  if (trueRaceIndigenousRadio) {
    trueRaceIndigenousRadio.checked = true;
  }
}
if (raceLatinoHispanicValue === "on") {
  if (trueRaceLatinoHispanicRadio) {
    trueRaceLatinoHispanicRadio.checked = true;
  }
}
if (raceNoSpecializedServicesValue === "on") {
  if (trueRaceNoSpecializedServicesRadio) {
    trueRaceNoSpecializedServicesRadio.checked = true;
  }
}
if (accessAsianValue === "on") {
  if (trueAccessAsianRadio) {
    trueAccessAsianRadio.checked = true;
  }
}
if (genderMenValue === "on") {
  if (trueGenderMenRadio) {
    trueGenderMenRadio.checked = true;
  }
}
if (genderWomenValue === "on") {
  if (trueGenderWomenRadio) {
    trueGenderWomenRadio.checked = true;
  }
}
if (genderTransgenderValue === "on") {
  if (trueGenderTransgenderRadio) {
    trueGenderTransgenderRadio.checked = true;
  }
}
if (genderGenderqueerValue === "on") {
  if (trueGenderGenderqueerRadio) {
    trueGenderGenderqueerRadio.checked = true;
  }
}
if (genderAgenderValue === "on") {
  if (trueGenderAgenderRadio) {
    trueGenderAgenderRadio.checked = true;
  }
}
if (genderTransgenderValue === "on") {
  if (trueGenderTransgenderRadio) {
    trueGenderTransgenderRadio.checked = true;
  }
}

if (orientGayValue === "on") {
  if (trueOrientGayRadio) {
    trueOrientGayRadio.checked = true;
  }
}
if (orientLesbianValue === "on") {
  if (trueOrientLesbianRadio) {
    trueOrientLesbianRadio.checked = true;
  }
}
if (orientBisexualValue === "on") {
  if (trueOrientBisexualRadio) {
    trueOrientBisexualRadio.checked = true;
  }
}
if (orientTransgenderValue === "on") {
  if (trueOrientTransgenderRadio) {
    trueOrientTransgenderRadio.checked = true;
  }
}
if (orientQueerValue === "on") {
  if (trueOrientQueerRadio) {
    trueOrientQueerRadio.checked = true;
  }
}
if (orientQuestioningValue === "on") {
  if (trueOrientQuestioningRadio) {
    trueOrientQuestioningRadio.checked = true;
  }
}
if (orientNonBinaryValue === "on") {
  if (trueOrientNonBinaryRadio) {
    trueOrientNonBinaryRadio.checked = true;
  }
}
if (orientAsexualValue === "on") {
  if (trueOrientAsexualRadio) {
    trueOrientNonBinaryRadio.checked = true;
  }
}

if (accessBlackValue === "on") {
  if (trueAccessBlackRadio) {
    trueAccessBlackRadio.checked = true;
  }
}
if (accessIndigenousValue === "on") {
  if (trueAccessIndigenousRadio) {
    trueAccessIndigenousRadio.checked = true;
  }
}
if (accessLatinoHispanicValue === "on") {
  if (trueAccessLatinoHispanicRadio) {
    trueAccessLatinoHispanicRadio.checked = true;
  }
}
if (accessNoSpecializedServicesValue === "on") {
  if (trueAccessNoSpecializedServicesRadio) {
    trueAccessNoSpecializedServicesRadio.checked = true;
  }
}
if (accessDeafOrHardOfHearingValue === "on") {
  if (trueAccessDeafOrHardOfHearingRadio) {
    trueAccessDeafOrHardOfHearingRadio.checked = true;
  }
}
if (accessIntellectuallyDevelopmentallyDisabledValue === "on") {
  if (trueAccessIntellectuallyDevelopmentallyDisabledRadio) {
    trueAccessIntellectuallyDevelopmentallyDisabledRadio.checked = true;
  }
}
if (accessPhysicallyDisabledValue === "on") {
  if (trueAccessPhysicallyDisabledRadio) {
    trueAccessPhysicallyDisabledRadio.checked = true;
  }
}
if (accessVisuallyImpairedValue === "on") {
  if (trueAccessVisuallyImpairedRadio) {
    trueAccessVisuallyImpairedRadio.checked = true;
  }
}
if (accessAsianValue === "on") {
  if (trueAccessAsianRadio) {
    trueAccessAsianRadio.checked = true;
  }
}
if (accessBlackValue === "on") {
  if (trueAccessBlackRadio) {
    trueAccessBlackRadio.checked = true;
  }
}
if (accessIndigenousValue === "on") {
  if (trueAccessIndigenousRadio) {
    trueAccessIndigenousRadio.checked = true;
  }
}
if (accessLatinoHispanicValue === "on") {
  if (trueAccessLatinoHispanicRadio) {
    trueAccessLatinoHispanicRadio.checked = true;
  }
}
if (accessNoSpecializedServicesValue === "on") {
  if (trueAccessNoSpecializedServicesRadio) {
    trueAccessNoSpecializedServicesRadio.checked = true;
  }
}
if (accessDeafOrHardOfHearingValue === "on") {
  if (trueAccessDeafOrHardOfHearingRadio) {
    trueAccessDeafOrHardOfHearingRadio.checked = true;
  }
}
if (accessIntellectuallyDevelopmentallyDisabledValue === "on") {
  if (trueAccessIntellectuallyDevelopmentallyDisabledRadio) {
    trueAccessIntellectuallyDevelopmentallyDisabledRadio.checked = true;
  }
}
if (accessPhysicallyDisabledValue === "on") {
  if (trueAccessPhysicallyDisabledRadio) {
    trueAccessPhysicallyDisabledRadio.checked = true;
  }
}
if (accessVisuallyImpairedValue === "on") {
  if (trueAccessVisuallyImpairedRadio) {
    trueAccessVisuallyImpairedRadio.checked = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the select and radio button
  var selectField2 = document.getElementById("Home-Service");
  var appRadio2 = document.getElementsByName("app-radio")[0];
  console.log(selectField2);
  console.log(appRadio2);
  // Add event listener to the select field
  selectField2.addEventListener("change", function () {
    // Check if the selected value is 'Apps'
    if (selectField2.value === "Apps") {
      // If yes, check the radio button
      appRadio2.checked = true;
    } else {
      // If not, uncheck the radio button
      appRadio2.checked = false;
    }
  });
});
