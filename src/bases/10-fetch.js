const apiKey = '0HSsnrvpzUO00kFXsxVcM1yM2E4oxLpF';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json())
    .then( ({ data }) => {
        //console.log(data.images.original.url)
        const { url } = data.images.original;
        console.log( url);

        const img = document.createElement('img');
        img.src=url;
        document.body.append( img );
    })
    //console.log(resp)
    // resp.json().then( data => {
    //     console.log(data)
    // })
    .catch (console.warn);