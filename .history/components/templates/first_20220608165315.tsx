export default function First({ template_prods }: { template_prods: any }) {
  return (
    <div>
      jhvjhvhjvjhvj
      {
        template_prods.map((items: any) => {
          items.map((item: any) => {
            return (
              <div key={item.id}>
                <div>item.name</div>
                <div>item.price</div>
              </div>
            )
          })
        })
      }
    </div>
  )
}