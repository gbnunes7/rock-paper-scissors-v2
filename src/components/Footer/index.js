import './footer.css'
import Botao from '../Botao'
import Modal from '../../modal'
import { useState } from 'react'

export const Footer = () => {
    const [openModal,setOpenModal] = useState(false)

    return (
        <footer className='footer'>
            <Botao evento ={() => {setOpenModal(true)}} nome="View Rules"/>
            <Modal  close={() => {setOpenModal(false)}} isOpen={openModal}/>
        </footer>
    )
}