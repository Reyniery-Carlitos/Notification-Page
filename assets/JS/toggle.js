const markAsUnread = () => {
  const numberNotification = document.getElementById('number-notification')
  const markAsRead = document.getElementsByClassName('item')

  for(let i of markAsRead){
    i.classList.add('read');
  }

  numberNotification.innerText = '0';
}