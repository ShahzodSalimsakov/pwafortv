export default function First({ template_prods }: { template_prods: any }) {
  return (
    <div>
      {console.log(template_prods)}
      {
        template_prods.map((items: any) => (
          items.map((item: any) => {
            return (
              <div key={item.id} style={{ backgroundImage: `url("${item.url}")` }}>
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