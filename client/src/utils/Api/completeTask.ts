// import React from 'react'
import api from '../../service';

interface completeTaskProps {
  id: number;
  done: string;
};

const completeTask = async ({ id, done}: completeTaskProps, token: string) => {
  try {
    const response = await api.post('/tasks/complete-task', { id, done }, {
      headers: { Authorization: `Bearer ${token}`}
    });
    console.log('Response completeTask - Utils: ', response.data);
    
  }
  catch (err) {
    console.log('Error completeTask - Utils: ', err);
  }
};

export default completeTask;