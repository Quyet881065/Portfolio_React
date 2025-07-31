

export const ButtonCustom = ({type="button" , className = "", children}) => {
    return (
        <div className="">
            <button type={type}
              className={`group relative flex items-center border pr-5
               border-[var(--main)] rounded-full cursor-pointer
               hover:bg-[var(--main)] transition duration-300 p-0 ${className}`} >
                {children}
            </button>
        </div>
    )
}