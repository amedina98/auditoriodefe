const recording = document.querySelector("[data-embed]");
const thumbnail = recording.querySelector("img");

function hideUnavailableThumbnail() {
  thumbnail.hidden = true;
}

thumbnail.addEventListener("error", hideUnavailableThumbnail);
if (thumbnail.complete && !thumbnail.naturalWidth) {
  hideUnavailableThumbnail();
}

recording.addEventListener("click", (event) => {
  if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

  event.preventDefault();
  const player = document.createElement("iframe");
  player.src = recording.dataset.embed;
  player.title = recording.dataset.title;
  player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  player.allowFullscreen = true;
  player.referrerPolicy = "strict-origin-when-cross-origin";
  recording.replaceWith(player);
  player.focus();
});
