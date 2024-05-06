import React, { useReducer } from "react";
import { Data, Reducer } from "./Function.js";
import { ADD, EDIT_USER, REMOVE_USER,USER_NAME } from "./Type";
import { useNavigate } from "react-router-dom";

export const Context = React.createContext();

export function CrudContext({children}){

    const [ state,dispatch ] = useReducer( Reducer,Data );

    const navigate = useNavigate();

    function handleChange(e) {

       dispatch({type:USER_NAME,payload:e.target.value});
       
    };

    function handleSubmit(e){

        e.preventDefault();

      
       
            dispatch({ type: ADD });
      
     
        navigate('/table');
    };

    function deleteUser(id){
        state.userData.splice(id,1);
        dispatch({type:REMOVE_USER,payload:state})
    };

    function editUser(index) {

        dispatch({type:EDIT_USER,payload:index});
        navigate('/');
    };

    const obj = {
      addUser:handleChange,
      submit:handleSubmit,
      data:state,
      removeUser:deleteUser,
      editUser:editUser
    };
   
    return(

        <Context.Provider value={obj}>
            {children}         
        </Context.Provider>
        
    );
};