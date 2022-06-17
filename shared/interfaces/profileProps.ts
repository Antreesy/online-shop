interface ProfileProps {
  email: string
  password: string
}

export interface BrandProfileProps extends ProfileProps {
  brand_name: string
  brandDisplayName: string
  phone: string
  address: string
}
