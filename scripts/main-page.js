let time  = 2000, 
    currentImageIndex = 0;
let images = document.getElementsByClassName('img-slide'); 

function swap_image()
{
    
    if(currentImageIndex < images.length)
    {
        images[currentImageIndex].classList.add("show");
        currentImageIndex++;
    }else
    {
        currentImageIndex = 0;
        for(var i = 1; i < images.length; i++)
        {
            images[i].classList.remove("show")
            images = document.getElementsByClassName("img-slide")
        }

    }
}

function start()
{
    setInterval(() => {swap_image()}, time);
}

window.addEventListener("load", start)