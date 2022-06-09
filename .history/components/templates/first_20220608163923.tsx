export default function First({ template_prods }: { template_prods: any }) {

  return (
    <div>
      {
        template_prods.map((item: any) => {
          return (
            <div key={item.id}>
              <h1>First</h1>
              <p>{item.text}</p>
            </div>
          )
        }
        )}
    </div>
  )
}