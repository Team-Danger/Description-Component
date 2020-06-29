import styled from 'styled-components';

const ArrangementBox = styled.div`
  display: inline-flex;
  padding: 20px;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

const BedIcon = styled.div`
  margin-bottom: 8px;
`;

const BedTitle = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 20px !important;
`;

const LocationTitle = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 20px !important;  
  margin-bottom: 8px;
`;

export {
  ArrangementBox,
  BedIcon,
  LocationTitle,
  BedTitle,
};
