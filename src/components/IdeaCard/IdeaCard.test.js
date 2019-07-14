import React from 'react';
import IdeaCard from './IdeaCard';
import {
  shallow
} from 'enzyme';

describe('IdeaCard', () => {
  let wrapper, mockDeleteIdea;

  beforeEach = () => {
    mockDeleteIdeas = jest.fn();
    wrapper = shallow( < IdeaCard deleteIdeas = {
        mockDeleteIdea
      }
      id = {
        1
      }

      title = "My Title"
      body = "My Body" /
      >
    )
  }

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call deleteIdea when the deleteButton is clicked', () => {
    wrapper.find('.delete-btn').simulate('click');
    expect(mockDeleteIdea).toHavebeenCalledWith(1)
  })
});

//The card component renders the card but also used the deleteIdea function
//It has a beforeEach with the wrapper and the mockDeleteIdea function set to a jest.fn
//The shallow rendering contains the card component with the necessaery props
//It should match the shapshot
//It should also call deleteIdea when the button is clicked so the wrapper is asked to find the delete button in the html via its' class name and then simulate a click
//Then the test expects mockDeleteIdea to have been called with the id of 1 as that is the value of the id prop on the card component