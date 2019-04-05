import React from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function FavePage() {
  const { state, dispatch } = React.useContext(Store);

  const props = {
    episodes: state.favorites,
    state: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  )
}