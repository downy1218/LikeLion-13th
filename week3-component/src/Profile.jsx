function Profile({name,intro,viewCount}){
    return(
        <div style={{ backgroundColor: "gray" ,color:'white'}}>
            <p>이름: {name} </p>
            <p>소개: {intro} </p>
            <p>조회수: {viewCount} 회</p>
        </div>
    )
}

export default Profile;