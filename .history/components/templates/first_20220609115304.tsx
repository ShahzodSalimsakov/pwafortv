export default function First({ template_prods, background }: { template_prods: any, background: any }) {
  return (
    background.map((item: { type: string; template_name: any, url: string }) => {
      if (item.type === "template" && item.template_name) {
        { console.log(template_prods[0]) }
        return (
          <div className="bg-cover bg-no-repeat w-full h-screen flex" style={{ backgroundImage: `url("${item.url}")` }}>
            {
              <div className="grid grid-cols-2">
                <div>
                  <div>{template_prods[0].name}</div>
                  <div>{template_prods[0].price}</div>
                </div>
                <div>

                  {template_prods[1].map((items: any) => (
                    items.map((item: any) => {
                      return (
                        <div key={item.id} >
                          <div className="">
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                          </div>
                        </div>
                      )
                    })
                  ))}
                </div>
              </div>
            }
          </div>
        )
      }
    })
  )
}
