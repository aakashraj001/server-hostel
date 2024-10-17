import React, { createContext, ReactNode, useState } from 'react';

export interface ContextValueType {
  theme: string;
  student: boolean;
  creditPage: boolean;
  debitPage: boolean;
  creditExpand: boolean;
  debitExpand: boolean;
  setStudentAdd: React.Dispatch<React.SetStateAction<boolean>>;
  settheme: React.Dispatch<React.SetStateAction<string>>;
  setcreditPage: React.Dispatch<React.SetStateAction<boolean>>;
  setdebitPage: React.Dispatch<React.SetStateAction<boolean>>;
  setcreditExpand: React.Dispatch<React.SetStateAction<boolean>>;
  setdebitExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextData = createContext<ContextValueType>({
  theme: '', // Provide default value
  student: false,
  creditPage: false,
  debitPage: false,
  creditExpand: false,
  debitExpand: false,
  settheme: () => {}, // Provide default value
  setStudentAdd: () => {},
  setcreditPage: () => {},
  setdebitPage: () => {},
  setcreditExpand: () => {},
  setdebitExpand: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [theme, settheme] = useState<string>('');
  const [student, setStudentAdd] = useState<boolean>(false);
  const [creditPage, setcreditPage] = useState<boolean>(false);
  const [debitPage, setdebitPage] = useState<boolean>(false);
  const [creditExpand, setcreditExpand] = useState<boolean>(false);
  const [debitExpand, setdebitExpand] = useState<boolean>(false);

  return (
    <ContextData.Provider
      value={{
        theme,
        student,
        creditPage,
        settheme,
        debitPage,
        debitExpand,
        creditExpand,
        setcreditExpand,
        setdebitExpand,
        setdebitPage,
        setStudentAdd,
        setcreditPage,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
