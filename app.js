const images = [
  'https://i.pinimg.com/originals/32/2c/9c/322c9ca9d2ffd4bd90cc31ac41e6c979.jpg',
  'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/11209350_613618868990615_78030342374905246_n.jpg?_nc_cat=0&oh=16f8e9a300a6c71e543fc9fc9ae6e5cc&oe=5B35A3ED',
  'https://www.sitedrole.com/wp-content/uploads/2017/05/poil-de-nez-image-drole.jpg',
  'https://listspirit.com/wp-content/uploads/2017/11/citation-image-drole.jpg'
  // ...
];

new Vue({
    el: '#app',
    data: {
      images,
      clicked: false
    },
    methods: {
      copy(image) {
        copyToClipboard(image);
        this.clicked = true;
      },
      hover() {
        this.clicked = false;
      }
    }
  });

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}