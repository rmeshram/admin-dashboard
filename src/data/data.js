import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const getDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  let hour = today.getHours();
  let min = today.getMinutes();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = dd + '/' + mm + '/' + yyyy + ' ' + hour + ':' + min
  return formattedToday;
}
const monthlyRecord = [
  {
    id: 1,
    emailid: 'gayle@gmail.com',
    content: 'May I help you ?',
    type: 'WARM_LEAD',
    avatar: avatar1,
    time: getDate()
  },
  {
    emailid: 'ricky@gmail.com',
    content: 'Where is my order ? ',
    type: 'WARM_LEAD',
    time: getDate(), id: 2,
    avatar: avatar2
  },
  {
    emailid: 'mathew@gmail.com',
    content: 'Would you like to know the benfits',
    type: 'WARM_LEAD',
    id: 3,
    time: getDate(),
    avatar: avatar3
  },
  {
    emailid: 'chia@gmail.com',
    content: 'How may I help you',
    type: 'WARM_LEAD',
    time: getDate(),
    avatar: avatar4,
    id: 7,
  },
  {
    emailid: 'rak@gmail.com',
    content: 'Is it working for you ?',
    type: 'WARM_LEAD',
    id: 6,
    time: getDate(),
    avatar: avatar5
  },
  {
    emailid: 'senzesh@gmail.com',
    content: 'How are you today ?',
    type: 'RESPONDED',
    id: 4,
    time: getDate(),
    avatar: avatar5
  },
  {
    emailid: 'chris@gmail.com',
    content: 'How are you feeling today ?',
    type: 'WARM_LEAD',
    time: getDate(),
    id: 5,
  },
  {
    emailid: 'akash@gmail.com',
    content: 'Sorry for the inconvience',
    type: 'UNVISITED',
    id: 30,
    avatar: avatar6,
    time: getDate(),
  },
  {
    emailid: 'simon@gmail.com',
    content: 'How is the weather?',
    type: 'UNVISITED',
    time: getDate(),
    id: 30,
    avatar: avatar4
  },
  {
    emailid: 'gale@gmail.com',
    content: 'Hope you are doing well',
    type: 'UNVISITED',
    id: 30,
    avatar: avatar1,
    time: getDate(),
  },
  {
    emailid: 'hyden@gmail.com',
    content: 'This will make your day',
    type: 'UNVISITED',
    time: getDate(),
    id: 32,
    avatar: avatar3
  },
  {
    emailid: 'andrew@gmail.com',
    content: 'hello world3',
    type: 'UNVISITED',
    id: 31,
    time: getDate(),
    avatar: avatar1
  },
  {
    emailid: 'john@gmail.com',
    content: 'hello world3',
    type: 'UNVISITED',
    id: 30,
    time: getDate(),
    avatar: avatar2
  },
];

const incidents = [
  {
    type: 'ADMIN_TO_LEAD',
    time: new Date(),
    content: 'I hope you are doing well today',
  },
  {
    type: 'LEAD_TO_ADMIN',
    time: new Date(),
    content: 'hello world',
  },
  {
    type: 'ADMIN_TO_LEAD',
    time: new Date(),
    content: 'hello world',
  },
  {
    type: 'LEAD_TO_ADMIN',
    time: new Date(),
    content: 'hello world',
  },
  {
    type: 'ADMIN_TO_LEAD',
    time: new Date(),
    content: 'hello world',
  },
  {
    type: 'LEAD_TO_ADMIN',
    time: new Date(),
    content: 'hello world',
  },
];


const yearlyData = {
  total_leads: {
    "January": 66,
    "February": 33,
    "March": 44,
    "April": 55,
    "May": 53,
    "June": 66,
    "July": 87,
    "August": 33,
    "September": 33,
    "October": 88,
    "November": 56,
    "December": 37
  },
  warm_leads: {
    "January": 11,
    "February": 33,
    "March": 33,
    "April": 22,
    "May": 11,
    "June": 22,
    "July": 33,
    "August": 22,
    "September": 22,
    "October": 11,
    "November": 44,
    "December": 66
  },
  leads_responded: {
    "January": 66,
    "February": 33,
    "March": 22,
    "April": 11,
    "May": 22,
    "June": 33,
    "July": 44,
    "August": 22,
    "September": 11,
    "October": 22,
    "November": 33,
    "December": 44
  },
  leads_unresponded: {
    "January": 66,
    "February": 33,
    "March": 33,
    "April": 33,
    "May": 33,
    "June": 33,
    "July": 33,
    "August": 33,
    "September": 33,
    "October": 33,
    "November": 33,
    "December": 33
  }
}

export { monthlyRecord, incidents, yearlyData };
