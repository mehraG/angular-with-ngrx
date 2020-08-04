# angular-with-ngrx
A basic Angular CRUD app using NgRx framework.

## Folder Structure
![](./images%20for%20readme/directory.png)
- Modals folder contains 2 modals i.e Update and View modal.
- Store folder contains most of the code for Redux Pattern implementation.
- App Module is the primary module which contains all component, service, modals, etc.
- App component is the parent component which contains Create, View component.
- Create component is used to add user.
- View component is used to view user in a tabular form.

## UI Component Overview
![](./images%20for%20readme/ui.png)
**App component** is the parent component which consists of **Create and View component.** <br>
Also, **View component** can call **Update and View modal.**

## Add User
<img src="./images%20for%20readme/Inkedaddusr_LI.jpg" width="100%"> <br>

### When you insert name, email, phone number and click submit. <br>
An **action ADD_USER** is dispatched -> **addUser$ Effect** is called -> **addUserSrvc** sends **Post request** to server -> returns data to Effect <br>
-> Effect dispatchs an **action ADD_USER_SUCCESS** to Reducer which updates the AppState.

## Remove User
![](./images%20for%20readme/Inkeddelusr_LI.jpg)
### When you delete a user. <br>
An **action REMOVE_USER** is dispatched -> **deletsUser$ Effect** is called -> **removeUserSrvc** sends **Delete request** to server -> returns data to Effect -> Effect dispatchs an **action REMOVE_USER_SUCCESS** to Reducer which updates the AppState.

## Update User
![](./images%20for%20readme/updateusr.png)
### When you update a user. <br>
An **action UPDATE_USER** is dispatched -> **updateUser$ Effect** is called -> **updateUserSrvc** sends **Put request** to server -> returns data to Effect -> Effect dispatchs an **action UPDATE_USER_SUCCESS** to Reducer which updates the AppState.

## View User
![](./images%20for%20readme/viewusr.png)
### When you view a user. <br>
**ViewModalComponent** is called and data to that specific user is passed to **modal** -> **ViewModalComponent** receives that User Details and shows it.

