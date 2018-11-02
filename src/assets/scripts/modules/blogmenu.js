const items = document.querySelectorAll('.blog-menu__item');
const btns = document.querySelectorAll('.blog-menu__btn');
const posts = document.querySelectorAll('.article');
const menuBtn = document.querySelector('.blog-menu__button');
let menuShown = true;

function showMenu() {
  const aside = document.querySelector('.blog-menu');

  console.log (menuShown);
    switch(menuShown) {
      case true: aside.style.left = 0 + 'px';
      menuBtn.style.left = 250 + 'px';
      menuShown = false;
      break;
      case false: aside.style.left = -300 + 'px';
      menuBtn.style.left = -25 + 'px';
      menuShown = true;
      break;
    }
}

menuBtn.addEventListener('click', showMenu);


//Находим все кнпоки меню
for (let i = 0; i < btns.length; i++) {
  const button = btns[i];

  button.onclick = function () {
    //При клике на кнопку определяем data id и родительский элемент,
    //Удаляем все активные элементы у списков и добавляем активный класс по клику

    let data_id = this.dataset.id;
    let parent = this.parentNode;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.remove("blog-menu__item--active");
    }
    parent.classList.add("blog-menu__item--active");
    //Находим все посты, если data id совпадает, то скролим до нужного поста
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      if (post.dataset.id === data_id) {

        window.scrollTo({
          //определяем top поста и высоту поста и прокручиваем
          top: post.offsetTop,
          behavior: "smooth"
        })
      }
    }
  }
}

//сдвигаем aside влево на ширину блока

// window.addEventListener("resize", hideAside);

// function hideAside() {
//   let screenWidth = document.documentElement.clientWidth;
//     if (screenWidth < 768) {
//       const asideWidth = aside.clientWidth;
//       // aside.style.position = 'absolute';
//       aside.style.left = -asideWidth + 'px';
//     } else {
//       // aside.style.position = 'sticky';
//       aside.style.left = 'initial';
//     }
// }