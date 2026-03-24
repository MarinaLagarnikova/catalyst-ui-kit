export interface ActivityUser {
  name: string
  imageUrl: string
}

export interface ActivityItem {
  user: ActivityUser
  projectName: string
  commit: string
  branch: string
  date: string
  dateTime: string
}

export interface ActivityListProps {
  items: ActivityItem[]
  class?: string
}
