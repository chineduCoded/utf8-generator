import { DataGrid } from '@mui/x-data-grid'

const len = 500

const getDec = () => {
  let result = []
  let i

  for (i = 0; i < len; i++) {
    // result += i
    result.push(i)
  }
  return result
}
const getChar = () => {
  let result = []
  let i

  for (i = 0; i < len; i++) {
    // result += String.fromCharCode(i)
    result.push(String.fromCharCode(i))
  }
  return result
}

const dec = getDec()
const char = getChar()

const toHexCode = () => {
  let hex, i
  let code = ''
  let result = []
  for (i = 0; i < len; i++) {
    code += String.fromCharCode(i)
    hex = code.charCodeAt(i).toString(16).toUpperCase()
    // result += '0x' + ("0000" + hex).slice(-4)
    result.push('0x' + ('0000' + hex).slice(-4))
  }
  return result
}

const hexCode = toHexCode()
console.log(dec)
console.log(char)
console.log(hexCode)

const columns = [
  { field: 'dec', headerName: 'Dec', width: 100 },
  { field: 'char', headerName: 'Char', width: 130 },
  { field: 'hex', headerName: 'Hex Code', width: 130 },
  {
    field: 'name',
    headerName: 'Name',
    width: 90,
  },
]

const rows = [
  { id: 1, dec: 38, char: String.fromCharCode(38), hex: '0x0026', name: '' },
]

export default function HomeScreen() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Uft-8 Characters, Hex Code, Name</h1>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
        />
      </div>
    </div>
  )
}
