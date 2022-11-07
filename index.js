// console.log('worked')
fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displayData(data.sports.slice(0, 10)));


const displayData = linkDatas => {
    const cardDiv = document.getElementById('card-div');
    for (const linkData of linkDatas) {
        const newCardDiv = document.createElement('div');
        newCardDiv.classList.add('col');
        newCardDiv.innerHTML = `
<div class="card">
                    <img src="${linkData.strSportThumb
            }" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Sports Name: ${linkData.strSport}</h5>
                        <h6 class="card-title">Sports ID: ${linkData.idSport}</h6>
                        <h6 class="card-title">Team Format: ${linkData.strFormat}</h6>
                        <p class="card-text">Description: ${linkData.strSportDescription.slice(0, 50)}</p>
                    </div>
                </div>
`;

        cardDiv.appendChild(newCardDiv);






        console.log('Link data', linkData);
    }

    console.log(linkDatas);
}