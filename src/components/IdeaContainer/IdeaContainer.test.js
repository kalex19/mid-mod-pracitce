import React from 'react';
import IdeaContainer from './IdeaContainer';
import {
  shallow
} from 'enzyme';

const mockIdeas = [{
    id: 1,
    title: 'My Title 1',
    body: 'My Body 1'
  },
  {
    id: 2,
    title: 'My Title 2',
    body: 'My Body 2'
  },
  {
    id: 3,
    title: 'My Title 3',
    body: 'My Body 3'
  }
]

describe('IdeaContainer', () => {
      let wrapper, mockDeleteIdea;

      beforeEach = () => {
        mockDeleteIdea = jest.fn();
        wrapper = shallow( < Container ideas = {
            mockIdeas
          }
          deleteIdeas = {
            mockDeleteIdea
          }
          />)
        }

        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot()
        })
      });

    //IdeaContainer does not have any functionality, it only renders infoprmation so only a snapshot test is necessary
    //The Container is passed two props - mockIdeas and mockDeleteIdeas which are declared above the it block.
    //BeforeEach test block the component is created with the correct props
    //It is expected that the wrapper matches the snapshot