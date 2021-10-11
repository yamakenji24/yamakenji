import React from 'react';
import { render } from '../utils';
/*
import Toppage from 'pages/index'
import { dummyExperiences, dummySkills } from 'data/dummy';


test('/', () => {
  const { container } = render(
    <Toppage 
      experiences={dummyExperiences}
      skills={dummySkills}
      ogImageUrl={null}
    />
  )
  //expect(container).toMatchSnapshot()
})
*/

// WIP Error, seems cypress and jest are in conflict
// tsconfig not working?? 
const add = (a: number, b:number) => a + b
test('add', () => {
  expect(add(1, 1)).toEqual(2)
})