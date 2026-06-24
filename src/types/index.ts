export interface Notice {
  id: number
  title: string
  author: string
  status: string
  attachment_url: string | null
  created_at: string
}

export interface News {
  id: number
  title: string
  author: string
  image_url: string | null
  created_at: string
}

export interface Bid {
  id: number
  title: string
  deadline: string
  attachment_url: string | null
  created_at: string
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}
