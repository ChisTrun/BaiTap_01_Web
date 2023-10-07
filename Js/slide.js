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




