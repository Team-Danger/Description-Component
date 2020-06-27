/**
 * @jest-environment jsdom
 */
import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { join } from 'path';
import { create } from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import generateListing from '../util/generateListing';
import Description from '../client/src/components/Description';
import 'babel-polyfill'; // this is needed to make async/await work
import 'jest-styled-components';

describe('component tests', () => {
  test('it should render a description component', async () => {
    jest.setTimeout(90000);
    // make sure we always generate the same listing object
    jest.unmock('lodash');
    _.random = (min) => min;
    _.sample = (collection) => collection[0];
    faker.seed(1337);
    const imagesPath = join(__dirname, 'testImages');
    const listing = await generateListing('001', '001', imagesPath);
    const component = (
      <Router>
        <Description data={listing} />
      </Router>
    );
    const tree = create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
