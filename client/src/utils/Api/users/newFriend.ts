// import React from 'react';
import api from '../../../service';

interface NewFriendProps {
  id: number;
  friend_id: number;
};

const newFriend = async ( { id, friend_id }: NewFriendProps, token: string ) => {

  const users_id = { id, friend_id };

  try {
    const response = await api.post('/users/new-friend', users_id, {
      headers: { Authorization: `Bearer ${token}`}
    });
    console.log('Amigo adicionado! ', response.data[0]);
    
  } catch (error) {
    console.log('Erro no newFriendUtils: ', error);
  };
};

export default newFriend;