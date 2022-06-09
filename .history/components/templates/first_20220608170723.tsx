export default function First({ template_prods }: { template_prods: any }) {
  return (
    <div>
      asd
      {console.log(JSON.stringify(template_prods))}
      {
        template_prods.map((items: any) => (
          items.map((item: any) => {
            { console.log(item) }
            return (
              <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            )
          })
        ))
      }
    </div>
  )
}