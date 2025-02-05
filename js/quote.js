//Aman

async function getData(url){
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json.content);
        console.log(json.authorSlug);
    } catch (error) {
        console.error(error.message);
    }
}
getData("https://api.quotable.io/random");