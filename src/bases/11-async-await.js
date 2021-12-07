//const getImagenPromesa = () => new Promise ( (resolve ) => resolve ('http://wwwd.com'))
//getImagenPromesa().then(console.log);
// async con await
const getImagen = async () => {

    try {

        const apiKey = '0HSsnrvpzUO00kFXsxVcM1yM2E4oxLpF';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } =  data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append( img );

    } catch (error) {
        //manejo del error
        console.error(error)
    }

   
 
}

getImagen();
