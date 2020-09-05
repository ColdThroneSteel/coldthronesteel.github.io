(function() {
  Vue.config.devtools = true

  const contentCards = [
    {
      title: 'IC',
      id: 'ic',
      content: [
      {
        anchor: 'hero',
        anchorTitle: "Shop",
        title: 'Cold Throne Steel',
        image: 'assets/exterior-shop-6.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'wares',
        anchorTitle: "Wares",
        title: 'Fine Ishgardian craftsmanship',
        image: 'assets/kathrine-displaying-the-goods.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'services',
        anchorTitle: "Services",
        title: 'Peerless Service',
        image: 'assets/kathrine-at-work.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      ]
    },
    {
      title: 'OOC',
      id: 'ooc',
      content: [
      {
        anchor: 'hero',
        anchorTitle: "RP",
        title: 'An RP-Focused FC!',
        image: 'assets/kathrine-being-courteous.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'events',
        anchorTitle: "Events",
        title: 'Incredibly Fun Events!',
        image: 'assets/kathrine-chatting.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'raids',
        anchorTitle: "Raids",
        title: 'Savage Raid Static!',
        image: 'assets/kathrine-tired-2.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      ]
    },
    {
      title: 'Members',
      id: 'members',
      content: [
      {
        anchor: 'kathrine',
        anchorTitle: "Kathrine",
        title: 'Kathrine Throne',
        image: 'assets/kathrine-being-welcoming.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'bardon',
        anchorTitle: "Bardon",
        title: 'Bardon Steele',
        image: 'assets/kathrine-being-reserved.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'lagmera',
        anchorTitle: "Lagmera",
        title: 'Lagmera Argus',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'luvsan',
        anchorTitle: "Luvsan",
        title: 'Luvsan Dazkar',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'tae',
        anchorTitle: "Taerha",
        title: 'Taerha Njoren',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'allfea',
        anchorTitle: "Allfea",
        title: 'Allfea Soulmen',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'osorio',
        anchorTitle: "Osorio",
        title: 'Osorio Azentia',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'ayano',
        anchorTitle: "Ayano",
        title: 'Ayano Tamashiro',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'clem',
        anchorTitle: "Clementine",
        title: 'Clementine Wehlls',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'adryn',
        anchorTitle: "Adryn",
        title: 'Adryn Bell',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'snihma',
        anchorTitle: "S\'nihma",
        title: 'S\'nihma Tahsi',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'dahzi',
        anchorTitle: "Dah\'zi",
        title: 'Dah\'zi Mawp',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'snithe',
        anchorTitle: "Snithe",
        title: 'Snithe Zhwan',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'lone',
        anchorTitle: "Lone",
        title: 'Lone Tower',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'kriv',
        anchorTitle: "Kriv",
        title: 'Kriv Delmirev',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'temarie',
        anchorTitle: "Temarie",
        title: 'Temarie Weiss',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'touissant',
        anchorTitle: "Touissant",
        title: 'Touissant Verdeaux',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'noelle',
        anchorTitle: "Noelle",
        title: 'Noelle Liautroix',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'wheirael',
        anchorTitle: "Wheirael",
        title: 'Wheirael Bylglorhwyn',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'sthalhylt',
        anchorTitle: "Sthalhylt",
        title: 'Sthalhylt Fyrberksyn',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'ael',
        anchorTitle: "Ael",
        title: 'Ael Beineaux',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'mogryn',
        anchorTitle: "Mogryn",
        title: 'Mogryn Greywolfe',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        anchor: 'barry',
        anchorTitle: "Barry",
        title: 'Barry Brandt',
        image: 'assets/kathrine-tired.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      const elementToScrollTo = document.querySelector('#' + event.target.getAttribute('href'));
      const scrollOptions = {behavior: 'smooth'};
      elementToScrollTo.scrollIntoView(scrollOptions);
    }
  },
    template: `
    <li class="nav-link"><a v-bind:href="link.anchor" class="nav-bar__link" v-on:click="scrollToAnchor($event)">{{ link.anchorTitle }}</a></li>
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
        tabs: contentCards
      }
    });
  });
})();