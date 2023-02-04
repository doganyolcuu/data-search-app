import React, { useEffect, useState, useContext } from 'react'
import s from './searchPlace.module.scss'
import { Link } from 'react-router-dom'
import SearchArea from './SearchArea';
import locationIcon from '../../../assets/img/loc.png'
import {DataContext} from '../../../context/PeopleContext'
import { getActionData } from '../../../context/PeopleAction';

function SearchResult() { 
  const [{newdata},dispatch] = useContext(DataContext);
  const [searchValue, setSearchValue] = useState();
  
  useEffect(() => {
    if ( searchValue && searchValue.length > 0) {
      getActionData(dispatch, {id: searchValue})
    }
  },[dispatch, searchValue])
  
  return (
  <>
  <div className={s.searchResultDiv}>
    <SearchArea setSearchValue={setSearchValue}/> 
  </div>
 {
  searchValue && 
    <div className={s.searchResult}>
      {
        newdata?.slice(0,3).map((data,index) =>(
          <div key= {index} className= {s.resultArea}>
            <div className={s.locationIcon}><img src={locationIcon} alt='locationIcon'></img></div>
            <div className={s.peopleInfo}>
              <div className={s.peopleCompany}>{data[1]}</div>
              <div className={s.peopleHomeTown}>{data[4] + ", " + data[5]}</div>
            </div>
          </div>
        )) 
      }
      <Link className={s.showMoreLink}to={`/result/${searchValue}`}>
        <div className={s.showMore}>Show more...</div>
      </Link>
    </div>
}
  </>
  )
}

export default SearchResult
