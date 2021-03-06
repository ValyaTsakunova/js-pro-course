export function showNotification(data){
    let isNotificationDisabled = localStorage.getItem('isNotificationDisabled') || false;
    let currentNotificationID = localStorage.getItem('currentNotificationID') || 1;

    if(isNotificationDisabled){
        return
    }

    const currentNotification = data.find(el => el.id == currentNotificationID);

    const notificationWrapper = document.createElement('div');
    notificationWrapper.innerHTML = `
        <section class="popUp">
            <div class="notification">
                <div class="title"></div>
                <div class="text"></div>
            </div>
            <div>
            <button class="close">
            </button>
            </div>
            <div class="disableNot">
                <input type="checkbox" class="disable" tabindex="1"> Disable
            </div> 
            <div class="pagination">
                <button class="leftBtn"></button>
                    <div class="paginationButtons">
                    ${data.map(notification => `
                    <input type="radio" 
                    name="radioButton"
                    tabindex="3"
                    id="${notification.id}"  
                    checked="${notification.id == currentNotificationID}">
                    </input>`).join('')}
                    </div>
                <button class="rightBtn"> </button>
            </div> 
        </section>`;

    document.body.append(notificationWrapper);
    addNotificationText(currentNotification);
    setEventListeners(data, currentNotificationID);
}

function addNotificationText(currentNotification){
    const titleBlock = document.querySelector('.title');
    const phraseBlock = document.querySelector('.text');

    titleBlock.innerHTML = `${currentNotification.id}. ${currentNotification.title}`;
    phraseBlock.innerHTML = currentNotification.phrase;
    document.querySelector('.paginationButtons').children[currentNotification.id-1].checked = true;
}


function setEventListeners(data, currentNotificationID){
    const leftBtn = document.querySelector('.leftBtn');
    leftBtn.addEventListener('click', () => {
            currentNotificationID = (currentNotificationID == 1) ? data.length : currentNotificationID - 1;
            localStorage.setItem('currentNotificationID', currentNotificationID);
            document.getElementById(currentNotificationID).checked = true;
            addNotificationText(data.find(el => el.id == currentNotificationID));
        })
    
    const rightBtn = document.querySelector('.rightBtn');
    rightBtn.addEventListener('click', () => {
        currentNotificationID = (currentNotificationID == data.length) ? 1 : currentNotificationID + 1;
        localStorage.setItem('currentNotificationID', currentNotificationID);
        document.getElementById(currentNotificationID).checked = true;
        addNotificationText(data.find(el => el.id == currentNotificationID));
        })  
        
    const radioBtn = document.querySelector('.paginationButtons');
    radioBtn.addEventListener('click', (ev) => {
        if (ev.target.getAttribute('id')) {
            currentNotificationID = +ev.target.id;
            addNotificationText(data.find(el => el.id == currentNotificationID));
            localStorage.setItem('currentNotificationID', currentNotificationID);
            }
        })

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
            document.querySelector('.popUp').remove()
             })
    

    const disableBtn = document.querySelector('.disable');
    disableBtn.addEventListener('click', () => {
            if (disableBtn.checked) {
                localStorage.setItem('isNotificationDisabled', 'true')
            } else {
                localStorage.clear()
            }
        })
}



