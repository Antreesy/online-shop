import Link from "next/link"

export default function LangRoute(props: { lng?: string }) {
  return (
    <Link href="/" locale={props.lng}>
      <a>Switch to /{props.lng}/</a>
    </Link>
  )
}
