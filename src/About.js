import React from 'react';
import { Route, Link} from 'react-router-dom';

export default function About(props) {
  const personId = props.match.params.personId

  let person;
  for (let i = 0; i < people.length; i++) {
    if (people[i].id == personId) {
      person = people[i];
    }
  }

  if (!person) {
    person = {
      name: 'You'
    }

  }

  return (
    <div>
      <h1>Learn about people at DevMountain</h1>
      <AboutPerson person={person} />
    </div>
  )
}

function AboutPerson(props) {
  let {person} = props;
  return (
    <div>
      <h1>{person.name} is great!</h1>
      <p>Id labore commodo veniam irure tempor consectetur in. Magna fugiat culpa sunt reprehenderit ut nisi nostrud culpa id cupidatat qui. Sunt laborum dolore aliquip aliquip nulla laboris officia. Aliquip nostrud fugiat duis sit ut duis est. Proident sunt esse officia non Lorem consectetur voluptate labore nisi sit tempor est deserunt enim. Et reprehenderit quis reprehenderit dolore occaecat.</p>
    </div>
  )
}

const people = [
  {
    id: 1,
    name: "Brett"
  },
  {
    id: 2,
    name: "Jeremy"
  },
  {
    id: 3,
    name: "Krissy"
  },
  {
    id: 4,
    name: "Schaffer"
  }
]
