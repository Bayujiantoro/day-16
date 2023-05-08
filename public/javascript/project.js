let dataProject = []
let i = 0


function getData(event) {

    
    event.preventDefault()

    let nameProject = document.getElementById('nameProject').value
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value
    let description = document.getElementById('description').value

    let nodeJs = document.getElementById('nodeJs').checked
    let nextJs = document.getElementById('nextJs').checked
    let reactJs = document.getElementById('reactJs').checked
    let typeScript = document.getElementById('typeScript').checked

    let fileImg = document.getElementById('fileImg').files[0]

    fileImg = URL.createObjectURL(fileImg);

    if (nameProject == "") {
        return alert('Tolong Lengkapi Form yg tersedia 😊😉')
    }
    else if (startDate == "") {
        return alert('Tolong Lengkapi Form yg tersedia 😊😉')
    } else if (endDate == "") {
        return alert('Tolong Lengkapi Form yg tersedia 😊😉')
    } else if (description == "") {
        return alert('Tolong Lengkapi Form yg tersedia 😊😉')
    } else if (fileImg == "") {
        return alert('Tolong Lengkapi Form yg tersedia 😊😉')
    } else if (!nodeJs && !nextJs && !reactJs && !typeScript) {
        return alert('Mohon pilih tehnologi yang anda butuhkan 😊😉')
    }
    let data = { nameProject, startDate, endDate, description, nodeJs, nextJs, reactJs, typeScript, fileImg }

    dataProject.push(data)
    console.log(dataProject)

    showData()

 
}


function showData() {
    let containerResult = document.getElementById('containerResult')

  

    containerResult.innerHTML += `
        <div class="card-project">
            <img src="${dataProject[i].fileImg}" >
            <p class="title-project">${dataProject[i].nameProject}</p>
            <p class="durasi-project">${getDuration (dataProject[i].startDate,dataProject[i].endDate)}</p>
            <p class="deskripsi-project">${dataProject[i].description}</p>


            <div class="icon-technology">
                <img id="iconNodeJs${i}" src="assets/images/node-js.png">
                <img id="iconReactJs${i}" src="assets/images/React-icon.svg.png">
                <img id="iconNextJs${i}" src="assets/images/next-js.png">
                <img id="iconTypeScript${i}" src="assets/images/typescript.png">
            </div>

            <div class="button-action">
                <button class="edit">edit</button>
                <button class="delete">delete</button>
            </div>
        </div>`

        if (dataProject[i].nodeJs == false) {
            document.getElementById(`iconNodeJs${i}`).style.display = "none"
        } 
        if (dataProject[i].nextJs == false) {
            document.getElementById(`iconNextJs${i}`).style.display = "none"
        } 
        if (dataProject[i].reactJs == false) {
            document.getElementById(`iconReactJs${i}`).style.display = "none"
        } 
        if (dataProject[i].typeScript == false) {
            document.getElementById(`iconTypeScript${i}`).style.display = "none"
        }

    
    

    i++

} 


const getDuration = (timeStart,timeEnd) => {
    const miliSecond = 1000
    const distance = new Date(timeEnd) - new Date(timeStart);
    
    const monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * miliSecond))
    if(monthDistance > 0 ) {
      return "Durasi : " + monthDistance  + " Bulan"
    } else {
      const dayDistance = Math.floor(distance / (24 * 60 * 60 * miliSecond))
      if(dayDistance != 0) {
        return "Durasi : " + dayDistance  + " Hari"
      } else {
        const hourDistance = Math.floor(distance / (60 * 60 * miliSecond)) 
        if(hourDistance >= 1) {
          return "Durasi : " + hourDistance  + " Jam"
        } else {
          const minuteDistance = Math.floor(distance / ( 60 * miliSecond))
          if(minuteDistance != 0) {
            return "Durasi : " + minuteDistance  + " Menit"
          }
        }
      }
    }

   
  };