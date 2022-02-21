import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getContact, UpdateContact} from '../../Action/ContactAction';
import shortid from 'shortid';
import { useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditContact = () => {
    const {id} = useParams();
    // alert(id);
    const History = useHistory();
    const contact = useSelector(state => state.contact.contact);
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');

    useEffect(() => {
        if(contact !== null){
          setName(contact.name);
          setPhone(contact.phone);
          setEmail(contact.email);
        }
      dispatch(getContact(id));
    },[contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();

        const new_contact= Object.assign(contact,
           {
            name:name,
            phone:phone,
            email:email,
          });
          
      // console.log(new_contact);
      dispatch(UpdateContact(new_contact));
      History.push('/');
    }

  return (
  <div className='card border-0 shadow'>
    <div className='card-header'>Add Contact</div>
      <div className='card-body'>
        
        <form onSubmit={(e)=>onUpdateContact(e)}>
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
          type='text'
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
        <button className='btn btn-warning' type='submit' >Update Contact</button>
        </form>
    </div>
  </div>
  );
}

export default EditContact;