(function() {
  Vue.config.devtools = true

  const contentCards = [
    {
      id: 'ic',
      content: [
      {
        anchor: 'hero',
        title: 'Cold Throne Steel',
        image: 'assets/exterior-shop-6.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'wares',
        title: 'Fine Ishgardian craftsmanship',
        image: 'assets/kathrine-displaying-the-goods.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'services',
        title: 'Peerless Service',
        image: 'assets/kathrine-at-work.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      ]
    },
    {
      id: 'ooc',
      content: [
      {
        anchor: 'hero',
        title: 'An RP-Focused FC!',
        image: 'assets/kathrine-being-courteous.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'events',
        title: 'Incredible RP Events!',
        image: 'assets/kathrine-chatting.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'raids',
        title: 'Regular Savage Raids!',
        image: 'assets/kathrine-tired-2.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      ]
    },
    {
      id: 'cast',
      content: [
      {
        anchor: 'kathrine',
        title: 'Kathrine Throne',
        image: 'assets/kathrine-being-welcoming.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'bardon',
        title: 'Bardon Steele',
        image: 'assets/kathrine-being-reserved.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'lagmera',
        title: 'Lagmera Argus',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      ]
    }
  ];

  const navTabs = [
    {
      'title': 'IC',
      'id': 'ic',
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
      'id': 'ooc',
      'links': [
        {
          'href': '#hero',
          'title': 'The Shop'
        },
        {
          'href': '#events',
          'title': 'Events'
        },
        {
          'href': '#raids',
          'title': 'Raids'
        }
      ]
    },
    {
      'title': 'Cast',
      'id': 'cast',
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
      },
      toggleTabLinks(event) {
        if (event.target === event.currentTarget) {
          const tabLinks = document.querySelector('.nav-bar__tab-links');
          tabLinks.classList.toggle('open');
        }
      },
      toggleTab(event) {
        event.preventDefault();
        const activeTabLink = document.querySelector('.nav-bar__tab-link.active');
        const targetedTabLink = event.target.parentNode;
        const activeTab = document.querySelector('.nav-tab.active');
        const targetedTab = document.querySelector('#' + event.target.getAttribute('href'));
        if(activeTab !== targetedTab) {
          activeTab.classList.toggle('active');
          activeTabLink.classList.toggle('active');
          targetedTab.classList.toggle('active');
          targetedTabLink.classList.toggle('active');
          targetedTabLink.parentNode.click();
          this.$root.cards = contentCards.find(tab => tab.id === event.target.getAttribute('href')).content;
        }
      }
    },
    template: `
    <nav class="nav-bar">
    <ul class="nav-bar__tab-links" v-on:click="toggleTabLinks($event)">
    <li v-bind:class="{ 'active': isFirst(index), 'nav-bar__tab-link': true }" v-for="(tab, index) in tabs"><a v-bind:href="tab.id" v-on:click="toggleTab($event)" class="nav-bar__link">{{ tab.title }}</a></li>
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
    <div class="nav-tab" v-bind:id="tab.id" v-bind:class="{ 'active': index === 0 }">
    <h2 class="nav-tab__title">{{ tab.title }}</h2>
    <ul class="nav-tab__links">
    <slot></slot>
    </ul>
    </div>
    `
  });
  
  Vue.component('nav-link', {
    props: ['link'],
    methods: {
    scrollToAnchor: function (event) {
      event.preventDefault();
      const elementToScrollTo = document.querySelector(event.target.getAttribute('href'));
      const scrollOptions = {behavior: 'smooth'};
      elementToScrollTo.scrollIntoView(scrollOptions);
    }
  },
    template: `
    <li class="nav-link"><a v-bind:href="link.href" class="nav-bar__link" v-on:click="scrollToAnchor($event)">{{ link.title }}</a></li>
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
        cards: contentCards[0].content,
        tabs: navTabs
      }
    });
  });
})();