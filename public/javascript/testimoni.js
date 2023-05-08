// class Testimonial {
//     constructor(quote, image) {
//         this._quote = quote
//         this._image = image
//     }

//     get quote() {
//         return this._quote
//     }

//     get image() {
//         return this._image
//     }

//     get html() {
//         return `<div class="testimonial">
//             <img src="${this.image}" class="profile-testimonial" />
//             <p class="quote">"${this.quote}"</p>
//             <p class="author">- ${this.author}</p>
//         </div>`
//     }
// }

// class AuthorTestimonial extends Testimonial {
//     constructor(author, quote, image) {
//         super(quote, image)
//         this._author = author
//     }

//     get author() {
//         return this._author
//     }
// }

// class CompanyTestimonial extends Testimonial {
//     constructor(company, quote, image) {
//         super(quote, image)
//         this._company = company
//     }

//     get author() {
//         return this._company + " Company"
//     }
// }

// const testimonial1 = new AuthorTestimonial("Jihyo-twice", "Mantap, keren banget jasanya", "assets/images/jihyo.jpg")

// const testimonial2 = new AuthorTestimonial("Nancy-Momoland", "oke sih, oke lah", "assets/images/nancy2.jpg")

// const testimonial3 = new CompanyTestimonial("Blackpink", "Gege gaming!", "assets/images/blackpink.jpg")

// let testimonialData = [testimonial1, testimonial2, testimonial3]
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].html
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML



// array of objects
const testimonialData = [
    {
        author: "jihyo-twice",
        quote: "Keren banget jasanya!",
        image: "assets/images/jihyo.jpg",
        rating: 5
    },
    {
        author: "Nancy-Momoland",
        quote: "Mau kasih bintang 5 tapi device aku Error!",
        image: "assets/images/nancy2.jpg",
        rating: 1
    },
    {
        author: "Jenny-Blackpink",
        quote: "Okelah",
        image: "assets/images/jenny.jpg",
        rating: 3
    },
    {
        author: "Lisa-Blackpink",
        quote: "WOWWWW KEREN!",
        image: "assets/images/lisa.jpg",
        rating: 3
    },
    {
        author: "Jiso-Blackpink",
        quote: "Astaga puas banget hasilnya",
        image: "assets/images/jisso.jpg",
        rating: 5
    },
    {
        author: "Rose-Blackpink",
        quote: "Good Mantap!",
        image: "assets/images/rose.jpg",
        rating: 4
    },
]


function allTestimonials() {
    let testimonialHTML = '';

    testimonialData.forEach((item) => {
        testimonialHTML += `<div class="testimonial">
                     <img src="${item.image}" class="profile-testimonial" />
                     <p class="quote">"${item.quote}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>`
    })

    document.getElementById('testimonials').innerHTML = testimonialHTML;
}

allTestimonials()


function filterTestimonials(rating) {
    let testimonialHTML = '';

    

    const testimonialFiltered = testimonialData.filter((item) => {
        return item.rating === rating
    })

   

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}