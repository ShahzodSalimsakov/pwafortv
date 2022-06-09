export default function First({ template_prods }: { template_prods: any }) {
  console.log(template_prods);
  template_prods.map((item: any) => {
    console.log(item);
  }
  )
  return (
    <div>
      <h1>First</h1>
      <p>{template_prods.text}</p>
    </div>
  )
}