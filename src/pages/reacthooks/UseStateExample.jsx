import { useState } from 'react';
import Card from './components/card/card.component';

/**
   * Note
   * > Hooks is addition from react 16.8.0
   * > No Breaking Changes: Completely opt-in & 100% backwards-compatible
   * 
   * Motivation
   * > It’s hard to reuse stateful logic between components, avoid "wrapper hell",
   *   Hooks allow to reuse stateful logic without changing component hierarchy
   * > Complex components become hard to understand, Hooks let split one component into
   *   smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
   * > Classes confuse both people and machines, issues with "this" work context in JS,
   *   Hooks let use more of React’s features without classes.
   */

const UseStateExample = () => {
  const [name, setName] = useState('Paman');
  const [address, setAddress] = useState('Mayangan');

  /**
   * useState Hooks
   * > Previous which known as "stateless components", state can't implement within it
   *   useState make stateless component possible to have state, then it call "functional component"
   * > useState use array destructuring method for declare variable & it setter function
   * > each state can have own useState, or set object in useState initial value, just like this.state = {}
   */

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Andrei')}>Set Name to Andrei</button>
      <button onClick={() => setAddress('Paiton')}>Set Address</button>
    </Card>
  );
};

export default UseStateExample;
