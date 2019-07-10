import {
  shallow
} from 'enzyme';
import React from 'react';
import IdeaCard from './IdeaCard';

describe('IdeaCard', () => {
      let wrapper;
      let mockDeleteIdeas;
      let mockIdeas;
      let mockKey;

      beforeEach = () => {
        mockDeleteIdeas = jest.fn();
        mockIdeas = [{
          title: 'hello',
          body: 'world'
        }, {
          title: 'goodbye',
          body: 'moon'
        }]
        mockKey = 2
        wrapper = shallow( < IdeaCard deleteIdeas = {
            mockDeleteIdeas
          } {
            ...mockIdeas
          }
          key = {
            mockKey
          }
          /> )
        }

        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        })
      })