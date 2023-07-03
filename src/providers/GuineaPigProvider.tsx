import { useState, useEffect } from 'react';
import { GuineaPigContext } from '../contexts';
import { GuineaPig } from '../models/GuineaPig';
import { Sex } from '../types';

type GuineaPigProps = {
  children: React.ReactNode;
};

export function GuineaPigProvider({ children }: GuineaPigProps) {
  const [guineaPig, setGuineaPig] = useState<GuineaPig | null>(null);

  useEffect(() => {
    setGuineaPig(new GuineaPig({ sex: Sex.male }))
  }, []);

  return (
    <GuineaPigContext.Provider value={guineaPig}>
      {children}
    </GuineaPigContext.Provider>
  );
}
