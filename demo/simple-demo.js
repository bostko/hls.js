

function play(containerId) {
  var frameRef = iframeRef( document.getElementById(containerId) );
  var video = frameRef.getElementById('video');
  var input = frameRef.getElementsByName('video')[0];
  var hls = new frameRef.Hls();
  hls.loadSource(input.value);
  hls.attachMedia(video);
  hls.on(frameRef.Hls.Events.MANIFEST_PARSED,function() {
    video.play();
  });
}

function iframeRef( frameRef ) {
    return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument
}

function playAll() {
  play('left_iframe');
  play('right_iframe');
}
