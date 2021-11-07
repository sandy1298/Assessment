import React, { useState } from 'react'
import { useHistory } from 'react-router';
 
export default function Login() {
    const history = useHistory();
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("")
    const emailregex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    const passregex = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')
     const submit = async(e)=>{
        e.preventDefault();
        if(!emailregex.test(email)){
            alert("please enter the valid email");
        }
        else if(password !== confirm_password){
         alert("Password did not match");
        }
       else if(!passregex.test(password)){
         alert("Password must include with minimum length >= 8 and A-Z, a-z, 0-9, !-*");
        }
        else {
        history.push('/details')
        }
     }
    return (
        <>
           <div className="container pt-5 mb-5 mt-5">
               <div className="flex-center">
                    <div className="card w-lg-50">
                        <h4 className="card-header text-white font-weight-bold default-color text-center py-3">Login Page</h4>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-12 col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control"   value={first_name} onChange={(e)=>setFirst_name(e.target.value)}  placeholder="First Name" pattern="^[A-Za-z]+$" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control"   value={last_name} onChange={(e)=>setLast_name(e.target.value)} placeholder="Last Name" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email ID" required/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"   value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" pattern="'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'" required/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"   value={confirm_password} onChange={(e)=>setConfirm_password(e.target.value)} placeholder="Confirm Password" pattern="'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'" required/>
                                </div>
                                <div className = "text-center">
                                    <button type="submit" className="btn btn-success btn-lg" onClick={submit} disabled={!first_name || !last_name || !email || !password || !confirm_password}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
               </div>
           </div> 
        </>
    )
}
