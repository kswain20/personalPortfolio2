import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives"

const allMembersofCongress = [...senators, ...representatives] //modern combining of array data... like a genius!

const senatorsDiv = document.quereySelector(".senatorsDiv")
const seniorityHeader = document.querySelector('.seniority')
const loyaltyList = document.querySelector() //!

console.log(senators);

function simplifiedSenators() {
  return senators.map((senator) => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `;
    return {
      id: senator.id,
      name: `${senator.first_name}${senator.last_name}`,
      gender: senator.gender,
      party: senator.party,
      imgURL:
        "https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg",
      seniority: +senator.seniority,
      state: senator.state,
      missedVotePct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    };
  });
}

function populateSenatorDiv(senatorsArray) {
  simplifiedSenators.forEach((senator) => {
    const senFigure = document.createElement("figure");
    const figImg = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    figImg.src = senator.imgURL;
    figCaption.textContent = senator.name;

    senFigure.appendChild(figImg);
    senFigure.appendChild(figCaption);
    senatorsDiv.appendChild(senFigure);
  });
}

populateSenatorDiv(simplifiedSenators());

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) =>
  acc.seniority > senator.seniority ? acc : senator);

  const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator)
  => acc.missedVotePct > senator.missedVotePct ? acc : senator)

 const biggestVacationerList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.biggestMissedVotesPct).map(senator => senator.name).join(' and ')


  seniorityHeader.textContent = `The most senior Senator Name is ${mostSeniorMember.name} and the biggest fans of vacations are ${biggestVacationerList}.`
  
simplifiedSenators().forEach(senator => {
    if(senator.loyaltyPct === 100) {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        loyaltyList.appendChild(listItem)
    }
})
