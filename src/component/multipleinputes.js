import React,{useState} from "react";


export default function Multipleinputes(){
    const[user,setUser]=useState({
        username:"",
        email :" ",
        password: "",

    });

    const [record,setRecord] =useState([]);

    const handleInpute =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUser({...user,[name]:value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        const newRecord={...user,id:new Date().getTime().toString()}
        setRecord([...record,newRecord]);
        console.log(record);

        setUser({username:" " , email:" " , pasword:" "});

    }

    return(
        <>
        <form action="#" onSubmit={handleSubmit}>
            <center>
                <div>
                    <label>username</label><br />
                    <input type="text" name="username" placeholder="enter your username" id="username"
                    value={user.username}
                    onChange={handleInpute}
                    autoComplete="off"
                    />
                </div>

                <div>
                    <label>E-mail</label><br />
                    <input type="text" name="email" placeholder="enter your mail" id="email"
                    value={user.email} 
                    onChange={handleInpute}
                    autoComplete="off"
                    />
                </div>

                <div>
                    <label>password</label><br />
                    <input type="password" name="password" placeholder="enter your password" id="password" 
                    value={user.password}
                    onChange={handleInpute}
                    autoComplete="off"
                    />
                </div>
                <br />

                <button type="submit">Registor</button>



                
            </center>
        </form>

        {
            record.map((curele) =>{
                const {id,username,email,password} = curele;
                return(
                    <center key={id}>
                        <div>
                            <button><p>{username}</p></button>
                            <button><p>{email}</p></button>
                            <button><p>{password}</p></button>
                        </div>
                    </center>
                )
            })
        }
        </>
    )

}


