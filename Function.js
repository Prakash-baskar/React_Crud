import * as Types from "./Type";

export const Data = {
    userData:[],
    userName:'',
    editId:null
};

export function Reducer( state,action ){

    switch( action.type ){
        
        case Types.USER_NAME:
            return{
                ...state,
                userName:action.payload
            };

        case Types.ADD:
            if (state.editId !== null) {
                const updatedUserData = [...state.userData];
                updatedUserData[state.editId].userName = state.userName;
                return {
                    ...state,
                    userData: updatedUserData,
                    userName: '',
                    editId: null
                };
            }else{
          
            return{
                ...state,
                userData:[
                    ...state.userData,
                    { userName:state.userName}
                ],
                userName:''
            };
        };

        case Types.REMOVE_USER:
            return{
                ...state
            }

        case Types.EDIT_USER:


            return{
                ...state,
                userName:state.userData[action.payload].userName,
                editId: action.payload
            };
           
        

        default:
            break;
    };
};