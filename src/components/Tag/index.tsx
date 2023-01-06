import { ReactNode } from 'react'
import { TagContainer } from './styles'

interface TagProps {
  children: ReactNode
}

export const Tag = ({ children }: TagProps) => {
  return <TagContainer>{children}</TagContainer>
}
