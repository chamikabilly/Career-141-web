window.onload = function swiperinitiate() {
    const headerSwiper = new Swiper('.header.swiper-container',{
        loop:true,
        direction:'horizontal',
        speed:1000,
        effect:'slide',
        parallax:true,
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },

        

        navigation:{
            nextEl:'.header.swiper-button-next',
            prevEl:'.header.swiper-button-prev',
        },
    });

    const clientsSwiper = new Swiper('.our-clients-container.swiper-container',{
        loop:true,
        direction:'horizontal',
        speed:1000,
        effect:'slide',
        grabCursor:true,
        centeredSlides:true,
        
        autoplay:{
            delay:2000,
            disableOnInteraction:false,
        },

        navigation:{
            nextEl:'.our-clients.swiper-button-next',
            prevEl:'.our-clients.swiper-button-prev',
        },

        breakpoints:{
            320:{
                slidesPerView:1,
            },

            575:{
                slidesPerView:3,
            },

            991:{
                slidesPerView:5,
            },
            1200:{
                slidesPerView:7,
            },

            1500:{
                slidesPerView:9,
            },


        },
    });


    const VoiceSwiper = new Swiper('.client-voice.swiper-container',{
        loop:true,
        direction:'horizontal',
        speed:1000,
        effect:'slide',
        parallax:true,
        grabCursor:true,
        slidesPerView:1,
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
      

        navigation:{
            nextEl:'.client-voice.swiper-button-next',
            prevEl:'.client-voice.swiper-button-prev',
        },

        pagination:{
            el:'.client-voice.swiper-pagination',
            type:'bullets',
            clickable:true,
        }
    });



    const IndustriesSwiper =new Swiper('.industries.swiper-container' ,{
        effect:'coverflow',
        grabCursor:true,
        centeredSlides:true,
        slidesPerView:'auto',
        parallax:true,
        speed:1000,
        loop:true,
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
     


        coverflowEffect:{
            rotate:50,
            stretch:-90,
            depth:200,
            modifier:1,
            slideShadows:true,
        },

        pagination:{
            el:'.industries.swiper-pagination'
        },
    });


    const OurEventsSwiper =new Swiper('.our-events.swiper-container',{
        loop:true,
        direction:'horizontal',
        speed:1000,
        effect:'slide',
        slidesPerView:3,
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
       

        navigation:{
            nextEl:'.our-events.swiper-button-next',
            prevEl:'.our-events.swiper-button-prev',
        },

        breakpoints:{

            1200:{
                slidesPerView:3,
            },

            991:{
                slidesPerView:2,
            },

           767:{
                slidesPerView:1,
            },

            100:{
                slidesPerView:1,
            }


        },
    })
    



window.onscroll = function stickyheader(){
    var header =document.getElementById('nav');
    var margin =document.querySelector('section.nav-sc');


        if(window.pageYOffset > 0) {
            header.classList.add("sticky");
            margin.style.marginBottom= '0px';
        }else{
            header.classList.remove("sticky");
            margin.style.marginBottom= '-120px';
        }
        
}

}