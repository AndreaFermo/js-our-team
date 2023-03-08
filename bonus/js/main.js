const cardsDom = document.querySelector('#cards')

const team = [
    {
        'name':'Wayne Barnett', 'role' : 'Founder & CEO', 'photo' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name':'Angela Caroll', 'role' : 'Chief Editor', 'photo' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'name':'Walter Gordon', 'role' : 'Office Manager', 'photo' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name':'Angela Lopez', 'role' : 'Social Media Manager', 'photo' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name':'Scott Estrada', 'role' : 'Developer', 'photo' : 'scott-estrada-developer.jpg'
    },
    {
        'name':'Barbara Ramos', 'role' : 'Graphic Designer', 'photo' : 'barbara-ramos-graphic-designer.jpg'
    }

];



for (let i = 0; i < team.length; i++) {
    const currentTeamMember = team[i]
    console.log(currentTeamMember['name'] + currentTeamMember['role'] + currentTeamMember['photo'])
    cardsDom.innerHTML += `<div><img src="img/${currentTeamMember['photo']}"></div><div>${currentTeamMember['name']}</div><div>${currentTeamMember['role']}</div>`;
}



