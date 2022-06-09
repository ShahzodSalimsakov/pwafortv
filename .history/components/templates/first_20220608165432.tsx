export default function First({ template_prods }: { template_prods: any }) {
  return (
    <div>
      {
        template_prods.map((items: any) => {
          items.map((item: any) => {
            { console.log(item) }
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              asdf
              asdf
              asdf
              asdf

            </div>
          })
        })
      }
    </div>
  )
}