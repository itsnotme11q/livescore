const apik=`3CZDfW4dQUdyrqoQDL3iqhNRYda2`;

//get upcomming matches

export const getMatches = () => {
    const url=`https://cricapi.com/api/matches/?apikey=${apik}`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("ERROR : ",error));
};

export const getMatchDetail=(id) =>{
    const url = `https://cricapi.com/api/cricketScore/?apikey=3CZDfW4dQUdyrqoQDL3iqhNRYda2&unique_id=${id}`;
    
    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log(error));
}
