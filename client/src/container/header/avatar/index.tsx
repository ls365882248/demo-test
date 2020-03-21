import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;

function LogsPortal(props: any) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('app-avatar-modal') as Element
  );
}

const Avatar = () => {
  const [showModal, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!showModal);
  }
  return <div id='app-avatar-modal' onClick={toggleShow}>
    C
    {
      showModal ? <LogsPortal>
        h
      </LogsPortal>
        : null
    }
  </div>
}

export default Avatar;