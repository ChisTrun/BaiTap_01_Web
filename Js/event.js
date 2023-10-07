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

