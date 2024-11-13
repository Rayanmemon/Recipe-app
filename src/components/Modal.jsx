import React,{useState} from 'react'
import './Modal.css'

function Modal() {

    const [modal, setModal]=useState(false);

    const toggleModal=()=>{
        setModal(!modal);
    };

    if(modal){
        document.body.classList.add('active-modal')
    }
    else{
        document.body.classList.remove('active-modal')
    }

  return (
    <div>
        <button onClick={toggleModal} className='card'>aerbg</button>
        {modal &&(
            <div className="modal">
                <div onClick={toggleModal}  className="overlay"></div>
                <div className="modal-content">
                    <h2>hi</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae in modi doloremque optio mollitia dolores placeat, cumque a numquam suscipit? Ullam modi eos repellendus ipsa, in qui atque corporis aspernatur dolorum maxime, quasi inventore nobis. Deleniti suscipit, ipsam dicta consectetur quidem voluptas et odit, repudiandae commodi obcaecati maxime, necessitatibus fugiat?
                    </p>
                    <button className='close-modal' onClick={toggleModal}> Close</button>
                </div>
            </div>
        )}
        
    </div>
  );
}

export default Modal
