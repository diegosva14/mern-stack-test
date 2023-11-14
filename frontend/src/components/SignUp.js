import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class NotesList extends Component {

    render(){
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>REGISTER</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Name</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                        
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                        
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='password'
                            className='form-control rounded-0'
                        
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Register
                    </button>
                    <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </button>
                </form>



            </div>


        </div>


    }

}