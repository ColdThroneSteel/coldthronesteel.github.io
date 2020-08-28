(function() {
  Vue.config.devtools = true

  const contentCards = [
    {
      'anchor': 'hero',
      'title': 'Cold Throne Steel',
      'image': 'assets/exterior-shop-6.png',
      'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  Vue.component('content-card', {
    props: ['anchor', 'title', 'image', 'body'],
    template: `
    <section class="content-card" v-bind:id="anchor" v-bind:style="{'background-image': 'url(' + image + ')'}">
    <h1 class="content-card__title">{{ title }}</h1>
    <p class="content-card__body">{{ body }}</p>
    </section>`
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const root = new Vue({
      el: "#main-content",
      mounted: function() {
        console.log(contentCards)
      },
      data: {
        cards: contentCards
      }
    });
  });
})();