import React from 'react';
import PropTypes from 'prop-types';
import pluralString from '../../../util/pluralString';
import { Section } from './styles/Description.style';
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
  return (
    <Section>
      <TitleBox>
        <HeadlineBox>
          <Headline>{`${title} hosted by ${user.name}`}</Headline>
          <Subtitle>
            {`${pluralString(guests, 'guest')} · ${pluralString(bedrooms, 'bedroom')} · ${pluralString(beds, 'bed')}`}
          </Subtitle>
        </HeadlineBox>
        <Image src={user.image} alt="user" />
      </TitleBox>
    </Section>
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
