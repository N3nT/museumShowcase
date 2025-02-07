function Pagination(props){

    const increasePage = () => {
        props.setPage(props.page + 1);
    }

    const decreasePage = () => {
        if(props.page > 1){
            props.setPage(props.page - 1);
        }
    }

    return(
        <div className="max-w-[300px] w-full flex justify-between items-center px-5 pb-15 pt-10">
            <button className="py-2 px-4 border-1" onClick={decreasePage}>Prev</button>
            <p>{props.page}</p>
            <button className="py-2 px-4 border-1" onClick={increasePage}>Next</button>
        </div>
    )
}

export default Pagination;