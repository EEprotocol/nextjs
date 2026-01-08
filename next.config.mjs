import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
   output:'export',
  trailingSlash:true,

}
 
const prettyCodeOptions = {
  // 好きなVSCodeテーマ（下記は一例）
  theme: {
    dark: 'one-dark-pro',
    light: 'github-light',
  },
  // または単一テーマで良いなら
  // theme: 'one-dark-pro',

  // よく使う便利オプション（お好みで）
  onVisitLine(node) {
    // 空行もspanで囲む（行番号表示時に便利）
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  // 行番号を表示したい場合は
  // keepBackground: false, // 背景色を消したい場合など
}
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  option:{
    remarkPlugins:[remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
