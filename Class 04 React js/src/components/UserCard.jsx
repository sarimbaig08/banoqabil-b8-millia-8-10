function UserCard({userInfo}){



return(
    <>
        <fieldset>
            <legend>{userInfo.name}</legend>
            <p>Email: {userInfo.email}</p>
            <p>Stack: {userInfo.stack}</p>
            <img src={userInfo.imgURL} alt={name} height={100} width={100}/>
        </fieldset>
    </>
)

}

export default UserCard