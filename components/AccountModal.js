import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { accountModal } from '../context/accountModal';
import { useContext } from 'react';
import { CloseIcon, CopyIcon } from '../assets/icons';
import '../styles/AccountModal.module.css'
import FormInput from './FormInput'
import { LoginService } from '../pages/services';
import { capitalize } from '../utils/helpers';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AccountModal = (props) => {

  const formik = LoginService()

  const { isModalVisible, setIsModalVisible } = useContext(accountModal)


  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = () => {
    const text = document.getElementById('copyText').value

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    console.log(text)
  }

  console.log(props)

  return isModalVisible ? (
    <div>
      <Modal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='account-modal w-5/6 md:w-3/5 lg:w-1/2 xl:w-2/5 rounded-xl'>
          <div className='flex justify-end w-full cursor-pointer' onClick={() => setIsModalVisible(false)}><CloseIcon /></div>

          <div>
            <h3 className='text-orange text-center text-2xl font-bold'>{capitalize(props.userDetail.first_name) + ' ' + capitalize(props.userDetail.last_name)}</h3>
            <div className='flex items-center justify-center'>
              <input className='text-dark bg-transparent text-center focus:outline-none' id="copyText" value={props.userDetail.phone_number} placeholder='' />
              <button className='text-dark flex items-center bg-border ml-4 py-1 px-3 rounded-2xl' onClick={() => handleCopy()}> <span>copy</span> <CopyIcon /></button>
            </div>

            <form className='p-10'>
              <FormInput name="account_number" label="" placeholder="Account Number" formik={formik} type="text" color="dark" />
              <Button variant='contained' fullWidth
                sx={{
                  background: '#12131E!important', color: 'white', padding: '10px 0',
                  marginTop: '20px', ':hover': { bgcolor: '#12131E', color: 'white' },
                }}
                type='submit'>Save
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  ) : null
}

export default AccountModal;