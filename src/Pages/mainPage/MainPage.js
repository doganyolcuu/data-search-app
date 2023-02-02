import React from 'react'
import Button from '../../components/Button/Button'
import s from './mainPage.module.scss'
import Logo from '../../assets/img/logo.png'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'
import SearchResult from './searchPlace/SearchResult'

function MainPage() {
  return (
    <> 
      <div className={s.addNewRecordDiv}><Button title={'Add new record'}/></div>
      <div className={s.logoDiv}>
        <div><img src={Logo} className={s.mainImg} alt="DOGAN YOLCU"/></div>
        <div className={s.logoText}>Search App</div>
        <div className={s.searchText}>Find in records</div>
      </div>
      <SearchResult/>
      <Slider/>
      <footer className='footer'>
      <Footer/>
      </footer>
    </>
  )
}

export default MainPage