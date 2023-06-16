import { useEffect, useState } from 'react'

export const CalculateForm = () => {
  const [item1, setItem1] = useState<number>(0)
  const [item2, setItem2] = useState<number>(0)
  const [subtotal, setSubtotal] = useState<number>(0)
  const [vat, setVat] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  const handleChange1 = (element: React.ChangeEvent<HTMLInputElement>) => {
    setItem1(Number(element.target.value))
  }

  const handleChange2 = (element: React.ChangeEvent<HTMLInputElement>) => {
    setItem2(Number(element.target.value))
  }

  useEffect(() => {
    setSubtotal(Number(item1) + item2)
    setVat((Number(item1) + item2) * 0.12)
    setTotal(Number(item1) + item2 + vat)
  }, [item1, item2, vat])

  return (
    <div>
      <span>Item 1:</span>
      <input type="text" value={item1} onChange={handleChange1} />
      <br />
      <br />
      <span>Item 2:</span>
      <input type="text" value={item2} onChange={handleChange2} />
      <br />
      <br />
      <span>Subtotal:</span>
      <input type="text" value={subtotal} />
      <br />
      <br />
      <span>Vat:</span>
      <input type="text" value={vat} />
      <br />
      <br />
      <span>Total (SubTotal + VAT):</span>
      <input type="text" value={total} />
      <br />
      <br />
    </div>
  )
}
