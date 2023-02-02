import React, { useState, useEffect } from 'react'
import s from './pagination.module.scss'

export const Pagination = ({totalData, setPage, page}) => {
  const [pageNum, setPageNum] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (totalData?.length) {
      setPageNum(Array.from(Array(Math.ceil(totalData?.length / 6))?.keys()))
    }

  }, [totalData])

  const paginate = (value) => {
    if (value === '. . .') {
      setPage(page + 1)
    } else {
      setPage(value)
    }
  }

  useEffect(()=> {
    let showPage = pageNum?.map(x => x + 1);
    const lastThree = showPage.slice(showPage.length - 3)

    if (showPage.length < 7) {
      setData(showPage)
    } else if (page < 4) {
      setData([...showPage.slice(0,3), '. . .', ...lastThree])
    } else if (page <= showPage.length) {
      setData([...showPage.slice(page >= lastThree[0] ? lastThree[0] - 4 : page - 3 ,  page >= lastThree[0] ? lastThree[0] - 1 : page), '. . .', ...lastThree])
    }
  },[page , pageNum])
  

  return (
    <div className={s.paginate}>
      <button className={s.skipButton} onClick={() => setPage( page - 1)}>Previous</button>
      {data?.map((x, i) => (
        <div className={page === x ? s.activePage : ''} onClick= {() => paginate(x) } >{x}</div>
      ))}
      <button className={s.skipButton} onClick={() => setPage( page + 1)}>Next</button>
    </div>

  )
}