// 第一引数でどの単位を変換するか
// ["mm", "cm", "m", "km", "インチ"]
// 第二引数で変換する値

const kilometer = (unit: number, value: string): number => {
  // 1kmは
  // 1,000,000mm(1 * 1,000,000)
  // 100,000cm(1 * 100,000)
  // 1,000m(1 * 1,000)
  // 39,370.07874016(1 * 39370)

  switch (unit){
    // mm
    case 0:
      return Number(value) / 1000000
    // cm
    case 1:
      return Number(value) / 100000
    // m
    case 2:
      return Number(value) / 1000
    // km
    case 3:
      return Number(value)
    // インチ
    case 4:
      return Number(value) / 39370
    default:
      return 0
  }


}

export default kilometer