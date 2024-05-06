import { useContext } from "react";
import { Context } from "./FormDataContext.js";
import { useNavigate } from "react-router-dom";

function Table(){

    const { data,removeUser,editUser } = useContext(Context);
    const navigate = useNavigate();

   
    return(
        <>
        <table> 
           <thead>
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>
           </thead>
           <tbody>
             
              {
                data.userData && data.userData.map(
                    (value,index) => {
                        return(
                            <tr key={index}>
                                <td >{value.userName}</td>
                                <td> 
                                    <button
                                    onClick={() => editUser(index)}>
                                        Edit
                                    </button>
                                    <button 
                                    onClick={() =>removeUser(index) }>
                                        Delete
                                    </button> 
                                    </td>
                            </tr>
                        )
                    }
                )
            }
              
           </tbody>
        </table>
        <button onClick={ () => navigate('/') }>Back</button>
        </>
    )
};

export default Table;