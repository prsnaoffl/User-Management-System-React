import React,{useState} from 'react';
import "./Home.css";
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/Actions/User';

const Home = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });

    const dispatch=useDispatch();

    const handleAdd=(event)=>{
        event.preventDefault();
        dispatch(addUser(user))
        setUser({
            name: "",
            email: "",
            contact: "",
            address: ""
        });
    };

    const handleChange=(event)=>{
        const {name,value}= event.target;
        setUser((prevState)=>{
            return{
                ...prevState,
                [name]:value
            };
        });
    };

    // console.log(user);
    return (
        <div className="home">
            <h1>Enter User Info</h1>
            <form className="home_container">
                <input 
                   type="text"
                   placeholder="Name" 
                   name="name" 
                   value={user.name} 
                   OnChange={handleChange} />
                <br/>
                <br/>
                <input 
                   placeholder="Email" 
                   name="email" 
                   value={user.email} 
                   OnChange={handleChange}/>
                <br/>
                <br/>
                <input 
                   type="number" 
                   placeholder="Contact" 
                   name="contact" 
                   value={user.contact} 
                   OnChange={handleChange}/>
                <br/>
                <br/>
                <textarea 
                   type="number" 
                   placeholder="Address" 
                   name="address" 
                   value={user.address} 
                   OnChange={handleChange}/>

                <br/>
                <br/>
                <button onClick={handleAdd}>Submit</button>
            </form> 
        </div>
    )
}

export default Home
