import styled from 'styled-components';

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadlineBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Headline = styled.div`
  /* align-self: flex-start; */
  color: rgb(34, 34, 34) !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  margin-bottom: 8px !important;
`;

const Subtitle = styled.div`
  /* align-self: flex-end; */
  color: #222222 !important;
  display: block;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
`;

const Image = styled.img`
  border-radius: 50%;
`;

export {
  TitleBox,
  HeadlineBox,
  Headline,
  Subtitle,
  Image,
};
