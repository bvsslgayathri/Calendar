let eventsContainer = document.getElementById('limits');
let modalContainer = document.getElementById('myModal');
let topPos = document.getElementById("16:00").offsetTop + 30;
let isEmpty = 1;

const day7 = [
  {
    name: "Linkedin or Resume",
    startTime: "16:30",
    endTime: "17:30",
    link: "http://ieeesbgvpce.org/",
    speaker: "Mr.abc",
  },
  {
    name: "Coding Competition",
    startTime: "18:30",
    endTime: "19:30",
    link: "http://ieeesbgvpce.org/",
    speaker: "Mr.abc",
  }
]

const day4 = [
  {
    name: "Simulation Tool",
    startTime: "16:30",
    endTime: "17:30",
    link: "http://ieeesbgvpce.org/",
    speaker: "Mr.abc",
  },
  {
    name: "Python",
    startTime: "16:30",
    endTime: "19:30",
    link: "http://ieeesbgvpce.org/",
    speaker: "Mr.abc",
  },
  {
    name: "Web Dev",
    startTime: "18:00",
    endTime: "19:30",
    link: "http://ieeesbgvpce.org/",
    speaker: "Mr.abc",
  }
]

let modalContent = (ev) => {
  let myModal = document.createElement('div');
  myModal.classList.add('modal');
  myModal.setAttribute('id', 'myModel');
  let modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  // let spn = document.createElement('span');
  // spn.classList.add('close');
  // spn.setAttribute('id', 'close');
  // spn.innerHTML = "&times;";
  let title = document.createElement('h2');
  title.innerHTML = `${ev.name}`;
  let para = document.createElement('p');
  para.innerHTML = `Time: ${ev.startTime} - ${ev.endTime}`;
  let fee = document.createElement('p');
  fee.innerHTML = "Fee : Rs.250(ieee member)\ Rs.350(non-ieee member)";
  let lnk = document.createElement('a');
  lnk.innerHTML = "Register" + "<br>";
  let suggestion = document.createElement('small');
  suggestion.innerHTML = "click on outside to close modal";
  lnk.href = `${ev.link}`;
  // modalContent.append(spn);
  modalContent.append(title);
  modalContent.append(para);
  modalContent.append(fee);
  modalContent.append(lnk);
  modalContent.append(suggestion);
  myModal.append(modalContent);
  return myModal;
}

//function for locating the coordinates of the event
const locateCoords = (event) => {
	let start = document.getElementById(event.startTime);
	let end = document.getElementById(event.endTime);
  let startCoord, endCoord;
  if(window.screen.width <= 700){
    startCoord = start.offsetTop;
    endCoord = end.offsetTop;
  }
  else{
    startCoord = start.offsetLeft;
	  endCoord = end.offsetLeft;
  }
	createEventElement(event, startCoord, endCoord);
  console.log(startCoord);
  console.log(endCoord);
  isEmpty = 0;
}

//function for creating the event elements
const createEventElement = (event, start, end) => {
	let eventElement = document.createElement('div');
	let linkEle = document.createElement('a');
  linkEle.classList.add('eventHref');
	if(window.screen.width <= 700){
    eventElement.style.height = "40px";
    linkEle.innerHTML = event.name + ` (${event.startTime} - ${event.endTime}) `;
  }
  else{
    eventElement.style.position = "absolute";
    eventElement.style.left = start + "px";
	  eventElement.style.width = (end-start) + "px";
    eventElement.style.top = topPos + 'px';
    linkEle.innerHTML = event.name;
  }
	linkEle.href = "#";
  linkEle.append(modalContent(event));
  linkEle.setAttribute('data-object', event);
  let modalPopup = modalContent(event);
  
	eventElement.append(linkEle);
	eventElement.classList.add("event");
	eventsContainer.append(eventElement);
  topPos += 50;
}

//function to switch between the days
const switchDays = (day) => {
  switch (day) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
      if(!isEmpty)
        clearFun();
      day4.forEach(locateCoords);
      break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      if(!isEmpty)
        clearFun();
      day7.forEach(locateCoords);
      break;
    default:
      break;
  }
}

//function to clear the data when days are switching
const clearFun = () => {
  eventsContainer.innerHTML = '';
  topPos = document.getElementById("16:00").offsetTop + 30;
}

switchDays(1);