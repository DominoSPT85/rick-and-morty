import React from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';



export default function App() {
  

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
    
    <header className='header'>
      <div>
        <Link to='/'>Home</Link>{' '}
        <Link to='/faves'>Favorite(s) {state.favorites.length}</Link>
      </div>
      <div>
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode</p>
      </div>
    </header>
      <section className='episode-layout'>
        <EpisodesList {...props} />
      </section>

      </React.Suspense>
    </React.Fragment>
  )
}
