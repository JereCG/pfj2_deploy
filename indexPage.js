const handlerBarsContext = {
    "/index.html": {
        "headers":[
            {
                option:"Sobre mi",
            },
            {
                option:"Blog",
            },
            {
                option:"Contactos",
            },
            {
                option:"Proyectos",
            }
        ],
        "socialMedia":[
            {
                imgUrl:'img/logotwitter.png',
                alt:"Logo de Twitter"
            },
            {
                imgUrl:'img/logofacebook.png',
                alt: "Logo de Facebook"
            },
            {
                imgUrl:'img/logoinsta.png',
                alt: "Logo de Instagram"
            },
            {
                imgUrl:'img/logolinkedin.png', 
                alt:"Logo de Linkedin"
            }
        ],
        "phones":[
            {
                tel: "tel:+1234567890"
            },
            {
                tel: "tel:+1234567890"
            }
        ],
        "contacts":[
            {
                red:"Twitter"
            },
            {
                red:"Instagram"
            },
            {
                red:"Facebook"
            },
            {
                red:"linkedin"
            }
        ]
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;