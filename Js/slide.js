const slide = document.querySelector('.Slide');
function news(index, content) {
    this.index = index;
    this.content = content;
    this.getIndex = function () {
        return this.index < 10 ? `NEWS 0${this.index}` : `NEWS ${this.index}`
    };
};

let newsList = [
    new news(1, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."),
    new news(2, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."),
    new news(3, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."),
    new news(4, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat maxime vitae nam optio corporis molestias cum, magnam ab? Sequi amet a quisquam, error delectus saepe quia laborum illo natus."),
]

newsList.forEach(news => {
    let showIcon = document.createElement('i');
    let moveIcon = document.createElement('i');
    let newsItem = document.createElement('div');
    let newIndex = document.createElement('div');
    let newContent = document.createElement('div');


    showIcon.classList.add('ti-control-play', 'showButton', 'optionButton');
    showIcon.style.cursor = 'pointer';
    moveIcon.classList.add('ti-arrows-vertical', 'moveNews', 'optionButton');
    moveIcon.style.cursor = 's-resize';
    let textNode = document.createTextNode(news.getIndex())

    newIndex.classList.add('NewsIndex', 'newHideSolor');
    newIndex.appendChild(showIcon);
    newIndex.appendChild(textNode);
    newIndex.appendChild(moveIcon);

    newContent.classList.add('NewsContent');
    newContent.style.display = 'none';
    newContent.appendChild(document.createTextNode(news.content))

    newsItem.classList.add('NewsItem');
    newsItem.appendChild(newIndex);
    newsItem.appendChild(newContent);
    newsItem.setAttribute('hasShow', false);
    newsItem.setAttribute('draggable', false);

    slide.appendChild(newsItem);
});

let showButtons = document.querySelectorAll('.showButton');
for (const button of showButtons) {
    button.addEventListener('click', showEvent);
}

let moveButtons = document.querySelectorAll('.moveNews');

for (const button of moveButtons) {
    // button.addEventListener("mousedown",()=> {onDragEvent1(button.parentNode.parentNode)})
    button.addEventListener('mousedown', (e) => {
        cloneItem = button.parentNode.parentNode.cloneNode(true);
        flag = button.parentNode.parentNode;
        var x = e.pageX;
        var y = e.pageY;
        cloneItem.style.zIndex = 100;
        cloneItem.style.width = flag.offsetWidth + 'px';
        cloneItem.style.height = flag.offsetHeight + 'px';
        cloneItem.style.opacity = '50%';
        cloneItem.style.cursor = 's-resize'
        cloneItem.style.position = 'absolute'; // Đặt vị trí tuyệt đối
        cloneItem.style.left = (x - (flag.offsetWidth - flag.querySelector('.moveNews').offsetWidth)) + 'px'; // Đặt vị trí theo chiều ngang
        cloneItem.style.top = (y - flag.querySelector('.moveNews').offsetHeight) + 'px'; // Đặt vị trí theo chiều dọc
        document.body.appendChild(cloneItem); // Thêm đối tượng vào trang  
        cloneItem.addEventListener('mousedown', handelMouseDown);
        cloneItem.addEventListener('mousemove', handelMouseMove);
        cloneItem.addEventListener('mouseup', handelMouseUpNews);
        cloneItem.addEventListener('mouseout', handelMouseMove);
        var mouseDownEvent = new MouseEvent("mousedown", {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: e.clientX,
            clientY: e.clientY
        });
        cloneItem.dispatchEvent(mouseDownEvent);
    })

}


