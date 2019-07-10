import React from 'react'
import {
  shallow
} from 'enzyme';
import IdeaContainer from './IdeaContainer';

describe('IdeaContainer', () => {
      let wrapper;
      let mockIdeas;
      let mockDeleteIdeas;

      beforeEach = () => {
        mockIdeas = [{
          title: 'Hello',
          body: 'World'
        }, {
          title: 'Goodbye',
          body: 'moon'
        }]
        mockDeleteIdeas = jest.fn()
        wrapper = shallow( < Container ideas = {
            mockIdeas
          }
          deleteIdeas = {
            mockDeleteIdeas
          }
          />)
        }

        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })