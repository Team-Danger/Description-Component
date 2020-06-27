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
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  max-width: 780px;
  position: fixed;
  height: 900px;
  background: white;
  width: 100%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const AmenitiesSection = styled.div`
  flex: 1 1 auto;
  padding: 24px;
  overflow-y: scroll;
  margin-bottom: 24px;
`;

const AmenitiesRow = styled.div`
  display: flex !important;
  flex-direction: column;
  width: 100% !important;
  margin-top: 24px !important;
  margin-bottom: 24px !important;
  border-bottom: 1px solid #ddd;
`;

const AmenityTitle = styled.div`
  font-size: 14px;
  line-height: 1.43;
`;

const AmenityDescription = styled.div`
  color: rgb(113, 113, 113) !important;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 18px !important;
  margin-top: 4px !important;
`;

const CloseSection = styled.div`
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  flex-basis: 72px !important;
  position: sticky !important;
  text-align: left !important;
  top: 0px !important;
  z-index: -1 !important;
`;

const CloseButton = styled.button`
  top: 24px;
  left: 24px;
  position: absolute;
  display: inline-block !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  position: relative !important;
  border-radius: 50% !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  outline: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important; 
`;

export {
  Modal,
  ModalMain,
  AmenitiesSection,
  AmenitiesRow,
  AmenityTitle,
  AmenityDescription,
  CloseSection,
  CloseButton,
};
