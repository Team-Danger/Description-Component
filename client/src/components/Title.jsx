import React from 'react';
import PropTypes from 'prop-types';
import {
  TitleBox,
  HeadlineBox,
  Headline,
  Subtitle,
  Image,
} from './styles/Title.style';

function Title({
  title, guests, bedrooms, beds, user,
}) {
  const pluralString = (amount, type) => (
    amount > 1
      ? `${amount} ${type}s`
      : `${amount} ${type}`
  );
  return (
    <TitleBox>
      <HeadlineBox>
        <Headline>{`${title} hosted by ${user.name}`}</Headline>
        <Subtitle>
          {`${pluralString(guests, 'guest')} · ${pluralString(bedrooms, 'bedroom')} · ${pluralString(beds, 'bed')}`}
        </Subtitle>
      </HeadlineBox>
      <Image src={user.image} alt="user" />
    </TitleBox>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  guests: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Title;
