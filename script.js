const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
]

let cardsWrapper = document.getElementById('card-wrapper');

function createCards(item) {

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('each-div');

    let pId = document.createElement('p');
    pId.textContent = item.userId;
    pId.classList.add('id-text')

    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', item.userImage);
    imgTag.setAttribute('alt', item.userName);
    imgTag.classList.add('user-img');

    let nameTag = document.createElement('p');
    nameTag.textContent = item.userName;
    nameTag.classList.add('text-style');

    let lastNameTag = document.createElement('p');
    lastNameTag.textContent = item.userLastName;
    lastNameTag.classList.add('text-style');

    let ageTag = document.createElement('p');
    ageTag.textContent = item.userAge + ": years old";
    ageTag.classList.add('text-style')

    let addressTag = document.createElement('p');
    addressTag.textContent = 'addresses: ' + item.userAddresses;
    addressTag.classList.add('text-style')

    cardDiv.appendChild(pId);
    cardDiv.appendChild(imgTag);
    cardDiv.appendChild(nameTag);
    cardDiv.appendChild(lastNameTag);
    cardDiv.appendChild(ageTag);
    cardDiv.appendChild(addressTag);

    cardsWrapper.appendChild(cardDiv);
}


dataAraay.forEach(element => {
    createCards(element);
}) 