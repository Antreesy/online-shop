import Link from 'next/link'

export default function LangRoute(props) {
  return (
    <Link href="/" locale={props.lng}>
      <a>To /{props.lng}/another</a>
    </Link>
  )
}