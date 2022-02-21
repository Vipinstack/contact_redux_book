
export const addContact = (Contact) => {
    return {
        type: 'CREATE_CONTACT',
        payload: Contact,
    }
}

export const getContact = (id) => ({
  type: 'GET_CONTACT',
  payload : id
});

export const UpdateContact = (contact) => ({
  type: 'UPDATE_CONTACT',
  payload: contact,
});

export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload : id,
});

export const selectAllContacts = (id) => ({
  type: 'SELECT_ALL',
  payload: id,
});

export const clearContact = (id) => ({
  type: 'CLEAR_CONTACT',
  payload: id,
});

export const DeleteAllContact = () => ({
  type: 'DELETE_All_CONTACT',
});
