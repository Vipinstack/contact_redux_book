import React,{useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import Contacts from "./Contacts";
import {selectAllContacts, clearContact, DeleteAllContact} from '../../Action/ContactAction';

const Contact = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selectedContact = useSelector((state) => state.contact.selectedContacts);
//   console.log(contacts);


  useEffect(() => {
    if(selectAll){
      dispatch(selectAllContacts(contacts.map((contact) => contact.id)));
    } else{
      dispatch(clearContact());
    }
  },[selectAll]);
  return (
    <div>
    {
      selectedContact.length > 0 ? (
        <button className="btn btn-danger mb-3" onClick={()=> dispatch(DeleteAllContact())}>Delete All</button>
      ) : null
    }
    
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="custom"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  className="custom-control-label"
                  htmlFor="custom"
                ></label>
              </div>
            </th>
            <th>name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (<Contacts contact={contact} key={contact.id} selectAll={selectAll} />))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
