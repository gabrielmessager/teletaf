import faker from "faker"
const randomBoolean = () => Math.random() >= 0.5

const generateJobPost = () => ({
  addOns: {
    showLogo: randomBoolean(),
    autobumpAfter30Days: randomBoolean(),
    highlightPost: randomBoolean(),
    useCompanyBrandColor: randomBoolean(),
    isSticky: randomBoolean(),
  },
  applicationProcess: faker.lorem.paragraphs(),
  companyLogo: faker.image.image(),
  companyName: faker.company.companyName(),
  createdAt: faker.date.recent(),
  description: faker.lorem.paragraphs(),
  email: faker.internet.email(),
  extraTags: [faker.lorem.word(), faker.lorem.word()],
  id: faker.random.uuid(),
  location: faker.address.city(),
  primaryTag: faker.lorem.word(),
  requirements: faker.lorem.paragraphs(),
  responsibilities: faker.lorem.paragraphs(),
  salary: faker.finance.amount(),
  title: faker.name.jobTitle(),
  updatedAt: faker.date.recent(),
  url: faker.internet.url(),
})

export const generateMockData = () => {
  const MOCK_JOB_POSTS_COUNT = 50
  const mockJobPosts = new Array(MOCK_JOB_POSTS_COUNT)
  for (let i = 0; i < 50; i += 1) {
    faker.seed(i + 1)
    mockJobPosts[i] = generateJobPost()
  }
  return mockJobPosts
}
