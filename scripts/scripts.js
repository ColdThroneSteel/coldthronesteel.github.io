(function() {
  const contentCards = [
    {
      'anchor': 'hero',
      'title': 'Cold Throne Steel',
      'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  Vue.component('content-card', {
    props: ['anchor', 'title', 'body'],
    template: `
    <section class="content-card" id="{{ anchor }}">
    <h1 class="content-card__title>{{ title }}</h1>
    <p class="content-card__body">{{ body }}</p>
    </section>`
  });

  const root = new Vue({
    el: "#main-content",
    data: contentCards,
    template: `
      <content-card v-for="card in content-cards" v-bind:key="card.anchor" v-bind:anchor="card.anchor" v-bind:title="card.anchor" v-bind:body="card.body"></content-card>
    `
  });

  console.log('test', Vue);
});