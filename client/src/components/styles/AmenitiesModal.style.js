import styled from 'styled-components';

const Modal = styled.section`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalMain = styled.div`
  position:fixed;
  height: 70%;
  overflow-y: scroll;
  background: white;
  width: 80%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

export { Modal, ModalMain };
