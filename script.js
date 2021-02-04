let audio = document.querySelectorAll('audio');
let rightContain = document.querySelector('#rightcontain');
let music = document.querySelector('.music');

audio = Array.from(audio);

let template = '';

// let indexNumber = song.dataset.index;

audio.forEach(function (song,index){

    let songNAme = song.dataset.name;
    let artistName = song.dataset.artist;

    template += `
    <div data-index=${index} class="music">
        <div class="icon"></div>
        <div class="detail">
            <h3>${songNAme}</h3>
            <h5>${artistName}</h5> 
        </div>
    </div>`;
})

rightContain.innerHTML = template;


// rightContain.addEventListener('click', function(details){
//     audio[details.target.dataset.index]. play();
// })

let playing = '';

rightContain.addEventListener('click', function(details){

    if(playing === ''){
        audio[details.target.dataset.index].play();
        playing = audio[details.target.dataset.index];
        // playing.pause();
    }

    else{
        playing.pause();
        playing.currentTime = 0;
        playing = audio[details.target.dataset.index];
        playing.play();
    
    }
    
})