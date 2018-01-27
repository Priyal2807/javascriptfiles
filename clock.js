const secondHand=document.querySelector('.shand');
const minuteHand=document.querySelector('.mhand');
const hourHand=document.querySelector('.hhand');

function setDate(){
  const now= new Date();
  const seconds=now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes=now.getMinutes();
  const minuteDegress=((minutes/60)*360)+90+((seconds/60)*6);
  minuteHand.style.transform=`rotate(${minuteDegrees}deg)`;

  const hour=now.getHours();
  const hourDegrees=((hour/12)*360)+90+((minutes/60)*30);
  hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000);
setDate();
