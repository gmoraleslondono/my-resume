let sidebar = {
    profilePicture: './assets/image.png',
    contactInfo: {
        email: 'gmoraleslondono@gmail.com',
        phoneNumber: '+46 73 591 4116',
        location: 'Stockholm, Sweden.',
        linkedin: 'linkedin.com/in/gmoraleslondono'
    },
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Android', 'XML', 'WordPress', 'Boostrap', 'JQuery', 'JSON', 'Vue.js']

}

let image =document.querySelector('.image')
image.setAttribute('src', sidebar.profilePicture)


const contactInfoTemplate = `<a href="mailto:${sidebar.contactInfo.email}">${sidebar.contactInfo.email}</a>
<a href="tel:${sidebar.contactInfo.phoneNumber}">${sidebar.contactInfo.phoneNumber}</a>
<a class="link" href="https://www.${sidebar.contactInfo.linkedin}" target="_blank">${sidebar.contactInfo.linkedin}</a>
<address class="location">${sidebar.contactInfo.location}</address>`

// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
document.querySelector('.contactInfo').insertAdjacentHTML('afterbegin', contactInfoTemplate);     // Append <li> to <ul> with id="myList"

let skillTemplate = ''

sidebar.skills.forEach(function (skill) {
   skillTemplate += `<mark>${skill}</mark>`
})


document.querySelector('.skillsList').insertAdjacentHTML('afterbegin', skillTemplate); 
