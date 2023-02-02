import React, { useState } from 'react'

export default function Form() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [gender, setgender] = useState("")
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [nameError, setnameError] = useState("")
    const [emailError, setemailError] = useState("")
    const [genderError, setgenderError] = useState("")
    const [phoneError, setphoneError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [emptyError, setemptyError] = useState("")
    
    const validate = ()=>{
        if(
            name === "" || email === "" || gender === "" || phone === "" || password === ""          
        ){
            setemptyError("All fields are mandatory!")
            setusername("")
            return false
        }
        if(!name.match(/^[A-Za-z0-9- ]+$/)){
            setnameError("Name is not Alphabumeric")
            setusername("")
            return false;
        }
        if(!email.includes("@")){
            setemailError("Email must contain @")
            setusername("")
            return false;
        }
        if(!gender.match(/male|female|other/i)){
            setgenderError("Please identify gender as male, female or other")
            setusername("")
            return false;
        }
        if(!phone.match(/^[0-9]+$/)){
            setphoneError("Phone number must contain only numbers")
            setusername("")
            return false;
        }
        if(password.length < 6){
            setpasswordError("Password must contain atleast 6 letters ")
            setusername("")
            return false;
        }
        else{
            return true;
        }
    }
    const resetErrorDefault = ()=>{
        setnameError("")
        setemailError("")
        setgenderError("")
        setphoneError("")
        setpasswordError("")
        setemptyError("")
        setusername("")
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        resetErrorDefault()
        const isValid = validate()
        if (isValid){
            setname("")
            setemail("")
            setgender("")
            setphone("")
            setpassword("")
            setusername(email.substring(0,email.indexOf("@")))
        }
    }
    return (
        <div className='App-header'>  
        <h1 style={{ fontSize: "3.5rem" }}>Login Page</h1>    
            <form className='mb-3'onSubmit={handleSubmit}>
                <span>{nameError}</span>
                <input className="my-2 " type="text" placeholder='Name' value = {name} onChange={(e)=>{setname(e.target.value)}}/><br />
                <span>{emailError}</span>
                <input className="my-2" type="email" placeholder='Email' value = {email} onChange={(e)=>{setemail(e.target.value)}}/><br />
                <span>{genderError}</span>
                <select className="my-2" name="Gender" value = {gender} onChange={(e)=>{setgender(e.target.value)}}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br />
                <span>{phoneError}</span>
                <input className="my-2" type="text" placeholder='Phone Number' value = {phone} onChange={(e)=>{setphone(e.target.value)}}/><br />
                <span>{passwordError}</span>
                <input className="my-2" type="password" placeholder='Password'value = {password} onChange={(e)=>{setpassword(e.target.value)}}/><br />
                <span>{emptyError}</span>
                <input className="my-4" type="submit" value="Submit" /><br />
            </form>
            <div>
            
                <h2>{ username ? "Hello " + username : ""}</h2>
            </div>
        </div>
    )
}
