import {createReducer,on,createAction} from '@ngrx/store';

let obj = {
  id: '007',
  name: 'ruru',
  email: 'he@me.co',
  phone: '911'
}

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

export const rootReducer = createReducer{
  {usersList : true },
  on(createAction('[Root] Fetch Data'), state=>{
    return{
      ...state,
      usersList: 
    }
  })

}