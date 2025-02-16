import Card from '../components/Card';

const Main = ({ artworks }) => {
    return(
        <div className="p-5 flex flex-wrap flex-col justify-center max-w-[1900px] gap-[10px]">
            { artworks ? ( artworks.map((artwork) => {
                return (<Card key={artwork.id} id={artwork.id} title={artwork.title} image_id={artwork.image_id} short_description={artwork.short_description} artist_title={artwork.artist_title}/>)
            })) : "Something is wrong, please close tab and try again later"}
        </div>
    )
}

export default Main;