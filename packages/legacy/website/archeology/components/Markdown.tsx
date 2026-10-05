import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { Comp } from '../app'
import { Link } from './Link'
import gfm from 'remark-gfm'

export interface MarkdownProps {
  className?: string
  type: 'md' | 'md-open' | 'md-compact'
  text: string
}

export const Markdown: Comp<MarkdownProps> = ({ type, text, className }) => {
  const renderers = {
    link: ({
      href,
      children,
    }: {
      href: string
      children: React.ElementType[]
    }) => {
      return <Link id={href} type={type} children={children} />
    },
  }

  return (
    <ReactMarkdown className={className} plugins={[gfm]} renderers={renderers}>
      {text}
    </ReactMarkdown>
  )
}
