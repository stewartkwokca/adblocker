const observer = new MutationObserver(() => {
    observer.disconnect();

    const vids = document.querySelectorAll('video');
    let moved

    if (vids.length > 1){
        // swap
        console.log(vids)
        movedStream = vids[0].parentElement.insertBefore(vids[1], vids[0]);
        vids[0].pause()
        vids[0].muted = true;
        vids[0].remove()
        movedStream.volume = 0.5;
        movedStream.muted = false;
        movedStream.pause()
        movedStream.play()

        // fix buttons
        const oldPause = document.querySelector('[data-a-target="player-play-pause-button"]');
        const newPause = document.createElement("button")
        newPause.appendChild(document.createTextNode("Pause/Play"))
        newPause.style.padding="2px"

        newPause.onclick = () => {
            if (movedStream.paused) {
                movedStream.play();
            } else {
                movedStream.pause();
            }
        }

        oldPause.parentElement.insertBefore(newPause, oldPause)
        oldPause.remove();

        const oldMute = document.querySelector('[data-a-target="player-mute-unmute-button"]');
        const newMute = document.createElement("button")
        newMute.appendChild(document.createTextNode("Mute/Unmute"))
        newMute.style.padding="2px"

        newMute.onclick = () => {
            if (movedStream.muted) {
                movedStream.muted = false;
            } else {
                movedStream.muted = true;
            }
        }

        oldMute.parentElement.insertBefore(newMute, oldMute)

        let audioText = document.createElement("p")
        audioText.textContent = Math.round(movedStream.volume * 100) + "%";

        audioText = oldMute.parentElement.insertBefore(audioText, oldMute);
        audioText.style.padding="2px"

        const minusAudio = document.createElement("button")
        minusAudio.appendChild(document.createTextNode("-"))
        minusAudio.style.padding="2px"

        minusAudio.onclick = () => {
            movedStream.volume = Math.max(movedStream.volume - 0.01, 0);
            audioText.textContent = Math.round(movedStream.volume * 100) + "%";
        }

        const addAudio = document.createElement("button")
        addAudio.appendChild(document.createTextNode("+"))
        addAudio.style.padding="2px"

        addAudio.onclick = () => {
            movedStream.volume = Math.min(movedStream.volume + 0.01, 1);
            audioText.textContent = Math.round(movedStream.volume * 100) + "%";
        }

        oldMute.parentElement.insertBefore(addAudio, oldMute)
        audioText.parentElement.insertBefore(minusAudio, audioText)

        oldMute.remove();

        document.querySelector('[data-a-target="player-volume-slider"]').remove();
        document.querySelector('[data-a-target="video-ad-label"]').parentElement.remove();
        document.querySelector('[aria-label="Ad"]').parentElement.remove();
    }

    observer.observe(document.body, { childList: true, subtree: true });
})

observer.observe(document.body, { childList: true, subtree: true });