import React, { useState } from 'react';
import NewComponent from './NewComponent';

const data = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
  {
    name: 'ABC Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
  {
    name: 'DFG Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
  {
    name: 'HIJ Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
];

const App = () => {
  const [people, setPeople] = useState(data);

  const getName = (number) => {
    return people[number].name;
  };

  const random = () => {
    const n = Math.floor(Math.random() * (people.length + 1));
    return n;
  };
  const getRandomName = () => {
    return people[random()].name;
  };
  return (
    <div>
      App
      <NewComponent userName={getRandomName()} />
    </div>
  );
};

export default App;
