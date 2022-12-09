import { createContext, useState } from "react"

export const accountModal = createContext(null);

const AccountModalProvider = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  
  return <accountModal.Provider value={{isModalVisible, setIsModalVisible}}>
    {props.children}
  </accountModal.Provider>
  
}

  export default AccountModalProvider;