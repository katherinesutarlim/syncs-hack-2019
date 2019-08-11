const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}

//////////////////////////:NOTIFICATIONS:///////////////////////////

const hipster_curves = {
  "body": "You’ve earned the “Hipster curves” reward! Keep going, curvy back is sooo hot!",
  "image": "http://127.0.0.1:8080/assets/hipster_curves.png",
};

const rich_life = {
  "body": "+20 coins for spending your day not lying on the floor. Rich life awaits!",
  "image": "http://127.0.0.1:8080/assets/rich_life.png",
};

const hey_loser = {
  "body": "Hey loser, you're not so bad. You had 30 minutes more of good posture than last week.",
  "image": "http://127.0.0.1:8080/assets/hey_loser.png",
};

const karens_approval = {
  "body": "You’ve earned the “Karen’s Approval” reward. You spent exactly 1 minute being good.",
  "image": "http://127.0.0.1:8080/assets/karens_approval.png",
};

const sedentary_coral = {
  "body": "Fun fact! This animal’s brain literally dissolves if it stops moving and just sits. It can happen to you!",
  "image": "http://127.0.0.1:8080/assets/sedentary_coral.png",
};

const notif_types = [
  hipster_curves,
  rich_life,
  hey_loser,
  karens_approval,
  sedentary_coral
];

const showLocalNotification = (swRegistration) => {
  var number = Math.floor(Math.random() * 5);
  swRegistration.showNotification("", notif_types[number]);
}

const squeaky_noises = {
  "body": "You’ve been slouching for 4 hours straight! Good luck sleeping with those squeaky noises from your spine tonight 😏",
};

const farts_in = {
  "body": "Remember my dear! Good posture not only looks nice, but also helps to keep farts in...",
};

const shoulder_devil = {
  "body": "That shoulder has the devil sitting on it, ready to give you hell as soon as you move. Get your lazy ass up!",
};

const warn_types = [
  squeaky_noises,
  farts_in,
  shoulder_devil
]

const showWarning = (swRegistration) => {
  var number = Math.floor(Math.random() * 3);
  swRegistration.showNotification("Oh My Posture!", warn_types[number]);
}

//////////////////////////////////////////////////////////////////

var swRegistration;
var npressed = false;

const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register('service.js')
  return swRegistration
}

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification')
  }
}

const buttonClickN = () => {
  var number = Math.floor(Math.random() * 5);
  swRegistration.showNotification("", notif_types[number]);
}

const buttonClickW = () => {
  var number = Math.floor(Math.random() * 3);
  swRegistration.showNotification("Oh My Posture!", warn_types[number]);
}

const buttonDown = (k) => {
  if (k.Handled) return;
  if (` ${k.keyCode}` == 78) {
    console.log(` ${k.keyCode}`);
    showLocalNotification(swRegistration);
  } else if (` ${k.keyCode}` == 74) {
    console.log(` ${k.keyCode}`);
    showWarning(swRegistration);
  }
  k.Handled = true;
}

const main = async () => {
    self.addEventListener('keydown', buttonDown);
    check();
    swRegistration = await registerServiceWorker();
    const permission =  await requestNotificationPermission();
}

main();
