export default function First({ props }: { props: any }) {
  return (
    <div>
      <h1>First</h1>
      <p>{props.text}</p>
    </div>
  )
}