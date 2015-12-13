var slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }
    
    // Handle going to to the next slide
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 500);
    };
    
    nextSlide.call(this);
    
	}
};

function startSlideshow()
{
if(smode=="play")
{
document.getElementById("play").disabled="disabled";
document.getElementById("pause").disabled="";
document.getElementById("stop").disabled="";
document.getElementById("slideshow").src=imgsrc[i];
i++;
setTimeout("startSlideshow()",1000);
}
else if(smode=="pause")
{
document.getElementById("pause").disabled="disabled";
document.getElementById("play").disabled="";
document.getElementById("play").value="Resume";
}
else if(smode=="stop")
{
document.getElementById("play").disabled="";
document.getElementById("play").value="Play";
document.getElementById("pause").disabled="disabled";
document.getElementById("stop").disabled="disabled";
document.getElementById("slideshow").src=imgsrc[0];
i=0;
}
if(i==imgsrc.length)
{
i=0;
}
}
};
