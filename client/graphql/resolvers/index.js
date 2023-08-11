type Project {
    company: String
    projectDescription: [String]
  }

  type Query {
    projects: [Project]
  }