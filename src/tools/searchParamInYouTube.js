export function searchParamInYouTube(url){
    if(url){
        const videoUrl = new URL(url)
    const paramUrl = videoUrl.searchParams.get('v')
    return paramUrl
    }
}