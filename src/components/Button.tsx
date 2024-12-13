

const Button=(prop:any)=>{
    const {title}=prop;
    return(
        <button className=" hover:bg-[#69aff6] p-2 font-serif text-center rounded-lg">{title}</button>
    )
}

export default Button;