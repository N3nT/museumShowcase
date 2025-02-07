const Loading = () => {
    return(
        <div className="h-[500px] flex items-center">
            <div className="w-8 h-8 bg-black dark:bg-white m-4 animate-bounce"></div>
            <div className="w-8 h-8 bg-black dark:bg-white m-4 animate-bounce"style={{ animationDelay:  '0.25s'}}></div>
            <div className="w-8 h-8 bg-black dark:bg-white m-4 animate-bounce"style={{ animationDelay:  '0.5s'}}></div>
        </div>
    )
}

export default Loading;