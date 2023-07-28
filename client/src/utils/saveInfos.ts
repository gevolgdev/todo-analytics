import { ChangeEvent, useState } from "react";

interface InfosProps {
  name: string;
  email: string;
  password: string;
};

const saveInfos = () => {

  const INITIAL_STATE = {name: '', email: '', password: ''};
  const [infos, setInfos] = useState<InfosProps>(INITIAL_STATE);

  const saving = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInfos( prev => ({...prev, [id]: value}) );
  };

  const clearInputs = () => setInfos(INITIAL_STATE);

  return { infos, saving, clearInputs };
};

export default saveInfos;