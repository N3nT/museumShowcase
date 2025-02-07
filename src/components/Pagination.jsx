const Pagination = (props) => {

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
            <button className="py-2 px-4 border-1 hover:bg-zinc-950 hover:text-white hover:dark:bg-stone-100 hover:dark:text-black cursor-pointer" onClick={decreasePage}>Prev</button>
            <p>{props.page} of {props.total}</p>
            <button className="py-2 px-4 border-1 hover:bg-zinc-950 hover:text-white hover:dark:bg-stone-100 hover:dark:text-black cursor-pointer" onClick={increasePage}>Next</button>
        </div>
    )
}

export default Pagination;