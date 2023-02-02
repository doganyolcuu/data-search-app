import React from 'react'
import s from './searchPlace.module.scss'
import Vector from '../../../assets/svg/Vector.svg'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'

function SearchArea({setSearchValue}) {
  return (
    <div className={s.searchSection}>
      <div className={s.searchInput}>
        <img className={s.vector} src={Vector} alt="" /> <Input plcHolder="Search" setSearchValue= {setSearchValue}/>
      </div>
      <div className={s.searchBtn}>
        <Button title="Search" />
      </div>
    </div>
  )
}

export default SearchArea