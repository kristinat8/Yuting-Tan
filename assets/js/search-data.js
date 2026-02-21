// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Yuting-Tan/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Yuting-Tan/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Yuting-Tan/teaching/";
          },
        },{id: "nav-beyond-research",
          title: "Beyond Research",
          description: "A glimpse into the moments that keep me grounded and inspired outside research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Yuting-Tan/beyond/";
          },
        },{id: "news-our-paper-meta-tuner-meta-trained-node-specific-transformations-for-graph-few-shot-class-incremental-learning-was-accepted-for-publication-in-expert-systems-with-applications-smile",
          title: '🎉 Our paper Meta-Tuner: Meta-Trained Node-Specific Transformations for Graph Few-Shot Class-Incremental Learning was...',
          description: "",
          section: "News",},{id: "news-our-paper-ftmixer-frequency-and-time-domain-representations-fusion-for-time-series-forecasting-was-accepted-for-publication-in-ieee-signal-processing-letters",
          title: '🎉 Our paper FTMixer: Frequency and Time Domain Representations Fusion for Time Series...',
          description: "",
          section: "News",},{id: "news-our-paper-psymem-fine-grained-psychological-alignment-and-explicit-memory-control-for-advanced-role-playing-llms-was-accepted-for-publication-in-transactions-of-the-association-for-computational-linguistics-tacl",
          title: '🎉 Our paper PsyMem: Fine-grained psychological alignment and Explicit Memory Control for Advanced...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-paper-towards-stable-self-supervised-object-representations-in-unconstrained-egocentric-video-has-been-accepted-to-cvpr",
          title: '🎉 Excited to share that our paper [Towards Stable Self-Supervised Object Representations in...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
