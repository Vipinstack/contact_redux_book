import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addContact} from '../../Action/ContactAction';
import shortid from 'shortid';
import { useHistory, Link} from 'react-router-dom';

const AddContact = () => {
    const History = useHistory();
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name,email,phone);
        const newContact = {
          id: shortid.generate(),
          name: name,
          phone: phone,
          email: email,
          
        }
        dispatch(addContact(newContact));
        History.push('/');
        // dispatch();
    };

  return (
  <div className='card border-0 shadow'>
    <div className='card-header'><Link to="">Add Contact</Link></div>
      <div className='card-body'>
        
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='form-group py-2'>
          <input
          type='text'
          name='name'
          className="form-control"
          placeholder='Enter Your Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          </div>

          <div className='form-group py-2'>
          <input
          type='number'
          name='name'
          className="form-control"
          placeholder='Enter Your phone number'
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          />
          </div>


          <div className='form-group py-2'>
          <input
          type='email'
          name='name'
          className="form-control"
          placeholder='Enter Your E-mail Address'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
        <button className='btn btn-primary' type='submit' >Create Contact</button>
        </form>
    </div>
  </div>
  );
}

export default AddContact;
