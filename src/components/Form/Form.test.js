import React from 'react';
import Form from './Form';
import {
  shallow
} from 'enzyme';

describe('Form', () => {
      let wrapper, mockAddIdea;

      beforeEach(() => {
          mockAddIdea = jest.fn()
          wrapper = shallow( < Form addIdeas = {
              mockAddIdea
            }
            />);
          });

        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });

        describe('handleChange', () => {
          it('should update title state on change', () => {
            const mockEvent = {
              target: {
                name: 'title',
                value: 'My Title'
              }
            };
            wrapper.find('#title-input').simulate('change', mockEvent);
            expect(wrapper.state('title')).toEqual('My Title')
          });

          it('should update body state on change', () => {
            const mockEvent = {
              target: {
                name: 'body',
                value: 'My Body'
              }
            };
            wrapper.find('#body-input').simulate('change', mockEvent);
            expect(wrapper.state('body')).toEqual('My Body');
          });
        });

        describe('handleSubmit', () => {
          it('should call addIdea with the correct params', () => {
            Date.now = jest.fn().mockImplementation(() => 99);
            wrapper.setState({
              title: 'My Title',
              body: 'My Body'
            });
            wrapper.find('#idea-form').simluate('submit', {
              preventDefault: () => {}
            });
            expect(mockAddIdea).toHaveBeenCalledWith({
              id: 99,
              title: 'My Title',
              body: 'My Body'
            });
            expect(wrapper.state()).toEqual({
              title: '',
              body: ''
            });
          });
        })
      });

    //wrapper and mockAddIdea are declared as variables
    //A beforeEach is created so the wrapper and a mockAddIdea are created beforeEach test block
    //mockAddIdea is set to a function
    //The wrapper shallows the Form components with a prop of addIdea set to the mock function of mockAddIdea
    //The first test block tests to see if the snapshot matches the component using toMatchSnapshot from jest
    //The second describe block tests handleChange by creating a mockEvent to simulate the onChange event that would occur within form.
    //The wrapper is instructed to find the id of the title input in the html and simulate a change event using mockEvent
    //The expect block looks to state to see if it equals the value in the mockEvent
    //The same format/logic is used for the body input test block
    //The third describe test block tests the handleSubmit function
    //When creating a newIdea, an id is created using Date.now. Date.now always changes and the date created on the newIdea may not be the same on the test's newIdea meaning the test could not pass. Thus Date.now is set to a mockImplemnetation of a jest.fn with a return value of 99 so it is the saem every time and won't fail the test due to a discrepancy in the date/timing of the test.
    //The state is set and then the idea form is grabbed frpm the html by id. A submit action is simulated on the form and the defult is prevented with preventDefault which is set to a function that returns nothing
    //It is expected that the mockAddIdea - hence why mockAddIdea is created beforeeach test block - it is needed even here - is called with the newIdea object
    //Now the state is checked for empty values indicating the form was reset