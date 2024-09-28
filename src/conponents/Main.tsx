import React, { useState } from 'react'
import millimeter from '../functions/millimeter'
import centimeter from '../functions/centimeter'
import meter from '../functions/meter'
import kilometer from '../functions/kilometer'
import inch from '../functions/inch'
import styled from 'styled-components'

const Wrapper = styled.main`
  background: #C3A5FF;
  padding: 4rem 0;
  height: 100vh;
  @media (max-width: 400px) {
    padding-top: 5rem;
  }
`

// Selectは流用
const Select = styled.select`
  background: #ffaf00;
  font-size: 3rem;
  height: 4rem;
  border: 0.3rem solid black;
  &:disabled {
    color: black;
    background: #ffaf00;
  }
`

// Inputは流用
const Input = styled.input`
  font-size: 3rem;
  height: 4rem;
  width: 20rem;
  border: 0.3rem solid black;
  border-radius: 0;
  border-right: none;
`

// Buttonは流用
const Button = styled.button`
  font-size: 3rem;
  background: #8976b1;
  color: white;
  cursor: pointer;
`


const Arrow = styled.div`
  font-size: 3rem;
  font-weight: bold;
`


const Main = () => {
  const [unitVal, setUnitVal] = useState<string>("")

  const toggleUnitVal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = Number(e.target.value)
    const result = !!(val)
    if (result === true) {
      setUnitVal(e.target.value)
    }
  }

  // 長さの単位はハッシュにした方が良いかも
  const lengthUnit: Array<string> = ["mm", "cm", "m", "km", "インチ"]

  // 変換後の値の単位
  const [lenUnit, setLenUnit] = useState<number>(2)

  // 変換したい値の単位
  const [originUnit, setOriginUnit] = useState<number>(2)

  const calc = [millimeter, centimeter, meter, kilometer, inch]

  const copyConversionValue = (val: string): void => {
    navigator.clipboard.writeText(val)
  }
  
  return (
    <Wrapper>
      <div>
        <Select defaultValue={lenUnit} onChange={(e) => setLenUnit(Number(e.target.value))}>
          {
            lengthUnit.map((u, index) => {
              return (
                <option key={index} value={index}>{u}</option>
              )
            })
          }
        </Select>
      </div>
      <div>
        <p>
          <Input type="text" onChange={(e) => toggleUnitVal(e)} value={unitVal} />
          <Select defaultValue={lenUnit} onChange={(e) => setOriginUnit(Number(e.target.value))}>
            {
              lengthUnit.map((u, index) => {
                return (
                  <option key={index} value={index}>{u}</option>
                )
              })
            }
          </Select> 
        </p>

        <Button onClick={() => setUnitVal("")}>クリア</Button>
      </div>
      <Arrow>
        <p>↓↓↓</p>
      </Arrow>
      <div>

        <p>
          <Input readOnly={true} type="text" value={String(calc[lenUnit](originUnit, unitVal))} />
          <Select disabled={true}>
            <option>{lengthUnit[lenUnit]}</option>
            <option>インチ</option>
          </Select>
        </p>
        <Button onClick={() => copyConversionValue(String(calc[lenUnit](originUnit, unitVal)))}>コピー</Button>
      </div>
    </Wrapper>
  )
}

export default Main