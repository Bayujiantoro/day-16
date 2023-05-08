const dataTestimonials = new Promise((resolved,rejected) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get','https://api.npoint.io/615a4ced8c20c4b10a65')

    xhr.onload = () => {
        if(xhr.status == 200) {
            resolved(JSON.parse(xhr.response))
        } else {
            rejected(console.log(xhr))
        }
    }

    xhr.send()
})


async function getAllTestimonials () {
    const response = await dataTestimonials
    console.log(response)
    let testimoniHtml = ''
    response.forEach(item => {
        testimoniHtml += `<div class="testimonial">
                              <img src="${item.image}" class="profile-testimonial" />
                              <p class="quote">"${item.quote}"</p>
                              <p class="author">- ${item.author}</p>
                             <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                          </div>`

    })
    document.getElementById('testimonials').innerHTML = testimoniHtml;
}

getAllTestimonials()

async function filtered (rating) {
    const dataTestimoni = await dataTestimonials
    let filterHtml =''
    const dataFilter = dataTestimoni.filter(item => item.rating == rating)

    if (dataFilter.length == 0 ) {
        filterHtml += `<h1>Data Not Found</h1>`
    } else {
        dataFilter.forEach(item => {
            filterHtml += `<div class="testimonial">
                                  <img src="${item.image}" class="profile-testimonial" />
                                  <p class="quote">"${item.quote}"</p>
                                  <p class="author">- ${item.author}</p>
                                 <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                              </div>`
    
        })
        
    }

    document.getElementById('testimonials').innerHTML = filterHtml;
}



// function allTestimonials() {
//     let testimonialHTML = '';

//     testimonialData.forEach((item) => {
//         testimonialHTML += `<div class="testimonial">
//                      <img src="${item.image}" class="profile-testimonial" />
//                      <p class="quote">"${item.quote}"</p>
//                      <p class="author">- ${item.author}</p>
//                      <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//                  </div>`
//     })

//     document.getElementById('testimonials').innerHTML = testimonialHTML;
// }

// allTestimonials()


// function filterTestimonials(rating) {
//     let testimonialHTML = '';

    

//     const testimonialFiltered = testimonialData.filter((item) => {
//         return item.rating === rating
//     })

   

//     if (testimonialFiltered.length === 0) {
//         testimonialHTML = `<h1> Data not found! </h1>`
//     } else {
//         testimonialFiltered.forEach((item) => {
//             testimonialHTML += `<div class="testimonial">
//                 <img src="${item.image}" class="profile-testimonial" />
//                 <p class="quote">"${item.quote}"</p>
//                 <p class="author">- ${item.author}</p>
//                 <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//             </div>`
//         })
//     }

//     document.getElementById('testimonials').innerHTML = testimonialHTML
// }