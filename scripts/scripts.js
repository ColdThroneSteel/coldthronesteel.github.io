(function() {
  Vue.config.devtools = true

  const contentCards = [
    {
      'anchor': 'hero',
      'title': 'Cold Throne Steel',
      'image': 'assets/exterior-shop-6.png',
      'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      'anchor': 'wares',
      'title': 'Fine Ishgardian craftsmanship',
      'image': 'assets/kathrine-displaying-the-goods.png',
      'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      'anchor': 'services',
      'title': 'Peerless Service',
      'image': 'assets/kathrine-at-work.png',
      'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  const navTabs = [
    {
      'title': 'IC',
      'id': '#ic',
      'links': [
        {
          'href': '#hero',
          'title': 'The Shop'
        },
        {
          'href': '#wares',
          'title': 'Wares'
        },
        {
          'href': '#services',
          'title': 'Services'
        }
      ]
    },
    {
      'title': 'OOC',
      'id': '#ooc',
      'links': [
        {
          'href': '#hero',
          'title': 'The Shop'
        },
        {
          'href': '#wares',
          'title': 'Wares'
        },
        {
          'href': '#services',
          'title': 'Services'
        }
      ]
    },
    {
      'title': 'Characters',
      'id': '#characters',
      'links': [
        {
          'href': '#kathrine',
          'title': 'Kathrine Throne'
        },
        {
          'href': '#bardon',
          'title': 'Bardon Steele'
        },
        {
          'href': '#lagmera',
          'title': 'Lagmera Argus'
        }
      ]
    }
  ];
  
  Vue.component('nav-bar', {
    props: ['tabs'],
    methods: {
      isFirst(index) {
        return (index === 0? true : false);
      }
    },
    template: `
    <nav class="nav-bar">
    <ul class="nav-bar__tab-links">
    <li class="nav-bar__tab-link" v-for="(tab, index) in tabs"><a v-bind:href="tab.id" v-bind:disabled="isFirst(index)" v-bind:class="{ 'active': isFirst(index), 'nav-bar__link': true }">{{ tab.title }}</a></li>
    </ul>
    <section class="nav-bar__tabs">
    <slot></slot>
    </section>
    </nav>
    `
  });
  
  Vue.component('nav-tab', {
    props: ['tab', 'index'],
    template: `
    <div class="nav-tab" v-bind:class="{ 'active': index === 0 }">
    <h2 class="nav-tab__title">{{ tab.title }}</h2>
    <ul class="nav-tab__links">
    <slot></slot>
    </ul>
    </div>
    `
  });
  
  Vue.component('nav-link', {
    props: ['link'],
    template: `
    <li class="nav-link"><a v-bind:href="link.href" class="nav-bar__link">{{ link.title }}</a></li>
    `
  });

  Vue.component('content-card', {
    props: ['anchor', 'title', 'image', 'body'],
    template: `
    <section class="content-card" v-bind:id="anchor">
    <div class="content-card__content-wrapper">
    <div class="content-card__text-content">
    <h1 class="content-card__title">{{ title }}</h1>
    <p class="content-card__body">{{ body }}</p>
    </div>
    <img class="content-card__image" v-bind:src="image">
    </div>
    </section>`
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const root = new Vue({
      el: "#shop-app",
      data: {
        cards: contentCards,
        tabs: navTabs
      }
    });
  });
})();