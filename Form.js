import { useContext } from "react";
import { Context } from "./FormDataContext.js";


function FormPage(){
   
    const action = useContext(Context);

   
    return(
        <>
        <form onSubmit={ (e) => action.submit(e)}>
            <label>Name:</label>
            <input  value={action.data.userName} onChange={(e) => action.addUser(e)}/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};


export default FormPage;