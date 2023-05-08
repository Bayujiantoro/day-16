
function getData() {
    let nama = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let address = document.getElementById('address').value

    if(nama == '') {
        return alert('Mohon untuk melengkapi data diri Anda ')
    } else if (email == '') {
        return alert('Mohon untuk melengkapi data diri Anda')
    } else if (phone == '') {
        return alert('Mohon untuk melengkapi data diri Anda')
    } else if (subject == '') {
        return alert('Mohon untuk melengkapi data diri Anda')
    } else if (address == '') {
        return alert('Mohon untuk melengkapi data diri Anda')
    }


    // let a = document.createElement('a')
    // a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo Nama saya ${name}, alamat saya ${address}, bisakah anda menghubungi saya di ${phone}`
    // a.click()

    window.location.href =  `mailto:bayujiantoro98@gmail.com?subject=${subject}&body=Halo Nama saya ${nama}, alamat saya ${address}, bisakah anda menghubungi saya di ${phone}`

    let data = {nama,email,phone,subject,address}
    console.log(data)
    
}











