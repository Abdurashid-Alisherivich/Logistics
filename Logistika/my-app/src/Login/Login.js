import './Login.css'
import React from 'react';

export default function LoginForm() {
    return (
        <div className='bodyLogin'>
            <div id="loginform">
                <form className='formLogin'>
                    <div>
                        <div className="headerLoginP">
                            <h2>LOGIN</h2>
                        </div>
                        <div class="rowLogin">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" />
                        </div>
                        <div class="rowLogin">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <div id="button" class="rowLogin">
                            <button>LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
