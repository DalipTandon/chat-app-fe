import Button from "./Button";

const Navbar=()=>{
    return(
        <div className="h-16  p-3 flex gap-5 justify-center ">
            <Button title={"Home"}  dest={"/"} />
            <Button title={"DashBoard"} dest={"/body"} />
            <Button title={"Create Room"} dest={"/createroom"} />
            <Button title={"Join Room"} dest={"/"} />
            <Button title={"Logout"}  dest={"/"}/>
        </div>
    )
}

export default Navbar;