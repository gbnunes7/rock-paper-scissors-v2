import './modal.css'


const Modal = ({isOpen,close}) => {

    if(isOpen) {
        return (
                <div className="bg__modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Rules</h4>
                            <button onClick={close} className="close-btn">X</button>
                        </div>
                        <ul className="modal-rules">
                            <li>Rock wins against Scissors</li>
                            <li>Scissors wins against Paper</li>
                            <li>Paper wins against Rock</li>
                            <li>
                                If both players throw the same option, it is considered a tie.
                            </li>
                            <li>New game button is used to reset points</li>
                            <li>It's not permitted to select rock twice in a row.</li>
                            <li style={{color:'black',fontWeight:'bold',fontSize:'24px'}}>I wish you good luck and a good game</li>
                        </ul>
                    </div>
                </div>
            );
}}

export default Modal