$(document).ready(function(){
  $('#new-artwork-form').on('submit', addArtwork);
});

function addArtwork(event){
  event.preventDefault();
  $.ajax({
    url: '/artworks',
    method: 'POST',
    data: $('#new-artwork-form').serialize(),
    success: handleAddArtworkSuccess,
    error: handleError
  });
}

function handleAddArtworkSuccess(artworkResponse){
  console.log(artworkResponse);
  var artList = $('#gallery');
  artList.html(artworkResponse.map(getSummary));
}

function getSummary(artwork){
  return `<li>${artwork.name} by ${artwork.artist}</li>`;
}

function handleError(jqXHR, status, error){
  console.log('error:', error);
}