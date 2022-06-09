export default function First({ template_prods }: { template_prods: any }) {
  console.log(template_prods);
  return (
    <div>
      <h1>First</h1>
      <p>{template_prods.text}</p>
    </div>
  )
}