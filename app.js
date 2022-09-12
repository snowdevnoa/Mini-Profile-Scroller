//usually data will come from an api

const data = [
  {
    name: 'John Doe',
    age: 22,
    gender: 'male',
    lookingfor: 'female',
    location: 'New York City NY',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
  {
    name: 'Mary Williams',
    age: 22,
    gender: 'female',
    lookingfor: 'male',
    location: 'Austin TX',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

const profiles = profileIterator(data);

//Call first profle
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>

    </ul>`;

    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${currentProfile.image}"/>`;
  } else {
    //no more profiles
    window.location.reload();
  }
}

//Profle Iterator

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
