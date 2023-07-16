let blues = `
<div>
    <div id="main-header-section">
        <div class="main-header-buttons">
            <div class="back-and-forward-buttons">
                <i class="fa-solid fa-chevron-left button"></i>
                <i class="fa-solid fa-chevron-right button"></i>
            </div>
            <div class="download-and-profile-buttons">
                <div id="download-app-button">
                    <span class="button">
                        <i class="fa-regular fa-circle-down"></i>
                        De app installeren
                    </span>
                </div>
                <div id="profile-button">
                    <span class="button">
                        <i class="fa-regular fa-user"></i>
                    </span>
                </div>
            </div>
        </div>
        <div id="header-playlist-details">
            <div id="playlist-image-container">
                <img
                    src="https://i.scdn.co/image/ab67706f00000002053676e87d17a88e7da65b56"
                    alt="Playlist cover" />
            </div>
            <div id="header-playlist-titles">
                <div id="playlist-type">
                    <span style="font-size: var(--font-xs-small); font-weight: 600"
                        >Playlist</span
                    >
                </div>
                <h1 id="playlist-title">Blues</h1>
                <div id="playlist-duration">
                    <span>FictionalUsername</span>
                    <i class="fa-solid fa-circle" style="font-size: 6px"></i>
                    <span>3 nummers, </span>
                    <span style="color: var(--inactive)">19 min. 52 sec</span>
                </div>
            </div>
        </div>
        <div class="header-play-and-settings">
            <div id="header-play-button">
                <i class="fa-solid fa-play"></i>
            </div>
            <div id="header-settings-button">
                <i class="fa-solid fa-ellipsis button"></i>
            </div>
        </div>
    </div>
    <div id="playlist-container">
        <div class="playlist-headers">
            <div class="playlist-header-element" style="width: 3%">#</div>
            <div class="playlist-header-element" style="width: 39%">Titel</div>
            <div class="playlist-header-element" style="width: 25%">Album</div>
            <div class="playlist-header-element" style="width: 28%">
                Datum toegevoegd
            </div>
            <div class="playlist-header-element" style="width: 5%">
                <i class="fa-regular fa-clock"></i>
            </div>
        </div>
        <hr style="border: none; border-bottom: 1px solid rgba(255, 255, 255, 0.137); margin-bottom: 1.2rem" />

        <div class="playlist-song-container"></div>

        <div class="suggested-songs-container">
            <div class="suggested-songs-header">
                <h3>Aanbevolen</h3>
                <p>Gebasseerd op de inhoud van deze playlist</p>
            </div>
            <div id="suggested-songlist"></div>
        </div>
    </div>
</div>
`;
