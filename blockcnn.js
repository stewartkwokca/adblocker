const observer = new MutationObserver(() => {
    if (document.querySelectorAll(".fave-ad-playing video")){
        let video = document.querySelector(".fave-ad-playing video")
        if (video){
            video.currentTime += 3
        }
    }

    const imageAds = document.getElementsByClassName('ob-rec-label');
    if (imageAds) { 
        for (const ad of imageAds) {
            ad.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }
    }
})

observer.observe(document.body, { childList: true, subtree: true });