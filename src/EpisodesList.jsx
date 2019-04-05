import React from 'react';

export default function EpisodesList(props) {
  const { episodes, toggleFavAction, favorites } = props;

  return episodes.map(episode => {
    return (
      <section key={episode.id} className='episode-box'>
        <img
          src={episode.image.medium}
          alt={'Rick and Morty ${episode.name'}
        />
        <div>{episode.name}</div>
        <section style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <button type='button' onClick={() => toggleFavAction(episode)}>
              {favorites.find(fav => fav.id === episode.id) ? 'Unfav' : 'Fav'}
            </button>
            Season: {episode.season} Number: {episode.number}
          </div>
        </section>
      </section>
    )
  })
}