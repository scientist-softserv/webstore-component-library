/* eslint max-len: 0 */
import item from '../assets/img/item.jpg'

export const onSubmit = ({ value }) => console.log({ value })

const img = {
  src: item,
  alt: 'Several rows of test tubes with a liquid being put into one.',
}
export { img as defaultImage }

export const items = [
  {
    id: 1,
    description: 'This is the the first service.',
    img,
    name: 'Service One',
    href: 'service-one',
  },
  {
    id: 2,
    description: 'This is the the second service.',
    img,
    name: 'Service Two',
    href: 'service-two',
  },
  {
    id: 3,
    description: 'This is the the third service.',
    img,
    name: 'Service Three',
    href: 'service-three',
  },
  {
    id: 4,
    description: 'This is the the fourth service.',
    img,
    name: 'Service Four',
    href: 'service-four',
  },
  {
    id: 5,
    description: 'This is the the fifth service. This is the the fifth service. This is the the fifth service.',
    img,
    name: 'Service Five',
    href: 'service-five',
  },
  {
    id: 6,
    description: 'This is the the sixth service.',
    img,
    name: 'Service Six',
    href: 'service-six',
  },
]

export const singleParagraph = 'However, as a market that must bear a name that is true depends on what the Program or the recipients\' rights hereunder, except as permitted above, be liable to you for damages, including direct, indirect, special, incidental or consequential damages of any specific media file. Precedence of English terms These site terms are defined in 48 C.F.R. Y. Name\'. If you are agreeing to be attributed in any medium without restriction, modify the Licensed Product. Under claims of patents that are unrelated to TeX.'

export const multipleParagraphs = `When the party broke up, Lydia returned with Mrs. Forster to Meryton, from whence they were to set out early the next morning. The separation between her and her family was rather noisy than pathetic. Kitty was the only one who shed tears; but she did weep from vexation and envy. Mrs. Bennet was diffuse in her good wishes for the felicity of her daughter, and impressive in her injunctions that she should not miss the opportunity of enjoying herself as much as possible--advice which there was every reason to believe would be well attended to; and in the clamorous happiness of Lydia herself in bidding farewell, the more gentle adieus of her sisters were uttered without being heard.

Had Elizabeth’s opinion been all drawn from her own family, she could not have formed a very pleasing opinion of conjugal felicity or domestic comfort. Her father, captivated by youth and beauty, and that appearance of good humour which youth and beauty generally give, had married a woman whose weak understanding and illiberal mind had very early in their marriage put an end to all real affection for her. Respect, esteem, and confidence had vanished for ever; and all his views of domestic happiness were overthrown. But Mr. Bennet was not of a disposition to seek comfort for the disappointment which his own imprudence had brought on, in any of those pleasures which too often console the unfortunate for their folly or their vice. He was fond of the country and of books; and from these tastes had arisen his principal enjoyments. To his wife he was very little otherwise indebted, than as her ignorance and folly had contributed to his amusement. This is not the sort of happiness which a man would in general wish to owe to his wife; but where other powers of entertainment are wanting, the true philosopher will derive benefit from such as are given.

Elizabeth, however, had never been blind to the impropriety of her father’s behaviour as a husband. She had always seen it with pain; but respecting his abilities, and grateful for his affectionate treatment of herself, she endeavoured to forget what she could not overlook, and to banish from her thoughts that continual breach of conjugal obligation and decorum which, in exposing his wife to the contempt of her own children, was so highly reprehensible. But she had never felt so strongly as now the disadvantages which must attend the children of so unsuitable a marriage, nor ever been so fully aware of the evils arising from so ill-judged a direction of talents; talents, which, rightly used, might at least have preserved the respectability of his daughters, even if incapable of enlarging the mind of his wife.`

export const links = [
  {
    name: 'The Team',
    url: '/about-us',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'Services',
    url: '/services',
  },
  {
    name: 'External tab link',
    url: 'http://www.google.com',
    target: '_blank',
  },
]

export const sections = [
  {
    header: 'One',
    links,
  },
  {
    header: 'Two',
    links,
  },
  {
    header: 'Three',
    links,
  },
]

export const socials = [
  {
    icon: 'twitter',
    url: 'www.twitter.com',
  },
  {
    icon: 'instagram',
    url: 'www.instagram.com',
  },
  {
    icon: 'facebook',
    url: 'www.facebook.com',
  },
]

