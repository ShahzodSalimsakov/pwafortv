export default function First({ template_prods }: { template_prods: any }) {

  return (
    <div>
      {
        template_prods.map((item: any) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          )
        })}
    </div>
  )
}