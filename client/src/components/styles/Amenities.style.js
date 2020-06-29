import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AmenitiesBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const AmenitiesColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const AmenityRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px; 
`;

const IconBox = styled.div`
  margin-right: 16px !important;
  margin-left: 0px !important;
`;

const ShowMore = styled(Link)`
  margin-top: 24px;
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  text-align: center !important;
  text-decoration: none !important;
  width: auto !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  border-width: 1px !important;
  border-style: solid !important;
  outline: none !important;
  padding-top: 13px !important;
  padding-bottom: 13px !important;
  padding-left: 23px !important;
  padding-right: 23px !important;
  transition: box-shadow 0.2s ease, -ms-transform 0.1s ease, -webkit-transform 0.1s ease, transform 0.1s ease !important;
  border-color: #222222 !important;
  background: #FFFFFF !important;
  color: #222222 !important;
`;

export {
  AmenitiesBox,
  AmenitiesColumn,
  AmenityRow,
  IconBox,
  ShowMore,
};
