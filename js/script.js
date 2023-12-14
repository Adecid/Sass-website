let swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5,

    breakpoints: {
        // when window width is >= 320px*****************//
        320: {
          slidesPerView: 3.4,
          spaceBetween: 10
        },
        // when window width is >= 480px*****************//
        480: {
          slidesPerView: 3.4,
          spaceBetween: 10
        },
        // when window width is >= 640px****************//
        640: {
          slidesPerView: 6,
          spaceBetween: 10
        }
    }
});
//Aside *****************//
const menuItem = document.querySelectorAll(".menu-item"),
      notificationBox = document.querySelector(".notification-box"), 
      notificationBoxCounter = document.querySelector("#nt-counter"),
      messageMenu = document.querySelector("#message-menu"),
      messages = document.querySelector(".messages");

menuItem.forEach(item => {
    item.addEventListener("click",() => {
        menuItem.forEach(item => {
            item.classList.remove("active");
        })
        item.classList.add("active");
    }) 
})

//Notification *****************//
menuItem.forEach(item => { 
    item.addEventListener("click", () => {
        notificationBox.style.display = "none";
    })
    menuItem[2].addEventListener("click", () => {
        notificationBox.style.display = "block";
        notificationBoxCounter.style.display = "none";
    })
})
menuItem[3].addEventListener("click", () => {
    messageMenu.style.display = "none";
    messages.classList.toggle("box-shadow1");

    setTimeout(() => {
        messages.classList.remove("box-shadow1");      
    }, 3000);
})

//Profile Popup*****************//
const myPrfImg = document.querySelectorAll("#my-profile-picture"),
      profilePop = document.querySelector(".profile-popup"),
      profileUpload = document.querySelector("#profile-upload"),
      themeCustomize = document.querySelector(".theme-customize"),
      allClose = document.querySelectorAll(".close");

myPrfImg.forEach(allPrfImg => {
    allPrfImg.addEventListener("click", () => {
        profilePop.style.display = "flex";
    });
});

//Close Button***************//
allClose.forEach(close => {
    close.addEventListener("click", () => {
        profilePop.style.display = "none";
        addPostPopup.style.display = "none";
        themeCustomize.style.display = "none";
    });
});

//Profile img with diffrent file script**************//
profileUpload.addEventListener("change", () => {
    var fileReader = new FileReader()
    var uploadProfile = profileUpload.files[0];
    
    fileReader.onload = (e) => {
        document.querySelectorAll("#my-profile-picture img").forEach(fileImg => {
            fileImg.src = e.target.result;
        })
    }
    fileReader.readAsDataURL(uploadProfile);
});

//Scroll**************//
window.addEventListener("scroll", () => {
    profilePop.style.display = "none";
    themeCustomize.style.display = "none";
    notificationBox.style.display = "none"; 
});

//Add Post Poppup********************//
const createLg = document.querySelector("#create-lg"),
      addPostPopup = document.querySelector(".add-post-popup"),
      postImg = document.querySelector(".post-img img"),
      feedPic = document.querySelector("#feed-pic-upload"),
      addStory = document.querySelector("#add-story"),
      story = document.querySelector(".add-story"),
      storyImg = document.querySelector(".story img");

createLg.addEventListener("click", () => {
addPostPopup.style.display = "flex";
});

//Add post image with diferent file script but shorter***************// 
feedPic.addEventListener("change", () => {
    postImg.src = URL.createObjectURL(feedPic.files[0]);
});
addStory.addEventListener("change", () => {
    storyImg.src = URL.createObjectURL(addStory.files[0]);
    story.style.display = "none";
}); 
 
//Highlight Form Post*********************//

const acceptBtn = document.querySelectorAll("#accept"),
      deleteBtn = document.querySelectorAll("#delete");

      acceptBtn.forEach(accept => {
        accept.addEventListener("click", () => {
            accept.parentElement.style.display = "none";
            accept.parentElement.parentElement.querySelector(".alert").style.display = "block";
        })
      })

      deleteBtn.forEach(delet => {
        delet.addEventListener("click", () => {
            delet.parentElement.parentElement.style.display = "none";
        })
      })

//Highlight Form Post******************//
const miniButton = document.querySelector(".mini-button"),
inputPost = document.querySelector(".input-post");

miniButton.addEventListener("click", () => {
    inputPost.classList.add("box-shadow1");
    
    setTimeout(() => {
        inputPost.classList.remove("box-shadow1");   
    }, 3000);
});

miniButton.addEventListener("click", () => {
    if(window.innerWidth <= 991) {
        addPostPopup.style.display = "flex";
        inputPost.classList.remove("box-shadow1");
    }
});

//like icon Click******************//
const firstLikeBtn = document.querySelectorAll(".action-button span:first-child i");

firstLikeBtn.forEach(liked => {
    liked.addEventListener("click", () => {
        liked.classList.toggle("liked");
    })
})

//Theme******************//

menuItem[6].addEventListener("click", () => {
    document.querySelector(".theme-customize").style.display = "flex";
})


//Fontsize******************//
const fontSize = document.querySelectorAll(".choose-size span");

const removeFont = () => {
    fontSize.forEach(size => {
        size.addEventListener("click", () => {
            fontSize.forEach(size => {
                size.classList.remove("active");
            })
            size.classList.add("active");
        })
    })
}

fontSize.forEach(size => {  
    let fontSize;

    removeFont();
    size.addEventListener("click", () => {
        if(size.classList.contains("font-size-1")) {
            fontSize = "10px";
        }
        else if(size.classList.contains("font-size-2")) {
            fontSize = "13px";
        }
        else if(size.classList.contains("font-size-3")) {
            fontSize = "16px";
        }
        else if(size.classList.contains("font-size-4")) {
            fontSize = "19px";
        }
        else if(size.classList.contains("font-size-5")) {
            fontSize = "22px";
        }
        document.querySelector("html").style.fontSize = fontSize;
    })
});

const chooseColor = document.querySelectorAll(".choose-color span");

const colors = () => {
    chooseColor.forEach(color =>{
        color.addEventListener("click", () => {
            chooseColor.forEach(color => {
                color.classList.remove("active");
            })
            color.classList.add("active");
        })
    })
}

const root = document.querySelector(":root");

chooseColor.forEach(color => {
    colors();
    color.addEventListener("click", (e) => {
        let primaryHue;
        
        if(color.classList.contains("color-1")) {
            primaryHue = 255;
        }
        else if(color.classList.contains("color-2")) {
            primaryHue = 52;
        }
        else if(color.classList.contains("color-3")) {
            primaryHue = 355;
        }
        else if(color.classList.contains("color-4")) {
            primaryHue = 155;
        }
        else if(color.classList.contains("color-5")) {
            primaryHue = 202;
        }
        console.log(primaryHue);

        root.style.setProperty("--primary-color-hue", primaryHue);
    })
})


//Fontsize******************//
const mainLeft = document.querySelector(".main-left");

let lastScrollHeight = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop > lastScrollHeight) {
        mainLeft.style.left = "-35%";
    }
    else {
        mainLeft.style.left = "0";
    }
    lastScrollHeight = scrollTop;
})
 




