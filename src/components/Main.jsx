import Card from '../components/Card';
function Main(props){
    console.log(props.artworks);
    return(
        <div className="p-5 flex flex-wrap justify-center max-w-[1900px]">
            {props.artworks.map((artwork) => {
                return (<Card key={artwork.id} title={artwork.title} image_id={artwork.image_id} short_description={artwork.short_description} artist_title={artwork.artist_title}/>)
            })}
        </div>
    )
}

export default Main;