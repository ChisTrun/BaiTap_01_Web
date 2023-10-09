// Hàm kéo thả chính
function handelMouseDown(e) {
    this.isMouseDown = true;
    this.style.zIndex = 100;
    this.xOld = e.clientX;
    this.yOld = e.clientY;

}

function handelMouseMove(e) {
    if (this.isMouseDown) {
        let xCur = e.clientX;
        let yCur = e.clientY;
        let dx = xCur - this.xOld;
        let dy = yCur - this.yOld;
        this.xOld = xCur;
        this.yOld = yCur;
        this.style.left = (parseInt(this.style.left) + dx) + 'px';
        this.style.top = (parseInt(this.style.top) + dy) + 'px';
    }
}


function handelMouseUp(e) {
    this.isMouseDown = false;
    this.style.zIndex = 3;
    this.remove();
    let des = document.elementFromPoint(e.clientX, e.clientY);
}


// Hàm xử lý event của NEWS
function swapNode(node1, node2) {
    let temp = document.createElement('div');
    while (node1.firstChild) temp.append(node1.firstChild);
    while (node2.firstChild) node1.append(node2.firstChild);
    while (temp.firstChild) node2.append(temp.firstChild);

}

function showEvent(e) {
    let newsItem = this.parentNode.parentNode;
    if (newsItem.getAttribute('hasShow') == "false") {
        newsItem.querySelector('.NewsContent').style.display = null;
        this.classList.remove('ti-control-play');
        this.classList.add('ti-arrow-down');
        this.parentNode.classList.remove('newHideSolor');
        this.parentNode.classList.add('newsShowColor')
        newsItem.setAttribute('hasShow', true);
    } else {
        newsItem.querySelector('.NewsContent').style.display = 'none';
        this.classList.add('ti-control-play');
        this.classList.remove('ti-arrow-down');
        this.parentNode.classList.add('newHideSolor');
        this.parentNode.classList.remove('newsShowColor')
        newsItem.setAttribute('hasShow', false);
    }

}

function handelMouseUpNews(e) {
    this.isMouseDown = false;
    this.style.zIndex = 3;
    this.remove();
    let des = document.elementFromPoint(e.clientX, e.clientY);
    des = des.classList.contains('NewsIndex') ? des.parentNode : des.classList.contains('optionButton') ? des.parentNode.parentNode : des == this ? null : null
    if (des != null) {
        swapNode(flag, des);
    }
}



// Hàm xử lý event của Product
function productUp(e) {
    let timeRemain = timerStep - ((new Date()).getTime() - startTimeMS);
    if (timeRemain <= timerStep) {
        isMouseDownEvent = false;
        clearTimeout(timerId);
        if (!this.classList.contains('isChoosen')) {
            this.classList.add('isChoosen');
        } else {
            this.classList.remove('isChoosen');
        }
    }
}

function productPress(e) {
    let isMouseDownEvent = true;
    startTimeMS = (new Date()).getTime();
    timerId = setTimeout(() => {
        if (isMouseDownEvent) {
            flag = this;
            this.classList.add('isChoosen');
            cloneItem = this.cloneNode(true);
            var x = e.pageX;
            var y = e.pageY;
            cloneItem.style.zIndex = 100;
            cloneItem.style.width = flag.offsetWidth + 'px';
            cloneItem.style.height = flag.offsetHeight + 'px'
            cloneItem.style.opacity = '50%';
            cloneItem.style.cursor = 'pointer'
            cloneItem.style.position = 'absolute';
            cloneItem.style.left = (x - flag.offsetWidth / 2) + 'px';
            cloneItem.style.top = (y - flag.offsetHeight / 2) + 'px';
            document.body.appendChild(cloneItem);
            cloneItem.addEventListener('mousedown', handelMouseDown);
            cloneItem.addEventListener('mousemove', handelMouseMove);
            cloneItem.addEventListener('mouseup', handelMouseUpProduct);
            cloneItem.addEventListener('mouseout', handelMouseMove);
            var mouseDownEvent = new MouseEvent("mousedown", {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: e.clientX,
                clientY: e.clientY
            });
            cloneItem.dispatchEvent(mouseDownEvent);
        }

    }, timerStep);

}


function handelMouseUpProduct(e) {
    this.isMouseDown = false;
    this.style.zIndex = 3;
    this.remove();
    flag.classList.remove('isChoosen');
    let des = document.elementFromPoint(e.clientX, e.clientY);
    des = des.classList.contains('productChild') ? des.parentNode.parentNode : des.classList.contains('productItem') ? des.parentNode : des.classList.contains('productList') ? des : null;
    if (des != null && (des.classList.value != flag.parentNode.classList.value)) des.append(flag);
}

// Hàm xử lý của các nút muỗi tên phần Product
function moveRightEvent(e) {
    let srcList = document.querySelector('.storeList');
    let desList = document.querySelector('.choosenList');
    let choosenItems = srcList.querySelectorAll('.isChoosen');
    for (const item of choosenItems) {
        desList.append(item);
        item.classList.remove('isChoosen');
    }
}
function moveRightAllEvent(e) {
    let srcList = document.querySelector('.storeList');
    let desList = document.querySelector('.choosenList');
    let choosenItems = srcList.querySelectorAll('.productItem');
    for (const item of choosenItems) {
        desList.append(item);
        item.classList.remove('isChoosen');
    }
}
function moveLeftEvent(e) {
    let desList = document.querySelector('.storeList');
    let srcList = document.querySelector('.choosenList');
    let choosenItems = srcList.querySelectorAll('.isChoosen');
    for (const item of choosenItems) {
        desList.append(item);
        item.classList.remove('isChoosen');
    }
}
function moveLeftAllEvent(e) {
    let desList = document.querySelector('.storeList');
    let srcList = document.querySelector('.choosenList');
    let choosenItems = srcList.querySelectorAll('.productItem');
    for (const item of choosenItems) {
        desList.append(item);
        item.classList.remove('isChoosen');
    }
}

// Xử lý của bảng khách hàng
function register(e) {
    let table = document.querySelector('.inputTable');
    removeError(table);
    let hasError = handleError(table);
    if (hasError) {
        addCustomser();
    };
}

function removeAll(e) {
    let table = document.querySelector('.customerTable');
    let rows = document.querySelectorAll('.customerLine');
    for (const row of rows) {
        table.deleteRow(row.rowIndex);
    }
} 