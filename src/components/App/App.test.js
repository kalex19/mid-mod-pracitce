import React from 'react';
import App from './App';
import {
  shallow
} from 'enzyme';
//import react, the component, and a named import of shallow from the testing suite enzyme so the unit test is constrained to the component and does not assert behavior in the child component.

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( < App / > );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('addIdea', () => {
    it('should add a new idea to state', () => {
      const mockIdea = {
        id: 1,
        title: 'My idea...',
        body: '...is the best'
      };
      wrapper.instance().addIdea(mockIdea);
      expect(wrapper.state('idea')).toEqual(expect.arrayContaining([mockIdea]));
    });
  })


  describe('deleteIdea', () => {
    it('should remove an idea from state', () => {
      const mockIdeas = [{
          id: 1,
          title: 'Idea 1...',
          body: '...is the best'
        },
        {
          id: 2,
          title: 'Idea 2...',
          body: '...is ok'
        },
        {
          id: 3,
          title: 'Idea 3...',
          body: '...is the worst'
        }
      ];
      wrapper.setState({
        ideas: mockIdeas
      });
      wrapper.instance().deleteIdeas(2);
      expect(wrapper.state('ideas').not.toEqual(expect.arrayContaining([mockIdeas[1]])));
    });
  })
});

//wrapper variable is declared
//before each test assertion a wrapper is created to mimic the component 
//a snapshot test is performed to verify the component renders as it should. expect is from jest and gives access to 'matchers' which validate various things - in this case - wrapper. .toMatchSnapshot is a built in method from jest to make sure the value mathces the most recent snapshot
//In the second test block, addIdea function is being tested. A variable representing a new idea is created to mock the newIdea created in App
//A new instance of addIdea is created on the wrapper and is passed mockIdea
//It is expected that the wrapper's state key of 'ideas' equals - .toEqual is another method from jest that compares recursively all properties of object instances - an array containing the mockIdea
//The third test block tests the deleteIdea function to make sure it removes an idea from state
//An array of mockIdeas is created to mock ideas in state.
//The state before an idea is removed has to be mocked by using the setState method from enzyme which mocks setting state with the mockIdeas array.
//An instance of deleteIdeas is created with a mock id of 2
//If the function is working correctly, it can be expected that the state with a key of ideas is not equal to mockIdeas as index 1 which is the deleted object with an id of 2.