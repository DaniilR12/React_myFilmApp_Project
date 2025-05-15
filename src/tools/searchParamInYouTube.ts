export function searchParamInYouTube(url: string): string {
  try {
    const videoUrl = new URL(url);
    const paramUrl = videoUrl.searchParams.get("v");
    return paramUrl ?? "";
  } catch (error) {
    console.error("Invalid YouTube URL:", url);
    return "";
  }
}
