import Button from "./Button";

const Navbar=()=>{
    return(
        <div className="h-16  p-3 flex gap-5 justify-center ">
            <Button title={"Home"}  />
            <Button title={"DashBoard"}  />
            <Button title={"Create Room"}  />
            <Button title={"Join Room"}  />
            <Button title={"Logout"}  />
        </div>
    )
}

export default Navbar;