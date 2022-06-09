export default function First({ template_prods }: { template_prods: any }) {
  return (
    <div style={{ backgroundImage: `url("${template_prods[0].url}")` }}>
      {console.log(template_prods)}
      {
        template_prods.map((items: any) => (
          items.map((item: any) => {
            return (
              <div className="bg-cover bg-no-repeat w-full h-screen flex" key={item.id} >
                <div className="">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>
              </div>
            )
          })
        ))
      }
    </div>
  )
}