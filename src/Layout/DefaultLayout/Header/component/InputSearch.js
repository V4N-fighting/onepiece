import useState from 'react'
export const InputSearch = ()=> {
    const [valueSearch, setValueSearch] = useState('');
    const handleSearch = (value) => {
        setValueSearch(value)
    }

 return  <input value= {valueSearch} onChange={(e) => handleSearch(e.target.value)}/>
}
