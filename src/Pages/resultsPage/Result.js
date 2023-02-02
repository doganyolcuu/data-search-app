import React, { useContext, useEffect, } from 'react'
import s from './result.module.scss'
import Logo from '../../assets/img/logo.png'
import { useState } from 'react'
import SearchArea from '../mainPage/searchPlace/SearchArea';
import Button from '../../components/Button/Button';
import locationIcon from '../../assets/img/loc.png'
import { DataContext } from '../../context/PeopleContext';
import { getActionData } from '../../context/PeopleAction';
import { useParams, Link } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';
import SortData from '../../components/SortData/SortData.js'


function Result() {
  const [{newdata}, dispatch] = useContext(DataContext);
  const [searchValue, setSearchValue] = useState();
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const [detector,setDetector] = useState(0)


  let secondValue = page * 6;
  let firstValue = secondValue - 6;
  let slicedData = newdata?.slice(firstValue, secondValue);

  useEffect(() => {
    getActionData(dispatch, (searchValue ? {id: searchValue} : {id}))
  }, [searchValue, id, detector, dispatch])

  return (
    <>
      <div className={s.upside}>
        <div className={s.resultPageSearch}>
          <img className={s.logoPlace} src={Logo} alt="DOGAN YOLCU" />
          <SearchArea setSearchValue={setSearchValue}/>
          <Link className={s.addPageLink}to={`/addLinkPage/AddNewRecord`}>
            <div className={s.addNewRecordDiv}><Button title={'Add new record'}/></div>
          </Link>
        </div>
        <SortData setDetector={setDetector}/>
          {slicedData?.map((data, index)=> ( 
            <div key={index} className={s.resultList}>
              <div className={s.locationIcon}><img src={locationIcon} alt='locationIcon'></img></div>
              <div className={s.largeGeneralInfo}>
                <div className={s.infoDiv}>
                  <div className={s.largePeopleCompany}>{data[1]}</div>
                  <div className={s.largePeopleInfo}>{data[0]}</div>
                </div>
                <div className={s.infoDiv}>
                  <div className={s.largePeopleHomeTown}>{data[4] + ', ' + data[5]}</div>
                  <div className={s.largePeopleDate}>{data[3]}</div>
                </div>
              </div>
            </div>
          ))}
          <Pagination totalData = {newdata} page={page} setPage={setPage}/>
      </div>
    </>
  )
}

export default Result