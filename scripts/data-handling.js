function createTemplate(html) {
    let template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstChild;
}

function renderPlaylistSongs(data, playlistIndex) {
    const playlistSongContainer = document.querySelector(".playlist-song-container");
    let songIndex = 1;

    data[playlistIndex].songlist.forEach((song) => {
        let songElement = document.createElement("div");
        songElement.setAttribute("class", "song-component");
        songElement.innerHTML = `
            <div class="song-index" style="width: 3%">${songIndex}</div>
            <div class="song-titles" style="width: 39%;">
                <div class="songlist-album-cover">
                    <img src="${song.image}" alt="album cover" />
                </div>
                <div class="song-title-and-artist">
                    <span class="songlist-song-title">${song.title}</span>
                    <span class="songlist-song-artist">${song.artist}</span>
                </div>
            </div>
            <div class="songlist-song-album" style="width: 25%">
                <span>${song.album}</span>
            </div>
            <div class="songlist-song-date" style="width: 28%">
                <span>${song.date}</span>
            </div>
            <div class="songlist-song-duration">
                <span>${song.duration.toFixed(2).replace(".", ":")}</span>
            </div>
        `;

        playlistSongContainer.append(songElement);
        songIndex++;
    });
}

function renderSuggestedSongs(data, playlistIndex) {
    const suggestedSongsContainer = document.getElementById("suggested-songlist");

    data[playlistIndex].suggested.forEach((song) => {
        let sugSong = document.createElement("div");
        sugSong.setAttribute("class", "suggested-song");
        sugSong.innerHTML = `
            <div class="suggested-song-titles">
                <div class="suggested-song-image">
                    <img src="${song.image}" alt="album cover" />
                </div>
                <div class="suggested-song-title-and-artist">
                    <span class="suggested-song-title">${song.title}</span>
                    <span class="suggested-song-artist">${song.artist}</span>
                </div>
            </div>
            <div class="suggested-song-album">
                <span>${song.album}</span>
            </div>
            <div class="add-song-button">
                <span class="add-button">Toevoegen</span>
            </div>
        `;

        suggestedSongsContainer.append(sugSong);
    });
}

function renderSongs(url, playlistIndex) {
    let data = fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            renderPlaylistSongs(data, playlistIndex);
            renderSuggestedSongs(data, playlistIndex);
        });
}

// Main function for rendering playlists
function renderTemplate(template, playlistIndex, gradient) {
    mainContent.innerHTML = "";
    mainContent.style.background = `linear-gradient(180deg, ${gradient}, #121212 500px)`;
    mainContent.appendChild(template);
    renderSongs("./songlists.json", playlistIndex);
}

const mainContent = document.getElementById("main-content");
