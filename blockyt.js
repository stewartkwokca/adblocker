const observer = new MutationObserver(() => {

    const imageAds = document.getElementsByClassName('badge-style-type-ad');
    if (imageAds) {
        for (const ad of imageAds) {
            ad.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }
    }

    const moreImageAds = document.getElementsByClassName('YtwFeedAdMetadataViewModelHostMetadata')
    if (moreImageAds) {
        for (const ad of imageAds) {
            ad.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }
    }

    const evenMoreImageAds = document.getElementsByClassName('ytd-ad-inline-playback-meta-block')
    if (evenMoreImageAds) {
        for (const ad of evenMoreImageAds) {
            ad.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }
    }

})

observer.observe(document.body, { childList: true, subtree: true });