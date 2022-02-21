import React from 'react';
import Avatar from 'react-avatar';
// import '../../styles/App.scss';
import {Link} from 'react-router-dom';
import { deleteContact } from '../../Action/ContactAction';
import {useDispatch} from 'react-redux';


const Contacts = ({contact, selectAll}) => {
    const dispatch = useDispatch();
   
    const {name, phone, email, id} = contact;
    return (
   
       <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    checked={selectAll}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  ></label>
                </div>
              </td>
              <td><Avatar  style={{marginRight:"1rem"}} name={name} size="45" round={true}  />{name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td className='actions'>
                {/* <Link to={`/edit/${contact.id}`} className='btn btn-primary'>Edit</Link> */}
                <Link to={`contact/edit/${id}`}>
                  <span className='material-icons'>edit</span>
                </Link>
                <Link to="#">
                  <span className='material-icons text-danger' onClick={(e)=>dispatch(deleteContact(id))}>remove_circle</span>
                </Link>
              </td>
            </tr>

  );
}

export default Contacts;
