import React, { useContext } from 'react'
import { DataContext } from '../../context/PeopleContext'
import sortIcon from '../../assets/img/sort.png'
import s from './dataSort.module.scss'

const SortData = ({ setDetector }) => {
  
  const { peopleData, setPeopleData } = useContext(DataContext)
  
  const openOrder = (e) => {
    if (e.currentTarget.nextElementSibling.style.scale === '1') {
      e.currentTarget.nextElementSibling.style.scale = '0'
      e.currentTarget.nextElementSibling.style.display = 'none'
    } else {
      e.currentTarget.nextElementSibling.style.scale = '1'
      e.currentTarget.nextElementSibling.style.display = 'flex'
    }
  }

  const sortData = (e) => {
    let buttons = document.querySelectorAll('.sortButtons')
    buttons.forEach((each)=>each.classList.remove('sortedOne'))
    e.target.classList.add('sortedOne')

    setDetector(preVal => preVal + 1) // for trigger useEffect with 'detector' dependicies.
    
    // This function uses button values to understand which sorting method get selected.
    if (e.target.value === 'nameAsc') {
      setPeopleData(peopleData.sort((a, b) => {
        let data1 = a[0].toLowerCase(), data2 = b[0].toLowerCase()
        if (data1 > data2) return 1
        else return -1
      }))
    }
    else if (e.target.value === 'nameDes') {
      setPeopleData(peopleData.sort((a, b) => {
        let data1 = a[0].toLowerCase(), data2 = b[0].toLowerCase()
        if (data1 > data2) return -1
        else return 1
      }))  
    }
    else if (e.target.value === 'yearAsc') {
      setPeopleData(peopleData.sort((a, b) => {
        a = a[3].split('/').reverse().join('')
        b = b[3].split('/').reverse().join('')
        return a.localeCompare(b); 
      }))  
    }
    else if (e.target.value === 'yearDes') {
      setPeopleData(peopleData.sort((a, b) => {
        a = a[3].split('/').reverse().join('')
        b = b[3].split('/').reverse().join('')
        return b.localeCompare(a); 
      })) 
    }
  }

  return (
    <div className={s.orderButton}>
      <button onClick={openOrder} className={s.buttonOrder}>
        <img src={sortIcon} alt='sortIcon' />
        <div>Order by</div>
      </button>
      <div className={s.sortingWays}>
        <button onClick={sortData} value='nameAsc' className={s.sortButtons}>Name ascending</button>
        <button onClick={sortData} value='nameDes' className={s.sortButtons}>Name descending</button>
        <button onClick={sortData} value='yearAsc' className={s.sortButtons}>Year ascending</button>
        <button onClick={sortData} value='yearDes' className={s.sortButtons}>Year descending</button>
      </div>
    </div>
  )
}

export default SortData