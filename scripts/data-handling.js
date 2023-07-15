function createTemplate(html) {
    let template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstChild;
}

function renderSonglist(arrayIndex) {
    fetch("./songlists.json")
        .then((response) => response.json())
        .then((data) =>
            data[arrayIndex].songlist.forEach((song) => {
                let songIndex = data[arrayIndex].songlist.indexOf(song);
                let songElement = document.createElement("div");
                songElement.setAttribute("class", "song-component");
                songElement.innerHTML = `
                    <div class="song-index" style="width: 3%">${songIndex + 1}</div>
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

                const songlistContainer = document.querySelector(".playlist-song-container");
                songlistContainer.append(songElement);
            })
        );
}

function renderTemplate(template, arrayIndex, gradient) {
    mainContent.innerHTML = "";
    mainContent.style.background = `linear-gradient(180deg, ${gradient}, #121212 500px)`;
    mainContent.appendChild(template);
    renderSonglist(arrayIndex);
}

const mainContent = document.getElementById("main-content");
