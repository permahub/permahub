export interface Series {
  id: string;
  title: string;
  description: string;
  image: string;
  rssUrl: string;
}

export const seriesList: Series[] = [
  {
    id: 'weavers-weekly',
    title: 'Weavers Weekly',
    description: 'Weekly updates and discussions about the permaweb ecosystem, featuring builders, developers, and community members.',
    image: '/weavers-weekly.jpg',
    rssUrl: 'https://rss.permacast.app/rss/0x9948a418cf5b65fdd8d1468cefaa4fed79598eca1b418cd8075f24df96f45bd4'
  },
  {
    id: 'arweave-hack-tell',
    title: 'Arweave Hack & Tell',
    description: 'A podcast featuring Arweave, Dapphero, and more. (Replace with actual description from RSS)',
    image: '/arweave-hack-tell.jpg',
    rssUrl: 'https://rss.permacast.app/rss/0x8ef197a9e5fb1d77b4f1032425db03befa1c9225ece9263b05cb026cb192fc0a'
  }
]; 