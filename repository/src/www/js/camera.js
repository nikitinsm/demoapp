var camera_destinationType;

function onPhotoDataSuccess(imageData){
    var cameraImage = document.getElementById('resultFromCameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = "data:image/jpeg;base64," + imageData;

    $.mobile.navigate("#resultFromCamera");
}

function onPhotoDataFail(e){
    alert("Camera Error!");
}


function camera_getPicture(){
    navigator.camera.getPicture
        ( onPhotoDataSuccess
        , onPhotoDataFail
        , { quality : 30
          , destinationType: camera_destinationType.DATA_URL
          }
        );
}
