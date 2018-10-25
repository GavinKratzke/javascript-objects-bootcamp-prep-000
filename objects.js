var playlist = {
  MyBloodyValentine: 'lol'
};

function updatePlaylist(playlist, artist, song) {
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi'
}

function removeFromPlaylist(playlist, artist) {
  delete playlist['My Bloody Valentine']
  delete playlist['Slowdive']
}
