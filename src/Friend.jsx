export default function Friend({friend}){
    let {name, email} = friend;
    return (
        <div>
            <h4>name : {name}</h4>
            <p>email :{email} </p>
        </div>
    )
}