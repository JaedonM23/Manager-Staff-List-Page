const staffList = document.getElementById('staffList');

let staffs = [
    {
        "name": "Jaedon",
        "surname": "Moodley",
        "username": "JMoodley",
        "password": "JM2323"
    },
    {
        "name": "Shaneel",
        "surname": "Kassen",
        "username": "SKassen",
        "password": "SK1212"
    },
    {
        "name": "Prashant",
        "surname": "Kessa",
        "username": "PKessa",
        "password": "PK3345"
    }
]

staffList.innerHTML = '';
staffs.forEach((staff, index) => {
    const staffMember = document.createElement('div');
    staffMember.innerHTML = `
        <h2>${staff.name} ${staff.surname}</h2>
        <p><strong>Username:</strong> ${staff.username}</p>
        <button id="delete" class="btn-remove">Delete</button>
    `;
    staffList.appendChild(staffMember);
});

staffForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const staffMember = document.createElement('div');
    staffMember.innerHTML = `
        <h2>${name} ${surname}</h2>
        <p><strong>Username:</strong> ${username}</p>
        <button id="delete" class="btn-remove">Delete</button>
    `;
    staffList.appendChild(staffMember);
    staffForm.reset();
});

staffList.addEventListener('click', event => {
    if (event.target.classList.contains('btn-remove')) {
        const index = event.target.dataset.index;
        console.log("delete index"+ index);
    }
});