export const shipTo = {
  id: 2385964,
  organizationName: 'Scientist.com',
  street: '505 Lomas Sante Fe Dr',
  street2: 'Suite 110',
  city: 'Solana Beach',
  state: 'CA',
  zipcode: '92075',
  country: 'US',
  latitude: null,
  longitude: null,
  name: null,
  attention: '',
  personName: '',
  careOf: null,
  text: '505 Lomas Sante Fe Dr\nSuite 110\nSolana Beach, CA, 92075\nUnited States',
}

export const shipFrom = {
  id: 2385966,
  organizationName: 'Golden',
  street: '1313 Mocking Bird Lane',
  street2: '',
  city: 'Raleigh',
  state: 'NC',
  zipcode: '27519',
  country: 'US',
  latitude: '35.8789623',
  longitude: '-78.6528039',
  name: '',
  attention: null,
  personName: null,
  careOf: null,
  text: '1313 Mocking Bird Lane\nRaleigh, NC, 27519\nUnited States',
}

export const lineItems = [
  {
    id: 921424,
    quantity: '1.0',
    currency: 'USD',
    name: 'Milestone 1',
    total: '$1.00',
    unitPrice: '$1.00',
  },
  {
    id: 921425,
    quantity: '1.0',
    currency: 'USD',
    name: 'Milestone 2',
    total: '$2.00',
    unitPrice: '$2.00',
  },
]

export const statusArray = [
  {
    statusLabel: 'Supplier Review',
    statusIcon: 'fa-list-check',
  },
  {
    statusLabel: 'SOW Selection',
    statusIcon: 'fa-square-check',
  },
  {
    statusLabel: 'Work Started',
    statusIcon: 'fa-vial',
  },
  {
    statusLabel: 'Work Completed',
    statusIcon: 'fa-vial-circle-check',
  },
]

export const messages = [
  {
    avatar: 'https://avatars.scientist.com/avatars/3fef33aff64de7ff8cc6243e9ee05ed2/A E/xs?time=1669913857',
    body: 'Hello, we have replied with 2 SOW\'s for your consideration.',
    id: 12345,
    name: 'Alisha Evans',
  },
  {
    avatar: 'https://avatars.scientist.com/avatars/0d93b3808f701fc3dbde5002a80c2475/S C/xs?time=1669923117',
    body: 'Thank you, I\'ll look them over!',
    id: 23456,
    name: 'Summer Cook',
  },
  {
    avatar: 'https://avatars.scientist.com/avatars/3fef33aff64de7ff8cc6243e9ee05ed2/A E/xs?time=1669913857',
    body: 'We have updated SOW F289U2. The rest of this message is just so that I have characters to demonstrate what a longer sentence would look like. Hmm...this should be enough!',
    id: 34567,
    name: 'Alisha Evans',
  },
]

export const navigationLinks = [
  {
    label: 'Browse',
    onClick: null,
    path: '/browse',
  },
  {
    label: 'Requests',
    onClick: null,
    path: '/requests',
  },
]

export const requests = [
  {
    createdAt: 'September 9, 2022',
    description: 'Does the Company offer services related to Flow Cytometry?',
    href: {
      pathname: '/request/ui18-8ahr-38na-89as',
      query: {},
    },
    id: 1,
    img,
    status: {
      text: 'Vendor Review',
    },
    title: 'F575C4: Assay Depot Coffee Mug',
    updatedAt: 'September 9, 2022 at 9:21 am',
  },
  {
    createdAt: 'November 15, 2022',
    // eslint-disable-next-line max-len
    description: 'General Information When do you plan to work with this supplier? Urgently Name of supplier: Alisha Supplier web address: http://scientist.com Is this new supplier onboarding request related to any of the following areas: Research area: In Vivo Contact Information Supplier contact name: Alisha Evans Supplier email a...',
    href: {
      pathname: '/request/89as-ui18-8ahr-38na',
      query: {},
    },
    id: 2,
    img,
    status: {
      backgroundColor: '#DEAF17',
      text: 'Work In Progress',
      textColor: '#FFFFFF',
    },
    title: '706D8F: CRISPR',
    updatedAt: 'November 16, 2022 at 4:45 pm',
  },
]
