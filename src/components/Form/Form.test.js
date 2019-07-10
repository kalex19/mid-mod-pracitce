import {
  shallow
} from 'enzyme'
import React from 'react';
import Form from './Form';

describe('Form', () => {
      let wrapper;
      let mockAddIdea;

      beforeEach = () => {
        mockAddIdea = jest.fn()
        wrapper = shallow( < Form addIdeas = {
            mockAddIdea
          }
          /> );
        }

        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });

        it('should update state with input values on change', () => {

        });

        it('should call addIdea on submit', () => {

        })

        it('should clear inputs and reset state on submit')
      })